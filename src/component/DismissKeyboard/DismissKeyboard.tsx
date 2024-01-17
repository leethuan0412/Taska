import React, {ReactElement} from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

interface Props {
  children: ReactElement | ReactElement[];
}

export function DismissKeyboard({children}: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}
