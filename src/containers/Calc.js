import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return{
    value: state.value,
    btns: state.btns
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addElem: (text) => {
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => {
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}

const Calc = connect(mapStateToProps, mapDispatchToProps)(App);


export default Calc
