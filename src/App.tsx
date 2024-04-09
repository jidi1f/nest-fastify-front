import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Paths } from './constants/paths';
import { Dashboard } from './view/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.dashboard} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
