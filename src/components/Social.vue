<template>
    <div id="social">
        <a
            :href="$static.metadata.github"
            target="_blank"
            title="Github"
        >
            <GithubIcon class="icon-md md:icon-lg" :size="32"/>
        </a>
        <a
            :href="$static.metadata.linkedin"
            target="_blank"
            title="Github"
        >
            <LinkedinIcon class="icon-md md:icon-lg" :size="32"/>
        </a>
        <a
            :href="$static.metadata.mail"
            target="_blank"
            title="Mail"
        >
            <EmailIcon class="icon-md md:icon-lg" :size="32"/>
        </a>
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
import GithubIcon from "vue-material-design-icons/Github";
import LinkedinIcon from "vue-material-design-icons/Linkedin";
import EmailIcon from "vue-material-design-icons/Email";

export default {
    components: {
        GithubIcon,
        LinkedinIcon,
        EmailIcon
    },
};
</script>