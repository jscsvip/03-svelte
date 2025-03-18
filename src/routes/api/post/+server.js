/**
 * 处理 HTTP GET 请求的函数
 * @param {Object} param - 包含请求信息的对象
 * @param {URL} param.url - 请求的 URL 对象
 * @returns {Response} - 响应对象
 */
export async function GET({ url }) {
  const id = url.searchParams.get("id");
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing 'id' parameter" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response(id, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}