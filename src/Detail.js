import React,{ useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';


// 옛날 라이프사이클 훅 만들기 ( 요즘은 useEffect 사용 )
// class Detail2 extends React.Component {
//   componentDidMount() { // 컴포넌트가 마운트 되었을 때 실행할코드
//     //ajax요청같은거 할때
//   }
//   componentWillUnmount(){ // 컴포넌트가 사라지기 직전에 실행할 코드

//   }
// }

let 박스 = styled.div`
  padding : 20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;

function Detail(props) {

    let [알람창,알람창변경] = useState(true);
    let [inputbox,setInputbox] = useState('');

    useEffect(()=>{
      let Timer = setTimeout(()=>{알람창변경(false)},2000);
      // return function 어쩌구() {
      //   //컴포넌트가 사라질때 실행할 코드 (무조건 함수로 해야함)
      // }
      console.log('dfsdf');
    },[알람창]);

    let {id} = useParams();
    let history = useHistory();
    let product = props.shoes.find(function(a){
      return a.id == id;
    })
    return(
      <div className="container">
        <박스> 
          <제목 className="red">상세페이지</제목>
        </박스>

        <input onChange={(e)=>{
          setInputbox(e.target.value);
        }}/>
        
        {
          알람창 === true ?
          <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div> :
          null
        }

        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+ (product.id+1) +".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{ history.goBack();}}>뒤로가기</button> 
          </div>
        </div>
      </div> 
    )
  }

  
  export default Detail;