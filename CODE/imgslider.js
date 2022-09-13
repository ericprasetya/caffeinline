$(function(){
  var currImg = $('#slider li').first()
  var pause = 3000;
  var count = 0;
  $('#slider li').hide()
  currImg.show()
  $('.next').click(function(){
    stopSlider()
    currImg.fadeOut(1000)
    if(count === $('#slider li').length - 1 || count === -1){
      currImg = $('#slider li').first()
      count = 0
    }else{
      currImg = currImg.next()
      count++
    }
    currImg.fadeIn(1000)
    startSlider()
  })
  $('.prev').click(function(){
    stopSlider()
    currImg.fadeOut(1000)
    if(count === 0 || count === -$('#slider li').length){
      currImg =  $('#slider li').last()
      count = -1
    }else{
      currImg = currImg.prev()
      count--
    }
    currImg.fadeIn(1000)
    startSlider()
  })
  var interval
  function startSlider(){
    interval = setInterval(function(){
      currImg.fadeOut(1000)
      if(count === $('#slider li').length - 1 || count === -1){
        count = 0
        currImg = $('#slider li').first()
      }else{
        count++
        currImg = currImg.next()
      }
      currImg.fadeIn(1000)
      
    }, pause)
  }
  function stopSlider(){
    clearInterval(interval)
  }
  startSlider()

});