import { useTheme } from '@/hooks';
import { Colors } from '../../theme/Variables';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import InputField from '@/components/InputField';
import Wrapper from '@/components/Container';
import Button from '@/components/Button';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
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
      fontSize: 20,
      fontWeight: '600',
      paddingHorizontal: 50,
      marginTop: 26,
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
        <Text style={styles.header}>Login Here</Text>
        <Text style={styles.subText}>Welcome back you've been missed!</Text>
        <KeyboardAvoidingView style={{ flex: 1 }}>
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
            <Button
              btnText="Forgot password ?"
              btnStyles={{ alignItems: 'flex-end', paddingHorizontal: 0 }}
              btnTextStyles={{ color: Colors.blue }}
              onPress={() => {}}
            />
            <Button
              btnText="Sign in"
              type="primary"
              btnStyles={{ marginTop: 20 }}
              onPress={() => {}}
            />
            <Button
              btnText="Create new account"
              btnStyles={{ marginTop: 150 }}
              btnTextStyles={{ color: Colors.black }}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Wrapper>
  );
};

export default Login;
