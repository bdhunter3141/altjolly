import * as React from 'react'
import {ThemeContext} from './ThemeProvider'

export function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <ThemeContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />
        }
      </ThemeContext.Consumer>
    )
  }
}