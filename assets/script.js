// Add Project
let recoveryPassword = document.querySelector('.new-project');
document.querySelector('#addProject').onclick = () => {
    recoveryPassword.classList.toggle('active');
}

document.querySelector('.cancelar').onclick = () => {
    recoveryPassword.classList.remove('active');
}

window.onscroll = () => {
    recoveryPassword.classList.remove('active');
}
