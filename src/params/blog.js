/**
 * 检查动态路由参数是否匹配特定条件
 * @param {string} param - 动态路由参数
 * @returns {boolean} - 如果参数满足条件则返回 true，否则返回 false
 */
export function match(param) {
  return Number.isInteger(+param) && param > 0 && param < 51;
}