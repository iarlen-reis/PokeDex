import { useEffect, useState } from 'react'
import { api } from '../services/api'

interface IPokemon {
  name: string
  id: number
}

interface IUseGetPokemons {
  pokemons: IPokemon[]
}

export const useGetPokemons = (): IUseGetPokemons => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

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
      }
    }

    getPokemons()
  }, []) // Executa apenas na montagem do componente

  return { pokemons }
}
