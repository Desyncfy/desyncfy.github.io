function enableName() {
  return document.getElementById('name');
}

function disableName() {
  return null;
}

let prompt = document.getElementById('name');

let editorFocused = false;

document.addEventListener('DOMContentLoaded', () => {

  // CSS editor stuff.
  const csseditor = document.getElementById('csseditor');
  const csseditormobile = document.getElementById('csseditormobile')

  let styleelement = document.createElement('style');
  styleelement.id = 'dynamicstyles';
  document.head.appendChild(styleelement);

  csseditor.addEventListener('input', () => {
    // Silly easter egg?
    if (csseditor.value === 'rainbow') {
      styleelement.textContent = "* { background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); font-family: Comic Sans MS; }"
    } else {
      styleelement.textContent = csseditor.value;
    }
  });

  csseditormobile.addEventListener('input', () => {
    // Silly easter egg?
    if (csseditormobile.value === 'rainbow') {
      styleelement.textContent = "* { background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); font-family: Comic Sans MS; }"
    } else {
      styleelement.textContent = csseditormobile.value;
    }

  })

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
  csseditor.addEventListener('focus', function() {
    editorFocused = true;
  });
  

  // I want to shoot the guy who decided to call exiting focus blur. IT DOESN'T BLUR
  csseditor.addEventListener('blur', function() {
    editorFocused = false;
  });
  // Type in name
  document.onkeydown = (e) => {
    if (prompt && !editorFocused) {
      if (e.key.length === 1) {
        e.preventDefault();
        prompt.textContent += e.key;
      };
      if (e.key === 'Backspace') {
        e.preventDefault();
        if (prompt.textContent.length > 16) {
          prompt.textContent = prompt.textContent.slice(0, -1);
        };
      };
    };
  };
});


