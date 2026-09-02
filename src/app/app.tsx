import { Navigate, Route, Routes } from 'react-router-dom';

import { Additionally } from '@pages/additionally';
import './app.css';
import { Home } from '@pages/home';
import { Location } from '@pages/location';
import { Model } from '@pages/model';
import { NotFound } from '@pages/not-found';
import { Order } from '@pages/order';
import { Total } from '@pages/total';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/order" element={<Order />}>
        <Route index element={<Navigate to="location" replace />} />
        <Route path="location" element={<Location />} />
        <Route path="model" element={<Model />} />
        <Route path="additionally" element={<Additionally />} />
        <Route path="total" element={<Total />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
