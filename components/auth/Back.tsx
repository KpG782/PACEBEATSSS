// components/common/Header.tsx
import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import BackIcon from '../../assets/back.png';

interface HeaderProps {
    title?: string;
    onBack?: () => void;
    className?: string;        // ← new
}

const Header: React.FC<HeaderProps> = ({
                                           title,
                                           onBack,
                                           className = ''          // ← default
                                       }) => {
    const router = useRouter();
    const handlePress = onBack ?? (() => router.back());

    return (
        <View
            className={`w-full relative flex-row items-center justify-center py-4 ${className}`}
        >
            <TouchableOpacity
                onPress={handlePress}
                className="absolute left-4"
                accessibilityRole="button"
                accessibilityLabel="Go back"
            >
                <Image
                    source={BackIcon}
                    resizeMode="contain"
                    style={{ width: 24, height: 24 }}
                />
            </TouchableOpacity>
            {title && (
                <Text className="text-2xl font-primary font-bold text-primary-70 ">
                    {title}
                </Text>
            )}
        </View>
    );
};

export default Header;
