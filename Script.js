// Fade-in effect for sections on scroll
const sections = document.querySelectorAll("section.fade-section");

function revealSections() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // When section enters the screen, show it
        if (rect.top < window.innerHeight - 150) {
            section.classList.add("visible");
        }
    });
}

// Trigger on scroll
window.addEventListener("scroll", revealSections);

// Trigger once on first load (عشان أول سكشن يظهر ومايبقاش مخفي)
window.addEventListener("load", revealSections);