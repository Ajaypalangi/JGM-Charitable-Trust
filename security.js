// ===========================
// SECURITY – JGM CHARITABLE TRUST
// ===========================

(function () {
  // Disable right-click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable common DevTools shortcuts
  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key)) ||
      (e.ctrlKey && e.key === 'U') ||
      (e.ctrlKey && e.key === 'S') ||
      (e.ctrlKey && e.key === 'P')
    ) {
      e.preventDefault();
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', e => e.preventDefault());

  // Disable image drag
  document.addEventListener('dragstart', e => e.preventDefault());

  // Console watermark
  console.log(
    '%c JGM Charitable Trust ',
    'background: #e67e22; color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 6px;'
  );
  console.log('%c © 2024 JGM Charitable Trust. All Rights Reserved.', 'color: #2c3e50; font-size: 13px;');
})();
