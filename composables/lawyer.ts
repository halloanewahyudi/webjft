export const useLawyer = () => {

  const lawyers = ref([
    {
      name: "John Doe",
      image: "/img/lawyer-dummy1.jpg",
      description: `
    <P> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a erat ut turpis dapibus tempus quis vitae massa. Nulla in ante fermentum, tincidunt ex sit amet, dictum diam. Sed hendrerit, risus at efficitur commodo, ante leo efficitur enim, non mattis augue tellus et metus. In volutpat, elit in maximus luctus, ipsum massa porttitor erat, et consequat magna urna id ligula.</p> <p> Nulla sollicitudin nulla a tincidunt lacinia. Maecenas eu elit lectus. Pellentesque a ex lorem. Nam feugiat lacus metus. Fusce pretium efficitur luctus. Suspendisse tortor lorem, iaculis et eros ac, hendrerit iaculis ex. Quisque id lacinia sapien, at rhoncus felis. Ut varius suscipit hendrerit. Suspendisse non velit at ligula pellentesque pretium. Nulla facilisi</p>.
    `,
    },
    {
      name: "John Doe",
      image: "/img/lawyer-dummy1.jpg",
      description: `<p> Nulla sollicitudin nulla a tincidunt lacinia. Maecenas eu elit lectus. Pellentesque a ex lorem. Nam feugiat lacus metus. Fusce pretium efficitur luctus. Suspendisse tortor lorem, iaculis et eros ac, hendrerit iaculis ex. Quisque id lacinia sapien, at rhoncus felis. Ut varius suscipit hendrerit. Suspendisse non velit at ligula pellentesque pretium. Nulla facilisi</p>`,
    },
    {
      name: "John Doe",
      image: "/img/lawyer-dummy1.jpg",
      description: `<p> Phasellus semper mi ut mattis sollicitudin. Pellentesque rhoncus molestie facilisis. In hac habitasse platea dictumst. Sed ullamcorper neque mauris, a mattis elit ornare sit amet. Pellentesque non nibh sapien. Integer commodo a sapien sit amet viverra. Fusce eleifend, mauris et porta pretium, nunc dolor consequat magna, quis consequat dolor ante sed leo.</p>`,
    },
    {
      name: "John Doe",
      image: "/img/lawyer-dummy1.jpg",
      description: `<p>Proin sodales urna sed lorem sollicitudin, non luctus mauris elementum. Fusce eu maximus ex. Ut nec sagittis ante, eu maximus elit. Donec commodo dapibus erat, pretium venenatis metus bibendum eu. Integer facilisis leo sit amet tellus dictum tempor. Donec tortor ipsum, imperdiet in aliquam nec, lacinia vel enim. Morbi et eros eget tellus consectetur sagittis. Nulla cursus urna at euismod feugiat. Fusce ornare risus et neque feugiat, sit amet scelerisque nulla tempor. Cras vulputate maximus mauris, non consequat nisi malesuada in. Etiam varius ac arcu luctus feugiat. Nullam eget lacus vitae mauris auctor dictum non in metus. Curabitur ac accumsan lorem, id aliquam sapien. Aliquam nec ligula vel odio laoreet placerat eu eu risus.</p>`,
    },
    {
      name: "John Doe",
      image: "/img/lawyer-dummy1.jpg",
      description: `<p>Pellentesque id nunc urna. Praesent sodales sapien justo, sit amet pulvinar nibh porta sed. In maximus auctor nisl vitae aliquet. Proin sed placerat est. Cras ullamcorper libero quis purus sodales, at dignissim purus vestibulum. Curabitur a magna enim. In sed nisl at nisi sodales euismod ut id urna. Mauris sagittis quam at orci imperdiet, eu consectetur nisi fringilla. Nunc tincidunt nisi id fringilla gravida. Duis placerat sollicitudin urna at dictum. Maecenas sagittis malesuada augue, sed fermentum urna consectetur sit amet</p>`,
    },
    {
      name: "John Doe",
      image: "/img/lawyer-dummy1.jpg",
      description: `Ut condimentum ornare iaculis. Etiam dignissim lorem et sapien accumsan ullamcorper. Curabitur fringilla laoreet ornare. Morbi sit amet neque et diam malesuada pharetra. Donec aliquam ante dolor, vel tincidunt mi cursus placerat. Maecenas posuere porttitor elit eu aliquam. Curabitur nec tellus erat. Nunc lacinia consequat tempus. Sed facilisis sem vel urna viverra finibus a ullamcorper purus. Sed velit elit, aliquam vitae finibus ac, condimentum eu ex. Sed fringilla, massa ut feugiat tempor, sem erat euismod dolor, in pellentesque sapien sem at est. Quisque sed turpis ut lacus dapibus tempor eget in erat. Fusce iaculis purus sit amet leo gravida hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum semper orci sed fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`,
    },
  ]);

  return {
    lawyers
  }
}
