import React from 'react'
import './App.css';
import rootStore from './store/rootStore'
import { observer,inject } from 'mobx-react'
import productStore from "./store/product";




// class  中的写法
// @inject ('store')
// @observer
// class App extends  React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }
//     changeNums=()=>{
//         store.changeNum()
//     }
//     render() {
//         return <div>
//             111--{store.num}
//             <button onClick={this.changeNums}>add</button>
//         </div>;
//     }
// }
// export default App;

// @inject ('store')
// @observer

const App = observer(()=>{
    const getnum = () =>{
        rootStore.indexStore.changeNum()
    }
    const productAdd = () =>{
        rootStore.productStore.changeProductNum()
    }
    const changeIns = ()=>{
        rootStore.indexStore.changeIns()
    }
    return <div>
        111 -- {rootStore.indexStore.num}-- <button onClick={getnum}>add</button>
        <div>
            {/*product store -- { rootStore.productStore.productNum }*/}

            <button onClick={changeIns}>ins  - indexStore</button>
        </div>
    </div>
})


export default App;
