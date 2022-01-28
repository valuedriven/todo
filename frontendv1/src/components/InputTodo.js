import React, { useState } from 'react';

export default function InputTodos() {
  const [description, setDescription] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Todo list</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
}
