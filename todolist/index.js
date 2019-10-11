// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

const m5 = document.querySelector('.m-5')

// 按下Add鍵，新增待辦事項
const addBtn = document.querySelector('#addBtn')
function addBtnFn() {
  let inputValue = document.querySelector('#newTodo').value
  // 判斷輸入框內不是空值才可呼叫addItem
  if (inputValue !== '') {
    addItem(inputValue)
  }
  console.log(inputValue)
}
addBtn.addEventListener('click', addBtnFn)

// 按下Enter，也可新增待辦事項
let input = document.querySelector('#newTodo')
input.addEventListener('keypress', function(event){
  if (event.keyCode === 13) {
    addBtnFn()
  }
})

// 對My Todo表單進行刪除，把完成的項目劃上橫線並移到Done表單
list.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  let li = event.target.parentElement
  // 判斷class內有delete則刪除li
  if (event.target.classList.contains('delete')) {
    li.remove()
  } //判斷有lable就畫上橫線，並且移到Done表單
    else if (event.target.tagName === 'LABEL') {
      // 創建li把舊的文字複製進去，並塞到已經建好的Done表單
    let doneItem = document.createElement('li')
    let oldText = event.target.innerHTML
    doneItem.innerHTML = `
      <label for="todo">${oldText}</label>
      <i class="delete fa fa-trash"></i>
    `
    const myDone = document.querySelector('#my-done')
    myDone.appendChild(doneItem)
      // 將My Todo的項目刪除
    event.target.parentElement.remove()
      // 把剛移到Done表單裡的項目套用checked劃線樣式
    doneItem.children[0].classList.toggle('checked')
    console.log(doneItem)
  }
})

//創建Done標題
const createH4 = document.createElement('h4')
createH4.innerHTML = "Done"
m5.appendChild(createH4)

//創建Done下面的ul
const createUl = document.createElement('ul')
createUl.id = "my-done"
createUl.className = 'list-unstyled'
m5.appendChild(createUl)
console.log(document.querySelector('#my-done'))

// 對Done表單，進行刪除
let doneList = document.querySelector('#my-done')
doneList.addEventListener('click', function() {
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove()
  }
})