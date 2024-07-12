// انتخاب عناصر HTML با استفاده از ID
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// تعریف یک تابع برای افزودن وظیفه جدید
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // ایجاد دکمه حذف
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', deleteTask);

        // ایجاد تابع تغییر وضعیت انجام شده
        listItem.addEventListener('click', toggleTaskCompleted);

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // پاک کردن ورودی پس از افزودن وظیفه
        taskInput.value = '';
    }
}

// تعریف یک تابع برای حذف وظیفه
function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}

// تعریف یک تابع برای تغییر وضعیت انجام شده وظیفه
function toggleTaskCompleted(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
}

// اضافه کردن یک event listener به دکمه افزودن وظیفه برای اجرای تابع هنگام کلیک
addTaskButton.addEventListener('click', addTask);

// اضافه کردن امکان افزودن وظیفه با فشردن کلید Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
