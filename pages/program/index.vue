<template>
  <section class="page page--program">
    <header class="page__header">
      <h1 class="heading-1">
        <span>
          Provisional Schedule
        </span>
      </h1>
    </header>
    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Thursday, September 18, 2025
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <thead>
          <tr class="program-day__table-header">
            <th>&nbsp;</th>
            <th>
              <p><strong>Crafter Starter Workshop</strong></p>
              <p>Aprende iterativamente la metodología TDD desde 0</p>
            </th>
            <th>
              <p><strong>Crafter + IA Workshop</strong></p>
              <p>Desarrollando AI. Desarrollando con AI</p>
            </th>
            <th>
              Jardín / Salón
            </th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title" colspan="3">
              Badge pickup & Breakfast 🪪☕
            </td>
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time">
              09:30<br>11:30
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="workshop-newbie-01"/>
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="workshop-expert-01"/>
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
            <td class="program-day__table-time">
              09:30<br>11:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:30<br>12:00
            </td>
            <td class="program-day__table-title" colspan="3">
              Coffee Break ☕
            </td>
            <td class="program-day__table-time">
              11:30<br>12:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:00<br>14:00
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="workshop-newbie-02"/>
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="workshop-expert-02"/>
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
            <td class="program-day__table-time">
              12:00<br>14:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>15:30
            </td>
            <td class="program-day__table-title" colspan="3">
              Lunch 🍽️
            </td>
            <td class="program-day__table-time">
              14:00<br>15:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot  program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="2">
              15:30<br>17:30
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="workshop-newbie-03"/>
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="workshop-expert-03"/>
            </td>
            <td class="program-day__table-title">
              Badge pickup
            </td>
            <td class="program-day__table-time">
              15:30<br>16:00
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-title">
              <open-space-teaser />
            </td>
            <td class="program-day__table-time">
              16:00<br>18:30
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <footer>
      <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">Tickets 🎟️</a>
      </footer>
    </section>


    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Friday, September 19, 2025
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table program-day__table-equal-width-cols">
          <thead>
          <tr class="program-day__table-header">
            <th>&nbsp;</th>
            <th>
              <p><strong>🇬🇧 Crafter 🇬🇧</strong></p>
              <p>Advanced refactoring, testing, product development and more</p>
            </th>
            <th>
              <p><strong>🇪🇸 Crafter 🇪🇸</strong></p>
              <p>Refactoring avanzado, testing, desarrollo de producto y más...</p>
            </th>
            <th>
              <p><strong>Fullstack</strong></p>
              <p>T-shaped developer en equipos multidisciplinares.</p>
            </th>
            <th>
              <p><strong>Management</strong></p>
              <p>De IC a Leadership y Management</p>
            </th>
            <th>
              <p><strong>La Pulpito</strong></p>
            </th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Badge pickup & Breakfast 🪪☕
            </td>
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              9:30<br>11:30
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-crafter-en-01"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-crafter-es-01"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
		          <workshop-teaser id="workshop-fullstack-01"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-management-01"/>
            </td>
            <td class="program-day__table-title">
              Opening
            </td>
            <td class="program-day__table-time">
              09:30<br/>10:10
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-01"/>
            </td>
            <td class="program-day__table-time">
              10:10<br/>10:50
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-02"/>
            </td>
            <td class="program-day__table-time">
              10:50<br/>11:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Coffee Break ☕
            </td>
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              12:30<br>14:30
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-crafter-en-02" />
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-crafter-es-02"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-fullstack-02"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-management-02"/>
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-03"/>
            </td>
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-04"/>
            </td>
            <td class="program-day__table-time">
              13:10<br>13:50
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-05"/>
            </td>
            <td class="program-day__table-time">
              13:50<br>14:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:30<br>16:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Lunch 🍽️
            </td>
            <td class="program-day__table-time">
              14:30<br>16:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              16:30<br>18:30
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-crafter-en-03"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-crafter-es-03"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-fullstack-03"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="workshop-management-03"/>
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-06"/>
            </td>
            <td class="program-day__table-time">
              16:30<br>17:10
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-07"/>
            </td>
            <td class="program-day__table-time">
              17:10<br>17:50
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="talk-pulpito-08"/>
            </td>
            <td class="program-day__table-time">
              17:50<br>18:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              18:30<br>19:30
            </td>
            <td class="program-day__table-title" colspan="5">
              <workshop-teaser id="fireside-chat"/>
            </td>
            <td class="program-day__table-time">
              18:30<br>19:30
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">Tickets 🎟️</a>
      </footer>
    </section>


    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Saturday, September 20, 2025
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tbody>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title">
              Badge pickup & Breakfast 🪪☕
            </td>
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              9:40<br>10:00
            </td>
            <td class="program-day__table-title">
              Opening
            </td>
            <td class="program-day__table-time">
              9:40<br>10:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--10m program-day__table-slot--event">
            <td class="program-day__table-time">
              10:00<br>10:40
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-sat-01"/>
            </td>
            <td class="program-day__table-time">
              10:00<br>10:40
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              10:40<br>11:20
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-sat-02"/>
            </td>
            <td class="program-day__table-time">
              10:40<br>11:20
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot program-day__table-slot--lunch">
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
            <td class="program-day__table-title">
              Coffee Break ☕
            </td>
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-sat-03"/>
            </td>
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              13:20<br>14:00
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-sat-04"/>
            </td>
            <td class="program-day__table-time">
              13:20<br>14:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title">
              Lunch 🍽️
            </td>
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:00<br>16:40
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-sat-05"/>
            </td>
            <td class="program-day__table-time">
              16:00<br>16:40
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:50<br>17:30
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="talk-sat-06"/>
            </td>
            <td class="program-day__table-time">
              16:50<br>17:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              17:40<br>18:00
            </td>
            <td class="program-day__table-title">
              Closing
            </td>
            <td class="program-day__table-time">
              17:40<br>18:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--break">
            <td class="program-day__table-time">
              18:00<br>20:30
            </td>
            <td class="program-day__table-title">
              Cóctel post-evento 🍸
            </td>
            <td class="program-day__table-time">
              18:00<br>20:30
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">Tickets 🎟️</a>
      </footer>
    </section>
  </section>
</template>
<script lang="ts" setup>
import WorkshopTeaser from '../../components/WorkshopTeaser/index.vue'
import TalkTeaser from '../../components/TalkTeaser/index.vue'
import OpenSpaceTeaser from '../../components/OpenSpaceTeaser/index.vue'
import config from "~/data/config";
</script>
<style src="./program.scss"></style>
