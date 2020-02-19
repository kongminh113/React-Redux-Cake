import React from 'react';
import { buyCake } from './cake/cakeAction'
import { useSelector, useDispatch } from 'react-redux'

type InitialState = {
    numOfCakes: number;
}
function CakeContainer(){
    const numOfCakes = useSelector((state : InitialState) => state.numOfCakes);
    
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>Number of cakes - { numOfCakes }</h2>
            <button onClick={() =>  { dispatch(buyCake())} }>Buy Cake</button>
        </div>
    )
    
}


export default CakeContainer;