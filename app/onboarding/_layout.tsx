// screens/onboarding/_layout.tsx
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { Slot, useRouter, Stack } from 'expo-router'

export default function OnboardingLayout() {
    const router = useRouter()

    useEffect(() => {
        // on “/onboarding” → go to the first step
        router.replace('../onboarding/Onboarding1')
    }, [])

    return (
        <>
            {/* hide the OS status bar */}
            <StatusBar hidden />

            {/* wrap in a Stack navigator with no header or tabs */}
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboarding1" />
                <Stack.Screen name="Onboarding2" />
            </Stack>

        </>
    )
}
