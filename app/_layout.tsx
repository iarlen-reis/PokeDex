import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Search from '../src/components/Search'

const Layout = () => {
  return (
    <View className="flex-1  bg-indigo-900 px-4 pb-2 pt-12">
      <StatusBar style="light" />
      <Search />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="details" />
      </Stack>
    </View>
  )
}

export default Layout
