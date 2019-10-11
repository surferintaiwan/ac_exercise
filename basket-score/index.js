let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here
function displayPlayerList(players) {
  let allDataHtml = ``
  const icons = `
    <i class="fa fa-plus-circle" aria-hidden="true"></i>
    <i class="fa fa-minus-circle" aria-hidden="true"></i></td>
    `
  
  for (i = 0; i < players.length; i++) {
    let values = Object.values(players[i])
    let dataHtml = `
    <tr>
      <td><span>${values[0]}</span></td>
      <td><span>${values[1]}</span>${icons}</td>
      <td><span>${values[2]}</span>${icons}</td>
      <td><span>${values[3]}</span>${icons}</td>
      <td><span>${values[4]}</span>${icons}</td>
      <td><span>${values[5]}</span>${icons}</td>
    </tr>
    `
    allDataHtml += dataHtml 
  }
  dataPanel.innerHTML = allDataHtml
}

displayPlayerList(players)


function pointSystem() {
 let click = event.target
 let clickPoint = click.parentElement.children[0]
 if (click.classList.contains('fa-plus-circle')) {
    clickPoint.innerHTML = Number(clickPoint.innerHTML) + 1
 } else if (click.classList.contains('fa-minus-circle')) {
    clickPoint.innerHTML = Number(clickPoint.innerHTML) - 1
 }
}

dataPanel.addEventListener('click', pointSystem)
