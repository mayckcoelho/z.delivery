import React from 'react'

import { useQuery } from '@apollo/client'
import { ALL_CATEGORIES_SEARCH } from '../services/api'
import IPocCategoriesData, {
  ICategory,
} from '../shared/interfaces/IPocCategoriesData'

const Categories: React.FC = () => {
  const { loading, error, data } = useQuery<IPocCategoriesData>(
    ALL_CATEGORIES_SEARCH
  )

  return (
    <div className="category__wrapper">
      {data?.allCategory &&
        data?.allCategory.map(c => (
          <div className="category__card">
            <p key={c.id}>{c.title}</p>
          </div>
        ))}
    </div>
  )
}

export default Categories
