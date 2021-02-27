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
        const model = await tf.loadLayersModel("https://raw.githubusercontent.com/sujaykonda/studentreviews/main/src/Model/model/model.json")
        var out = model.predict(tf.tensor2d([sequence]))
        
        return((await out.slice([0, 0], 1).as1D().data())[0] * 5 + 3)
    }
}

export default Model;