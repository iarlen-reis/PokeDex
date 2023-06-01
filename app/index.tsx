import { FlatList } from 'react-native'
import Card from '../src/components/Card'
import { useGetPokemons } from '../src/hooks/useGetPokemons'

const Index = () => {
  const { pokemons } = useGetPokemons()

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => (
        <Card id={item.id.toString()} name={item.name} />
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      className="mt-5 w-full rounded-xl"
    />
  )
}

export default Index
