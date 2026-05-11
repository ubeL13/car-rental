import { Home } from '@pages/home';
import { Location } from '@pages/location';
import { Model } from '@pages/model';
import { NotFound } from '@pages/not-found';
import { Order } from '@pages/order';
import { Total } from '@pages/total';
import { Route, Routes } from 'react-router-dom';

export function CommonRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/model" element={<Model />} />
      <Route path="/order" element={<Order />} />
      <Route path="/total" element={<Total />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
