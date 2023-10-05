const 
    specialisation = document.querySelector('.specialisation'),
    specialisationName = document.querySelector('.specialisationName');

specialisation.addEventListener('mouseenter', (e) =>{
    document.addEventListener('mousemove',moveText);
})

specialisation.addEventListener('mouseleave', (e) => {
    document.removeEventListener('mousemove', moveText);
    resetTextPosition();
});
function moveText(e) {
    const rect = specialisation.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    specialisationName.style.transform = `translate(${x}px, ${y}px)`;
}
function resetTextPosition() {
    specialisationName.style.display = 'flex';
    specialisationName.style.justifyContent = 'center';

}