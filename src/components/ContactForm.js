import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    display: inline-block;
    cursor: pointer;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "var(--black)")};
  }
  .button:hover {
    color: var(--red);
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <FormStyle>
      <form action='mailto:indmillr@gmail.com'>
        <div clasName='form-group'>
          <label htmlFor='name'>
            Your Name:
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div clasName='form-group'>
          <label htmlFor='email'>
            Your Email:
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div clasName='form-group'>
          <label htmlFor='message'>
            Your Message:
            <textarea
              type='text'
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <input type='submit' value='Send' className='button' />
      </form>
    </FormStyle>
  );
}
