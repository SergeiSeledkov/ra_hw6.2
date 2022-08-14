import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

export default function Header({ onUpdate }) {
   return (
      <div className="Header">
         <h1>Notes </h1>
         <button className="Header__update" type="button" onClick={onUpdate}>
            ↺
         </button>
      </div>
   );
}

Header.propTypes = {
   onUpdate: PropTypes.func.isRequired,
};
