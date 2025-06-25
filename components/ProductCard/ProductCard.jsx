'use client'
import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from '@/components/ui/Link'
import ColorSwatches from '@/components/ui/ColorSwatches'
import { getUnavailableColors } from '@/app/products/[productId]/utils'
import { COLORS } from '@/app/constants'

const ProductCard = ({ product }) => {
  const router = useRouter()
  const { images, name, inventory, colors } = product
  const { discount_percentage, sale_price, list_price, color } = inventory[0]

  const hasDiscount = !!discount_percentage

  const unavailableColors = useMemo(
    () => getUnavailableColors(product),
    [product]
  )

  const redirectUrl = `/products/${product.product_id}`

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        router.push(redirectUrl)
      }
    },
    [router, redirectUrl]
  )

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={clsx(
        'relative w-full',
        'group',
        'flex flex-col gap-4',
        'rounded-lg',
        'outline-none',
        'focus:ring-4 focus:ring-indigo-600/[.12]'
      )}
    >
      <img
        src={images[0].image_url}
        alt={`${name}'s product preview`}
        loading='lazy'
        className={clsx(
          'h-[225px] w-full rounded-lg object-cover md:h-[300px]'
        )}
      />
      <div className={clsx('flex flex-col', 'min-h-[152px]')}>
        <span className='mb-0.5 text-xs text-neutral-600'>
          {COLORS[color]?.label}
        </span>
        <Link
          href={redirectUrl}
          tabIndex={-1}
          variant='unstyled'
          className={clsx(
            'text-lg font-medium text-neutral-900',
            'group-hover:text-indigo-700'
          )}
        >
          <span aria-hidden={true} className='absolute inset-0' />
          {name}
        </Link>
        <div className='mt-3 flex items-center gap-2'>
          <span className='text-lg text-neutral-500'>
            ${hasDiscount ? sale_price : list_price}
          </span>
          {hasDiscount && (
            <span className='text-xs text-neutral-600 line-through'>
              ${list_price}
            </span>
          )}
        </div>
        <div className='mt-3 flex flex-wrap gap-1'>
          {colors.map((color) => (
            <ColorSwatches
              key={color}
              color={COLORS[color].value}
              size='sm'
              outOfStock={unavailableColors.includes(color)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
