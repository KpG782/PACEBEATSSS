// screens/onboarding/Onboarding1.tsx
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'

// getting optionButton width
const screenWidth = Dimensions.get('window').width;
const buttonWidth = (screenWidth - (24 * 2 + 12 * 2)) / 2; // container padding + margin

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
        style={{ width: buttonWidth, height: 56, marginHorizontal: 6, marginBottom: 32 }}
        className={
            `flex-row items-center px-[30px] py-[16px] rounded-[20px] mb-[32px] border-2 ` +
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
        { id: 'a', icon: '🎧', label: 'EDM' },
        { id: 'b', icon: '🎧', label: 'Jazz' },
        { id: 'c', icon: '🎧', label: 'K-Pop' },
        { id: 'd', icon: '🎧', label: 'Rock' },
        { id: 'e', icon: '🎧', label: 'Hip Hop' },
        { id: 'f', icon: '🎧', label: 'Rock' },
    ]

    const toggle = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id))
        } else if (selected.length < 8) {
            setSelected([...selected, id])
        }
    }

    const handleNext = () => {
        router.push('../onboarding/Onboarding4')
    }

    return (
        <View className="flex-1 bg-white pt-[36px] gap-[48px]">
            <ProgressBar progress={0.75} />

            <View className="gap-[8px]">
                <Text className="text-[24px] font-bold text-primary-dark text-center">
                    What genres pump you up?
                </Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                <View className="flex-row flex-wrap justify-start px-[6px]">
                    {options.map(opt => (
                        <OptionButton
                            key={opt.id}
                            icon={opt.icon}
                            label={opt.label}
                            selected={selected.includes(opt.id)}
                            onPress={() => toggle(opt.id)}
                        />
                    ))}
                </View>
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
