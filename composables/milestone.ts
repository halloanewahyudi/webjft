export const useMilestone = () => {
   const milestone = ref([
      {
        year:"1998",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        image:"/img/law-1.jpg"
      },{
        year:"2000",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        image:"/img/law-2.jpg"
      },{
        year:"2005",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        image:"/img/law-3.jpg"
      },
      {
        year:"2010",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        image:"/img/law-1.jpg"
      },
      {
        year:"2015",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        image:"/img/law-2.jpg"
      },{
        year:"2020",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        image:"/img/lawyer.jpg"
      }
   ])

   return {
      milestone
   }
}
