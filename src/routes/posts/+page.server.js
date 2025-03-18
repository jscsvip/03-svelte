/**
 * 仅在服务端运行的加载文章数据的函数
 * @param {Object} param - 包含 fetch 方法的对象
 * @param {Function} param.fetch - 用于发起 HTTP 请求的函数
 * @returns {Object} - 包含文章数据的对象
 */
export async function load({ fetch }) {
    // throw new Error('custom error')
  try {
    // 发起 HTTP 请求获取文章数据
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // 检查响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // 将响应的 JSON 数据解析为 JavaScript 对象
    const posts = await response.json();
    // 打印获取到的文章数量
    console.log(posts.length);
    // 返回包含文章数据的对象
    return {
      posts,
    };
  } catch (error) {
    // 打印错误信息
    console.error('Failed to fetch posts:', error);
    // 返回包含错误信息的对象
    return {
      error: 'Failed to fetch posts'
    };
  }
}