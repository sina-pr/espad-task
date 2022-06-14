import {
  CUSTOMERS,
  CUSTOMER_DETAIL,
  EDIT_CUSTOMER,
  NEW_CUSTOMER,
} from '../configs/constantUrl';
import Customers from '../pages/customers/index';
import NewCustomer from '../pages/customers/NewCustomer';
import CustomerDetail from '../pages/customers/CustomerDetail';
import EditCustomer from '../pages/customers/EditCustomer';
const routes = [
  {
    path: CUSTOMERS,
    component: Customers,
  },
  {
    path: NEW_CUSTOMER,
    component: NewCustomer,
  },
  {
    path: CUSTOMER_DETAIL,
    component: CustomerDetail,
  },
  {
    path: EDIT_CUSTOMER,
    component: EditCustomer,
  },
];
export default routes;
