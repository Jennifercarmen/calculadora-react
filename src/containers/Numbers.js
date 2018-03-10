import { connect } from 'react-redux'
import {NumeroPresionado as NumeroPresionadoCreator} from '../actions'

import NumbersComponent from '../components/Numbers'
const Numbers = connect(
    null,
  dispatch => ({
    NumeroPresionado: nro => dispatch(NumeroPresionadoCreator(nro))
  })
  )(NumbersComponent)
export default Numbers
