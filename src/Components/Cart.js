import React from 'react'
import { CartState } from '../Context/Context'
import { ListGroup , Button , Row , Col , Image} from 'react-bootstrap';
import { useState , useEffect } from 'react';
import Rating from './Rating'
import {AiFillDelete} from 'react-icons/ai';

const Cart = () => {
  const {state:{cart} , dispatch,} = CartState();
  const [total , setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc , curr) => acc + (curr.price) , 0));

  } , [cart]);
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod) =>(
       <ListGroup.Item key = {prod.id}>
        <Row>
        <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
          <Col md = {2}>
          <span>{prod.name}</span></Col>
          <Col md = {2}>
          <span>{prod.price}</span></Col>
          <Col md = {2}>
          <Rating rating = {prod.ratings} />
          </Col>
          
          <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                  </Col>
        

        </Row>
       </ListGroup.Item>
          ))}
        </ListGroup>


      </div>
      <div className='filters summary'>
        <span className='title'>
          subtotal({cart.length})items

        </span>
        <span style = {{fontWeight:700 , fontSize:20 }}>Total :{total}</span>
        <Button type = "button" disabled = {cart.length === 0}>Proceed to CheckOut</Button>

      </div>

    </div>
  )
}

export default Cart