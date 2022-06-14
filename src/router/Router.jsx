import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './list';
import { CUSTOMERS } from '../configs/constantUrl';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={CUSTOMERS} />} />
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
