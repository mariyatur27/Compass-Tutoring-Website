/**
* Template Name: Ninestars - v4.1.0
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
//Start of the code for the contact section

const contactForm = document.querySelector('.contact-form');
let email = document.getElementById('email');
let name = document.getElementById('name');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert('Something went wrong')
    }
  }
  xhr.send(JSON.stringify(formData));
})

//End of the code for the contact section
function show(){
  var form = document.getElementById('form1');
  if (form.style.display === 'none'){
    form.style.display = 'block';
  }else{
    form.style.display = 'none';
  }
}
function open1(){
  var prices_1 = document.getElementById('st_table');
  if (prices_1.style.display === 'none'){
    prices_1.style.display = 'block';
  }else{
    prices_1.style.display = 'none';
  }
}

function open2(){
  var prices_2 = document.getElementById('ad_table');
  if (prices_2.style.display === 'none'){
    prices_2.style.display = 'block';
  }else{
    prices_2.style.display = 'none';
  }
}

function open3(){
  var prices_3 = document.getElementById('per_table');
  if (prices_3.style.display === 'none'){
    prices_3.style.display = 'block';
  }else{
    prices_3.style.display = 'none';
  }
}

function show1(){
  var form2 = document.getElementById('form');
  if (form2.style.display === 'none'){
    form2.style.display = 'block';
  }else{
    form2.style.display = 'none';
  }
}

function show2(){
  var form2 = document.getElementById('form2');
  if (form2.style.display === 'none'){
    form2.style.display = 'block';
  }else{
    form2.style.display = 'none';
  }
};

  function calculate1(){
     var session_prices= new Array();
      session_prices["four"]= 80.00;
      session_prices["eight"]= 144.00;
      session_prices["twelve"]= 192.00;
      session_prices["sixteen"]= 224.00;
      session_prices["twenty"]= 240.00;

    var initialSessionPrice;
    var theForm = document.getElementById("freq_form");
    var selectedSession = document.getElementById("frequency")

    initialSessionPrice = session_prices[selectedSession.value];

    console.log(initialSessionPrice);
    document.getElementById('output').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice;
};

function calculate2 (){
  var session_prices_2 = new Array();
      session_prices_2["four"]= 100.00;
      session_prices_2["eight"]= 184.00;
      session_prices_2["twelve"]= 252.00;
      session_prices_2["sixteen"]= 304.00;
      session_prices_2["twenty"]= 340.00;

    var initialSessionPrice2;
    var theForm = document.getElementById("freq_form");
    var selectedSession2 = document.getElementById("frequency2")

    initialSessionPrice2 = session_prices_2[selectedSession2.value];

    console.log(initialSessionPrice2);
    document.getElementById('output2').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice2;
}; 
// Temporarily Disabled
// document.getElementById('signup1').onclick = function(){
//   alert("You are in the process of registering a new session at Compass.Tutoring. Please note the following: By clicking 'OK', you confirm you have read and agree with Compass.Tutoring Policy and Code of Conduct to Protect Children. By clicking 'OK', you agree to waive all the legal liabilities of Compass.Tutoring. Under no circumstances will Compass.Tutoring be held responsible for the misconduct of tutors. All the programs and policies are subject to change without notice. Compass.Tutoring reserves the right for a final explanation.");
// };

// document.getElementById('signup').onclick = function(){
//   alert("You are in the process of applying for a tutoring position at Compass.Tutoring. Please note the following: By clicking 'OK', you confirm you agree with Compass.Tutoring Policy and Code of Conduct to protect our students. By clicking 'OK', you agree to waive all the legal liabilities of Compass.Tutoring. Under no circumstances, Compass.Tutoring will be liable to the misconduct of the students and their families. All the programs as well as policies are subject to change without notice. Compass.Tutoring reserves the right for a final explanation.");
// };

function totalCost(){
  var frequency = new Array();
    frequency["four"] = 20.00;
    frequency["eight"] = 18.00;
    frequency["twelve"] = 16.00;
    frequency["sixteen"] = 14.00;
    frequency["twenty"] = 12.00;
  var subjects = new Array();
    subjects["zero"] = 0;
    subjects["one"] = 4.00;
    subjects["two"] = 8.00;
    subjects["three"] = 12.00;
  var duration = new Array();
    duration["zero"] = 0;
    duration["thirty"] = 8.00;
    duration["sixty"] = 11.00;
  
   var initialSessionPrice;   
   var selectedFrequency = document.getElementById("frequency3");
   var selectedSubjects = document.getElementById("subjects3");
   var selectedDuration = document.getElementById("duration3");

   var selection = selectedFrequency.options[selectedFrequency.selectedIndex].value;
   var calculation = frequency[selectedFrequency.value] + subjects[selectedSubjects.value] + duration[selectedDuration.value];

    if (selection == "four") {
      // if (selection.value === 'four') {
       initialSessionPrice = 4 * calculation;
       console.log(initialSessionPrice);
       document.getElementById('cost').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice;
      }

    if (selection == "eight") {
     // else if (selection.value === 'four') {
       initialSessionPrice = 8 * calculation;
       console.log(initialSessionPrice);
       document.getElementById('cost').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice;
      }

    if (selection == "twelve") {
    // if (selection.value === 'four') {
       initialSessionPrice = 12 * calculation;
       console.log(initialSessionPrice);
       document.getElementById('cost').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice;
      }

    if (selection == "sixteen") {
     // if (selection.value === 'four') {
       initialSessionPrice = 16 * calculation;
       console.log(initialSessionPrice);
       document.getElementById('cost').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice;
      }

    if (selection == "twenty") {
     // if (selection.value === 'four') {
       initialSessionPrice = 20 * calculation;
       console.log(initialSessionPrice);
       document.getElementById('cost').innerHTML = "<br>Predicted Cost: $" + initialSessionPrice;
      }

    else {
      console.log("There was a mistake");
    }
}



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
 
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()