const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');
const allTimes = document.querySelectorAll('.time');

const controller = new ScrollMagic.Controller();

allBoxes.forEach(box => {
    console.log(box);

    for (i = 0; i < allRonds.length; i++) {

        if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

            let tween = gsap.from(box, { y: -100, opacity: 0, duration: 0.5 })

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
                .setTween(tween)
                // .addIndicators()
                .addTo(controller)
        }
    }
})

allTimes.forEach(time => {
    console.log(time);
    for (i = 0; i < allRonds.length; i++) {

        if (allRonds[i].getAttribute('data-anim') === time.getAttribute('data-anim')) {

            let tween = gsap.from(time, { x: 50, opacity: 0, duration: 0.5 })

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
                .setTween(tween)
                // .addIndicators()
                .addTo(controller)
        }
    }
})