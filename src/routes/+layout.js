/**
 * 加载布局数据的函数
 * @returns {Object} - 包含导航数据的对象
 */
export function load() {
  // 返回包含导航数据的对象
  return {
    navs: [
      { slug: "authors", title: "Auther List" },
      { slug: "posts", title: "Post List" },
    ],
  };
}