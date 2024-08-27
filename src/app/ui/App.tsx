import { Header } from '../../widgets/Header';
import './App.scss';

import { Outlet } from 'react-router-dom';
import { Footer } from '../../widgets/Footer';
import { useGetUserCity } from '../hooks/useGetUserCity';
import { SideBar } from '../../widgets/SideBar';
import { useState } from 'react';

function App() {
  let [showSidebar, setShowSidebar] = useState(false);
  useGetUserCity();

  return (
    <div className="App">
      {showSidebar && <SideBar onClose={setShowSidebar} open={showSidebar} />}

      <Header openSidebar={() => setShowSidebar(true)} />

      <main className="App__main container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
