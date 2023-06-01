import React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Link } from 'expo-router'

interface IPokemon {
  id: string
  name: string
}

const Card = (props: IPokemon) => {
  return (
    <View className="mb-5 h-60 w-full max-w-sm flex-row rounded-xl bg-slate-500 p-2">
      <View className="w-[60%] items-center justify-center">
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`,
          }}
          alt={props.name}
          className="h-full w-full"
        />
      </View>
      <View className="w-[40%] items-center justify-between">
        <Text className="text-2xl text-white">{props.name}</Text>

        <View className="mb-5 h-20 w-20 items-center justify-center rounded bg-purple-400">
          <Link
            href={{
              pathname: 'details',
              params: { id: props.id },
            }}
          >
            <Feather name="search" color="#FFF" size={30} />
          </Link>
        </View>
      </View>
    </View>
  )
}

export default Card
