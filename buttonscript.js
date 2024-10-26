// Отримуємо кнопку за її класом
const button = document.querySelector('.myButton');

button.addEventListener('click', function() {
    // Додаємо або видаляємо клас 'clicked' при натисканні
    this.classList.toggle('clicked');
    
    // Змінюємо текст кнопки при натисканні
    if (this.classList.contains('clicked')) {
        this.innerHTML = 'Колір змінено!';
    } else {
        this.innerHTML = 'Натисни на мене';
    }
    this.animate([
        { transform: 'scale(1)' },      // Початковий стан
        { transform: 'scale(1.2)' },    // Збільшення до 120%
        { transform: 'scale(1)' }       // Повернення до початкового розміру
    ], {
        duration: 300,  // Тривалість анімації в мілісекундах
        easing: 'ease-in-out' // Плавність анімації
    });
});
});
