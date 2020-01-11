import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                });
            } 
        )
    }

    render() {

        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(this.state.lat && !this.state.errorMessage) { 
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        }

        return (
            <div> <Loader message="Please accept location request" /> </div>
        );
    }
}

reactDOM.render(<App />, document.getElementById('root'));