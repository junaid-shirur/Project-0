import { Colors } from '@/theme/Variables';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  btnText: string;
  btnStyles?: ViewStyle;
  type?: 'primary' | 'secondary'
}
const Button: React.FC<ButtonProps> = ({ onPress, btnStyles, btnText, type }) => {
  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: type === "primary" ? Colors.blue : type === "secondary" ? Colors.white : undefined,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      color: type === "primary" ? Colors.white : type === "secondary" ? Colors.black : undefined ,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  return (
    <TouchableOpacity style={[styles.button, btnStyles]} onPress={onPress}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};



export default Button;
