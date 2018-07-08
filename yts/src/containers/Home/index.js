import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <YtsAPIContext.Consumer>
          {api=> api.endpoints.movie_suggesstion.getAll().then(
            res => console.log(res)
          )
          }
        </YtsAPIContext.Consumer>
      </div>
    )
  }
}
