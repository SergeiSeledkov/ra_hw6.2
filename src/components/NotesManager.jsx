import React, { Component } from 'react';
import Form from './Form/Form';
import Header from './Header/Header';
import List from './List/List';

export default class NotesManager extends Component {
   constructor() {
      super();
      this.getData = this.getData.bind(this);
      this.state = {
         notes: [],
      };
      this.onDelete = this.onDelete.bind(this);
      this.onAdd = this.onAdd.bind(this);
   }

   componentDidMount() {
      this.getData();
   }

   onDelete(id) {
      fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      }).then(this.getData);
   }

   onAdd(content) {
      fetch(process.env.REACT_APP_NOTES_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            content,
         }),
      }).then(this.getData);
   }

   getData() {
      fetch(process.env.REACT_APP_NOTES_URL)
         .then((response) => response.json())
         .then(
            (result) => {
               this.setState({
                  notes: [...result],
               });
            },
            (error) => {
               console.log(error);
            }
         );
   }

   render() {
      const { notes } = this.state;

      return (
         <div className="Notes">
            <Header onUpdate={this.getData} />
            <List notes={notes} onDelete={this.onDelete} />
            <Form onAdd={this.onAdd} />
         </div>
      );
   }
}
