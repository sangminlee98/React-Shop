import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
    return(
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a,i)=>{
                           return <ProductList pd={a} key={i}/>
                        })
                    }
                </tbody>
            </Table>       
        </div>

    )
}

function ProductList(props){
    return(
        <tr>
            <td>{props.pd.id}</td>
            <td>{props.pd.name}</td>
            <td>{props.pd.quan}</td>
            <td>df</td>
        </tr>
    )
}

function state를props화(state) {
    return {
        state : state    }
    }

export default connect(state를props화)(Cart);