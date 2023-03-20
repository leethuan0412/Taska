import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {Spacing} from '../appSpacing';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    minHeight: Spacing.height56,
    flexDirection: 'row',
    borderRadius: Spacing.width84,
  },
  label: {
    textAlign: 'center',
    color: colors.white,
    flex: 1,
  },
  icon: {
    marginLeft: Spacing.width20,
  },
  txtWrap: {flex: 0, paddingHorizontal: Spacing.width15},
});
