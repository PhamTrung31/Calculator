import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NumberInput extends Component {
  handleChange = (event) => {
    this.props.onNumberChange(event.target.value)
  }

  render() {
    const { title, number } = this.props
    return (
      <fieldset>
        <legend>Enter number of {title}</legend>
        <input value={number} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

NumberInput.propTypes = {
  onNumberChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default NumberInput
