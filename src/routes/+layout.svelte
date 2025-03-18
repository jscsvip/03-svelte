<script>
  /**
   * 从 `+layout.js` 加载的数据
   * @type {Object}
   */
  let { data, children } = $props();
</script>

<!-- 导航菜单 -->
<ul>
  <!-- 遍历导航数据 -->
  {#each data.navs as {slug, title}}
    <!-- 每个导航项的列表项 -->
    <li><a href={`/${slug}`}>{title}</a></li>
  {/each}
</ul>

<!-- 渲染子路由页面的内容 -->
{@render children()}