import React, { useState } from 'react'
import { TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native'

interface TextBoxProps extends TextInputProps {
    /** Tailwind-style classes for styling */
    className?: string
    /** Placeholder text shown when empty */
    placeholder?: string
    /** Color of the placeholder text (and text) */
    placeholderTextColor?: string
    /** Optional style override (will be merged) */
    style?: StyleProp<TextStyle>
}

// Base classes for the TextBox
const defaultClasses =
    'text-md text-grey-55 w-full h-[56px] rounded-[20px] mb-7 font-primary justify-center items-center bg-white p-5'

const TextBox: React.FC<TextBoxProps> = ({
                                             className = '',
                                             placeholder = '',
                                             placeholderTextColor = '#7B7B7B',
                                             style,
                                             ...props
                                         }) => {
    const [focused, setFocused] = useState(false)

    // Merge base, custom, and focus classes
    const combinedClasses = [
        defaultClasses,
        className,
        'border-2',
        focused ? 'border-primary-60' : 'border-primary-30',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <TextInput
            className={combinedClasses}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[style, { color: placeholderTextColor }]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
        />
    )
}

export default TextBox
