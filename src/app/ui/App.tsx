import { Header } from '../../widgets/Header';
import './App.scss';

import { Outlet } from 'react-router-dom';
import { Footer } from '../../widgets/Footer';
import { useGetUserCity } from '../hooks/useGetUserCity';

function App() {
  useGetUserCity();

  return (
    <div className="App">
      <Header />

      <main className="App__main container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
