import { createReduxStore } from 'app/providers/StoreProvider';
import { profileReducer } from 'entitites/Profile';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();
  const store = createReduxStore();
  console.log('store: ', store.getState());

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div>{t('Profile Page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
