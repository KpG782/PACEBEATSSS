import {View, Text, Image} from 'react-native'
import React from 'react'
import EmailImage from "@/assets/CheckMark.png";

const EmailCheck = () => {
    return (
        <View className="items-center px-6 mt-24 mb-8">
            <Image
                source={EmailImage}
                resizeMode="contain"
                className="w-48 h-48"
            />
        </View>
    )
}
export default EmailCheck
