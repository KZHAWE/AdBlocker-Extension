// content.js
const style = document.createElement("style");
style.textContent = `
  /* Hide ad elements */
  .ad-banner {
    display: none !important;
  }
  /* Add more CSS rules to hide other ad elements */
`;
document.documentElement.appendChild(style);
