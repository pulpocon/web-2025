<template>
  <section class="page page--organization">
    <header class="page__header">
      <h1 class="heading-1">
        <span>
          Organization
        </span>
      </h1>
    </header>
    <div class="page__block container-fluid-900">
      <p>
        The #pulpoCon is an event born in Vigo in 2019 under the umbrella of the PHPVigo meetup that transcends the programming
        language with the goal to promote good technical practices and <em>clean code</em> regardless of the tech stack.
      </p>

      <p>It is currently organized by <strong class="text-gradient-light">CraftersVigo</strong> and has become an event
        that blends technology and gastronomy.</p>

      <p>Our goal is clear: to continue fostering collaboration, good practices, and to showcase the strengths of the
        Galician tech sector through local speakers, and Galicia itself through gastronomy and networking that make us
        so special.</p>

    </div>

    <aside class="page--organization__organizers">
      <h2 class="heading-2 mb-5 center">
        Organizers
      </h2>

      <div class="container-fluid-900">
        <p>The <strong>PulpoCon</strong> takes place thanks to many people, but especially to these 4 bold individuals
          who altruistically dedicate their time to ensure the event is as good as it can be.</p>
      </div>

      <div class="page--organization__organizers-content">
        <organizer-person
            v-for="(organizer, index) in organizers"
            :key="organizer.name"
            :data-aos-delay="index * 200"
            :organizer="organizer"
            data-aos="fade-up"
        ></organizer-person>
      </div>
    </aside>
  </section>
</template>

<script lang="ts" setup>
import organizers from '../../data/organizers'
import OrganizerPerson from '../../components/OrganizerPerson'
</script>
<style src="./organization.scss"></style>
