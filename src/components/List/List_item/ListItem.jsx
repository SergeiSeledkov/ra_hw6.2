import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
   constructor(props) {
      super(props);
      this.content = props.content;
      this.id = props.id;
   }

   render() {
      const { onDelete } = this.props;
      return (
         <div className="Notes-List__Item">
            <div className="Notes-List__Item_content">{this.content}</div>
            <button
               className="Notes-List__Item_remove"
               type="button"
               onClick={onDelete}
            >
               ×
            </button>
         </div>
      );
   }
}

ListItem.propTypes = {
   content: PropTypes.string.isRequired,
   onDelete: PropTypes.func.isRequired,
   id: PropTypes.number.isRequired,
};
