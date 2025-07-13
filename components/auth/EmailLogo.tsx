// components/auth/EmailLogo.tsx
import React from 'react'
import { View, Image } from 'react-native'
import EmailImage from '../../assets/Email.png'

const EmailLogo: React.FC = () => (
    <View className="items-center px-6 mt-24 mb-8">
        <Image
            source={EmailImage}
            resizeMode="contain"
            className="w-48 h-48"
        />
    </View>
)

export default EmailLogo
