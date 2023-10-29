import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import SideBar from './Components/Layout/SideBar';
import theme from './Components/Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideBar />
        <header>
          <Routes>
            <Route>
            </Route>
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
