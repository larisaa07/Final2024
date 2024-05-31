//parallax scroll:
document.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;

    document.querySelector('.parallax-layer:nth-child(1)').style.transform = 'translateY(' + (-scrollPosition * 0.5) + 'px)';
    document.querySelector('.parallax-layer:nth-child(2)').style.transform = 'translateY(' + (-scrollPosition * 0.8) + 'px)';
})