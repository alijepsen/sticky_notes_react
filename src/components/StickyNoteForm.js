import React, { Component } from 'react';

// presentational component - no constructor or state
class StickyNoteForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //grab the values
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    let author = this.refs.author.value;
    let color = this.refs.color.value;

    //call the parent compnent addnote function
    this.props.addNote(title, body, author, color);
    this.refs.noteForm.reset();
    this.refs.title.focus();
  }

  render() {
    return(
      <div className='container'>
        <form ref='noteForm' onSubmit={ this.handleSubmit } >
          <label>Title</label>
          <input type='text' ref='title' required />
          <label>Body</label>
          <textarea ref='body' required></textarea>
          <label>Author</label>
          <input type='text' ref='author' required />
          <label>Color</label>
          <input type='color' ref='color' required />
          <br /><br />
          <input type='submit' className='btn' />
        </form>
      </div>
    );
  }
}

export default StickyNoteForm;
