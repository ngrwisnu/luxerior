import React, { useState } from "react";

interface InitialStateType {
  completeName: string;
  emailAddress: string;
  address: string;
  phoneNumber: string;
  courier: string;
  payment: string;
}

const useForm = (initialState: InitialStateType) => {
  const [state, setState] = useState(initialState);

  function updateStateFunc(e: React.FormEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      // @ts-ignore
      [e.target.name]: e.target.value,
    }));
  }

  return { state, updateStateFunc };
};

export default useForm;
