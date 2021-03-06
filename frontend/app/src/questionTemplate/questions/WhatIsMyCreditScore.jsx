import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WhatIsMyCreditScore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [
        'Excellent',
        'Good',
        'Fair',
        'Poor',
        'No idea'
      ]
    }
  }

  renderHeader() {
    return <h1>Credit Score</h1>
  }

  renderQuestion() {
    return <p>How is your current FICO Credit Score? This score is a measure of your credit history and
    trustworthiness as reported by one of three main credit bureaus: Equifax, Experian, and TransUnion.
    If you've used your own credit card in the past,
    you will certainly have a credit score. If you haven't, it's still possible you've earned a
    credit score through student loans or a joint credit card with a parent. If you're unsure of
    what your credit score is and want to find out, there are many free online resources that will
    show you a free report, such as <a href="https://www.discover.com/free-credit-score/" target="_blank">Discover's Credit Scorecard</a>.
    Be sure to research whichever credit reporting service you use to ensure that it is truly free and that the service
    can be trusted with your personal information.</p>
  }

  renderChoice() {
    return <div>
      <Button onClick={() => this.props.next({ creditScore: "Excellent" }, 11)}>
        Excellent</Button> <br />
      <Button onClick={() => this.props.next({ creditScore: "Good" }, 11)}>
        Good</Button> <br />
      <Button onClick={() => this.props.next({ creditScore: "Fair" }, 11)}>
        Fair</Button> <br />
      <Button onClick={() => this.props.next({ creditScore: "Poor" }, 9)}>
        Poor</Button> <br />
    </div>
  }


  renderAnswerTemplate() {
    return this.renderChoice()
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {this.renderHeader()}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
      </div>
    )
  }
}

export default WhatIsMyCreditScore
