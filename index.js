function startRedirect() {
    let countdown = 5;
    const timerElement = document.getElementById('timer');
    
    const interval = setInterval(() => {
        timerElement.textContent = countdown;
        countdown--;
        
        if (countdown < 0) {
            clearInterval(interval);
            window.location.href = 'https://aacharya.in';
        }
    }, 1000);
}

window.onload = startRedirect;