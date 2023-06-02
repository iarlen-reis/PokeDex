import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const randleSearchPokemon = () => {
    if (!search) return

    router.push({ pathname: 'details', params: { id: search.toLowerCase() } })

    setSearch('')
  }

  return (
    <View className="w-full flex-row items-center justify-between gap-2">
      <TextInput
        placeholder="Digite o nome/ID do pokemon"
        className="roundend h-12 w-[80%] rounded bg-gray-500  px-3 text-lg text-white placeholder:text-sm placeholder:text-white"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <TouchableOpacity
        className="h-12 w-[15%] items-center justify-center rounded-md bg-purple-500"
        onPress={randleSearchPokemon}
      >
        <Text className="font-semibold text-white">
          <Feather name="search" color="#FFF" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search
