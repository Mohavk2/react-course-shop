import ProductList from "../components/ProductList"
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import {useParams} from 'react-router'
import useCategoryProducts from '../hooks/categoryProducts'

function CategoryPage() {

    const {category} = useParams()
    const categoryProductsProps = {
        category: category ?? ''
    }
    const {loading, error, products} = useCategoryProducts(categoryProductsProps)

    return (
        <>
            <div className="flex-col">
                {loading && <Loader/>}
                {error && <ErrorMessage message={error}/>}
                <ProductList products={products}/>
            </div>
        </>
    )
}

export default CategoryPage