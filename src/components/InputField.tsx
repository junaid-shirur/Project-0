import { Colors } from '@/theme/Variables';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ViewStyle, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  placeholder: string;
  onChangeText: () => void;
  containerStyle: ViewStyle
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChangeText,
  containerStyle,
  ...props
}) => {
  const [focus,setFocus] = useState(false)

  const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: Colors.white,
      width: '100%',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: focus? Colors.blue: Colors.white,
      shadowColor: '#0000ff',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2, 
    },
    input: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 14,
      color: Colors.input
    },
  });
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.input}
        style={styles.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};



export default InputField;
