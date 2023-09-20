import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import DashboardAppPage from './pages/DashboardAppPage';
import UserPage from './pages/UserPage';
import ProductsPage from './pages/ProductsPage';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
          {/* <Routes>
            <Route
              path="/dashboard"
              element={<DashboardLayout />}
              children={[
                { element: <Navigate to="/dashboard/app" />, index: true },
                { path: 'app', element: <DashboardAppPage /> },
                { path: 'user', element: <UserPage /> },
              ]}
            />
          </Routes> */}
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
