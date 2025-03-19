<script>
  import { page } from '$app/stores';
  let { data } = $props();
</script>

{#if $page.params.id}
  { $page.params.id } Post Content
{:else}
  No post ID found
{/if}

<hr />

{#if data && data.post}
  <h2>{ data.post.title }</h2>
  <hr />
  { data.post.body }
{:else}
  <p>Post not found</p>
{/if}