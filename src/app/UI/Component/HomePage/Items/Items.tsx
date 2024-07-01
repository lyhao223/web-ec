import React, { use, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/app/services/redux/store';
import { fetchProducts } from '../../../../services/redux/slices/menuSlice';
const Items = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentSection = useSelector((state: RootState)=> state.menuSection.currentSection);
    const products = useSelector((state: RootState)=> state.menuSection.products[currentSection]);
    const status = useSelector((state: RootState)=> state.menuSection.status);

    useEffect(() => {
        dispatch(fetchProducts(currentSection));
    }, [dispatch, currentSection])
  return (
    <div>
      {status === 'succeeded' && products.map((product, index) => (
          <div key={index}><img src={product.image}/> <h1>{product.title}</h1></div>
        ))}
    </div>
  )
}

export default Items
