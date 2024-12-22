enum Status {
  Success = "success",
  Error = "error",
}

type User = {
  id: number;
  name: string;
}

const getUserInfo = (id: number) => {
  if (id === 1) {
    // 取得成功。
    return {
      status: Status.Success,
      user: { id: 1, name: "Taro" }, // User型
    };
  } else {
    // エラー
    return {
      status: Status.Error,
      errorLog: "User not found",
    };
  }
}

//以下別ファイルの考え
const result = getUserInfo(1);
// 備考: getUserInfoの型は以下のようになっている
// type Response = {
//  status: string;
//  user?: User;
//  errorLog?: string;
// };

if(result.status === Status.Success){
  // userの型がoptionalなので、コンパイルエラーを防ぐには冗長なチェックが必要。
  console.log(result.user.name); // Error: result.user is possibly 'undefined'.
}else{
  // エラー時にもuserプロパティが存在してしまうため、不適切にアクセス可能。
  console.log("error:", result.errorLog);
}