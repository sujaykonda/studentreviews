import * as tf from "@tensorflow/tfjs"
import tokenizer from "./tokenizer.json"


class Model{
    static loadWordToIndex(){
        return JSON.parse(tokenizer["config"]["word_index"]);
    }

    static async run(text){
        var word_index = await Model.loadWordToIndex();
        var splitted = text.toLowerCase().split(" ")
        var sequence = []
        for(var i = 0; i < splitted.length; i++){
            sequence.push(word_index[splitted[i]])
        }
        for (i = splitted.length; i < 200; i++){
            sequence.push(0)
        }
        console.log(sequence)
        const model = await tf.loadGraphModel("model/model.json")
        console.log(model.predict(tf.tensor1d(sequence)))
    }
}

export default Model;