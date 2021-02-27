import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow import keras
from sklearn.utils.class_weight import compute_class_weight
import pandas as pd
import numpy as np

vocab_size = 100000

max_len = 100

reviews_df = pd.read_csv("reviews.csv")

tokenizer = Tokenizer()

X_all = np.array(reviews_df['Review'])
Y_all = np.array(reviews_df['Label']) - 1

tokenizer.fit_on_texts(X_all)
X_all = tokenizer.texts_to_sequences(X_all)

X_all = pad_sequences(X_all, maxlen=max_len)

X_train = X_all[:60000]
Y_train = Y_all[:60000]

X_test = X_all[60000:]
Y_test = Y_all[60000:]

model = keras.Sequential()

model.add(keras.layers.Embedding(vocab_size, 4))
model.add(keras.layers.Conv1D(16, kernel_size=5, activation="relu"))
model.add(keras.layers.Conv1D(32, kernel_size=7, activation="relu"))
model.add(keras.layers.GlobalMaxPool1D())
model.add(keras.layers.Dropout(0.4))
model.add(keras.layers.Dense(1024, activation="relu"))
model.add(keras.layers.Dense(512, activation="relu"))
model.add(keras.layers.Dense(128, activation="relu"))
model.add(keras.layers.Dense(16, activation="relu"))
model.add(keras.layers.Dense(1, activation="linear"))

model.compile(optimizer="adam", loss="mae")

lowest_loss = float("inf")

class_weights = compute_class_weight('balanced', classes=np.unique(Y_train), y=Y_train)
class_weights = dict(enumerate(class_weights))

model.fit(X_train, Y_train, batch_size=1024, epochs=30)
model.save("model.h5")

model.evaluate(X_test, Y_test)
