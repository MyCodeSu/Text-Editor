const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
const triggerEvent = window.deferredPrompt;

if(!triggerEvent) {
    return;
}

triggerEvent.prompt();

// to make the button a one time use function, disable and hide.
window.deferredPrompt = null; 

butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
