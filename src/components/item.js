import FormAdd from "./FormAdd"
import { ident } from "./FormAdd"

class Item {

    static id = ident

    constructor(text) {
        this.text = text
        this.done = false
        this.id = Item.id++
    }


}

export default Item