// screens/onboarding/Onboarding1.tsx
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

// Progress bar at top
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <View className="h-1 w-full bg-grey-20">
        <View className="h-full bg-primary-70" style={{ width: `${progress * 100}%` }} />
    </View>
)

// Option button component
interface OptionButtonProps {
    icon: string
    label: string
    selected: boolean
    onPress: () => void
}
const OptionButton: React.FC<OptionButtonProps> = ({ icon, label, selected, onPress }) => (
    <TouchableOpacity
        className={
            `flex-row items-center px-6 py-3 rounded-full mb-4 w-full border-2 ` +
            (selected
                ? 'bg-primary-70 border-primary-70'
                : 'bg-white border-primary-30')
        }
        onPress={onPress}
    >
        <Text className={
            `mr-3 text-base ` +
            (selected ? 'text-white' : 'text-primary-70')
        }>
            {icon}
        </Text>
        <Text className={
            `text-base ` +
            (selected ? 'text-white' : 'text-primary-70')
        }>
            {label}
        </Text>
    </TouchableOpacity>
)

// Onboarding screen
export default function Onboarding1() {
    const router = useRouter()
    const [selected, setSelected] = useState<string[]>([])

    const options = [
        { id: 'stress', icon: '🧘', label: 'Relieve stress' },
        { id: 'performance', icon: '🏆', label: 'Improve performance' },
        { id: 'music', icon: '🎵', label: 'Enjoy music & rhythm' },
        { id: 'weight', icon: '💪', label: 'Lose weight' },
        { id: 'others', icon: '🤝', label: 'Run with others' },
        { id: 'consistency', icon: '📅', label: 'Build consistency' },
    ]

    const toggle = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id))
        } else if (selected.length < 2) {
            setSelected([...selected, id])
        }
    }

    const handleNext = () => {
        router.push('../onboarding/Onboarding2')
    }

    return (
        <View className="flex-1 bg-white pt-6">
            <ProgressBar progress={0.25} />
            <Text className="mt-6 text-xl font-primary-semibold text-primary-70 text-center">
                Why do you run?
            </Text>
            <Text className="mt-2 text-sm font-primary text-grey-60 text-center mb-6">
                Choose up to two
            </Text>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                {options.map(opt => (
                    <OptionButton
                        key={opt.id}
                        icon={opt.icon}
                        label={opt.label}
                        selected={selected.includes(opt.id)}
                        onPress={() => toggle(opt.id)}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity
                className="absolute bottom-10 left-6 right-6 bg-primary-70 py-4 rounded-full"
                onPress={handleNext}
                disabled={selected.length === 0}
            >
                <Text className="text-center font-primary-semibold text-white">
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    )
}
