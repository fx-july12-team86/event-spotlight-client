import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import './App.scss';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { SideBar } from '../../widgets/SideBar';
import { LoginForm } from '../../features/Login';
import { MyDialog } from '../../shared/ui';
// import { useGetUserCity } from '../hooks/useGetUserCity';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks';
import { dialogAction } from '../../shared/ui/MyDialog';
import localStorageServise from '../../shared/servises/localStorage.servise';
import { ACCESS_TOKEN } from '../../shared/consts/common';
import { userActions } from '../../entities/User';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { showDialog } = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();

  // useGetUserCity();

  useEffect(() => {
    const token = localStorageServise.get(ACCESS_TOKEN) as string;

    if (token) {
      const decoded = jwtDecode(token);
      dispatch(userActions.setUser({ token, email: decoded.sub || '' }));
    }
  }, []);

  useCallback(setShowSidebar, []);

  return (
    <div className="App">
      {showSidebar && <SideBar onClose={setShowSidebar} isOpen={showSidebar} />}

      <Header openSidebar={() => setShowSidebar(true)} />

      <main className="App__main container">
        <Outlet />
      </main>

      <Footer />

      {showDialog && (
        <MyDialog
          onClose={() => {
            dispatch(dialogAction.setShowDialog(false));
          }}
        >
          <LoginForm />
        </MyDialog>
      )}
    </div>
  );
}

export default App;
