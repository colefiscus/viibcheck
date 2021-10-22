import React, { useState } from 'react';
import { send } from 'emailjs-com';
import styled from 'styled-components';

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    subject: '',
    from_name: '',
    message: '',
    reply_to: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_8r1wilv',
      'template_plsfqif',
      toSend,
      'user_kSU4A4CIGbdNQtHJZBCs5'
    )
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed...', err)
      })
    clearInputs();
  }

  const clearInputs = () => {
    setToSend({
      subject: '',
      from_name: '',
      message: '',
      reply_to: ''
    })
  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Label>Your Name*</Label>
        <Input 
          autoFocus
          required
          type="text"
          name="from_name"
          placeholder="Julia Child"
          value={toSend.from_name}
          onChange={handleChange} 
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="subject-select">Subject*</Label>
        <Select 
          required
          id="subject-select" 
          name="subject" 
          value={toSend.subject} 
          onChange={handleChange}
        >
          <option value="General Note">General Note</option>
          <option value="Idea">Idea</option>
          <option value="Question">Question/Help</option>
          <option value="Bug">Bug</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Friendly Hello">Friendly Hello</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>Your Message*</Label>
        <EmailArea
          required
          rows="7"
          cols="30"
          name="message"
          placeholder="People who love to eat are always the best people."
          value={toSend.message}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Your Email*</Label>
        <Input
          required
          type="email"
          name="reply_to"
          placeholder="thejoyofcooking@yahoo.com"
          value={toSend.reply_to}
          onChange={handleChange} 
        />
      </InputWrapper>
      <button type="submit">Submit</button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Rokkitt';
  margin: 10px 0px;
`;


const Label = styled.label`
  font-family: 'Josefin Slab';
  font-size: ${18/14}rem;
  font-style: italic;
  width: 300px;
  margin-right: 8px;
  flex: 1;
  text-align: right;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;

const Input = styled.input`
  margin: 8px 0px;
  flex: 3;
  font-size: ${18/14}rem;
  font-family: inherit;
  font-weight: 700;
  color: hsl(0, 0%, 0%);
  border-radius: 8px;
  padding: 12px 16px;
  border: none;

  &:focus {
    outline: 1px dotted #212121;
  }

  &::placeholder {
    font-weight: 200;
    color: hsl(0, 0%, 60%);
  }
`;

const Select = styled.select`
  margin: 8px 0px;
  flex: 3;
  font-size: ${18/14}rem;
  font-family: inherit;
  font-weight: 700;
  color: hsl(0, 0%, 0%);
  border-radius: 8px;
  padding: 12px 16px;
  border: none;

  &:focus {
    outline: 1px dotted #212121;
  }
`;

const EmailArea = styled.textarea`
  margin: 8px 0px;
  flex: 3;
  font-size: ${18/14}rem;
  font-family: inherit;
  font-weight: 700;
  color: hsl(0, 0%, 0%);
  resize: none;
  overflow: auto;
  border-radius: 8px;
  padding: 12px 16px;
  border: none;

  &:focus {
    outline: 1px dotted #212121;
  }

  &::placeholder {
    font-weight: 200;
    color: hsl(0, 0%, 60%);
  }
`;

export default ContactMe;