import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add name:
        <input 
        type='text' 
        name='name' 
        value={name}
        onChange={({target}) => setName(target.value)}
        required
        placeholder='Contact Name'/>
      </label>
      <label>
        Add phone:
        <input 
        type='tel' 
        name='phone' 
        value={phone}
        onChange={({target}) => setPhone(target.value)}
        required
        placeholder='Contact phone number'
      />
      </label>
      <label>
        Add email:
        <input 
        type='email' 
        name='email' 
        value={email}
        onChange={({target}) => setEmail(target.value)}
        required
        placeholder='Contact email'/>
      </label>
      <input type='submit' value='Add contact' />
    </form>
  );
};
