import { Container, Form, FormGroup, Row, Col } from 'react-bootstrap';
import ButtonWidget from '../../uiKits/button/ButtonWidget';
import IconWidget from '../../uiKits/icon/IconWidget';
import { useNavigate, useParams } from 'react-router-dom';
import { CUSTOMERS } from '../../configs/constantUrl';
import useHttpRequest from '../../hooks/useHttpRequest';
import { useEffect } from 'react';
import {
  StyleImageInput,
  StyleBtnsContaiener,
  StyleImageLabel,
  StyleImageUploader,
  StyleIconContainer,
} from './style';
import { SINGLE_CUSTOMER, VERIFY_CUSTOMER } from '../../configs/constantApi';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '../../hooks/useToast';

import {
  approveCurrentPropery,
  setApproveCurrentPropery,
  setCurrentUser,
} from '../../redux/customers/customersSlice';

const CustomerDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { showError, showSuccess } = useToast();
  const { getRequest, postRequest } = useHttpRequest();
  const dispatch = useDispatch();
  const currentCustomer = useSelector(
    (state) => state.Customers.currentCustomer
  );
  useEffect(() => {
    getRequest(SINGLE_CUSTOMER, { id }).then((result) => {
      dispatch(setCurrentUser(result.data));
    });
  }, []);
  const handleClickBackBtn = () => {
    navigate(CUSTOMERS);
  };
  const handleClickSaveBtn = (e) => {
    e.preventDefault();
    let notApprovedProperies = [];
    Object.entries(currentCustomer).forEach((p) => {
      console.log(p);
      if (p[1].approved === false) notApprovedProperies.push(p[0]);
    });
    if (notApprovedProperies.length) {
      showError(`${notApprovedProperies.map((i) => i)} need to be approved`);
    } else {
      postRequest(VERIFY_CUSTOMER, null, { id }).then(() => {
        showSuccess('User Aproved successfully');
      });
    }
  };
  const handleClickApproved = (e) => {
    const id = e.target.id;
    dispatch(setApproveCurrentPropery({ id, approved: true }));
    console.log(id);
  };
  const handleClickDisApproved = (e) => {
    const id = e.target.id;
    dispatch(setApproveCurrentPropery({ id, approved: false }));
  };
  return (
    <Container>
      {currentCustomer.firstName.value && (
        <Form className='mt-3'>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column xs={3}>
              Name
            </Form.Label>
            <Col xs={6}>
              <p
                className={!currentCustomer.firstName.approved && 'text-danger'}
              >
                {currentCustomer.firstName.value}
              </p>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='firstName'
                  onClick={handleClickDisApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='firstName'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column xs={3}>
              Family Name
            </Form.Label>
            <Col xs={6}>
              <p
                className={!currentCustomer.lastName.approved && 'text-danger'}
              >
                {currentCustomer.lastName.value}
              </p>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='lastName'
                  onClick={handleClickDisApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='lastName'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column xs={3}>
              Mobile
            </Form.Label>
            <Col xs={6}>
              <p className={!currentCustomer.mobile.approved && 'text-danger'}>
                {currentCustomer.mobile.value}
              </p>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='mobile'
                  onClick={handleClickDisApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='mobile'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column xs={3}>
              ID No
            </Form.Label>
            <Col xs={6}>
              <p className={!currentCustomer.id.approved && 'text-danger'}>
                {currentCustomer.id.value}
              </p>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='id'
                  onClick={handleClickDisApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='id'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column xs={3}>
              Birth date
            </Form.Label>
            <Col xs={6}>
              <p
                className={!currentCustomer.birthDate.approved && 'text-danger'}
              >
                {currentCustomer.birthDate.value}
              </p>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='birthDate'
                  onClick={handleClickDisApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='birthDate'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column xs={3}>
              Address
            </Form.Label>
            <Col xs={6}>
              <p className={!currentCustomer.address.approved && 'text-danger'}>
                {currentCustomer.address.value}
              </p>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='address'
                  onClick={handleClickDisApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='address'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-5 mt-4'>
            <Form.Label column xs={3}>
              Profile Pic
            </Form.Label>
            <Col xs={6}>
              <StyleImageUploader>
                <StyleImageLabel
                  style={{
                    backgroundImage: `url(${require(`../../assets/images/profile/${currentCustomer.profilePic.value}.png`)})`,
                  }}
                />
              </StyleImageUploader>
            </Col>
            <Col xs={3}>
              <StyleIconContainer>
                <IconWidget
                  id='profilePic'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/cancelIcon.png')}
                />
                <IconWidget
                  id='profilePic'
                  onClick={handleClickApproved}
                  src={require('../../assets/images/icons/checkMarkIcon.png')}
                />
              </StyleIconContainer>
            </Col>
          </Form.Group>
          <StyleBtnsContaiener>
            <ButtonWidget onClick={handleClickSaveBtn}>save</ButtonWidget>
            <ButtonWidget
              onClick={handleClickBackBtn}
              backgroundColor='#FF5050'
            >
              back
            </ButtonWidget>
          </StyleBtnsContaiener>
        </Form>
      )}
    </Container>
  );
};
export default CustomerDetail;
