import { useState } from 'react'
import { api } from '../services/api'

interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

interface Stat {
  base_stat: number
  stat: {
    name: string
    url: string
  }
}

interface Species {
  name: string
}

interface ISprites {
  other: {
    home: {
      front_default: string
    }
  }
}

interface IPokemon {
  sprites: ISprites
  species: Species
  abilities: Ability[]
  stats: Stat[]
}

interface IUseGetPokemon {
  pokemon: IPokemon | undefined
  getAPokemon: (id: string) => Promise<void>
  error: boolean
  loading: boolean
}

export const useGetPokemon = (): IUseGetPokemon => {
  const [pokemon, setPokemon] = useState<IPokemon>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const getAPokemon = async (id: string) => {
    try {
      const response = await api.get<IPokemon>(`/pokemon/${id}`)
      const data = response.data
      setPokemon(data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return { getAPokemon, pokemon, error, loading }
}
