<script>
  import { page } from '$app/stores';

  const errorMessages = {
    404: '抱歉，您访问的页面不存在。',
    500: '服务器内部错误，请稍后再试。'
  };

  const getErrorMessage = (status) => {
    return errorMessages[status] || $page.error.message;
  };
</script>

<h1>{$page.status}: {getErrorMessage($page.status)}</h1>

<style>
  h1 {
    color: red;
  }
</style>