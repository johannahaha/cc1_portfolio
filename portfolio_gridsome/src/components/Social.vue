<template>
   <div id="social">
      <div class="icon">
         <a :href="$static.metadata.github" target="_blank" title="Github">
            <font-awesome :icon="['fab', 'github']" size="lg" />
         </a>
      </div>
      <div class="icon">
         <a :href="$static.metadata.linkedin" target="_blank" title="Github">
            <font-awesome :icon="['fab', 'linkedin']" size="lg" />
         </a>
      </div>
      <div class="icon">
         <a :href="$static.metadata.mail" target="_blank" title="Mail">
            <font-awesome :icon="['fas', 'envelope']" size="lg" />
         </a>
      </div>
   </div>
</template>

<static-query>
query {
  metadata {
    github
    linkedin
    mail
  }
}
</static-query>

<script>
</script>