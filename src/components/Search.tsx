import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <View className="w-full flex-row items-center justify-between gap-2">
      <TextInput className="roundend h-12 w-[80%] rounded bg-gray-500  px-3 text-lg text-white" />
      <TouchableOpacity className="h-12 w-[15%] items-center justify-center rounded-md bg-purple-500">
        <Text className="font-semibold text-white">
          <Feather name="search" color="#FFF" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search
