(function() {
  const dataPanel = document.querySelector('#data-panel')
  const navBar = document.querySelector('#navbarSupportedContent')
  const hostUrl = 'https://lighthouse-user-api.herokuapp.com'
  const indexUrl = hostUrl + '/api/v1/users'
  let data = []
  const modalContent = document.querySelector('.modal-content')
  
  // 函式: 製作所有使用者列表
  function addContentToDataPanel(data) {
    let htmlContent = ``
    data.forEach(eachUser => {
      htmlContent += `
        <div class="col-sm-4 text-center mb-3">
           <div class="card" data-toggle="modal" data-target="#info-of-user">
              <img data-id="${eachUser['id']}" class="card-img-top" src="${eachUser['avatar']}" >
              <div data-id="${eachUser['id']}" class="card-body user-item-body">
                <span >${eachUser['name']} ${eachUser['surname']}</span>
              </div>
           </div>
        </div>
      `
    })
    dataPanel.innerHTML = htmlContent
  }
  
  // 將使用者資料帶入Modal進行顯示
  function addContentToModal (response) {
    modalContent.innerHTML = `
       <div class="modal-header">
          <h5 class="modal-title">No. <span id="modal-id"></span></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">Close</span>
          </button>
        </div>
        <div class="modal-body">
            <div class='mb-2'>
              <img class="img-fluid" id="modal-img" src="" alt="It's a profile Picture">  
            </div>
            <div> 
              <h4>Hi, I'm <span id="modal-name"></span></h4>
              <p>e-mail: <span id=modal-email></span> | Gender: <span id=modal-gender></span> | Age: <span id=modal-age></span></p>
            </div>
        </div>
    `
    const modalId = document.querySelector('#modal-id')
    const modalImg = document.querySelector('#modal-img')
    const modalName = document.querySelector('#modal-name')
    const modalEmail = document.querySelector('#modal-email')
    const modalGender = document.querySelector('#modal-gender')
    const modalAge = document.querySelector('#modal-age')
    modalId.textContent = response.data['id']
    modalImg.src = response.data['avatar']
    modalName.textContent = response.data['name'] + response.data['surname'] 
    modalEmail.textContent = response.data['email']
    modalAge.textContent = response.data['age']
    // 判斷性別，給文字不同顏色
    modalGender.textContent = response.data['gender']
    if (modalGender.textContent === 'male') {
      modalGender.classList.remove('text-danger')
      modalGender.classList.add('text-primary')                
    } else {
      modalGender.classList.remove('text-primary')
      modalGender.classList.add('text-danger')
    }
  }
  
  // 從api拿到個別使用者的資料
  function getData(event) {
    let eachUserUrl = indexUrl + '/' + event.target.dataset.id  
     // 一開始先顯示loading的頁面
    modalContent.innerHTML = `
      <div>檔案下載中</div>
    `
    axios.get(eachUserUrl)
    .then(response => {
      addContentToModal(response) 
    })
  }
  
  // 函式: 判斷選的性別，給出不同清單內容 
  function userListByGender(event) {
    let genderID = event.target.dataset.id
    let newData = data.filter(filteredUser => filteredUser['gender'] === genderID)
    if (genderID === 'all') { 
      addContentToDataPanel(data)
    } else if (genderID === 'male') {
      addContentToDataPanel(newData)
    } else if (genderID === 'female') {
      addContentToDataPanel(newData)
    }                       
  }
  
  // 從api拿到資料，調用函式加入HTML裡
  axios.get(indexUrl)
  .then(response => {
    data.push(...response.data['results'])
    addContentToDataPanel(data)
  })
  .catch(error => console.log(error))
  
  // 監聽器
  dataPanel.addEventListener('click', function() {getData(event)})
  navBar.addEventListener('click', function() {
    userListByGender(event) 
   
  })
})()