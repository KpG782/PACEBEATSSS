// screens/onboarding/Onboarding1.tsx
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

// Progress bar at top
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <View className="flex-col h-2 rounded-[8px] w-[340px] self-center bg-[#2d2d2d]">
        <View className="h-full rounded-[8px] bg-primary-70" style={{ width: `${progress * 100}%` }} />
    </View>
)

// Option button component
interface OptionButtonProps {
    icon: string
    label: string
    selected: boolean
    onPress: () => void
}

<View>

</View>
const OptionButton: React.FC<OptionButtonProps> = ({ icon, label, selected, onPress }) => (
    <TouchableOpacity
        className={
            `flex-row items-center px-[30px] py-[16px] rounded-[20px] mb-[32px] w-full h-[56px] border-2 ` +
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
        <View className="flex-1 bg-white pt-[36px] gap-[20px]">
            <ProgressBar progress={0.25} />

            <View className="mt-6 gap-[8px]">
                <Text className="text-[24px] font-bold text-primary-dark text-center">
                    Why do you run?
                </Text>
                <Text className="text-[16px] font-normal text-[#1f1f1f] text-center mb-6">
                    (Choose up to two)
                </Text>
            </View>

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
                className="h-[56px] absolute bottom-10 left-6 right-6 bg-primary-70 py-4 rounded-[20px]"
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
