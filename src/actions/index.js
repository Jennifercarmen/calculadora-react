let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const NumeroPresionado = {
  type: 'NumeroPresionado',
  Nro: null
}
export const OperacionPresionado = {
  type: 'OperacionPresionado',
  operacion: null
}
export const IgualPresionado = {
  type: 'IgualPresionado'
}
