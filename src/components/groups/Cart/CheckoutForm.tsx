import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../helpers/hooks/useForm";
import { useGlobalContext } from "../../../helpers/hooks/useGlobalContext";
import InputField from "../../atom/InputField/InputField";
import { CheckoutType } from "./Types";

const CheckoutForm = () => {
  // @ts-ignore
  const [checkout, setMetaCheckout] = useState<CheckoutType>({
    couriers: [
      {
        id: 0,
        imgUrl: "",
        name: "",
      },
    ],
    payments: [
      {
        id: 0,
        imgUrl: "",
        name: "",
      },
    ],
  });

  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    try {
      const getData = async () => {
        let data = await fetch(
          `${process.env.REACT_APP_URL}/api/checkout/meta`
        );
        let response = await data.json();
        setMetaCheckout(response);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { state: payload, updateStateFunc } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            cart: Object.keys(state.cart).map((key) => state.cart[key]),
          }),
        }
      );
      const data = response.json();
      console.log(data);

      if (data) {
        navigate("/success-checkout");
        dispatch({
          type: "RESET_CART",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const isFormFilled =
    Object.keys(payload).filter((key) => {
      // @ts-ignore
      return payload[key] !== "";
    }).length === Object.keys(payload).length;

  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
      <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form action="success.html" onSubmit={submitHandler}>
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="text-sm mb-2">
              Complete Name
            </label>
            <InputField
              type="text"
              name="completeName"
              id="completeName"
              value={payload.completeName}
              changeHandler={updateStateFunc}
              placeholder="Input your name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="emailAddress" className="text-sm mb-2">
              Email Address
            </label>
            <InputField
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={payload.emailAddress}
              changeHandler={updateStateFunc}
              placeholder="Input your email address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm mb-2">
              Address
            </label>
            <InputField
              type="text"
              name="address"
              id="address"
              value={payload.address}
              changeHandler={updateStateFunc}
              placeholder="Input your address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="text-sm mb-2">
              Phone Number
            </label>
            <InputField
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={payload.phoneNumber}
              changeHandler={updateStateFunc}
              placeholder="Input your phone number"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="complete-name" className="text-sm mb-2">
              Choose Courier
            </label>
            <div className="flex -mx-2 flex-wrap">
              {checkout.couriers.map((courier) => (
                <div className="px-2 w-6/12 h-24 mb-4" key={courier.name}>
                  <button
                    onClick={() =>
                      updateStateFunc({
                        target: {
                          // @ts-ignore
                          name: "courier",
                          value: courier.id,
                        },
                      })
                    }
                    type="button"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={courier.imgUrl}
                      alt={courier.name}
                      className="object-contain max-h-full"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="complete-name" className="text-sm mb-2">
              Choose Payment
            </label>
            <div className="flex -mx-2 flex-wrap">
              {checkout.payments.map((payment) => (
                <div className="px-2 w-6/12 h-24 mb-4" key={payment.name}>
                  <button
                    onClick={() =>
                      updateStateFunc({
                        target: {
                          // @ts-ignore
                          name: "payment",
                          value: payment.id,
                        },
                      })
                    }
                    type="button"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={payment.imgUrl}
                      alt={payment.name}
                      className="object-contain max-h-full"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!isFormFilled}
              className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
