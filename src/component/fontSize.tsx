import {RFPercentage} from 'react-native-responsive-fontsize';
import {DEVICE} from '../constants/Constant';
function calculateFontsize(current: number, max: number) {
  return current <= max ? current : max;
}
const BASE_FONT_SIZE = 2;
function ReduceTextFor18_9(number: number) {
  return Math.ceil((DEVICE.width / DEVICE.height) * 100) === 52
    ? number - 0.5
    : number;
}

export const FontSize = {
  Font9: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(-0.25)),
        9,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(-0.25)),
        10,
      ),
  Font10: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(-0.25)),
        10,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0)),
        11,
      ),
  Font11: DEVICE.isAndroid
    ? calculateFontsize(RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0)), 11)
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        12,
      ),
  Font12: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        12,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        13,
      ),
  Font13: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        13,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        14,
      ),
  Font14: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        14,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        15,
      ),
  Font15: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        15,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.6)),
        16,
      ),
  Font16: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.6)),
        16,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.75)),
        17,
      ),
  Font17: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.75)),
    17,
  ),
  Font18: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.8)),
    18,
  ),
  Font19: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1)),
    19,
  ),
  Font20: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1.25)),
    20,
  ),
  Font21: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1.5)),
    21,
  ),
  Font24: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1.75)),
    24,
  ),
  Font25: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2)),
    25,
  ),
  Font27: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2.5)),
    27,
  ),
  Font28: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2.6)),
    28,
  ),
  Font30: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2.7)),
    30,
  ),
  Font32: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(3)),
    32,
  ),
  Font35: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(3.5)),
    35,
  ),
  Font40: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(4)),
    40,
  ),
  Font45: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(4.5)),
    45,
  ),
};
