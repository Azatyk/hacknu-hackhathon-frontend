import request from "@/requests/request";
import { CreateUserDto } from "@/dto/create-user.dto";

export const createUserRequest = (payload: CreateUserDto) =>
  request({
    url: "/users",
    method: "POST",
    data: payload,
  }).then((res) => res.data.content);

export const detailUserRequest = (phoneNumber: string) =>
  request({
    url: `/users/${phoneNumber}`,
    method: "GET",
  }).then((res) => res.data.content);
