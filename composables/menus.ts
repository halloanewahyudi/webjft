export const useMenus = () => {

  const menus = ref([
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Lawyer",
      link: "/lawyer"
    },
    {
      name: "News",
      link: "/news"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ])
  return {
    menus
  }
}
