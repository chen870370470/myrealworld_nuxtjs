import axios from "axios";

// 创建请求对象
export const request = axios.create({
  baseURL: "https://conduit.productionready.io",
});

// 通过插件机制获取到上下文对象（query，params，req，res，app，store......）
// 插件导出函数必须作为default成员
export default ({ store }) => {
  // 添加请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置token
  request.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么，请求都会经过这里
      const { user } = store.state;
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`;
      }
      // 返回config请求配置对象
      return config;
    },
    function(error) {
      // 对请求错误做些什么（此时请求还没有发出去就失败了）
      return Promise.reject(error);
    }
  );
};
