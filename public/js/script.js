'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}



document.getElementById('read-more-1').addEventListener('click', function (event) {
  event.preventDefault();
  const moreText1 = document.getElementById('more-text-1');
  const moreText2 = document.getElementById('more-text-2');

  if (moreText1.style.display === "none") {
    moreText1.style.display = "block";
    moreText2.style.display = "block";
    this.textContent = 'Read Less';
  } else {
    moreText1.style.display = "none";
    moreText2.style.display = "none";
    this.textContent = 'Read More';
  }
});

// Для второй карточки
document.getElementById('read-more-2').addEventListener('click', function (event) {
  event.preventDefault();
  const moreText3 = document.getElementById('more-text-3');
  const moreText4 = document.getElementById('more-text-4');

  if (moreText3.style.display === "none") {
    moreText3.style.display = "block";
    moreText4.style.display = "block";
    this.textContent = 'Read Less';
  } else {
    moreText3.style.display = "none";
    moreText4.style.display = "none";
    this.textContent = 'Read More';
  }
});

// Для третьей карточки
document.getElementById('read-more-3').addEventListener('click', function (event) {
  event.preventDefault();
  const moreText5 = document.getElementById('more-text-5');
  const moreText6 = document.getElementById('more-text-6');

  if (moreText5.style.display === "none") {
    moreText5.style.display = "block";
    moreText6.style.display = "block";
    this.textContent = 'Read Less';
  } else {
    moreText5.style.display = "none";
    moreText6.style.display = "none";
    this.textContent = 'Read More';
  }
});


fetch('https://api.openweathermap.org/data/2.5/weather?q=Astana&units=metric&appid=3c2b60ccc507a85663211812d9ad34d9')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    document.getElementById('weather').textContent = `
    Weather in Astana: ${description}, 
    Temperature: ${temperature}°C, 
    Humidity: ${humidity}%, 
    Wind Speed: ${windSpeed} m/s
  `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather').textContent = 'Error fetching weather data. Please try again later.';
  });



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);




// Создаём объект Audio один раз
const audio = new Audio('file:///C:/Users/Admin/Downloads/Coldplay%20Yellow.mp3');

const soundBtn = document.getElementById('sound-btn');
soundBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращает переход по ссылке

  if (audio.paused) {
    // Если аудио на паузе, запускаем воспроизведение
    audio.play().catch(error => console.error('Error playing audio:', error));
  } else {
    // Если аудио уже играет, ставим его на паузу
    audio.pause();
    audio.currentTime = 0; // Сбрасываем воспроизведение к началу
  }
});







// Кнопка "Back to Top"
const backToTopBtn = document.getElementById("back-to-top");

// Показ кнопки при прокрутке более 100 пикселей
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

// Прокрутка вверх при нажатии на кнопку
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



const showTimeBtn = document.getElementById('show-time-btn');
const timeDisplay = document.getElementById('time-display');

showTimeBtn.addEventListener('click', function() {
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = currentTime;
  showTimeBtn.style.display = 'none'; // Скрываем кнопку
  timeDisplay.style.display = 'inline'; // Показываем время
});

timeDisplay.addEventListener('click', function() {
  timeDisplay.style.display = 'none'; // Скрываем время
  showTimeBtn.style.display = 'inline'; // Показываем кнопку
});











const userBtn3 = document.getElementById('user-btn3');
  const registerModal3 = document.getElementById('register-modal3');
  const closeRegister3 = document.getElementById('close-register3');
  const registerForm3 = document.getElementById('register-form3');
  const successMessage3 = document.getElementById('success-message3');

  // Открытие модального окна при нажатии на кнопку пользователя
  userBtn3.addEventListener('click', () => {
    registerModal3.style.display = 'flex';
  });

  // Закрытие модального окна при нажатии на крестик
  closeRegister3.addEventListener('click', () => {
    registerModal3.style.display = 'none';
    successMessage3.style.display = 'none'; // Скрыть сообщение об успехе при закрытии
  });

  // Закрытие модального окна при нажатии за его пределами
  window.addEventListener('click', (event) => {
    if (event.target === registerModal3) {
      registerModal3.style.display = 'none';
      successMessage3.style.display = 'none';
    }
  });

  // Обработка отправки формы регистрации
  registerForm3.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessage3.style.display = 'block';
    registerForm3.reset(); // Очистить форму
  });


