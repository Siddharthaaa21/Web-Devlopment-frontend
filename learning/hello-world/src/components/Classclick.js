import React, { Component } from 'react'

 class Classclick extends Component {
    clickHandler(){
        console.log('pressed')
    }
  render() {
    
    return (
      <div>
        <button onClick={this.clickHandler}> click class button    </button>
    {/* have to uses this */}
      </div>
    )
  }
}

export default Classclick
