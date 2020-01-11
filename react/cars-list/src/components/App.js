import React from 'react';
import SearchField from './SearchField';
import unsplashApi from '../apis/unsplashApi';

class App  {

  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: term
      }
    });

    
  }

  render(){
    return (
      <div className="App ui container" style={{marginTop: '10px'}}>
        <SearchField />
      </div>
    );
  }
}

export default App;
