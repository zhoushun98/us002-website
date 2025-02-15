async function e({page:s,categorySlug:t,authorSlug:a}){return await $fetch("/api/posts",{query:{page:s,categorySlug:t,authorSlug:a}})}export{e as u};
