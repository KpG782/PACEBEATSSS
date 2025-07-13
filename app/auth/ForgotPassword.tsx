import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native'
import { useRouter } from 'expo-router'

import Back from '@/components/auth/Back'
import TextBox from '@/components/auth/TextBox'

export default function ForgotPassword() {
    const router = useRouter()
    const [email, setEmail] = useState('')

    const handleSend = () => {
        // TODO: wire up your reset logic
        console.log('Send reset link to', email)
        router.replace('/(tabs)')
    }

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-white"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={20}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View className="flex-1 mt-10 p-6 justify-between bg-white">
                    {/* Header */}
                    <View>
                        {/* Inline back + title with bottom margin */}
                        <Back
                            title="Forgot Password?"
                            className={"mb-16"}
                        />

                        {/* Instruction text with bottom margin */}
                        <Text className="text-center font-primary text-md text-grey-60 px-4 mb-6">
                            Please enter the email address used for password reset
                        </Text>

                        {/* Email input with bottom margin */}
                        <TextBox
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            className="mb-8"
                        />
                    </View>

                    {/* Footer */}
                    <TouchableOpacity
                        onPress={handleSend}
                        className="w-full h-[56px] rounded-3xl bg-secondary justify-center items-center mb-6"
                    >
                        <Text className="text-white text-[16px] font-semibold">
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
