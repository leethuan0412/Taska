import i18next from '../language/index';
const Strings = () => {
  return {
    hello: i18next.t('hello', {defaultValue: ''}),
    language: i18next.t('language', {defaultValue: ''}),
    cancel: i18next.t('cancel', { defaultValue: '' }),
    confirm: i18next.t('confirm', { defaultValue: '' }),
    notification: i18next.t('notification', { defaultValue: '' }),
  };
};
export default Strings;
