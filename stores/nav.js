import { defineStore } from "pinia";

export const navStore = defineStore("nav", {
  state: () => ({
    navItems: [
      {
        id: 1,
        text: "Home",
        isActive: true,
        href: "/#first",
      },
      {
        id: 2,
        text: "Category",
        isActive: false,
        href: "/#second",
      },
    //   {
    //     id: 3,
    //     text: "Portofolio",
    //     isActive: false,
    //     href: "/#third",
    //   },
    //   {
    //     id: 4,
    //     text: "Blog",
    //     isActive: false,
    //     href: "/#fourth",
    //   },
    ],
  }),
  actions: {
    setActive(id) {
      this.navItems.forEach((item) => {
        item.isActive = item.id === id;
      });
    },
  },
});
