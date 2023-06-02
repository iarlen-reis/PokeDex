import { useEffect, useState } from 'react'
import { api } from '../services/api'

interface IPokemon {
  name: string
  id: number
}

interface IUseGetPokemons {
  pokemons: IPokemon[]
  loadMorePokemon: () => Promise<void>
  loading: boolean
}

export const useGetPokemons = (): IUseGetPokemons => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await api.get('/pokemon/?limit=20')

        const data = response.data.results as IPokemon[]

        data.forEach((item, index) => {
          item.id = index + 1
        })

        setPokemons(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getPokemons()
  }, [])

  const loadMorePokemon = async () => {
    setLoading(true)
    try {
      const response = await api.get(
        `/pokemon?limit=20&offset=${currentPage * 20}`,
      )
      const data = response.data.results as IPokemon[]

      data.forEach((item, index) => {
        item.id = index + currentPage * 20 + 1
      })

      setPokemons((prevList) => [...prevList, ...data])
      setCurrentPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { pokemons, loadMorePokemon, loading }
}
