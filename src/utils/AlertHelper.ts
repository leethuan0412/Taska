import { R } from '@src/assets/R'
import { Alert } from 'react-native'

export const showConfirm = (
  title: string,
  content: string,
  action?: () => void,
  textCancel?: string,
  textConfirm?: string
) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: textCancel || R.strings().cancel,
        style: 'cancel',
      },
      {
        text: textConfirm || R.strings().confirm,
        onPress: action,
      },
    ],
    { cancelable: false }
  )
  // if (Platform.OS === 'ios') {
  //   Alert.alert(
  //     title,
  //     content,
  //     [
  //       {
  //         text: textCancel || R.strings().cancel,
  //         style: 'cancel',
  //       },
  //       {
  //         text: textConfirm || R.strings().confirm,
  //         onPress: action,
  //       },
  //     ],
  //     { cancelable: false }
  //   )
  // } else if (Platform.OS === 'android') {
  //   RNAlert.show({
  //     title: title,
  //     content: content,
  //     onConfirm: action,
  //     type: 'standard',
  //     confirmTitle: textConfirm || R.strings().confirm,
  //     cancelTitle: textCancel || R.strings().cancel,
  //   })
  // }
}

export const showMessages = (
  title: string,
  content: string,
  action?: () => void
) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: 'OK',
        onPress: action,
      },
    ],
    { cancelable: false }
  )
  // if (Platform.OS === 'ios') {
  //   setTimeout(() => {
  //     Alert.alert(
  //       title,
  //       content,
  //       [
  //         {
  //           text: 'OK',
  //           onPress: action,
  //         },
  //       ],
  //       { cancelable: false }
  //     )
  //   }, 100)
  // } else if (Platform.OS === 'android') {
  //   setTimeout(() => {
  //     RNAlert.show({
  //       title: title,
  //       confirmTitle: R.strings().confirm,
  //       content: content,
  //       onConfirm: action,
  //       type: 'minify',
  //     })
  //   }, 100)
  // }
}
