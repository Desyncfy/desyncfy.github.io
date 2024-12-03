  document.addEventListener('onkeydown', (e) => {
    if (e.key === 'w' || e.key === 'up') {
      document.body.style.backgroundColor = 'red';
    }
    console.log(e.key);
  })
