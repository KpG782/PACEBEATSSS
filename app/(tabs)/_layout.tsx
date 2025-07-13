// app/tabs/_layout.tsx
import React from 'react'
import { View, Pressable, Text } from 'react-native'
import { Tabs, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import type { ViewStyle } from 'react-native'

// Static header (no username logic)
const CustomHeader: React.FC = () => (
    <View className="px-4 pt-6">
        <Text className="text-[16px] font-semibold text-white">Beginner</Text>
    </View>
)

// FAB-style center tab button
const CustomTabBarButton: React.FC<any> = ({ children, onPress }) => (
    <Pressable onPress={onPress} style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}>
        <View className="w-[70px] h-[70px] rounded-full border-4 border-neutral-400 bg-[#2A2A2A] shadow-md items-center justify-center">
            {children}
        </View>
    </Pressable>
)

// style for tab items
const tabItemStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}

export default function _layout() {
    const commonOptions: BottomTabNavigationOptions = {
        headerStyle: { backgroundColor: '#2A2A2A', height: 120 },
        headerTintColor: '#fff',
        headerTitle: () => <CustomHeader />,
        tabBarShowLabel: false,
        tabBarItemStyle: tabItemStyle,
        tabBarStyle: {
            backgroundColor: '#2a2a2a',
            height: 90,
            paddingTop: 10,
            borderTopWidth: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            overflow: 'visible',
            zIndex: 1,
        },
    }

    return (
        <Tabs screenOptions={commonOptions}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="menu-outline" size={35} color={color} />,
                }}
            />
            <Tabs.Screen
                name="activity"
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="add" size={32} color={color} />,
                    tabBarButton: props => <CustomTabBarButton {...props} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={35} color={color} />,
                }}
            />
        </Tabs>
    )
}
