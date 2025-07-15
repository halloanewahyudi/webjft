<template>
  <div>
         <form action="" class="flex flex-col gap-4 ">
         <input type="text" v-model="form.name" placeholder="Name" class="input">
         <input type="email" v-model="form.email" placeholder="Email" class="input">
         <input type="text" v-model="form.phone" placeholder="Phone" class="input">
         <div>
          <p class="text-xs italic text-primary"> The service you need</p>
              <select  v-model="form.service" id="" class="input"> 
          <option value="">Select Service</option>
          <option v-for="service in services" :value="service">{{ service.name }}</option>
          </select>
         </div>
     
         <textarea v-model="form.message" placeholder="Message" rows="4" class="input"></textarea>
         <button type="submit" class="btn">Submit</button>
        </form>
  </div>
</template>

<script lang="ts" setup>

const form = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
})

const {services} = useServices()

const formSubmit = () => {
  console.log(form)
}
</script>

<style scoped>
  
</style>