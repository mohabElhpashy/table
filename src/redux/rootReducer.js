import {combineReducers}from 'redux';

// import Cake__reducer from './Cakes/CakeReducer'
import Ice__creame_reducer from './IceCreame/icecreame_reducer';

const roootReducer =combineReducers({
    // cake:Cake__reducer,
    iceCreame:Ice__creame_reducer
})
export default roootReducer;