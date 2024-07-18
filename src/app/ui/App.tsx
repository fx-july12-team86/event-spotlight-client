import { useEffect } from 'react';
import { Header } from '../../widgets/Header';
import './App.scss';
import { userApi } from '../../entities/User';
import { useAppDispatch } from '../../shared/hooks/reduxHooks';
import { userActions } from '../../entities/User';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  // винести с сомпонента
  useEffect(() => {
    async function getUserSity() {
      return userApi.getUserCity(); // don't work with credendial= true
    }

    const result = getUserSity();

    result
      .then((data) => {
        const city = data.stateProv.split(' ')[0] || '';
        dispatch(userActions.setUserLocation(city));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />

      <main className="App__main container">
        <Outlet />
      </main>

      <footer className="App__footer">footer</footer>
    </div>
  );
}

export default App;
