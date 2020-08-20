import BotstrapStyleSheet from 'react-native-bootstrap-styles'

const SECONDARY_COLOR = '#ff8c00f'
const BACGROUND_ALTERNATIVE = "#00ffff"
const FONT_FAMILY_BASE = `roboto-bold`

// custon constants 
const constants = {
  SECONDARY_COLOR,
  BACGROUND_ALTERNATIVE,
  FONT_FAMILY_BASE,
}

// custom classes 
const classes = {
  title: {
    color: 'blue'
  }
}

const botstrapStyleSheet = new BotstrapStyleSheet(constants, classes)

export const { styles: s, constants: c } = botstrapStyleSheet
