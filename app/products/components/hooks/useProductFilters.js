'use client'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  CATEGORY_OPTIONS,
  COLLECTIONS_OPTIONS,
  COLORS_OPTIONS,
  RATING_OPTIONS
} from '@/app/constants'

export default function useProductFilters(collectionId = '') {
  const searchParams = useSearchParams()
  // const collectionId = searchParams.get('collectionId') || ''
  const isMounted = useRef(false)

  const [selectedCollections, setSelectedCollections] = useState(
    collectionId ? new Set().add(collectionId) : new Set()
  )
  const [selectedCategory, setSelectedCategory] = useState(new Set())
  const [selectedColors, setSelectedColors] = useState(new Set())
  const [selectedRating, setSelectedRating] = useState(new Set())
  const [selectedSort, setSelectedSort] = useState({
    value: 'created',
    direction: 'desc'
  })

  const onSelect = (type, value) => {
    let newSelectedItems
    if (type === COLLECTIONS_OPTIONS.key) {
      newSelectedItems = new Set(selectedCollections)
    }
    if (type === CATEGORY_OPTIONS.key) {
      newSelectedItems = new Set(selectedCategory)
    }
    if (type === COLORS_OPTIONS.key) {
      newSelectedItems = new Set(selectedColors)
    }
    if (type === RATING_OPTIONS.key) {
      newSelectedItems = new Set(selectedRating)
    }

    newSelectedItems.has(value)
      ? newSelectedItems.delete(value)
      : newSelectedItems.add(value)

    if (type === COLLECTIONS_OPTIONS.key) {
      setSelectedCollections(newSelectedItems)
    }
    if (type === CATEGORY_OPTIONS.key) {
      setSelectedCategory(newSelectedItems)
    }
    if (type === COLORS_OPTIONS.key) {
      setSelectedColors(newSelectedItems)
    }
    if (type === RATING_OPTIONS.key) {
      setSelectedRating(newSelectedItems)
    }
  }

  const resetFilters = () => {
    setSelectedCollections(new Set())
    setSelectedCategory(new Set())
    setSelectedColors(new Set())
    setSelectedRating(new Set())
  }

  const filterCount =
    selectedCollections.size +
    selectedCategory.size +
    selectedColors.size +
    selectedRating.size

  useEffect(() => {
    if (isMounted.current) {
      if (collectionId) {
        resetFilters()
        setSelectedCollections(new Set().add(collectionId))
      }
    }
    isMounted.current = true
  }, [collectionId])

  return {
    selectedCollections,
    selectedCategory,
    selectedColors,
    selectedRating,
    selectedSort,
    filterCount,
    onSelect,
    resetFilters,
    onSortChange: setSelectedSort
  }
}
