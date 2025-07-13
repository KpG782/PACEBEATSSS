
// screens/onboarding/EmailVerified.tsx
import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Back from '@/components/auth/Back'
import Button from '@/components/auth/Button'
import EmailCheck from '@/components/auth/EmailCheck'

/**
 * EmailVerified: confirmation screen after verifying email
 */
export default function EmailVerified() {
    const email = 'tim.forte@gmail.com'  // replace with actual user email

    return (
        <View className="flex-1 bg-white">
            <StatusBar hidden />

            {/* Back arrow with title */}
            <Back
                className="absolute top-12 left-4 z-10"
                title="Email Verification"
            />

            {/* Check image + messages */}
            <View className="items-center pt-12">
                <EmailCheck />
                <Text className="text-2xl font-primary-semibold text-black mb-2">
                    Email verified!
                </Text>
                <Text className="text-base font-primary text-grey-60 text-center mb-6">
                    Your email ({email}) has been successfully verified.
                </Text>
            </View>

            {/* Continue button */}
            <View className="px-6 mt-auto mb-8">
                <Button
                    label="Finish"
                    to="/(tabs)"
                    className="w-full mb-8 mt-2 rounded-full p-5 font-primary border-2 border-primary-70 bg-primary-70"
                    textClassName="text-[16px] font-semibold text-primary-10 text-center"
                />
            </View>
        </View>
    )
}