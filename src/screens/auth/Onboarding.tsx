import Button from '@/components/Button';
import Wrapper from '@/components/Container';
import { useTheme } from '@/hooks';
import { Images } from '@/theme';
import { Colors } from '@/theme/Variables';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = () => {
  const { Images } = useTheme();
  return (
    <Wrapper>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={styles.image} source={Images.sparkles.WFH} />
        <Text style={styles.text}>Discover Your Dream Job here</Text>
        <Text style={[styles.text, styles.subText]}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
        <View style={styles.btns}>
          <Button type="primary" btnText="Login" onPress={() => {}} />
          <Button type="secondary" btnText="Register" onPress={() => {}} />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    alignItems: 'center',
    marginTop: 60,
  },
  text: {
    color: Colors.blue,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 35,
    fontWeight: '600',
    marginTop: 40,
  },
  subText: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black,
    marginTop: 0,
    padding: 10,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
});
export default OnBoarding;
