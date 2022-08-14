/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

export default function Form({ onAdd }) {
   const [content, setForm] = useState('');

   const onFieldChange = (e) => {
      const { target } = e;
      setForm(target.value);
   };

   const onAddNotes = (e) => {
      e.preventDefault();
      if (!content) return;
      onAdd(content);
      setForm('');
   };

   return (
      <form className="Notes-form">
         <div className="Notes-Field">
            <label htmlFor="name" className="label">
               New Note
            </label>
            <textarea
               className="Notes-Control"
               id="name"
               name="name"
               value={content}
               onChange={onFieldChange}
            />
         </div>

         <button
            className="Form-button Form-Submit"
            type="submit"
            onClick={onAddNotes}
         >
            ➤
         </button>
      </form>
   );
}

Form.propTypes = {
   onAdd: PropTypes.func.isRequired,
};
