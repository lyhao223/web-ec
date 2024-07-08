import { fetchAllProducts, setOption, loadMoreProducts, collapseProducts } from '@/app/services/redux/slices/productsShopSlice';
import { AppDispatch, RootState } from '@/app/services/redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectOption from './AllProducts/SelectOption';
import ShowAllProducts from './AllProducts/ShowAllProducts';
import Button from '../../Reusable/Button';

const ShopPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState)=> state.productShop.status)
    const products = useSelector((state: RootState)=>state.productShop.products)
    const visibleProducts = useSelector((state: RootState)=>state.productShop.visibleProducts)
    const option = useSelector((state: RootState)=>state.productShop.option)

    useEffect(()=>{
        dispatch(fetchAllProducts())
    },[dispatch])

 

    const handleOption = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch(setOption(e.target.value))
    }
    const handleClickLoadMore = () =>{
        dispatch(loadMoreProducts())
    }

    const handleCollapse = () =>{
        dispatch(collapseProducts())
    }
    return (
        <section className="relative z-10 p-36">
            <div className='grid grid-cols-3 grid-flow-row gap-6'>
                <div className='col-span-2'>
                    <div className='flex flex-row items-center justify-between'>
                    <div className='subpixel-antialiased leading-3 tracking-tight'>
                        <h1 className='text-black text-4xl'>Shopping</h1>
                    </div>
                       <SelectOption optionValue={option} onChange={handleOption}>
                            <option value="all">All</option>
                            <option value="highToLow">High to Low</option>
                            <option value="lowToHigh">Low to High</option>
                       </SelectOption>      
                    </div>
                    <div className='grid grid-cols-3 items-center justify-center gap-x-56 gap-y-24 mx-10 p-6 px-10 mt-10'>
                            {status === 'loading' && <p>Loading...</p>}
                            {status === 'failed' && <p>Failed to load data</p>}
                            {status === 'succeeded' && products.slice(0, visibleProducts).map((product)=>(
                                <ShowAllProducts key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
                            ))}
                    </div>
                    <div className='flex items-center justify-center'>

                    {visibleProducts < products.length && status === 'succeeded' && (
                            <Button onClick={handleClickLoadMore}>Load More</Button>
                        )}
                        {visibleProducts > products.length && status === 'succeeded' && (
                        <Button onClick={handleCollapse}>Collapse</Button>
                        )}
                    </div>
                </div>
            </div>

        
        </section>
    );
}

export default ShopPage
