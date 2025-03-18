<script>
    let { data } = $props();
</script>

<h1>Posts list</h1>
<ul>
{#each data.posts as {id, title}}
    <li><a href={`/posts/${id}`}>{title}</li>
{/each}
</ul>