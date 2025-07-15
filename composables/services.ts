export const useServices = () => {
   const services = ref([
     {
       name: "Family Law",
       icon: "fluent:people-community-24-regular",
       description:`I help clients navigate divorce, custody, and family disputes with compassion, clarity, and practical legal solutions.`
     },
     {
       name: "Criminal Law",
       icon: "fluent:shield-keyhole-24-regular",
       description:`I offer legal guidance and representation for clients facing criminal charges, including prosecution, defense, and post-conviction services.`
     },
     {
       name: "Business Law",
       icon: "fluent:briefcase-12-regular",
       description:`I help clients navigate business transactions, contracts, and legal matters related to their business activities.`
     },
     {
       name: "Immigration Law",
       icon: "fluent:people-audience-24-regular",
       description:`I provide legal representation and support for clients seeking to immigrate to a new country.`
     },
     {
       name: "Real Estate Law",
       icon: "fluent:home-24-regular",
       description:`I help clients navigate real estate transactions, contracts, and legal matters related to their real estate investments and properties.`
     },
     {
      name:"Employment Law",
      icon:"fluent:people-24-regular",
      description:`I provide legal representation and support for clients seeking employment, including employment contracts, employment disputes, and labor relations.`
     }

   ])
   return {
     services
   }
}
