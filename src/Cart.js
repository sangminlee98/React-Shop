import React from 'react';
import {Table} from 'react-bootstrap';
import { connect,useDispatch, useSelector } from 'react-redux';
import './Detail.scss';


function Cart(props) {
    let dispatch = useDispatch();
    let state = useSelector((state)=>state)
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
                        state.reducer.map((a,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td><button onClick={()=>{
                                        dispatch({type : '수량증가',payload : a.id })
                                    }}>+</button>
                                    <button onClick={()=>{
                                        dispatch({type : '수량감소',payload : a.id})
                                    }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
                {
                    props.alert열렸니 === true
                    ? (<div className="my-alert">
                        <p>지금 구매하면 20% 할인</p>
                        <button className="close-btn" onClick={()=>{
                            props.dispatch({type : 'close'})
                        }}>X</button>
                    </div>)
                    : null
                }
        </div>
    )
}

function state를props화(state) {
    return {
        state : state.reducer ,
        alert열렸니 : state.reducer2
    }
}


export default connect(state를props화)(Cart);