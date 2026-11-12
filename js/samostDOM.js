const courseblock = document.querySelector('#course-info');
courseblock.style.backgroundColor = '#fff5f7';
courseblock.style.border = '4px solid #ffc2ce';
courseblock.style.padding = '20px';
courseblock.style.borderRadius = '10px';
courseblock.style.width = '400px';

const coursename = 'уп.09 веб-разработка';
const studentfullname = 'андреева яна';
const studentgroup = 'ис-1-25';
const topicscount = 5;

document.querySelector('#course-name').textContent = `название дисциплины: ${coursename}`;
document.querySelector('#student-fullname').textContent = `фамилия и имя студента: ${studentfullname}`;
document.querySelector('#student-group').textContent = `номер группы: ${studentgroup}`;
document.querySelector('#topics-count').textContent = `количество изученных тем javascript: ${topicscount}`;

const finalmessage = document.querySelector('#final-message');
finalmessage.textContent = 'практическая работа завершена';
finalmessage.classList.add('done');
