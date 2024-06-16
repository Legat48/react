import { TermList } from './TermList';
import './index.css';
import { createRoot } from 'react-dom/client';

const form = document.getElementById('add-description');
const descriptionList = document.getElementById('description-list')
const reactRoot  = createRoot(descriptionList);


let termArr = []
restoreTermList()
function syncTermList() {
  reactRoot.render(<TermList termArr={termArr} onDelete={deleteItem} />);
  saveTermList()
}
function restoreTermList() {
  termArr = JSON.parse(localStorage.getItem('termArr')) || []
  syncTermList()
}

function saveTermList() {
  localStorage.setItem('termArr', JSON.stringify(termArr));
}

function addTerm(title, desc) {
  termArr.push({title, desc, id: crypto.randomUUID()})
  termArr.sort((a, b) => a.title.localeCompare(b.title))
  syncTermList()
  }
function deleteItem(id) {
  termArr = termArr.filter(item => item.id!== id)
  syncTermList()
}

form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Выводим термин в консоль
  addTerm(title, description);
  // Сбрасываем форму
  form.reset();

});
