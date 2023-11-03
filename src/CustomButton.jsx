import React from 'react';
import { Pressable, Text } from 'react-native';

const CustomButton = ({
  initialButtonColor = 'green',
  pressedButtonColor = 'grey',
  initialTextColor = 'white',
  pressedTextColor = 'yellow',
  onPressFun,
  label,
  buttonStyle = {},
  textStyle = {}
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyle,
        {
          backgroundColor: pressed ? pressedButtonColor : initialButtonColor
        }
      ]}
      onPress={onPressFun}
    >
      {({ pressed }) => (
        <Text style={[textStyle,{ color: pressed ? pressedTextColor : initialTextColor }]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;