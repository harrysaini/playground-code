import React from 'react';

class SearchBar extends React.Component {

    state = {
        text: ''
    }

    onInputChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        const { text } = this.state;

        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input
                            type="text"
                            value={text}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;