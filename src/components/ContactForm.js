import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { init } from "@emailjs/browser";
import emailjs from "emailjs-com";
init("iC7Fva3covAMd6Kef");

const FormStyle = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  #form-input-control-email,
  #form-input-control-last-name,
  #form-textarea-control-opinion {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--highlight);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  #form-textarea-control-opinion {
    min-height: 250px;
    resize: vertical;
  }
  button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    display: inline-block;
    margin-top: 1rem;
    cursor: pointer;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "var(--black)")};
  }
  button:hover {
    color: var(--red);
  }
`;

export default function ContactForm() {
  const SERVICE_ID = "service_56uvt0m";
  const TEMPLATE_ID = "template_8g5rs3r";
  const USER_ID = "iC7Fva3covAMd6Kef";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops! Something went wrong.",
          text: error.text,
        });
      },
    );
    e.target.reset();
  };

  return (
    <FormStyle>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='reply_to'
          placeholder='(your email)'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='from_name'
          placeholder='(your name)'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='(your message)'
          required
        />

        <button type='submit' value='Send' className='button'>
          Send
        </button>
      </Form>
    </FormStyle>
  );
}
