<template>
  <div>
    <div class="container text-sm text-light/80  py-10">
      <div class="flex flex-wrap justify-between   gap-6 lg:gap-10 mb-10">
        <div class="flex flex-col gap-3 max-w-[300px] w-full">
          <h4 class="font-jft">Juan Felix Tampubolon</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum doloremque
            tenetur necessitatibus illum non, debitis maxime animi esse ratione molestias!
          </p>
         
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="font-bold text-lg">Menu</h4>
          <ul class="flex gap-2 items-center">
            <li v-for="menu in menus" :key="menu">
              <nuxt-link
                :to="menu.link"
                class="hover:text-primary duration-300 block mb-2"
              >
                {{ menu.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
         <div class="flex flex-col gap-3">
          <h4 class="font-bold text-lg">Follow Us </h4>
          <ul class="flex gap-2 items-center">
            <li v-for="menu in socmed" :key="menu">
              <nuxt-link
                :to="menu.link"
                class="hover:text-primary duration-300 block mb-2"
              >
                {{ menu.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
       <p>Copyright &copy; 2025 | Juan Felix Tampubolon. All Rights Reserved.  Powered by <a href="https://proweb.co.id" class="underline">proweb</a> </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { menus } = useMenus();

const socmed = ref([

  {
    name: "Twitter",
    icon: "twitter",
    link: "https://www.twitter.com"
  },
  {
    name: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com"
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com"
  }
])
</script>

<style></style>
