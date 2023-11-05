import { useTheme } from '@/hooks';
import { Colors } from '../../theme/Variables';
import { NavigatorScreenParams } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import InputField from '@/components/InputField';
import Wrapper from '@/components/Container';
import Button from '@/components/Button';

interface RegisterProps {
  navigation: NavigatorScreenParams<{ screen: 'Register' }>;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const styles = StyleSheet.create({
    header: {
      color: Colors.blue,
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
      fontSize: 30,
      fontWeight: '700',
      marginTop: 55,
    },
    subText: {
      color: Colors.black,
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
      fontSize: 14,
      fontWeight: '400',
    },
    inputConatainer: {
      marginTop: 20,
      backgroundColor: Colors.inputBackground,
    },
  });

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Wrapper>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.subText}>
          Create an account so you can explore all exiting features
        </Text>
        <View style={{ flex: 1, marginTop: 35 }}>
          <InputField
            containerStyle={styles.inputConatainer}
            placeholder="Email"
            onChangeText={() => {}}
          />
          <InputField
            containerStyle={styles.inputConatainer}
            placeholder="Password"
            onChangeText={() => {}}
          />
          <InputField
            containerStyle={styles.inputConatainer}
            placeholder="Confirm Password"
            onChangeText={() => {}}
          />
          <Button
            btnText="Sign Up"
            btnStyles={{ marginTop: 150 }}
            onPress={() => {}}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Register;
