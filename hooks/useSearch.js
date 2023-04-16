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
    const names = ['query', 'orientation', 'url', 'color', 'size']
    const data = new FormData(e.target)
    const parametersArr = names.map((name) => [name, data.get(name)])
    const parameters = Object.fromEntries(parametersArr)

    if (parameters.query === '') {
      setError('Is required to enter a parameter for the search')
      return
    }

    getSearchedPhotos(parameters)
      .then((res) => {
        setData(res)
        setPhotos(res.photos)
      })
      .catch((err) => setError(err))
  }

  const handleInfiniteScroll = () => {
    console.log('ejecutando')
    getNextPhotos({ url: data.next_page })
      .then((res) => {
        setData({ ...data, ...res })
        setPhotos([...photos, ...res.photos])
      })
      .catch((err) => setError(err))
  }

  return {
    handleSubmit,
    photos,
    handleInfiniteScroll,
    error,
    loading,
    setLoading,
    data,
    quality,
    setQuality,
  }
}