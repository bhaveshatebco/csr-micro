/* -------------------------------- Carousel -------------------------------- */
    let slideIndex = 1;
    showSlides(slideIndex);
    setInterval(() => plusSlides(1), 6000);
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function showSlides(n) {
      let slides = document.getElementsByClassName("carousel-slide");
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      slides[slideIndex - 1].style.display = "block";
    }

    /* -------------------------------- Reveal Cards -------------------------------- */
    const cards = document.querySelectorAll(".card-item");
    function revealCards() {
      cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) card.classList.add("card-visible");
      });
    }
    window.addEventListener("scroll", revealCards);
    window.addEventListener("load", revealCards);
    /* -------------------------------- Modal -------------------------------- */
    const modal = document.getElementById("modal");
    document.getElementById("openModal").onclick = () => modal.style.display = "flex";
    document.getElementById("closeModal").onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target == modal) modal.style.display = "none"; }


    /* -------------------------------- Google Translate Initialization -------------------------------- */

    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en', // The language the page is currently written in
        includedLanguages: 'en,hi,mr', // The languages you want to offer
        layout: google.translate.TranslateElement.InlineLayout.NO_TOOLBAR // Simple dropdown
      }, 'google_translate_element');
    }

    /* ---------------------------------------------------------------------- Language Data ---------------------------------------------------------------------- */

    /* -------------------------------- Translation Logic -------------------------------- */
    /* -------------------------------- Translation Logic (Revised) -------------------------------- */
function translatePage(langCode) {
    const translations = languageData[langCode];

    // 1. Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
            // Check if the element is an INPUT element
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // If it's an input/textarea, update the placeholder attribute
                element.placeholder = translations[key];
            } else {
                // For all other elements (divs, spans, h3, p, etc.), update innerHTML
                element.innerHTML = translations[key];
            }
        }
    });
    
    // Note: The separate placeholder logic you had before is now obsolete. 
    // Just ensure all your input placeholders use a unique data-key!
}

// Ensure your event listener is set up to call this function on load and change
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-selector');
    
    // Set default language and translate on load
    const defaultLang = 'en'; 
    selector.value = defaultLang;
    translatePage(defaultLang);
    
    // Add change listener
    selector.addEventListener('change', (event) => {
        translatePage(event.target.value);
    });
});

    