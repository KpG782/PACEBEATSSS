import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export interface SocialButtonProps {
    iconName: string
    iconLib?: 'fa' | 'fa5'
    size?: number
    color?: string
    onPress?: (event: GestureResponderEvent) => void
    className?: string
}

/**
 * Simple social button (no Appwrite)
 */
const SocialButton: React.FC<SocialButtonProps> = ({
                                                       iconName,
                                                       iconLib = 'fa',
                                                       size = 32,
                                                       color = '#fff',
                                                       onPress,
                                                       className = 'w-[86px] h-[56px] bg-[#021026] rounded-[10px] items-center justify-center mx-2',
                                                   }) => {
    const Icon = iconLib === 'fa' ? FontAwesome : FontAwesome5

    const handlePress = (event: GestureResponderEvent) => {
        if (onPress) onPress(event)
        // No OAuth or Appwrite logic here
    }

    return (
        <TouchableOpacity
            className={className}
            onPress={handlePress}
            accessibilityRole="button"
        >
            <Icon name={iconName} size={size} color={color} />
        </TouchableOpacity>
    )
}

export default SocialButton
