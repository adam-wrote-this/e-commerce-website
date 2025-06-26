import clsx from 'clsx'

import ProductDetailSection from './components/ProductDetailSection'
import ProductDetailsContextProvider from './components/ProductDetailsContext'
import ProductCollectionSection from './components/ProductCollectionSection'
import ProductSpecificationSection from '@/components/ProductSpecificationSection'

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetailsContextProvider>
        <ProductDetailSection />
      </ProductDetailsContextProvider>
      <ProductSpecificationSection />
      <ProductCollectionSection />
    </>
  )
}

export default ProductDetailPage
