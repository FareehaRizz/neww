/*"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the close button and the modal element
  const closeButton = document.querySelector(".modal-close-btn");
  const modal = document.querySelector(".modal-content");

  // Add click event listener to close button
  closeButton.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal
  });

  // Get reference to the newsletter form
  const newsletterForm = document.querySelector("form");

  // Add submit event listener to the form
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the email input field value
    const emailField = document.querySelector(".email-field");
    const email = emailField.value;

    // Perform any necessary actions with the email value, e.g., send to server

    // Show a confirmation message or perform other actions as needed
    alert("Thank you for subscribing!");
  });
});*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Modal variables
  const modal = document.querySelector("[data-modal]");
  const modalCloseBtn = document.querySelector("[data-modal-close]");
  const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

  // Modal function
  const modalCloseFunc = function () {
    modal.style.display = "none";
  };

  // Modal event listeners
  modalCloseOverlay.addEventListener("click", modalCloseFunc);
  modalCloseBtn.addEventListener("click", modalCloseFunc);

  // Notification toast variables
  const notificationToast = document.querySelector("[data-toast]");
  const toastCloseBtn = document.querySelector("[data-toast-close]");

  // Notification toast event listener
  toastCloseBtn.addEventListener("click", function () {
    notificationToast.style.display = "none";
  });

  // Mobile menu variables
  const mobileMenuOpenBtn = document.querySelectorAll(
    "[data-mobile-menu-open-btn]"
  );
  const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
  const mobileMenuCloseBtn = document.querySelectorAll(
    "[data-mobile-menu-close-btn]"
  );
  const overlay = document.querySelector("[data-overlay]");

  for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    // Mobile menu function
    const mobileMenuCloseFunc = function () {
      mobileMenu[i].classList.remove("active");
      overlay.classList.remove("active");
    };

    mobileMenuOpenBtn[i].addEventListener("click", function () {
      mobileMenu[i].classList.add("active");
      overlay.classList.add("active");
    });

    mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
    overlay.addEventListener("click", mobileMenuCloseFunc);
  }

  // Accordion variables
  const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
  const accordion = document.querySelectorAll("[data-accordion]");

  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
      const clickedBtn = this.nextElementSibling.classList.contains("active");

      for (let j = 0; j < accordion.length; j++) {
        if (clickedBtn) break;

        if (accordion[j].classList.contains("active")) {
          accordion[j].classList.remove("active");
          accordionBtn[j].classList.remove("active");
        }
      }

      this.nextElementSibling.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Newsletter Form
  const newsletterForm = document.querySelector("form");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailField = document.querySelector(".email-field");
    const email = emailField.value;

    // You can add code here to handle the email (e.g., send it to a server)

    alert("Thank you for subscribing!");
  });
});
