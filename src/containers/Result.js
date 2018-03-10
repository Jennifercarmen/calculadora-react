import { connect } from 'react-redux'
import {IgualPresionado as ResultActionCreator} from '../actions'

import ResultComponent from '../components/Results'
const Result = connect(
    null,
  dispatch => ({
    Result: resultado => dispatch(ResultActionCreator(resultado))
  })
  )(ResultComponent)
export default Result
