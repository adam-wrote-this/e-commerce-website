'use client'
import Button from '@/components/ui/Button/Button'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useToastContext } from '@/app/context/ToastContext'
import Toast from '@/components/ui/Toast'
import HeroSection from './components/HeroSection'
import CollectionsGridSection from './components/CollectionsGridSection'
import FeaturesGridSection from './components/FeaturesGridSection'
import LatestArrivalsSection from '@/app/latest/components/LatestArrivalsSection'

export default function Home() {
  const { toast } = useToastContext()

  return (
    <div
      className={clsx(
        'px-4 py-12 md:py-[72px] lg:px-24 lg:py-[104px]',
        'flex flex-col gap-8',
        'h-full'
      )}
    >
      {toast.show && <Toast type={toast.type} message={toast.message} />}
      <HeroSection />
      <LatestArrivalsSection />
      <CollectionsGridSection />
      <FeaturesGridSection />
    </div>
  )
}
