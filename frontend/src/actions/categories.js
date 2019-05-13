import { GET_CATEGORIES } from '../utils/constants'

export default function getCategories(categories) {
  return {
      type: GET_CATEGORIES,
      categories: categories
  }
}