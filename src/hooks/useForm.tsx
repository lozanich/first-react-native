import { useState } from "react";

export const useForm = <T extends Object>(formulario : T) => {
  const [state, setState] = useState(formulario);   


  const onChange = (value: string, field: keyof T) => {
    console.log(value, field);
    setState({
      ...state,
      [field]: value,
    });
  };

  return{
      state,
      onChange
  }
}
