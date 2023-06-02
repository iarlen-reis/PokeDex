import React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IPokemon {
  id: string
  name: string
}

const Card = (props: IPokemon) => {
  const router = useRouter()

  const randleToPokemon = () => {
    router.push({ pathname: 'details', params: { id: props.id } })
  }
  return (
    <View className="mb-5 h-60 w-full max-w-sm flex-row rounded-xl bg-slate-500 p-2">
      <View className="w-[50%] items-center justify-center">
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`,
          }}
          alt={props.name}
          className="h-[80%] w-[100%]"
        />
      </View>
      <View className="w-[50%] items-center justify-between">
        <Text className="text-2xl capitalize text-white">{props.name}</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          className="mb-5 h-20 w-20 items-center justify-center rounded bg-purple-400"
          onPress={randleToPokemon}
        >
          <Feather name="search" color="#FFF" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card
