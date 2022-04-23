import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
      <div className="card banner-card">
          <img src="https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg" className="card-img-top" alt="..."></img>
          <h5 className="card-title banner-title">Card title</h5>
          <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    )
  }
}

export default Banner