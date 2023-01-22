import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sortAction, unsortAction } from '../features/productSlice'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleProduct from './SingleProduct';
import Loader from './Loader'

function Products() {



  const data = useSelector(state => state.myproduct)
  const dispatch = useDispatch();
  console.log(data)

  const [sort, Setsort] = useState("Sort by Price")
  const [unsort, Setunsort] = useState()
  const [val, SetVal] = useState(true)


  function handelsort() {
    SetVal(!val)
    Setsort("Sorted")
    Setunsort("❌")
    dispatch(sortAction())
  }

  function handelunsort() {
    Setsort("Sort by Price")
    Setunsort()
    dispatch(unsortAction())
  }

  return (
    <div className='container'>
      <ToastContainer />
      <h2>All Products</h2>

      <div id='btn'>
        <div>

          <button className='btn btn-light' onClick={handelsort}> {sort}</button>
          <button className='btn btn-transparent' onClick={handelunsort}> {unsort}</button>
        </div>
      </div>

      {data.loading && <h2><Loader /></h2>}
      {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
      {!data.loading && data.products.length ? (
        <ul style={{ padding: 0 }}>
          {data.products.map((item) => {
            return <SingleProduct item={item} key={item.id} />
          })}
        </ul>
      ) : null}

    </div>

  )
}
export default Products;

