const ProductDetailPage = async ({
  params
}: {
  params: Promise<{ productId: string }>
}) => {
  const { productId } = await params
  return `Product Detail Page Content for Product ID: ${productId}`
}

export default ProductDetailPage
