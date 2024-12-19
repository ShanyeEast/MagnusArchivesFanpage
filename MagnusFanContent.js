function toggleSpoiler(event, id) {
    event.preventDefault();
    var spoilerContent = document.getElementById(id);
    if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
        spoilerContent.style.display = 'block';
    } else {
        spoilerContent.style.display = 'none';
    }
}