// SignUp.tsx
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    Platform,
} from 'react-native'
import {router, useRouter} from 'expo-router'

import Back from '../../components/auth/Back'
import Logo from '../../components/auth/Logo'
import Title from '../../components/auth/Title'
import TextBox from '../../components/auth/TextBox'
import SocialButton from '../../components/auth/SocialButton'

export default function SignUp() {
    const [username, setUsername]         = useState('')
    const [email, setEmail]               = useState('')
    const [password, setPassword]         = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading]           = useState(false)
    const [snackVisible, setSnackVisible] = useState(false)
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    const router = useRouter()

    // fake “error” state when field value === 'error'
    const isUsernameError       = username === 'error'
    const isEmailError          = email === 'error'
    const isPasswordError       = password === 'error'
    const isConfirmPwdError     = confirmPassword === 'error'

    useEffect(() => {
        const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
        const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
        return () => {
            show.remove()
            hide.remove()
        }
    }, [])

    const handleRegister = () => {
        if (!username || !email || !password || !confirmPassword) {
            return Alert.alert('All fields are required')
        }
        if (password !== confirmPassword) {
            return Alert.alert('Passwords do not match')
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
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
            keyboardVerticalOffset={20}
        >
            <View className="flex-1 relative bg-white">
                <Back
                    className="absolute top-12 left-4 z-10"
                    title={keyboardVisible ? 'Sign Up' : ""}
                />

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View
                        className={`
              flex-1 items-center p-6
              ${keyboardVisible ? 'justify-start pt-16' : 'justify-center'}
            `}
                    >
                        {!keyboardVisible && <Logo />}
                        {!keyboardVisible && <Title title="Sign Up" className="mb-12" />}

                        {/* Username */}
                        <TextBox
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            className={`
                w-full h-[56px] rounded-[20px] bg-white p-5
                border-2 ${isUsernameError ? 'border-error mb-1' : 'border-primary-30'}
              `}
                        />
                        {isUsernameError && (
                            <Text className="w-full text-sm font-primary text-error text-start mb-4">
                                error
                            </Text>
                        )}

                        {/* Email */}
                        <TextBox
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            className={`
                w-full h-[56px] rounded-[20px] bg-white p-5 
                border-2 ${isEmailError ? 'border-error mb-1' : 'border-primary-30'}
              `}
                        />
                        {isEmailError && (
                            <Text className="w-full text-sm font-primary text-error text-start mb-4">
                                error
                            </Text>
                        )}

                        {/* Password */}
                        <TextBox
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            className={`
                w-full h-[56px] rounded-[20px] bg-white p-5 
                border-2 ${isPasswordError ? 'border-error mb-1' : 'border-primary-30'}
              `}
                        />
                        {isPasswordError && (
                            <Text className="w-full text-sm font-primary text-error text-start mb-4">
                                error
                            </Text>
                        )}

                        {/* Confirm Password */}
                        <TextBox
                            placeholder="Confirm Password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            className={`
                w-full h-[56px] rounded-[20px] bg-white p-5 
                border-2 ${isConfirmPwdError ? 'border-error mb-1' : 'border-primary-30'}
              `}
                        />
                        {isConfirmPwdError && (
                            <Text className="w-full text-sm font-primary text-error text-start mb-4">
                                error
                            </Text>
                        )}

                        <TouchableOpacity
                            onPress={() => router.replace('/auth/EmailVerification')}
                            disabled={loading}
                            className={`w-full h-[56px] rounded-3xl font-primary text-4xl justify-center items-center bg-secondary mb-7 ${
                                loading ? 'opacity-50' : ''
                            }`}
                        >
                            <Text className="font-bold text-white">
                                {loading ? 'Signing Up…' : 'Sign-Up'}
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => router.replace('/onboarding/Onboarding1')}
                            disabled={loading}
                            className={`w-full h-[56px] rounded-3xl font-primary text-4xl justify-center items-center bg-secondary mb-7 ${
                                loading ? 'opacity-50' : ''
                            }`}
                        >
                            <Text className="font-bold text-white">
                                {loading ? 'Signing Up…' : 'Go to Onboarding'}
                            </Text>
                        </TouchableOpacity>

                        <View className="w-full items-center">
                            <Text className="text-md mb-6 text-grey-55">or continue with</Text>
                            <View className="flex-row justify-center items-center space-x-4">
                                <SocialButton iconName="google" />
                                <SocialButton iconName="spotify" />
                            </View>
                        </View>

                        {snackVisible && (
                            <View className="absolute bottom-10 left-5 right-5 bg-[#333] px-4 py-3 rounded-lg">
                                <Text className="text-white text-center">Account created</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
