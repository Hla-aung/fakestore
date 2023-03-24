import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import { setProducts } from '../redux/actions'
import { addcart } from '../redux/actions'
import "../App.css"

const Products = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '94a984600cmsh07d53a714abcd4bp1e9018jsn55d3310d223b',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        const response = await fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=20&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
        .then(response => response.json())
        .catch(err => console.log(err))
        dispatch(setProducts(response.products))
    }

    const add = (e) => {
        dispatch(addcart(e))
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(products)
  return (
    <div className='products'>
        {products.map((item) => (
            <div className='card' key={item.id}>
                <div className="image">
                    <img src={`http://${item.imageUrl}`} alt={item.brandName} />
                </div>
                <div className="content">
                    <h4>{item.name}</h4>
                    <h5>{item.price.current.text}</h5>
                    <span>{item.category}</span>
                </div>
                <button className='button' onClick={() => add(item)}>Add To Cart</button>
            </div>
        ))}
    </div>
  )
}

export default Products