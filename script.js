/**
 * Messiyah Mission Trust & Messiyah Mission Elders Home
 * Client-side script for accessible navigation and text scaling for senior patrons.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-open');
    });
  }

  // 2. Font Size Accessibility Toggle for Elderly Readers
  const fontSmall = document.getElementById('fontDefault');
  const fontLarge = document.getElementById('fontLarge');
  const fontXLarge = document.getElementById('fontXLarge');
  const htmlRoot = document.documentElement;

  // Retrieve stored font size preference if any
  const savedFontSize = localStorage.getItem('mmt_font_size');
  if (savedFontSize === 'large') {
    htmlRoot.classList.add('font-large');
  } else if (savedFontSize === 'xlarge') {
    htmlRoot.classList.add('font-xlarge');
  }

  if (fontSmall) {
    fontSmall.addEventListener('click', () => {
      htmlRoot.classList.remove('font-large', 'font-xlarge');
      localStorage.setItem('mmt_font_size', 'default');
    });
  }

  if (fontLarge) {
    fontLarge.addEventListener('click', () => {
      htmlRoot.classList.remove('font-xlarge');
      htmlRoot.classList.add('font-large');
      localStorage.setItem('mmt_font_size', 'large');
    });
  }

  if (fontXLarge) {
    fontXLarge.addEventListener('click', () => {
      htmlRoot.classList.remove('font-large');
      htmlRoot.classList.add('font-xlarge');
      localStorage.setItem('mmt_font_size', 'xlarge');
    });
  }
});
