import React, { createContext, useContext, useReducer } from "react";
import { initialValueType } from "../../pages/Detail/Details";

const GlobalContext = createContext<any>(null!);

interface ActionforGlobalContextType {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "RESET_CART";
  item: initialValueType;
  id: number;
}

let cart: Record<string, any> = {};

const initialState = {
  cart,
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(GlobalContext);

  if (!state || !dispatch) {
    throw new Error("useGlobalContext must be used within a Provider");
  }

  return { state, dispatch };
}

function Reducer(
  state: typeof initialState,
  action: ActionforGlobalContextType
) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart
          ? { ...state.cart, [action.item.id]: action.item }
          : { [action.item.id]: action.item },
      };

    case "REMOVE_FROM_CART":
      const getFilteredItem = (initValue: any, key: string) => {
        let item = state.cart[key];
        initValue[item.id] = item;
        return initValue;
      };

      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce(getFilteredItem, {}),
      };

    case "RESET_CART":
      return {
        ...state,
        cart: initialState.cart,
      };

    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

export default function Provider(props: any) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <GlobalContext.Provider value={[state, dispatch]} {...props} />;
}
