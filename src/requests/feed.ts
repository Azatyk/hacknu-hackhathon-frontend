import request from "./request";

export const getFeedUsers = (phoneNumber: string) =>
  request({
    url: `/feed/${phoneNumber}`,
  }).then((res) => res.data.content);

export const addReaction = (phoneNumber: string, payload: any) =>
  request({
    url: `/feed/${phoneNumber}`,
    method: "POST",
    data: payload,
  }).then((res) => res.data.content);
