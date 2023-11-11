import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes';
import DefaultLayout from './components/layout/defaultLayout';
import './App.css';
import PageError from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        {
          PublicRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={(
                <DefaultLayout>
                  <route.component />
                </DefaultLayout>
              )}
            />
          ))
        }
        <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  );
}

export default App;
