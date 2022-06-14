import * as yup from 'yup';

export const createCustomerModel = yup.object({
  id: yup.string().required(),
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(3),
  mobile: yup.string().required(),
  birthDate: yup.string().required(),
  address: yup.string().required(),
});
