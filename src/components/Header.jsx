import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {  connect, useSelector, useDispatch } from 'react-redux'
import "../App.css"
import { removeSelectedProduct } from '../redux/actions'

const Header = () => {
  const getData = useSelector(state => state.addItem.item)
  console.log(getData)
  const [cart, setCart] = useState(false)
  
  return (
    <>
      <div className='header'>
        <h1>My Store</h1>
        <button className='cart' onClick={() => setCart(!cart)}>
          <FontAwesomeIcon icon={faCartShopping} size="2x" pull='left'/>
          <span>My Cart ({getData.length})</span>
        </button>
      </div>
      <div className={cart ? "showCart" : "hideCart"} >
        {getData.length ? (
          <div className="details">
            {getData.map((e) => (
              <div className="details_content" key={e.id}>
                <img src={`http://${e.imageUrl}`} alt={e.name} />
                <div className="details_content_detail">
                  <h5>{e.name.slice(0,21)}...</h5>
                  <p>{e.price.current.text}</p>
                  <span>Qty: {e.qty}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>Your cart is empty.</p>
            <FontAwesomeIcon icon={faCartShopping} size="3x"/>
          </div>
        ) }
      </div>
    </>
  )
}

const mapStateToProps = state =>{
  return {
    item: state.item
  }
}

connect(mapStateToProps)(Header)
export default Header