import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  onChangeText: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#000"
        style={styles.input}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0000ff',
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default InputField;
