const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
let anchorLinks = document.getElementsByTagName('a')
let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let headerImg = document.getElementById("cta-img");
let bannerImg = document.getElementById("middle-img");
let footerText = document.querySelector('footer p');
let contact = document.querySelector('.contact').children;


logo.setAttribute('src', siteContent["nav"]["img-src"])
let breaks = siteContent.cta["h1"].split(' ')
h1.innerHTML = `<h1> ${breaks[0]} <br> ${breaks[1]} <br> ${breaks[2]} </h1>`;
btn.textContent = siteContent.cta["button"];
headerImg.setAttribute("src", siteContent.cta["img-src"]);
bannerImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const textValue = Object.values(siteContent.nav);
for(let i = 0; i < anchorLinks.length; i++) {
  anchorLinks[i].textContent = textValue[i]
}

let topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].innerHTML = `
            <div class="top-content">
            <div class="text-content">
                <h4>${siteContent["main-content"]["features-h4"]}</h4>
                <p>${siteContent["main-content"]["features-content"]}</p>
            </div>
           `

topContent[1].innerHTML = `
           <div class="top-content">
           <div class="text-content">
               <h4>${siteContent["main-content"]["about-h4"]}</h4>
               <p>${siteContent["main-content"]["about-content"]}</p>
           </div>
          `

let bottomContent = document.querySelectorAll('.bottom-content .text-content');

bottomContent[0].innerHTML = `
            <div class="top-content">
            <div class="text-content">
                <h4>${siteContent["main-content"]["services-h4"]}</h4>
                <p>${siteContent["main-content"]["services-content"]}</p>
            </div>
           `

bottomContent[1].innerHTML = `
           <div class="top-content">
           <div class="text-content">
               <h4>${siteContent["main-content"]["product-h4"]}</h4>
               <p>${siteContent["main-content"]["product-content"]}</p>
           </div>
          `
bottomContent[2].innerHTML = `
          <div class="top-content">
          <div class="text-content">
              <h4>${siteContent["main-content"]["vision-h4"]}</h4>
              <p>${siteContent["main-content"]["vision-content"]}</p>
          </div>
         `



// let mainVal = Object.values(siteContent["main-content"]);
// console.log('values',mainVal)

// for(let i = 0; i < topContent[0].children.length; i++) {
//   topContent[i].textContent = mainVal[i]
// }

// for(let i = 0; i < topContent[0].children.length; i++) {
//   topContent[1].children[i].textContent = mainVal[i]
// }


let valContact = Object.values(siteContent.contact)
for(let i = 0; i < contact.length; i++) {
 contact[i].textContent = valContact[i]
}

footerText.textContent = siteContent.footer.copyright;