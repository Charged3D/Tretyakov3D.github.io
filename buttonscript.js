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
});
