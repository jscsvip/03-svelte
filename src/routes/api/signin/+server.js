// 从 @sveltejs/kit 导入 json 函数
import { json } from "@sveltejs/kit";

 
export async function POST({ request }) {
  // 解析请求体中的 JSON 数据
  const data = await request.json();
  // 返回包含 success 标志和原始数据的 JSON 响应
  return json({
    success: true,
    data,
  });
}