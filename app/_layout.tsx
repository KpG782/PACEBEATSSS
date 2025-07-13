// app/_layout.tsx
import React, { useCallback, useEffect, useState } from 'react'
import { View, StatusBar } from 'react-native'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import './global.css'
import { useColorScheme } from '@/hooks/useColorScheme'   // ← or 'react-native'

// keep splash visible until we hide it manually
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [fontsLoaded] = useFonts({
        SpaceMono:                   require('../assets/fonts/SpaceMono-Regular.ttf'),
        Montserrat:                  require('../assets/fonts/Montserrat-Regular.ttf'),
        PlusJakartaSans:             require('../assets/fonts/PlusJakartaSans-Regular.ttf')
    })
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        if (fontsLoaded) {
            setAppIsReady(true)
        }
    }, [fontsLoaded])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])

    if (!appIsReady) return null

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <StatusBar hidden={true}/>
            <Stack initialRouteName="loading">
                <Stack.Screen name="loading" options={{ headerShown: false }} />
                <Stack.Screen name="index"   options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
                <Stack.Screen name="auth"    options={{ headerShown: false }} />
                <Stack.Screen name="onboarding"    options={{ headerShown: false }} />
            </Stack>
        </View>
    )
}
