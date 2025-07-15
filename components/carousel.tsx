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
        <View className="w-[100%] h-[90%] gap-2 mt-8">
            <CarouselLib
                loop
                autoPlay
                autoPlayInterval={4000}
                data={slides}
                scrollAnimationDuration={1000}
                width={width}
                onSnapToItem={(index) => {
                    setCurrentIndex(index)
                }}
                renderItem={({ item }) => (
                    <View className="flex-1 flex-col gap-4">
                        {/* image */}
                        <View className="h-[80%] bg-primary-default">
                            <Image
                                source={item.image}
                                className="w-full h-full rounded-lg"
                                resizeMode="contain"
                            />
                        </View>

                        {/* text */}
                        <View className="justify-center items-center bg-primary-default px-16">
                            <Text className="text-black text-center text-[32px] font-bold">
                                {item.title}
                            </Text>
                        </View>
                    </View>
                )}
            />
            {/* pagination dots */}
            <View className="flex-row gap-2 justify-center">
                {slides.map((_, i) => (
                    <View
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                            currentIndex === i ? 'bg-primary-60' : 'bg-primary-30'
                        }`}
                    />
                ))}
            </View>
        </View>
    )
}
