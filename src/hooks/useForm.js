import { useState } from 'react';

export function useForm(initialState) {
  const [state, setState] = useState(initialState);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setState((prevState) => setState({ ...prevState, [name]: value }));
  }

  function clearForm() {
    setState(initialState);
  }

  return [state, handleInputChange, clearForm];
}
