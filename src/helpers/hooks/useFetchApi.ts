/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useFetchApi(url: string) {
  const [responses, setResponses] = useState({ data: {} });

  useEffect(() => {
    try {
      const getData = async () => {
        let data = await fetch(url);
        let response = await data.json();
        setResponses(response);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return responses;
}
