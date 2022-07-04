import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch}from 'react-redux'
import Axios from 'axios'
import {BUY_ICECREAME} from '../redux/IceCreame/Icecreame_actions'
   const IceCreame=(props)=>{
    const [state,setState]=useState(1)
    const SELECT =useSelector(state=>state.iceCreame.numOF_icecreame)
    const Dispatch=useDispatch()
    const Fetchdata=()=>{
        Axios.get('https://fakestoreapi.com/products').then(
            res=>{
                 Dispatch(BUY_ICECREAME(res.data))
            }
        )
        
    }
    useEffect(()=>{
        Fetchdata()
    },[])
    return (
        <>
        <h2>num of iceCreame{SELECT}</h2>
        <input type='text' value={state} onChange={e=>setState(e.target.value)}/> 
        {/* <button onClick={()=>Dispatch(BUY_ICECREAME(state))}>Buy Cake</button> */}
        </>
    )
}

 
export default  IceCreame
