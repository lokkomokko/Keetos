    const TimelineMax = require('TimelineMax');
    var tl = new TimelineMax()    
    var timeId_1, timeId_2;
      function arrow_anim_start(e) {

        window.clearTimeout(timeId_2)
         timeId_1 = setTimeout(()=> {
          tl.clear()
          tl.to(e.target.querySelector('#call-made_1_'), .3, {scaleX: 1.6, ease: Linear.ease})
            .to(e.target.querySelector('#call-made_1_'), .2, {scaleX: 1, x: 150}, .17)
            .to(e.target.querySelector('#arrow'), .3, {x: 150}, 0)    
            timeId_2 = true
        }, 100)

      }
      function arrow_anim_finish(e) {

        window.clearTimeout(timeId_1)
        // window.clearTimeout(timeId_2)
        if (timeId_2) {
          setTimeout(()=> {
            tl.clear()
            tl.to(e.target.querySelector('#call-made_1_'), .2, {scaleX: 1.6, x: 0})
            .to(e.target.querySelector('#call-made_1_'), .3, {scaleX: 1, x: 0}, )
            .to(e.target.querySelector('#arrow'), .25, {x: 0, ease: Linear.ease}, .18)          
            timeId_2 = false
          }, 200)          
        }
         
      }      

export {timeId_1,timeId_2, arrow_anim_start, arrow_anim_finish}