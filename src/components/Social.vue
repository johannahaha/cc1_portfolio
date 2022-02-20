<template>
    <div id="social">
        <a
            :href="$static.metadata.github"
            target="_blank"
            title="Github"
        >
            <GithubIcon class="icon-md md:icon-xl" />
        </a>
        <a
            :href="$static.metadata.linkedin"
            target="_blank"
            title="Github"
        >
            <LinkedinIcon class="icon-md md:icon-xl" />
        </a>
    </div>
</template>

<static-query>
query {
  metadata {
    github
    linkedin
  }
}
</static-query>

<script>
import GithubIcon from "vue-material-design-icons/Github";
import LinkedinIcon from "vue-material-design-icons/Linkedin";

export default {
    components: {
        GithubIcon,
        LinkedinIcon,
    },
};
</script>