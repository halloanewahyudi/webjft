export const useHomeSlideshow = () => {
  const slideshows = ref([
    {
      preTitle: "",
      title: "Your trusted partner for justice solutions",
      description: "Juan Felix Tampubolon & Partners have been serving with heart since 1970s.",
      image: "/img/sl-1.jpg",
      button: {
        text: "Learn More",
        link: "/about"
      }
    },
    {
      preTitle: "",
      title: "Bringing 50 Years of Justice Experience to Your Advocate.",
      description: "Decision Are A Professional Attorney & Lawyers Services Provider Institutions.",
      image: "/img/sl-2.jpg",
      button: {
        text: "Learn More",
        link: "/lawyer"
      }
    },
     {
      preTitle: "",
      title: "Justice Insights for Everyday Life",
      description: "Get justice information on this website.",
      image: "/img/sl-3.jpg",
      button: {
        text: "Learn More",
        link: "/"
      }
    }
  ])
  return {slideshows}
}
