document.addEventListener("DOMContentLoaded", function() {
    const wheel = document.querySelector('.wheel');
    const detail = document.querySelector('.detail');
    const background = document.querySelector('.background');
    const realWorld = document.querySelector('.realWorld')
    const al_card = document.querySelector('.al-card')
    const forge_detail = document.querySelector('.forge-detail')
    const who_are_we = document.querySelector('.who-are-we')
    const section2 =  document.querySelector('.section2')
    const who_detail = document.querySelector('.who-detail')
    const meisterwerk = document.querySelector('.meisterwerk')


    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const halfHeight = rect.height / 2;
        const halfWidth = rect.width / 2;
        return (
            rect.top + halfHeight >= 0 &&
            rect.left + halfWidth >= 0 &&
            rect.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right - halfWidth <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isInViewport(wheel)) {
            wheel.classList.add('active');
        }
        if (isInViewport(detail)) {
            detail.classList.add('active');
        }
        if (isInViewport(background)) {
            background.classList.add('active');
        }
        if (isInViewport(realWorld)) {
            realWorld.classList.add('active');
        }
        if (isInViewport(al_card)) {
            al_card.classList.add('active');
        }
        if (isInViewport(forge_detail)) {
            forge_detail.classList.add('active');
        }
        if (isInViewport(section2)) {
            who_are_we.classList.add('active');
        }
        if (isInViewport(who_detail)) {
            who_detail.classList.add('active');
        }
        if (isInViewport(meisterwerk)) {
            meisterwerk.classList.add('active');
        }
        
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check if elements are in view on initial load
});




