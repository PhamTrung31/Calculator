import React, { Component } from 'react'
import { getValue } from '@testing-library/user-event/dist/utils'
import NumberInput from './NumberInput'

const scaleName = {
  cm: 'centimeters',
  f: 'feet'
}

const toCentimeters = (feet) => {
  return feet / 0.0328084
}

const toFeet = (centimeters) => {
  return centimeters * 0.0328084
}

const tryConvert = (number, convertFunc) => {
  const input = parseFloat(number)
  if (Number.isNaN(input)) {
    return ''
  }
  let output = convertFunc(input)
  output = Math.round(output * 10) / 10

  return output
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    this.setState({
      number: value,
      scale
    })
  }

  render() {
    const { scale, number } = this.state

    const centimeters = scale === 'f' ? tryConvert(number, toCentimeters) : number

    const feet = scale === 'cm' ? tryConvert(number, toFeet) : number

    return (
      <div>
        <NumberInput title={scaleName.cm} number={centimeters} onNumberChange={this.handleChange('cm')} />
        <NumberInput title={scaleName.f} number={feet} onNumberChange={this.handleChange('f')} />
      </div>
    )
  }
}

export default Calculator
