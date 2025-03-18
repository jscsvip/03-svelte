// 从 @sveltejs/kit 导入 error 函数，用于处理错误情况
import { error } from "@sveltejs/kit";

/**
 * 加载单篇文章数据的函数
 * @param {Object} param - 包含路由参数的对象
 * @param {Object} param.params - 包含动态路由参数的对象
 * @param {string} param.params.id - 文章的 ID
 * @returns {Object} - 包含文章数据的对象
 */
export async function load({ params }) {
  // 根据动态路由的 id 值发起 HTTP 请求获取文章数据
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  // 将响应的 JSON 数据解析为 JavaScript 对象
  const post = await response.json();
  // 检查文章数据中是否包含 title 属性
  if (post.title) {
    // 如果包含 title 属性，则返回文章数据
    return {
      post,
    };
  }
  // 如果不包含 title 属性，则返回 404 错误
  error(404, "Not found");
}