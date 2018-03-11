// const initialTodos = [
//   {
//     valorActual: 0,
//     historial: [],
//     operacion: null,
//     btns: [ "1", "2", "3", "C", "4", "5", "6", "=", "7", "8", "9", ".", "+", "0", "-", "*", "/" ]
//   } 
// ]

// const calcReducer = (state = calcState, action) => {
//   switch(action.type){
//       case 'ADD_ELEM':
//           return{
//               ...state,
//               valorActual: state.valorActual == 0 ? action.text : state.valorActual + action.text
//           }
//       case 'CLEAR':
//           return{
//               ...state,
//               valorActual: 0
//           }
//       case 'EQUAL':
//           return{
//               ...state,
//               valorActual: eval(action.valorActual)
//           }
//       default:
//           return state;
//   }
// }

// export default calcReducer