import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native'
import { router } from 'expo-router'

import Back from '../../components/auth/Back'
import Logo from '../../components/auth/Logo'
import Title from '../../components/auth/Title'
import TextBox from '../../components/auth/TextBox'
import SocialButton from '../../components/auth/SocialButton'
import Forgot from '@/components/auth/Forgot'
import Button from "@/components/auth/Button";

export default function SignIn() {
    const [email, setEmail]       = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading]   = useState(false)
    const [snackVisible, setSnackVisible] = useState(false)
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    const isEmailError    = email === 'error'
    const isPasswordError = password === 'error'

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
        return () => {
            showSub.remove()
            hideSub.remove()
        }
    }, [])

    const handleLogin = () => {
        if (!email || !password) {
            return Alert.alert('Both email and password are required')
        }
        setLoading(true)
        setSnackVisible(true)
        setTimeout(() => {
            setSnackVisible(false)
            router.replace('/(tabs)')
        }, 1500)
    }

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-white"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={20}
        >
            <View className="flex-1 relative bg-white">
                <Back
                    className="absolute top-12 left-4 z-10"
                    title={keyboardVisible ? 'Sign in' : ""}
                />

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View className="flex-1 justify-center items-center p-6">
                        {!keyboardVisible && <Logo />}
                        {!keyboardVisible && <Title title="Sign in" className="mb-12" />}

                        {/* Email input + error */}
                        <TextBox
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            className={`
                w-full h-[56px] rounded-[20px] bg-white p-5 mb-7
                border-2 ${isEmailError ? 'border-error mb-1' : 'border-primary-30 '}
              `}
                        />
                        {isEmailError && (
                            <Text className="w-full text-sm font-primary text-error text-start mb-2">
                                error
                            </Text>
                        )}

                        {/* Password input + error */}
                        <TextBox
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            className={`
                w-full h-[56px] rounded-[20px] bg-white p-5 mb-1
                border-2 ${isPasswordError ? 'border-error mb-1' : 'border-primary-30'}
              `}
                        />
                        {isPasswordError && (
                            <Text className="w-full text-sm font-primary text-error text-start">
                                error
                            </Text>
                        )}

                        <Forgot
                            className="w-full items-end mb-8"
                            textClassName="text-sm font-primary text-grey-55 font-semibold text-end"
                        />

                        <Button
                            label="Sign in"
                            to="../(tabs)"
                            className="w-full mb-8 mt-2 rounded-full p-5 font-primary border-2 border-primary-70 bg-primary-70 dark:bg-primary-100"
                            textClassName="text-[16px] font-semibold text-primary-10 dark:text-accent-bold text-center"
                        />
                        <View className="w-full items-center">
                            <Text className="text-md mb-6 text-grey-55">or continue with</Text>
                            <View className="flex-row justify-center items-center space-x-4">
                                <SocialButton iconName="google" />
                                <SocialButton iconName="spotify" />
                            </View>
                        </View>

                        {snackVisible && (
                            <View className="absolute bottom-10 left-5 right-5 bg-[#333] px-4 py-3 rounded-lg">
                                <Text className="text-white text-center">Logged in successfully</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
