// 初始設定
  // 取自輸入的區域
const form = document.forms[0]
const yourName = document.querySelector('#name')
const yourPhoto = document.querySelector('#photo')
const intro = document.querySelector('#intro')
const theme = document.querySelector('.theme')
let themeChoice = ''
  // 取自產出卡片的區域
const nameCard = document.querySelector('#name-card')
const nameCardText = document.querySelector('#name-card-text')
const nameCardPhoto = document.querySelector('#name-card-photo')
  // 預設讓產出卡片的區域隱藏
document.querySelector('#name-card').style.display= "none"


// theme監聽器
theme.addEventListener('click', function(event) {
  // 這段用來儲存theme的變數
  if (event.target.value === 'dark') {
    themeChoice = 'dark'
  } else {
    themeChoice = 'light'
  }
  // 這段用在確定產出名片後，若繼續按theme，會自動轉換亮暗
  if (document.querySelector('#name-card').style.display === 'block') {
    if (themeChoice === 'dark') {
      nameCard.style.color = 'white'
      nameCard.style.backgroundColor = 'black'
    } else {
      nameCard.style.color = 'black'
      nameCard.style.backgroundColor = 'white'
    }
  }
})


// form監聽器
form.addEventListener('submit', function(event) {
  event.preventDefault()
  // 判斷驗證必填項目...但photo除外
  if (yourName.value !== '' && intro.value !== '' && themeChoice !== '') {
    // 判斷如果photo沒填，就給預設值
    if (yourPhoto.value === '') {
      yourPhoto.value = 'https://via.placeholder.com/200'
    }
    
    // 把資料帶入產出卡片的區域
    nameCardText.children[0].innerHTML = yourName.value
    nameCardText.children[1].innerHTML = intro.value
    nameCardPhoto.children[0].src = yourPhoto.value
    
    // 判斷使用亮主題還暗主題
    if (themeChoice === 'dark') {
      nameCard.style.color = 'white'
      nameCard.style.backgroundColor = 'black'
    } else {
      nameCard.style.color = 'black'
      nameCard.style.backgroundColor = 'white'
    }
    
    // 讓名片顯示
    document.querySelector('#name-card').style.display= "block"
    
    // 這邊已經確定產出名片，所以清空輸入的值，讓畫面保持乾淨
    yourName.value = ''
    yourPhoto.value = ''
    intro.value = ''
    yourName.nextElementSibling.innerHTML = ''
    intro.nextElementSibling.innerHTML = ''
    theme.children[4].innerHTML = ''
    yourName.nextElementSibling.className = ''
    intro.nextElementSibling.className = ''
    theme.children[4].className = ''
  } else {
  // 沒有通過前面if驗證，接著判斷每個欄位要出現的警示字
    if (yourName.value === '') {
      yourName.nextElementSibling.innerHTML = '請輸入名字'
      yourName.nextElementSibling.classList.add('text-danger')
    } else {
      yourName.nextElementSibling.innerHTML = ''
      yourName.nextElementSibling.classList.remove('text-danger')
    }
    if (intro.value === '') {
      intro.nextElementSibling.innerHTML = '請輸入自介'
      intro.nextElementSibling.classList.add('text-danger')
    } else {
      intro.nextElementSibling.innerHTML = ''
      intro.nextElementSibling.classList.remove('text-danger')
    }
    if (themeChoice === '') {
      theme.children[4].innerHTML = '請選主題'
      theme.children[4].classList.add('text-danger')
    } else {
      theme.children[4].innerHTML = ''
      theme.children[4].classList.remove('text-danger')
    }
  }
})


// 自介的動態回饋提示
form.addEventListener('input', function() {
  console.log(event.target.id)
  if ((event.target.id === 'intro') && intro.value.length <= 200) {
    intro.nextElementSibling.innerHTML = `還能輸入${200 - intro.value.length}個字`
    if (intro.nextElementSibling.classList.contains('text-danger')) {
      intro.nextElementSibling.classList.replace('text-danger', 'text-success')
    } else {
    intro.nextElementSibling.classList.add('text-success')
    }
  }
})