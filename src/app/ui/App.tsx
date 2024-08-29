import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.scss';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { SideBar } from '../../widgets/SideBar';
import { LoginForm } from '../../features/Login';
import { MyDialog } from '../../shared/ui';
import { useGetUserCity } from '../hooks/useGetUserCity';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks';
import { dialogAction } from '../../shared/ui/MyDialog';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { showDialog } = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();

  useGetUserCity();

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
