import React, { useEffect, memo } from 'react';
import {Table} from 'react-bootstrap';
import { connect,useDispatch, useSelector } from 'react-redux';
import './Detail.scss';


function Cart(props) {
    let dispatch = useDispatch();
    let state = useSelector((state)=>state) //콜백함수로 state(combineReducers된 store)를 state로 반환
    return(
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>상품번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a,i)=>{ //useSelector 사용시 state.reducer.map
                            return(
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td><button onClick={()=>{
                                        dispatch({type : '수량증가',payload : a.id })
                                    }}>+</button>
                                    <button onClick={()=>{
                                        dispatch({type : '수량감소',payload : a.id}) //useDispatch 사용
                                    }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
                {
                    props.alert열렸니 === true //useSelector 사용시 state.reducer2 === true;
                    ? (<div className="my-alert">
                        <p>지금 구매하면 20% 할인</p>
                        <button className="close-btn" onClick={()=>{
                            props.dispatch({type : 'close'}) //useDispatch 사용시 dispatch()만 사용
                        }}>X</button>
                    </div>)
                    : null
                }

            <Parent 이름='qddf' 나이='22'/>
        </div>

    )
}

function state를props화(state) { //useSelector 사용시 작성안해도됨
    return {
        state : state.reducer ,
        alert열렸니 : state.reducer2
    }
}



function Parent(props){
    return(
        <div>
            <Child1 이름={props.이름}/>
            <Child2 나이={props.나이}/>
        </div>
    )
}

function Child1(){
    useEffect(()=>{
        console.log('렌더링됨1');
    });
    return <div>111111</div>
}

let Child2 = memo(function(){
    useEffect(()=>{
        console.log('렌더링됨2');
    });
    return <div>222222</div>
});



export default connect(state를props화)(Cart); // useSelector 사용시 export default Cart;