import React from 'react';
import './List.css';
import PropTypes from 'prop-types';
import ListItem from './List_item/ListItem';

export default function List({ notes, onDelete }) {
   return (
      <div className="Notes-List">
         {notes.map((note) => (
            <ListItem
               content={note.content}
               onDelete={() => onDelete(note.id)}
               id={note.id}
               key={note.id}
            />
         ))}
      </div>
   );
}

List.defaultProps = {
   notes: [],
};

List.propTypes = {
   notes: PropTypes.arrayOf(PropTypes.object),
   onDelete: PropTypes.func.isRequired,
};
