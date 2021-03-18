import { request } from "@/plugins/request";

// 用户登录
export const login = (data) => {
  return request({
    method: "POST",
    url: "/api/users/login",
    data,
  });
};
// 用户注册
export const register = (data) => {
  return request({
    method: "POST",
    url: "/api/users",
    data,
  });
};

// 查询当前用户
export const currentUser = () => {
  return request({
    method: "GET",
    url: "/api/user",
  });
};

// 更新用户信息
export const updateUser = (user) => {
  return request({
    method: "PUT",
    url: "/api/user",
    data: {
      user,
    },
  });
};
