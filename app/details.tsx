import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import Pokemon from '../src/assets/32.png'

const Details = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  const randleBackToHome = () => {
    router.push('/')
  }
  return (
    <View className="mt-5">
      <View className="w-full">
        <TouchableOpacity
          onPress={randleBackToHome}
          className="h-10 w-10 items-center justify-center rounded-full bg-purple-400"
        >
          <AntDesign name="arrowleft" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View className="mt-4 w-full items-center justify-center">
        <Image source={Pokemon} alt="pokemon" className="h-[350] w-[300]" />
      </View>
      <View className="w-full items-center justify-center">
        <Text className="my-3 text-4xl text-white">{id}</Text>
        <View className="flex-row items-center justify-between gap-10">
          <Text className="text-xl text-white">Ataque: 40</Text>
          <Text className="text-xl text-white">Defesa: 40</Text>
        </View>
      </View>
      <View className="mt-4 w-full">
        <Text className="text-xl text-white">Habilidades:</Text>
        <View className="mt-1">
          <Text className="text-base text-white">- poison-point</Text>
          <Text className="text-base text-white">- rivalry</Text>
          <Text className="text-base text-white">- hustle</Text>
        </View>
      </View>
    </View>
  )
}

export default Details
