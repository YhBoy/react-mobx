import indexStore from './index'
// import productStore from "./product";

class RootStore {
    constructor() {
        // this.productStore = productStore
        this.indexStore = indexStore
    }
}

export default new RootStore()
