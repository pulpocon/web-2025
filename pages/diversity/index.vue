<template>
  <article class="page-simple__wrapper">
    <div class="container-fluid-900">
      <header class="page-simple__header">
        <h1 class="page-simple__title">Diversity</h1>
      </header>

      <div class="page-simple__content">
        <p>Diversity matters. At the <strong>PulpoCon</strong> organization, we know that when an application is developed by a diverse team, the result is of higher quality.</p>

        <p>Both the <strong>PulpoCon</strong> organization, its volunteers, and members consider, respect, value, and promote differences as a fundamental part of their values.</p>

        <p>We are committed to the diversity of our society and our own community. Each person is unique, and all of them are, in turn, diverse in nationality, age, race, ethnicity, beliefs, spiritual practices, gender, gender identity, sexual orientation, occupation, marital status, etc., which enriches our profession, the developer community, and society as a whole.</p>

        <p>For all these reasons, we want to extend our sincere invitation to all groups that are often underrepresented in the tech community to be part of PulpoCon.</p>

        <diversity-link></diversity-link>
      </div>
    </div>
  </article>
</template>
<script lang="ts" setup>
import DiversityLink from "../../components/DiversityLink";

useHead({
  bodyAttrs: {
    class: 'page-simple page-diversity'
  }
})
</script>
