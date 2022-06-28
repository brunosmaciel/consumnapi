/* eslint-disable no-console */
import * as types from '../types';

const initialState = {
  botaoClicado: false,
};
// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      console.log('sucesso carinha feliz');
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('falure carinha triste');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo a requisicao');
      return state;
    }

    default:
      return state;
  }
}
