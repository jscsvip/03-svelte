<script>
  // 定义用户名状态变量，初始值为空字符串
  let username = $state('');
  // 定义密码状态变量，初始值为空字符串
  let password = $state('');
  // 定义结果状态变量，初始值为空对象
  let result = $state({});

  /**
   * 提交表单数据到服务器的函数
   * @returns {Promise<void>}
   */
  async function submit() {
    // 发起 POST 请求到 /api/add 接口
    const response = await fetch('/api/signin', {
      method: 'POST',
      // 将用户名和密码数据转换为 JSON 字符串作为请求体
      body: JSON.stringify({ username, password }),
      headers: {
        // 设置请求头，指定请求体为 JSON 格式
        'content-type': 'application/json'
      }
    });

    // 解析响应的 JSON 数据并更新结果状态变量
    result = await response.json();
  }
</script>

<!-- 用户名输入框 -->
<label class="block text-sm text-gray-900 mb-2">
  UserName
  <input
    type="text"
    bind:value={username}
    class="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
  />
</label>

<!-- 密码输入框 -->
<label class="block text-sm text-gray-900 mb-2">
  Password
  <input
    type="password"
    bind:value={password}
    class="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
  />
</label>

<!-- 提交按钮 -->
<button
  onclick={submit}
  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white shadow-sm"
  >提交</button
>

{#if result?.success}
  <!-- 登录成功提示信息 -->
  <p class="text-sm text-gray-900 mt-2">登录成功!</p>
{/if}