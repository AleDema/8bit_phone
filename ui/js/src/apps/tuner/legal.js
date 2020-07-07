
window.addEventListener('tuner-legal-open-app', () => {
    $('#tuner-legal-container .inner-app').fadeIn();
});

window.addEventListener('tuner-legal-close-app', () => {
    $('#tuner-legal-container .inner-app').fadeOut();
});

export default {}