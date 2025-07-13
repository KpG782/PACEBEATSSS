import React, { useState } from 'react'
import { Text, Image, Dimensions, View } from 'react-native'
import CarouselLib from 'react-native-reanimated-carousel'

const { width, height } = Dimensions.get('window')

export type Slide = {
    id: number
    title: string
    image?: any
}

type CarouselProps = {
    slides: Slide[]
}

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <View className="flex-1">
            <CarouselLib
                loop
                autoPlay
                data={slides}
                scrollAnimationDuration={3500}
                width={width}
                height={height * 0.75}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ item }) => (
                    <View className="flex-1 mt-4">
                        <View className="flex-[3] w-full items-center justify-center bg-primary-default">
                            <Image
                                source={item.image}
                                className="w-full h-full rounded-lg"
                                resizeMode="contain"
                            />
                        </View>
                        <View className="flex-[1] w-full justify-center items-center bg-primary-default px-6">
                            <Text className="text-black text-center text-[32px] font-bold">
                                {item.title}
                            </Text>
                        </View>
                    </View>
                )}
            />

            {/* pagination dots */}
            <View className="flex-row items-center justify-center">
                {slides.map((_, i) => (
                    <View
                        key={i}
                        className={`w-2 h-2 rounded-full mx-1 ${
                            currentIndex === i ? 'bg-primary-70' : 'bg-primary-30'
                        }`}
                    />
                ))}
            </View>
        </View>
    )
}
