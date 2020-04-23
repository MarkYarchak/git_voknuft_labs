new Vue({
  el: '#app',
  data: {
    menuLinks: [
      'Home',
      'About',
      'Work',
      'Blog',
      'Contact',
    ],
    menuDialog: false,
  },
  methods: {
    switchMenuDialog() {
      this.menuDialog = !this.menuDialog;
    },
  },
})
