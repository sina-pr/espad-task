import { Container, Form, FormGroup, Row, Col } from 'react-bootstrap';
import ButtonWidget from '../../uiKits/button/ButtonWidget';
import IconWidget from '../../uiKits/icon/IconWidget';
import { useNavigate, useParams } from 'react-router-dom';
import {
  StyleImageInput,
  StyleBtnsContaiener,
  StyleImageLabel,
  StyleImageUploader,
} from './style';
import { CUSTOMERS } from '../../configs/constantUrl';
import { Controller, useForm } from 'react-hook-form';
import { createCustomerModel } from '../../models/customersModel';
import { yupResolver } from '@hookform/resolvers/yup';
import useHttpRequest from '../../hooks/useHttpRequest';
import {
  NEW_CUSTOMER,
  SINGLE_CUSTOMER,
  UPDATE_CUSTOMER,
} from '../../configs/constantApi';
import { useToast } from '../../hooks/useToast';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/customers/customersSlice';

const EditCustomer = () => {
  const navigate = useNavigate();
  const { getRequest, postRequest, updateRequest } = useHttpRequest();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const { showSuccess } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(createCustomerModel),
  });
  useEffect(() => {
    getRequest(SINGLE_CUSTOMER, { id }).then((result) => {
      const userData = result.data;
      dispatch(setCurrentUser(userData));
      Object.entries(userData).forEach(([name, value]) => {
        if (name === 'profilePic') {
          setSelectedImage(value);
        }
        setValue(name, value);
      });
    });
  }, []);

  const handleChangeFile = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleClickBackBtn = () => {
    navigate(CUSTOMERS);
  };

  const onSubmit = (data) => {
    postRequest(UPDATE_CUSTOMER, null, { userData: data, id }).then(() => {
      showSuccess('User updated successfully');
    });
  };
  return (
    <Container>
      <Form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column xs={3}>
            Name
          </Form.Label>
          <Col xs={9}>
            <Controller
              control={control}
              name='firstName'
              defaultValue=''
              render={({ field }) => (
                <Form.Control isInvalid={errors.firstName} {...field} />
              )}
            />
            <Form.Text className='text-danger'>
              {errors.firstName && errors.firstName.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column xs={3}>
            Family Name
          </Form.Label>
          <Col xs={9}>
            <Controller
              control={control}
              name='lastName'
              defaultValue=''
              render={({ field }) => (
                <Form.Control isInvalid={errors.lastName} {...field} />
              )}
            />
            <Form.Text className='text-danger'>
              {errors.lastName && errors.lastName.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column xs={3}>
            Mobile
          </Form.Label>
          <Col xs={9}>
            <Controller
              control={control}
              name='mobile'
              defaultValue=''
              render={({ field }) => (
                <Form.Control isInvalid={errors.mobile} {...field} />
              )}
            />
            <Form.Text className='text-danger'>
              {errors.mobile && errors.mobile.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column xs={3}>
            ID No
          </Form.Label>
          <Col xs={9}>
            <Controller
              control={control}
              name='id'
              defaultValue=''
              render={({ field }) => (
                <Form.Control isInvalid={errors.id} {...field} />
              )}
            />
            <Form.Text className='text-danger'>
              {errors.id && errors.id.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column xs={3}>
            Birth date
          </Form.Label>
          <Col xs={9}>
            <Controller
              control={control}
              name='birthDate'
              defaultValue=''
              render={({ field }) => (
                <Form.Control isInvalid={errors.birthDate} {...field} />
              )}
            />
            <Form.Text className='text-danger'>
              {errors.birthDate && errors.birthDate.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column xs={3}>
            Address
          </Form.Label>
          <Col xs={9}>
            <Controller
              control={control}
              name='address'
              defaultValue=''
              render={({ field }) => (
                <Form.Control isInvalid={errors.address} {...field} />
              )}
            />
            <Form.Text className='text-danger'>
              {errors.address && errors.address.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-5 mt-4'>
          <Form.Label column xs={3}>
            Profile Pic
          </Form.Label>

          <Col xs={9}>
            <StyleImageUploader>
              <StyleImageLabel
                htmlFor='file-input'
                hasImage={!!selectedImage}
                style={{
                  cursor: 'pointer',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${require(`../../assets/images/profile/${'pic1'}.png`)})`,
                }}
              >
                {!selectedImage && (
                  <IconWidget
                    src={require('../../assets/images/icons/cameraIcon.png')}
                  />
                )}
              </StyleImageLabel>
              <StyleImageInput
                id='file-input'
                type='file'
                onChange={handleChangeFile}
              />
            </StyleImageUploader>
          </Col>
        </Form.Group>
        <StyleBtnsContaiener>
          <ButtonWidget type='submit'>save</ButtonWidget>
          <ButtonWidget onClick={handleClickBackBtn} backgroundColor='#FF5050'>
            back
          </ButtonWidget>
        </StyleBtnsContaiener>
      </Form>
    </Container>
  );
};

export default EditCustomer;
