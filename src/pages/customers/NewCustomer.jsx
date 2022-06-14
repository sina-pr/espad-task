import { Container, Form, FormGroup, Row, Col } from 'react-bootstrap';
import ButtonWidget from '../../uiKits/button/ButtonWidget';
import IconWidget from '../../uiKits/icon/IconWidget';
import { useNavigate } from 'react-router-dom';
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
import { NEW_CUSTOMER } from '../../configs/constantApi';
import { useToast } from '../../hooks/useToast';
import { useState } from 'react';

const NewCustomer = () => {
  const navigate = useNavigate();
  const { postRequest } = useHttpRequest();
  const [selectedImage, setSelectedImage] = useState(null);
  const { showSuccess } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(createCustomerModel),
  });
  const handleChangeFile = (e) => {
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };
  const handleClickBackBtn = () => {
    navigate(CUSTOMERS);
  };
  console.log(errors.mobile);

  const onSubmit = (data) => {
    postRequest(NEW_CUSTOMER, null, { userData: data }).then((result) => {
      showSuccess('New user added successfully');
    });
  };
  console.log(selectedImage && URL.createObjectURL(selectedImage));
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
                  backgroundImage: `url(${
                    selectedImage && URL.createObjectURL(selectedImage)
                  })`,
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

export default NewCustomer;
