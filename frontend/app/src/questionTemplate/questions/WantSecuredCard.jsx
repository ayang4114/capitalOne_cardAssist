import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantSecuredCard extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Secured Credit Card</h1>
  }

  renderQuestion() {
    return <p>Would you be interested in a secured credit card?</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 4)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({}, 4)}>
          No
      </Button>
      </div>
    )
  }

  renderNext() {
    return
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {/* Place your question in here */}
        {this.renderHeader()}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
      </div>
    )
  }
}

export default WantSecuredCard