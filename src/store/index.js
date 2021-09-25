import {action, observable,makeAutoObservable} from 'mobx'



class Store{
    constructor() {
        makeAutoObservable(this);
    }
    @observable num = 10
    @action changeNum = (value)=>{
        return  this.num ++
    }
    @action changeIns = (value)=>{
        return  this.num --
    }
}
export default new Store()



