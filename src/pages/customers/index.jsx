import useHttpRequest from '../../hooks/useHttpRequest';
import { useEffect, useState } from 'react';
import { CUSTOMERS_LIST } from '../../configs/constantApi';
import Card from '../../uiKits/card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import FabWidget from '../../uiKits/float_button/FabWidget';
import Searchbar from '../../uiKits/searchbar/Searchbar';
import { ToolsContainer } from './style';
import IconWidget from '../../uiKits/icon/IconWidget';
import { useHistory, useNavigate } from 'react-router-dom';
import { NEW_CUSTOMER } from '../../configs/constantUrl';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeSelectedUser,
  setAllCustomers,
  setAllSectedUser,
  setSelectedUser,
  removeAllSelectedUser,
} from '../../redux/customers/customersSlice';

const Customers = () => {
  // hooks
  const { getRequest } = useHttpRequest();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAllSelected, setIsAllSelected] = useState(false);

  const CustomresStore = useSelector((state) => state.Customers);
  useEffect(() => {
    getRequest(CUSTOMERS_LIST).then((result) => {
      dispatch(
        setAllCustomers({
          data: result.data,
          loading: false,
        })
      );
      console.log(result);
    });
  }, []);
  // functions
  const handleClickAddIcon = () => {
    navigate(NEW_CUSTOMER);
  };

  const handlePinUser = (userId) => {
    dispatch(setSelectedUser(userId));
  };
  const handleUnPinUser = (userId) => {
    dispatch(removeSelectedUser(userId));
  };
  const handleChangeRadioBtn = (e) => {
    const currentValue = e.target.checked;
    console.log(currentValue);
    currentValue
      ? dispatch(setAllSectedUser())
      : dispatch(removeAllSelectedUser());
    setIsAllSelected(!isAllSelected);
  };
  return (
    <Container>
      <Searchbar placeholder='Search customer...' />
      <ToolsContainer className='py-1'>
        <input
          type='checkbox'
          value={isAllSelected}
          checked={isAllSelected}
          onChange={handleChangeRadioBtn}
        />
        <IconWidget
          src={require('../../assets/images/icons/TrashCanIcon.png')}
        />
      </ToolsContainer>
      <Row>
        {CustomresStore.pinnedCustomers.length > 0 &&
          CustomresStore.pinnedCustomers.map((customer) => (
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card
                id={customer.id}
                firstName={customer.firstName}
                lastName={customer.lastName}
                imgSrc={customer.profilePic}
                birthDate={customer.birthDate}
                verified={customer.verified}
                handlePinUser={handlePinUser}
                handleUnPinUser={handleUnPinUser}
                pinned={true}
              />
            </Col>
          ))}
        {CustomresStore.customersList.data.length > 0 &&
          CustomresStore.customersList.data.map((customer) => (
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card
                id={customer.id}
                firstName={customer.firstName}
                lastName={customer.lastName}
                imgSrc={customer.profilePic}
                birthDate={customer.birthDate}
                verified={customer.verified}
                handlePinUser={handlePinUser}
                handleUnPinUser={handleUnPinUser}
                pinned={false}
              />
            </Col>
          ))}
      </Row>
      <FabWidget onClick={handleClickAddIcon} />
    </Container>
  );
};
export default Customers;
