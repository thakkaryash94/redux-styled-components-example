import React, { Component } from 'react';
import './App.css';
import Text from './TextComponent'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { changeTheme } from './actions'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.themeStyle === 'LIGHT' ? 'white' : 'gray')};
    color: ${props => (props.theme.themeStyle === 'LIGHT' ? 'green' : 'white')};
  }
`

const Tex = styled.span`
  color: ${props => props.theme.color};
`

class App extends Component {

  handleChange = (checked) => {
    if(checked) {
      this.props.changTheme('DARK')
    } else {
      this.props.changTheme('LIGHT')
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <>
          <GlobalStyle />
          App Component
          <Text />
          Theme: <input type='checkbox' onChange={e => this.handleChange(e.target.checked)} /> {this.props.theme.themeStyle}
        </>
      </ThemeProvider>
    );
  }
}

const themeStateToProps = state => ({
  theme: state
})

const themeDispatchToProps = dispatch => ({
  changTheme: type => dispatch(changeTheme(type))
})

export default connect(themeStateToProps, themeDispatchToProps)(App)
