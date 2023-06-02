import { ActivityIndicator, FlatList, View } from 'react-native'
import Card from '../src/components/Card'
import { useGetPokemons } from '../src/hooks/useGetPokemons'

const Index = () => {
  const { pokemons, loadMorePokemon, loading } = useGetPokemons()

  const handleLoadMore = () => {
    loadMorePokemon()
  }

  return (
    <>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <Card id={item.id.toString()} name={item.name} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        className="mt-5 w-full rounded-xl"
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
      {loading && (
        <View className="items-center justify-center bg-transparent">
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  )
}

export default Index
