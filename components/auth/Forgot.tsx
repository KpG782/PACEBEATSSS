import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useRouter } from 'expo-router'

interface ForgotProps extends TouchableOpacityProps {
    /** extra classes for the wrapper */
    className?: string
    /** extra classes for the Text */
    textClassName?: string
}

const Forgot: React.FC<ForgotProps> = ({
                                           className = 'mb-6',
                                           textClassName = 'text-sm font-primary text-grey-55 font-medium w-full justify-end text-end',
                                           ...touchableProps
                                       }) => {
    const router = useRouter()

    return (
        <TouchableOpacity
            {...touchableProps}
            onPress={() => router.push('../../auth/ForgotPassword')}
            className={className}
        >
            <Text className={textClassName}>
                Forgot password
            </Text>
        </TouchableOpacity>
    )
}

export default Forgot
