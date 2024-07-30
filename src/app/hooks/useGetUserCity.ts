import { useEffect } from 'react';
import { userActions, userApi } from '../../entities/User';
import { useAppDispatch } from '../../shared/hooks/reduxHooks';
import { translate } from '../../shared/helpers/translator';

export function useGetUserCity() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getUserCity() {
      const result = await userApi.getUserCity(); // don't work with credendial= true

      const resultUA = await translate(
        result.city,
        import.meta.env.VITE_OPENAI_KEY
      );
      const city = resultUA.choices[0].message.content || 'Oбрати місто';

      dispatch(userActions.setUserLocation(city));
    }

    getUserCity();
  }, []);
}
