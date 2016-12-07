import React, {Component} from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.edit = this.edit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.display = this.display.bind(this);
  }

  display() {
    let note = this.props.note;

    return(
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <span className="card-title">{note.title}</span>
            <p>{ note.body }</p>
            <i>{ note.author }</i>
            <p>{ note.color }</p>
          </div>
          <div className="card-action">
            <button className='btn' onClick={this.toggleEdit}>Edit</button>
            <button className='btn' onClick={ () => this.props.deleteNote(this.props.index)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  handleEdit() {
    let noteTitleValue = this.refs.editTitle.value;
    let noteBodyValue = this.refs.editBody.value;
    let noteAuthorValue = this.refs.editAuthor.value;
    let noteColorValue = this.refs.editColor.value
    this.props.editNote(this.props.index, noteTitleValue, noteBodyValue, noteAuthorValue, noteColorValue);
    this.toggleEdit();
  }

  edit() {
    let note = this.props.note;
    return(
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <input type='text' ref='editTitle' defaultValue={note.title} />
            <input type='text' ref='editBody' defaultValue={note.body} />
            <input type='text' ref='editAuthor' defaultValue={note.author} />
            <input type='color' ref='editColor' defaultValue={note.color} />
          </div>
          <div className="card-action">
            <button className='btn' onClick={this.toggleEdit}>Cancel</button>
            <button className='btn' onClick={this.handleEdit}>Update</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if(this.state.edit) {
      return(this.edit());
    } else {
      return(this.display());
    }
  }
}

export default Note;
