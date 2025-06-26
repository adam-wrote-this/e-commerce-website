import Modal from '@/components/ui/Modal'
import Reviews from '@/components/Reviews'
import ProductReviewsContextProvider from '@/components/Reviews/ProductReviewsContext'

const ProductReviewsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ProductReviewsContextProvider>
        <Reviews />
      </ProductReviewsContextProvider>
    </Modal>
  )
}

export default ProductReviewsModal
 