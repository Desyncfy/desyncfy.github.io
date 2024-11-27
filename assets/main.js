// CSS editor stuff.
document.addEventListener('DOMContentLoaded', () => {
  const csseditor = document.getElementById('csseditor');

  let styleelement = document.createElement('style');
  styleelement.id = 'dynamicstyles';
  document.head.appendChild(styleelement);

  csseditor.addEventListener('input', () => {
    styleelement.textContent = csseditor.value;
  });

  // For some reason there's no tabfunctionality = tab variable in a text area so uhh
  csseditor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const start = csseditor.selectionStart;
      const end = csseditor.selectionEnd;

      const value = csseditor.value;

      csseditor.value = value.substring(0, start) + '    ' + value.substring(end);

      csseditor.selectionStart = csseditor.selectionEnd = start + 4;
    }
  });
});

