//set initial count
let count = 0;

//select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach((btn) => {
  console.log(btn);

  btn.addEventListener('click', (e) => {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;

    if(styles.contains('decrease')) {
      count--;
    } else if(styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if(count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'var(--primary-color)';
    }
    value.textContent = count;
  })
})
