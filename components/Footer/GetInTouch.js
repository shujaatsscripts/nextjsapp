import {
  Heading,
  StyledTextArea,
  ButtonWrapper,
} from './styles/getintouch.styles';
import CustomBtn from '../Common/Button';
import { FooterInput } from '../Common/Input/FooterInput';
import React, { useState } from 'react';
import { message as toast } from 'antd';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setMessage('');
    toast.success('Request Submitted! We will get back to you shortly!');
  };
  return (
    <>
      <Heading>Get in touch with us</Heading>
      <form onSubmit={onSubmit}>
        <FooterInput
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextArea
          placeholder="Message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></StyledTextArea>
        <ButtonWrapper>
          <CustomBtn htmlType="submit" btnType="footerBtn">
            Submit
          </CustomBtn>
        </ButtonWrapper>
      </form>
    </>
  );
};

export default GetInTouch;
