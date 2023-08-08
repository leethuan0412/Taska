import React, {forwardRef, memo, useImperativeHandle, useState} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import equals from 'react-fast-compare';
import {SkypeIndicator} from 'react-native-indicators';
import {colors, dimensions} from '@src/theme';

export interface LoadingProgressProps {
  color?: string;
  backgroundColor?: string;
  underStatusbar?: boolean;
}
const LoadingProgressComponent = forwardRef((_: LoadingProgressProps, ref) => {
  const [visible, setVisible] = useState(false);
  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }),
    [],
  );

  return (
    <Modal
      style={styles.container}
      isVisible={visible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropColor="#000000aa">
      <SkypeIndicator
        color={colors.primary}
        count={3}
        size={dimensions.width * 0.13}
      />
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const LoadingProgress = memo(LoadingProgressComponent, equals);
export interface LoadingProgressRef {
  show(): void;
  hide(): void;
}
