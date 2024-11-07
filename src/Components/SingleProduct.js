import React from 'react'
import { Card ,Button  } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../Context/Context'

const SingleProduct = ({prod }) => {
  const { state:{cart} , 
  dispatch,
} = CartState()
  return (
    <div className='products'>
      <Card>
        <Card.Img variant = "top" src = {prod.image}  alt = {prod.name} width={200} height={200}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style = {{paddingBottom:10}}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ?(
              <div>Fast Delivery</div>

            ): (
              <div>4 days Delivery</div>
            )}
            <Rating rating = {prod.ratings} />

          </Card.Subtitle>
          {cart.some((p) =>p.id === prod.id)? ( <Button 
          onClick={() =>{
            dispatch({
              type:'REMOVE_FROM_CART',
              payload:prod,
            })
          }}
          variant = "danger"
          >REmove from Cart</Button>):(  <Button
          onClick={() =>{
            dispatch({
              type: 'ADD_TO_CART',
              payload:prod,
            })
          }}
           disabled = {!prod.inStock}>{!prod.inStock?"out of Stock":"Add to Cart"}</Button>)}
        
  
        </Card.Body>

      </Card>
    </div>
  )
}

export default SingleProduct