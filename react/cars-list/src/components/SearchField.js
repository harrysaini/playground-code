import React from 'react';

class SearchField extends React.Component {
  state = {
    term: ''
  };


  onFormSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    console.log(term);
    this.props.onSubmit(term);
  }

  onInputChange = e => {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div className="SearchField ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchField;
