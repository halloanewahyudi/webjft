export const useHomeSlideshow = () => {
  const slideshows = ref([
    {
      preTitle: "Juan Felix Tampubolon",
      title: "Your trusted partner for legal solutions",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt et eos molestiae cupiditate nihil officiis inventore.",
      image: "/img/sl-1.jpg",
      button: {
        text: "Learn More",
        link: "/about"
      }
    },
    {
      preTitle: "",
      title: "We Are Top Lawyers With 30 Years Os Experience",
      description: "Decision Are A Professional Attorney & Lawyers Services Provider Institutions.",
      image: "/img/sl-2.jpg",
      button: {
        text: "Learn More",
        link: "/lawyer"
      }
    },
     {
      preTitle: "",
      title: "Legal Insights for Everyday Life",
      description: "Get legal information on this website.",
      image: "/img/sl-3.jpg",
      button: {
        text: "Learn More",
        link: "/"
      }
    }
  ])
  return {slideshows}
}
