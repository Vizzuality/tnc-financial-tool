import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useSaveContact() {
  const saveContact = ({
    data,
  }: {
    data: {
      email: string;
    };
  }) => {
    return axios.request({
      method: "PUT",
      url: "/api/contact",
      data,
    });
  };

  return useMutation({ mutationFn: saveContact });
}
