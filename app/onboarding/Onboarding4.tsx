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
        { id: 'starting', icon: '🟢', label: 'Ag bagtit ka' },
        { id: 'occasionally', icon: '🟡', label: 'Agsalsal ta' },
        { id: 'weekly', icon: '🔵', label: 'Chupaen nak' },
        { id: 'regularly', icon: '🔴', label: 'Yot ni inam' },
    ]

    const toggle = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id))
        } else if (selected.length < 1) {
            setSelected([...selected, id])
        }
    }

    const handleNext = () => {
        router.push('../onboarding/Onboarding3')
    }

    return (
        <View className="flex-1 bg-white pt-[36px] gap-[48px]">
            <ProgressBar progress={1} />

            <View className="gap-[8px]">
                <Text className="text-[24px] font-bold text-primary-dark text-center">
                    Ukinam?
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
