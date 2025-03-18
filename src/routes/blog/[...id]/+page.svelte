<script>
  // 从 SvelteKit 的 $app/stores 模块中导入 page 存储
  import { page } from '$app/stores';
</script>

<!-- {/* 以格式化的方式将当前页面的参数对象转换为 JSON 字符串并显示 */} -->
{JSON.stringify($page.params, null, 2)}