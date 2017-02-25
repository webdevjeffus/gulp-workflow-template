import $ from "jquery";

class MobileNav {
  constructor() {
    this.navIcon = $("#site-header__nav-icon");
    this.navList = $("#site-header__nav-list");
    this.events();
  }

  events() {
    this.navIcon.click(this.toggleNav.bind(this));
  }

  toggleNav() {
    console.log("Nav icon clicked");
    this.navList.toggleClass("site-header__nav-list--revealed");
    this.navIcon.toggleClass("fa-bars");
    this.navIcon.toggleClass("fa-close");
  }
}

export default MobileNav;
