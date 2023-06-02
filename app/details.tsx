import React, { useEffect } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import { useGetPokemon } from '../src/hooks/useGetPokemon'
import NoFound from '../src/assets/NoFoud.png'

const Details = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  const { getAPokemon, pokemon, loading } = useGetPokemon()

  useEffect(() => {
    getAPokemon(String(id))
  }, [id, getAPokemon])

  const randleBackToHome = () => {
    router.push('/')
  }

  const defense = pokemon?.stats.find(
    (stat) => stat.stat.name === 'defense',
  )?.base_stat

  const attack = pokemon?.stats.find(
    (stat) => stat.stat.name === 'attack',
  )?.base_stat

  if (loading) {
    return (
      <View className="mt-5 h-full w-full items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View className="mt-5">
      {pokemon ? (
        <>
          <View className="w-full">
            <TouchableOpacity
              onPress={randleBackToHome}
              className="h-10 w-10 items-center justify-center rounded-full bg-purple-400"
            >
              <AntDesign name="arrowleft" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View className="mt-4 w-full items-center justify-center">
            <Image
              source={{
                uri: `${pokemon && pokemon.sprites.other.home.front_default}`,
              }}
              alt="pokemon"
              className="h-[300] w-[300]"
            />
          </View>
          <View className="w-full items-center justify-center">
            <Text className="my-3 text-4xl text-white">
              {pokemon && pokemon.species.name}
            </Text>
            <View className="flex-row items-center justify-between gap-10">
              <Text className="text-xl text-white">Ataque: {attack} </Text>
              <Text className="text-xl text-white">Defesa: {defense}</Text>
            </View>
          </View>
          <View className="mt-4 w-full">
            <Text className="text-xl text-white">Habilidades:</Text>
            <View className="mt-1">
              {pokemon &&
                pokemon.abilities.map((ability) => (
                  <Text
                    className="text-base capitalize text-white"
                    key={ability.ability.name}
                  >
                    - {ability.ability.name}
                  </Text>
                ))}
            </View>
          </View>
        </>
      ) : (
        <View className="mt-5 items-center justify-center">
          <View className="w-full">
            <TouchableOpacity
              onPress={randleBackToHome}
              className="h-10 w-10 items-center justify-center rounded-full bg-purple-400"
            >
              <AntDesign name="arrowleft" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
          <Image source={NoFound} alt="pokemon não encontrado" />
          <Text className="text-2xl text-white">Pokemon não encontrado.</Text>
        </View>
      )}
    </View>
  )
}

export default Details
