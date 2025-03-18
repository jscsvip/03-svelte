// 引入 @sveltejs/kit 中的 error 和 json 方法
import { error, json } from "@sveltejs/kit";

// 修改 GET 函数，添加 fetch 参数
export async function GET({ url, fetch }) {
  const id = url.searchParams.get("id");

  if (!id) {
    // 使用 error 方法抛出错误
    error(400, "没有 id 参数");
  }

  // 发起 HTTP 请求获取文章数据
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  // 将响应的 JSON 数据解析为 JavaScript 对象
  const post = await response.json();
  // 使用 json 方法返回 JSON 响应
  return json(post);
}
