import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

class YesNoForm extends Component {
  render() {
    return (<Box>
      <Button color="primary">
        Yes
      </Button>
      <Button color="secondary">
        No
      </Button>
    </Box>)
  }
}

export default YesNoForm