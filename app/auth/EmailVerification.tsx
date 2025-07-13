// screens/onboarding/EmailVerification.tsx
import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Back from '@/components/auth/Back'
import Button from '@/components/auth/Button'
import EmailLogo from '@/components/auth/EmailLogo'

export default function EmailVerification() {
    const email = 'tim.forte@gmail.com'  // replace with real user email

    return (
        <View className="flex-1 bg-white">
            <StatusBar hidden />

            {/* back arrow + title */}
            <Back
                className="absolute top-12 left-4 z-10"
                title="Email Verification"
            />

            {/* top section */}
            <View className="items-center px-6 pt-12">
                <EmailLogo />

                <Text className="text-3xl font-primary font-bold text-black mb-2">
                    Check your inbox
                </Text>
                <Text className="text-base font-primary text-grey-60 text-center">
                    We’ve sent a verification link to {email}
                </Text>
            </View>

            {/* footer pinned to bottom */}
            <View className="px-6 mt-auto pb-8">
                <Text className="text-center text-sm font-primary text-grey-55 mb-4">
                    Didn’t get the email?
                </Text>
                <Button
                    label="Resend"
                    to="/auth/EmailVerified"
                    className="w-full rounded-full p-5 font-primary border-2 border-primary-70 bg-primary-70"
                    textClassName="text-[16px] font-semibold text-primary-10 text-center"
                />
            </View>
        </View>
    )
}
