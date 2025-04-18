function setup() { //設定函數，初始值的設定
  //建立依照視窗的高與寬當作畫布的高寬  
  createCanvas(windowWidth, windowHeight)
  //使用HSB顏色模式
  colorMode(HSB, 360, 100, 100)
  //設定初始背景顏色
  background(255)
}

function draw() { //畫圖函數
  //計算色相，根據滑鼠的 X 軸位置
  let hue = map(mouseX, 0, windowWidth, 0, 360)
  //計算亮度，根據滑鼠的 Y 軸位置
  let brightness = map(mouseY, 0, windowHeight, 0, 100)
  
  //設定圓的顏色
  fill(hue, 100, brightness)
  //設定圓的邊框顏色為黑色
  stroke(0)
  //設定圓的邊框寬度為2
  strokeWeight(2)
  
  //畫圓，圓的寬高為200px
  ellipse(mouseX, mouseY, 200, 200)
}