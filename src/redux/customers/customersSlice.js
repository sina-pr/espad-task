import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  currentCustomer: {
    id: {
      value: '',
      approved: false,
    },
    firstName: {
      value: '',
      approved: false,
    },
    lastName: {
      value: '',
      approved: false,
    },
    mobile: {
      value: '',
      approved: false,
    },
    birthDate: {
      value: '',
      approved: false,
    },
    address: {
      value: '',
      approved: false,
    },
    profilePic: {
      value: '',
      approved: false,
    },
    verified: false,
  },
  pinnedCustomers: [],
  customersList: {
    data: [],
    loading: true,
  },
  filteredCustomerList: [],
};

export const customersSlice = createSlice({
  name: 'Customers',
  initialState,
  reducers: {
    setAllCustomers: (state, action) => {
      const { data, loading } = action.payload;
      state.customersList.loading = loading;
      state.customersList.data = data;
    },
    setSelectedUser: (state, action) => {
      const selectedUserId = action.payload;
      const allCustomers = state.customersList.data;
      const customerIndex = allCustomers.findIndex(
        (customer) => customer.id === selectedUserId
      );
      state.pinnedCustomers.push(allCustomers[customerIndex]);
      allCustomers.splice(customerIndex, 1);
      state.customersList.data = allCustomers;
    },
    removeSelectedUser: (state, action) => {
      const userId = action.payload;
      const allSelectedCustomers = state.pinnedCustomers;
      const customerIndex = allSelectedCustomers.findIndex(
        (customer) => customer.id === userId
      );
      state.customersList.data.unshift(allSelectedCustomers[customerIndex]);
      allSelectedCustomers.splice(customerIndex, 1);
      state.pinnedCustomers = allSelectedCustomers;
    },
    setAllSectedUser: (state, action) => {
      const selectedUsers = state.pinnedCustomers;
      const allUnSelectedUsers = state.customersList.data;
      state.customersList.data = [];
      state.pinnedCustomers = [...selectedUsers, ...allUnSelectedUsers];
    },
    removeAllSelectedUser: (state, action) => {
      const unSelectedUsers = state.customersList.data;
      const selectedUsers = state.pinnedCustomers;
      state.pinnedCustomers = [];
      state.customersList.data = [...unSelectedUsers, ...selectedUsers];
    },
    setCurrentUser: (state, action) => {
      const {
        id,
        firstName,
        lastName,
        birthDate,
        address,
        profilePic,
        mobile,
      } = action.payload;
      console.log(id, firstName, lastName);
      state.currentCustomer = {
        id: {
          value: id,
          approved: false,
        },
        firstName: {
          value: firstName,
          approved: false,
        },
        lastName: {
          value: lastName,
          approved: false,
        },
        mobile: {
          value: mobile,
          approved: false,
        },
        birthDate: {
          value: birthDate,
          approved: false,
        },
        address: {
          value: address,
          approved: false,
        },
        profilePic: {
          value: profilePic,
          approved: false,
        },
      };
    },
    setApproveCurrentPropery: (state, action) => {
      const { id, approved } = action.payload;
      console.log(id);
      console.log(current(state.currentCustomer['firstName']));
      state.currentCustomer[id].approved = approved;
    },
    getCustomersWithFilter: (state, action) => {
      const searchResults = [];
      const { searchVal } = action.payload;
      const allCustomers = state.customersList.data;
      const searchValArr = searchVal.toLowerCase().split('');

      allCustomers.forEach((i) => {
        let firstNameArr = i.firstName.toLowerCase().split('');
        let lastNameArr = i.lastName.toLowerCase().split('');
        console.log(firstNameArr, lastNameArr, searchValArr);
        searchValArr.every((ch, index) => {
          if (firstNameArr[index] === ch || lastNameArr[index] === ch) {
            searchResults.push(i);
            return false;
          }
        });
      });
      state.filteredCustomerList = searchResults;
    },
  },
});

export const {
  setSelectedUser,
  removeSelectedUser,
  setAllSectedUser,
  removeAllSelectedUser,
  setAllCustomers,
  setCurrentUser,
  setApproveCurrentPropery,
  getCustomersWithFilter,
} = customersSlice.actions;

export default customersSlice.reducer;
