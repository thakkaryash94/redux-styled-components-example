import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Text = styled.span`
  color: ${props => props.theme.color};
`

const TextComp = (props) => {
  return (
    <div>
      <Text>Functional Comp</Text>
    </div>
  )
}

const themeStateToProps = state => ({
  theme: state
})

export default connect(themeStateToProps)(TextComp)
