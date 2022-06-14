import ButtonWidget from '../button/ButtonWidget';
import IconWidget from '../icon/IconWidget';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyleCard,
  StyleCardContainer,
  StyleCardDetail,
  StyleCardDetailOption,
  StyleCardDetailRow,
  StyleCardDetailValue,
  StyleCardImg,
  StyleCardOptions,
} from './style';
import { CUSTOMERS } from '../../configs/constantUrl';

const Card = ({
  imgSrc,
  firstName,
  lastName,
  birthDate,
  id,
  verified,
  handlePinUser,
  handleUnPinUser,
  pinned,
}) => {
  const navigate = useNavigate();

  const handleChangeCheckBox = (e) => {
    pinned ? handleUnPinUser(id) : handlePinUser(id);
  };
  const handleClickCheck = (id) => {
    navigate(CUSTOMERS + `/${id}`);
  };
  const handleClickEdit = (id) => {
    navigate(CUSTOMERS + `/edit/${id}`);
  };

  return (
    <StyleCard>
      <StyleCardContainer>
        <StyleCardImg
          src={require(`../../assets/images/profile/${imgSrc}.png`)}
        />
        <StyleCardDetail>
          <StyleCardDetailRow>
            <StyleCardDetailOption>name:</StyleCardDetailOption>
            <StyleCardDetailValue>{firstName}</StyleCardDetailValue>
          </StyleCardDetailRow>
          <StyleCardDetailRow>
            <StyleCardDetailOption>last name:</StyleCardDetailOption>
            <StyleCardDetailValue>{lastName}</StyleCardDetailValue>
          </StyleCardDetailRow>
          <StyleCardDetailRow>
            <StyleCardDetailOption>birth date:</StyleCardDetailOption>
            <StyleCardDetailValue>{birthDate}</StyleCardDetailValue>
          </StyleCardDetailRow>
          <StyleCardDetailRow>
            <StyleCardDetailOption>id no:</StyleCardDetailOption>
            <StyleCardDetailValue>{id}</StyleCardDetailValue>
          </StyleCardDetailRow>
          <StyleCardDetailRow>
            {verified ? (
              <IconWidget
                src={require('../../assets/images/icons/verified_true.png')}
              />
            ) : (
              <IconWidget
                src={require('../../assets/images/icons/verified_false.png')}
              />
            )}
            {!verified && (
              <ButtonWidget onClick={() => handleClickCheck(id)}>
                Check
              </ButtonWidget>
            )}
          </StyleCardDetailRow>
        </StyleCardDetail>
        <StyleCardOptions>
          <IconWidget
            style={{ height: 13 }}
            onClick={() => handleClickEdit(id)}
            src={require('../../assets/images/icons/editIcon.png')}
          />
          <input
            type='checkbox'
            name='pinUser'
            checked={pinned}
            onChange={handleChangeCheckBox}
          />
        </StyleCardOptions>
      </StyleCardContainer>
    </StyleCard>
  );
};
export default Card;
