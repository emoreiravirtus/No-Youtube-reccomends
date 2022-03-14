setInterval(() => {
  if(document.querySelector('#contents')) {
    document.querySelector('#contents').innerHTML = null;
  }

  if(document.querySelector('#chips-wrapper')) {
    document.querySelector('#chips-wrapper').innerHTML = null;
  }

  if(document.querySelector('#guide-wrapper')) {
    document.querySelector('#guide-wrapper').innerHTML = null;
  }
}, 500);


