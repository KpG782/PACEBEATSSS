import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Button from '../components/auth/Button'
import Carousel, { Slide } from '../components/carousel'
import WP1 from '../assets/WP1.png'
import WP2 from '../assets/WP2.png'
import WP3 from '../assets/WP3.png'

const slides: Slide[] = [
    { id: 1, title: 'Turn every step into progress', image: WP1 },
    { id: 2, title: 'Music that moves with you',    image: WP2 },
    { id: 3, title: 'Feel better, run farther',     image: WP3 },
]

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-primary-10">
            {/* 75% height for carousel */}
            <View className="flex-[3] w-full">
                <Carousel slides={slides} />
            </View>

            {/* 25% height for buttons, 32px gap */}
            <View className="flex-[2] w-full px-6 items-center justify-center">
                <Button
                    label="Sign up for free"
                    to="./auth/Sign-up"
                    className="w-full mb-8 mt-12 rounded-full p-5 font-primary border-2 border-primary-70 bg-primary-70 dark:bg-primary-100"
                    textClassName="text-[16px] font-semibold text-primary-10 dark:text-accent-bold text-center"
                />
                <Button
                    label="Sign in"
                    to="./auth/Sign-in"
                    className="w-full rounded-full p-5 font-primary border-2 border-primary-70 bg-primary-10 dark:bg-primary-100"
                    textClassName="text-[16px] font-semibold text-primary-70 dark:text-accent-bold text-center"
                />
            </View>
        </SafeAreaView>
    )
}
