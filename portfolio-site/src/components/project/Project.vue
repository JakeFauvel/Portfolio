<template>
  <div class="project-container">
      <div class="text">
        <h2 class="project-title">{{ project.projectTitle }}</h2>
        <div class="project-details">{{ project.projectText }}</div>
        <ul>
          <li v-for="skill in project.skills" :key="skill">
            {{ skill }}
          </li>
        </ul>
      </div>

      <div class="image">
        <img class="project-image" :src="`../assets/projects/${project.img}`" alt="Project image">
      </div>
  </div>
</template>
<style lang="scss" scoped>

</style>