document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');
    const toggleButton = document.getElementById('toggle-button');
    const toggleMessage = document.getElementById('toggle-message');
  
    // Переключение между вкладками "Вход" и "Регистрация"
    loginTab.addEventListener('click', switchToLogin);
    registerTab.addEventListener('click', switchToRegister);
  
    toggleButton.addEventListener('click', () => {
      if (loginForm.classList.contains('hidden')) {
        switchToLogin();
      } else {
        switchToRegister();
      }
    });
  
    function switchToLogin() {
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      formTitle.textContent = 'Вход в Zhedelusta';
      formDescription.textContent = 'Войдите в свой аккаунт';
      toggleMessage.textContent = 'Нет аккаунта?';
      toggleButton.textContent = 'Зарегистрироваться';
  
      loginTab.classList.add('active-tab');
      registerTab.classList.remove('active-tab');
    }
  
    function switchToRegister() {
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      formTitle.textContent = 'Регистрация в Zhedelusta';
      formDescription.textContent = 'Создайте новый аккаунт';
      toggleMessage.textContent = 'Уже есть аккаунт?';
      toggleButton.textContent = 'Войти';
  
      registerTab.classList.add('active-tab');
      loginTab.classList.remove('active-tab');
    }
  
    // Обработка формы входа
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Пожалуйста, сначала зарегистрируйтесь.');
    });
  
    // Обработка формы регистрации
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Считываем выбранные данные из формы
      const name = registerForm.querySelector('input[type="text"]').value;
      const email = registerForm.querySelector('input[type="email"]').value;
      const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
      const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
      const role = registerForm.querySelector('input[name="role"]:checked').value;

  
      // Имитация регистрации (можно заменить на локальное хранилище)
      console.log('Регистрация:', { name, email, role });
  
      // Переадресация в зависимости от роли
      if (role === 'client') {
        // Если выбран "Заказчик", переходим на страницу создания объявления
        window.location.href = 'create-ad.html';
      } else if (role === 'freelancer') {
        // Если выбран "Исполнитель", переходим на страницу объявлений
        window.location.href = 'job_type.html';
      }
    });
  });
  
  