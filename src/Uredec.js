/*
    
*/
import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'PLUS' :
            return state + 1;
        case 'MINUS' :
            return state - 1;
        default :
            return state;
    }
}

export default function Count(){
    // const [상태객체, 디스패치 함수] = useReducer(reducer 함수, 초기상태)
    const [number, dispatch] = useReducer(reducer, 0);

    const onPlus = function(){
        dispatch({type:'PLUS'});
    }

    const onMinus = function(){
        dispatch({type:'MINUS'});
    }
    
    return(
        <div>
            <h3>{number}</h3>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    );
}

