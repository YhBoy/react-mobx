import {action, observable } from 'mobx'

class Product{
    @observable productNum = 10
    @action changeProductNum = (value)=>{
        return  this.productNum ++
    }
}
export default new Product()
