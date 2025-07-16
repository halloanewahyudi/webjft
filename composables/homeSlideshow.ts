export const useHomeSlideshow = () => {
  const slideshows = ref([
    {
      preTitle: "Juan Felix Tampubolon",
      title: "Your trusted partner for legal solutions",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt et eos molestiae cupiditate nihil officiis inventore voluptate facilis expedita veritatis quia odio rerum fuga, libero modi at pariatur officia.",
      image: "/img/man-bg.jpg",
      button: {
        text: "",
        link: ""
      }
    },
    {
      preTitle: "",
      title: "We Are Top Lawyers With 30 Years Os Experience",
      description: "Decision Are A Professional Attorney & Lawyers Services Provider Institutions.",
      image: "/img/lawyer.jpg",
      button: {
        text: "Learn More",
        link: "/lawyer"
      }
    },
    {
      preTitle: "Juan Felix Tampubolon",
      title: "Get in Touch",
      description: "Please schedule a consultation with us.",
      image: "/img/man-bg.jpg",
      button: {
        text: "Call Us Now",
        link: "/contact"
      }
    }
  ])
  return {slideshows}
}
