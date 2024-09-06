import { Outlet } from 'react-router-dom';
import './App.scss';

// import { useGetUserCity } from '../hooks/useGetUserCity';

import { Header } from 'src/widgets/Header';
import { Footer } from 'src/widgets/Footer';
import { SideBar } from 'src/widgets/SideBar';

import { useAppSelector } from 'src/shared/lib/hooks/reduxHooks';

import { useCheckAuth } from '../hooks/useCheckAuth';

function App() {
  const { showSidebar } = useAppSelector((state) => state.sidebar);

  useCheckAuth();

  // useGetUserCity(); NOT IMPLEMENTED!!!

  return (
    <div className="App">
      {showSidebar && <SideBar />}

      <Header />

      <main className="App__main container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
