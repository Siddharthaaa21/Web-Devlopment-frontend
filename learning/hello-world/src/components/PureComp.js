import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {
    console.log('pureeee')
    return (
      <div>
        purecomp {this.props.name}
        

      </div>
    )
  }
}

export default PureComp
