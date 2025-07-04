'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'

import { useProductDetailsContext } from './ProductDetailsContext'

const InfoSection = () => {
  const { product } = useProductDetailsContext()
  const { info } = product

  return (
    <section aria-labelledby='product-faq' className='mt-10'>
      <Accordion>
        {info.map((item) => (
          <AccordionItem key={item.title} id={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <ul className='ml-4 list-disc pl-2 text-neutral-600'>
                {item.description.map((descItem) => (
                  <li key={descItem}>{descItem}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default InfoSection
