import * as React from 'react'
import theme from './theme'

export const ThemeContext = React.createContext()

export default class ThemeProvider extends React.Component {
  constructor() {
    super()
    this.state = theme
  }

  render() {
    return (
      <ThemeContext.Provider value={{
          themeContext: {
            ...this.state
          }
       }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}