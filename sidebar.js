function garuda() {
    const hamburger = document.querySelector(".hamburger");
    const sidebarclosebutton = document.querySelector(".close-button");
    const sidebarcontainer = document.querySelector(".sidebar-container");
  
    const opensidebar = () => {
      sidebarcontainer.classList.add("show-sidebar");
  };
  
    const closesidebar = () => {
      sidebarcontainer.classList.remove("show-sidebar");
  };
  
    hamburger.addEventListener("click",opensidebar);
    sidebarclosebutton.addEventListener("click",closesidebar); 
  }
  
  garuda();
  
  function purnam() {
    const navbarcontainer = document.querySelector(".nav-container");
    window.addEventListener("scroll",function(){
    const scrollwindow = window.scrollY;
    const targetnumber = window.innerWidth >=992 ? 70 :58 ;
    if (scrollwindow >= targetnumber) {
      navbarcontainer.classList.add("sticky-nav");
    }else {
      navbarcontainer.classList.remove("sticky-nav");
    }
  })  
  }
  
  purnam();