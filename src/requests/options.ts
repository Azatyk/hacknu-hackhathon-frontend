import request from "@/requests/request";

export const fetchOptionsRequest = () =>
  request({
    url: "/options",
    method: "GET",
  }).then((res) => res.data.content);
