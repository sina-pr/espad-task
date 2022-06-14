import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './list';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
