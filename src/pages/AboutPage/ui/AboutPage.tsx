import { createReduxStore } from 'app/providers/StoreProvider';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');
  const store = createReduxStore();
  console.log('store: ', store.getState());
  return (
    <div>{t('О сайте')}</div>
  );
};

export default AboutPage;
