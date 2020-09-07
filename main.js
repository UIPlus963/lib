/**
 * Begin -> on script execution
 */
window.addEventListener("load",function(){
    document.querySelector(".loader").className += " hidden" // hide preloader
    /**
     * Begin -> resize header
     */
    let logo = document.querySelector('.logo-div')
    window.addEventListener('resize',()=>{
        /**
         * Begin -> validate browser size
         */
        if(window.innerWidth <= 766){
            if(logo.classList.contains('text-left')){
                logo.classList.remove('text-left')
            }
            logo.className += ' text-center'
        }else{
            if(logo.classList.contains('text-center')){
                logo.classList.remove('text-center')
            }
            logo.className += ' text-left'
        }
        /**
         * End
         */
    })
    /**
     * End
     */
    /**
     * Begin -> resize navbar by validating classname existence
     */
    let nav = document.querySelector('.nav') 
    if((nav.parentNode.classList.contains('col-lg-5')) || (nav.parentNode.classList.contains('col-md-7'))){
        nav.className += " justify-content-End"
    }
    if(nav.parentNode.classList.contains('col-sm-12')){
        nav.className += " justify-content-center"
    }
    /**
     * End
     */

     /**
      * Begin -> fade-in elements 
      */
     const ele = document.querySelectorAll('.fade-in')
         const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -250px 0px"
          };
          
          const appearOnScroll = new IntersectionObserver(function(
            entries,
            appearOnScroll
          ) {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                return
              } else {
                entry.target.classList.add("appear")
                appearOnScroll.unobserve(entry.target)
              }
            })
          },
          appearOptions);
          ele.forEach(fader=>{
            appearOnScroll.observe(fader);
          })
          //appearOnScroll.observe(faders);
     const header = document.querySelector("header")
     const intro = document.querySelector('.intro')
     const sectionOneOptions = {
        rootMargin: "-200px 0px 0px 0px"
      };
      
      const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
          } else {
            header.classList.remove("nav-scrolled");
          }
        });
      },
      sectionOneOptions);
      
      sectionOneObserver.observe(intro);

      let width = 205
      let id = 0
      let zoomLen = 2
      const card = document.querySelectorAll('.card')
      
      let zoomin = ()=>{
        for(let element of card){
          if(width < 205){
            width = width + zoomLen
            element.style.width = width
          }else{
            clearInterval(id)
          }
        }
      }
      let increase = ()=>{
        id = setInterval(zoomin,20)
      }
      for(let element of card){
        element.addEventListener('mouseover',()=>{
          increase()
        })
      }
})