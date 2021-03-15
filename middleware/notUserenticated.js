// 已登录的用户不能再访问登录页面
export default function({ store, redirect }) {
    if (store.state.user) {
      return redirect("/");
    }
  }
  


