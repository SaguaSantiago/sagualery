import { useState } from 'react'
import getSearchedPhotos, { getNextPhotos } from '@/api/SearchPhotos'

export const useSearch = () => {
  const [loading, setLoading] = useState(false)
  const [quality, setQuality] = useState('medium')
  const [data, setData] = useState({})
  const [photos, setPhotos] = useState([])
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const names = ['query', 'orientation', 'url', 'color', 'size', 'lang']
    const data = new FormData(e.target)
    const parametersArr = names.map((name) => [name, data.get(name)])
    const parameters = Object.fromEntries(parametersArr)

    if (parameters.query === '') {
      setError('Is required to enter a parameter for the search')
      setLoading(false)
      return
    }

    getSearchedPhotos(parameters)
      .then((res) => {
        setData(res)
        setPhotos(res.photos)
        setError('')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const handleInfiniteScroll = () => {
    getNextPhotos({ url: data.next_page })
      .then((res) => {
        setData({ ...data, ...res })
        setPhotos([...photos, ...res.photos])
        setError('')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return {
    handleSubmit,
    handleInfiniteScroll,
    setLoading,
    setQuality,
    photos,
    error,
    loading,
    data,
    quality,
  }
}
