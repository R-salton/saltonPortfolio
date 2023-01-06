/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
var navMenu = document.getElementById("nav-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");

/*===== MENU SHOW == var
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

var navLink = document.querySelectorAll(".nav__link");

var linkAction = () =>{
    var navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n=>n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
      contactName = document.getElementById("contact-name"),
      contactEmail = document.getElementById("contact-email"),
      contactProject = document.getElementById("contact-project"),
      contactMessage = document.getElementById("contact-message");
 
const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the field has a value

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        // Add and remove color
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        // Show messge

        contactMessage.textContent = 'Write all the input fields 📩'
    }
    else{

        //serviceID - templateID - #form - publickKey 
        emailjs.sendForm('service_spk1bxf','template_zpv6ajj','#contact-form', 'scvXb3p8oj6ku5OOP').then(() =>{

            //Show message and add color
            contactMessage.classList.add('color-blue');
            contactMessage.textContent = 'Message sent ✅'

            // Remove message after five second

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)
        }, (error) =>{
            alert("OOPS! SOMETHING HAS FAILED...", error)
        })


        // To clear the in put field

        contactName.value = ""
        contactEmail.value = ""
        contactProject.value = ""
    }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/

