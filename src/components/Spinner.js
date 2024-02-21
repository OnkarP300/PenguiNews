import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src={loading} alt="loading..." style={{height:"80px" ,borderRadius:"50%"}}/>
      </div>
    )
  }
}

export default Spinner
