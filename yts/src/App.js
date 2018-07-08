import React, { Component } from 'react';
import API from './api/api';
import endpoints from './api/endpoints';
import RouterConfig from './router';

const YtsAPIContext = React.createContext();

class App extends Component {
  constructor(props){
    super(props);
    this.ytsAPI = new API({url:"https://yts.am/api/v2"})
    this.ytsAPI.createEntities(endpoints);;
    // this.ytsAPI.endpoints.movie_suggesstion.getAll().then(function(res) {
    //   console.log(res);
    // });
  }
  render() {
    return (

      <YtsAPIContext.Provider value={this.ytsAPI}>
        <RouterConfig />
      </YtsAPIContext.Provider>
    );
  }
}

export default App;
