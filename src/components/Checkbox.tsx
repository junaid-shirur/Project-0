import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
const img_Tick = require('./assets/tick.png');

interface CheckboxProps {
  label: string;
  onChange: (isChecked: boolean) => void;
  isChecked: boolean;
  style?: any;
  labelStyle?: any;
  checkedStyle?: StyleProp<ViewStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  isChecked,
  style,
  labelStyle,
  checkedStyle,
  checkboxStyle,
}) => {
  const handleCheckboxToggle = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableWithoutFeedback onPress={handleCheckboxToggle}>
      <View style={{ ...styles.container, ...style }}>
        <View
          style={[
            styles.checkbox,
            checkboxStyle,
            isChecked && styles.checked,
            isChecked && checkedStyle,
          ]}
        >
          {isChecked ? (
            <Image style={styles.img_Tick} source={img_Tick} />
          ) : (
            <></>
          )}
        </View>
        <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    // borderColor: colors().primaryColor,
    marginRight: 10,
  },
  checked: {
    padding: 3,
    // backgroundColor: colors().primaryColor,
    // borderColor: colors().primaryColor,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nasalization',
    textTransform: 'capitalize',
    color: 'white',
  },
  img_Tick: {
    width: '100%',
    height: '100%',
  },
});

export default Checkbox;
