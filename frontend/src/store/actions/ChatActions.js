export function sendMessage(msg) {
  return (dispatch) => {
    dispatch({ type: 'SEND_MESSAGE', payload: msg });
  };
}
