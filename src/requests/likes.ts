import request from "./request";

export const getLikedByUserUsers = (phoneNumber: string) =>
  request({
    url: `/likes/${phoneNumber}/liked-by-user`,
  }).then((res) => res.data.content);

export const getLikedToUserUsers = (phoneNumber: string) =>
  request({
    url: `/likes/${phoneNumber}/liked-to-user`,
  }).then((res) => res.data.content);
