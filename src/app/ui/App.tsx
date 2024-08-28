import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.scss';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { SideBar } from '../../widgets/SideBar';
import { useGetUserCity } from '../hooks/useGetUserCity';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
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
    </div>
  );
}

export default App;
