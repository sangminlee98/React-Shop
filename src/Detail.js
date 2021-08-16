import React,{ useContext, useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {Nav} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
// import {재고context} from './App'; 


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
    // let 재고 = useContext(재고context);
    let [누른탭,누른탭변경] = useState(0);
    let [스위치,스위치변경] = useState(false);
    
    

    useEffect(()=>{
      let Timer = setTimeout(()=>{알람창변경(false)},2000);
      return () => { clearTimeout(Timer) };
      // return function 어쩌구() {
      //   //컴포넌트가 사라질때 실행할 코드 (무조건 함수로 해야함)
      // }
      console.log('dfsdf');
    },[알람창]); // 맨처음 로드되고 []안에 들어간 알람창의 state가 변경될때만 콜백함수를 실행
               // 파라미터 안넣으면 업데이트 될때마다 콜백함수가 계속 실행
               // 그냥 []만 파라미터로 넣으면 업데이트 되어도 콜백함수가 실행안됨


    let {id} = useParams();
    let history = useHistory();
    let product = props.shoes.find(function(a){
      return a.id == id;
    })


    useEffect(()=>{
      let arr = localStorage.getItem('watched');
      if(arr == null) {arr = []}
      else { arr = JSON.parse(arr); }
      arr.push(id);
      arr = new Set(arr);
      arr = [...arr];
      localStorage.setItem('watched',JSON.stringify(arr));
    },[]);

    let b = JSON.parse(localStorage.getItem('watched'));
  

    return(
      <div className="container">
        <박스> 
          <제목 className="red">상세페이지</제목>
        </박스>
        {/* {재고} */}
        <div className="row">
          <div className="col-9">
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

              <Info 재고 = {props.재고} num = {product.id}/>            

              <button className="btn btn-danger" onClick={()=>{
                let a = props.재고[product.id] - 1;
                let b = [...props.재고];
                b[product.id] = a;
                props.재고변경(b);
                props.dispatch({type : '항목추가', data : {id : product.id, name : product.title, quan : 1}})
              }}>주문하기</button>   
              <button className="btn btn-danger" onClick={()=>{ history.goBack();}}>뒤로가기</button> 
            </div>
          </div>
          <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 누른탭변경(0)}}>상품설명</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); 누른탭변경(1)}}>배송정보</Nav.Link>
            </Nav.Item>
          </Nav>
          <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <Tabcontent 누른탭 = {누른탭} 스위치변경={스위치변경}/>
          </CSSTransition>
          

          </div>
          <div className="col-3 watched">
            <h5>최근본상품</h5>
              {
                !localStorage.getItem('watched') === true ?
                null :
                b.map((c,i)=>{
                  return <Recent c={c} shoes={props.shoes} i={i}/>
                })
              }

          </div>
        </div>

      </div> 
    )
  }

  function Tabcontent(props) {

    useEffect(()=>{
       props.스위치변경(true);
    })

    if(props.누른탭 === 0) {
      return <div>0번째</div>
    } else if(props.누른탭 === 1) {
      return <div>1번째</div>
    } 
  }


  function Info(props) {
    return(
      <p>재고 : {props.재고[props.num]}</p>
    )
  }

function state를props화(state) {
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2
  }
}
  
function Recent(props) {
  let history = useHistory();
  let item = props.shoes.find((a)=>a.id == Number(props.c));
  return(
    <div className="mt-4 card " onClick={()=>{history.push('/detail/'+props.c)}}>
      <img src={"https://codingapple1.github.io/shop/shoes"+ (Number(props.c)+1) +".jpg"} width="100%" />
      <p>{item.title}</p>
    </div>
  )
}


 export default connect(state를props화)(Detail);