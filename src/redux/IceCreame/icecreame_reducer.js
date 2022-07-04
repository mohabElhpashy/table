import {BUY_icecreame} from '../IceCreame/IceCreame_type'
const init_State={
    numOF_icecreame:[]
}
const icecreame_reducer=(state=init_State,action)=>{
switch(action.type){

    case BUY_icecreame:
        return{
        ...state,
        numOF_icecreame:action.payload
    }
    default :return state
}}

export default icecreame_reducer
 