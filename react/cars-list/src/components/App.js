import React from 'react';
import SearchField from './SearchField';
import unsplashApi from '../apis/unsplashApi';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component{

  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: term
      }
    });

    console.log(response.data);
    this.setState(state=> {
      return {
        images: response.data.results
      }
    })
  }

  render(){
    const { images } = this.state;

    return (
      <div className="App ui container">
        <SearchField onSubmit={this.onSearchSubmit}/>

        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
