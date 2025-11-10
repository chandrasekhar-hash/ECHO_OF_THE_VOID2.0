document.addEventListener('DOMContentLoaded', () => {

    const logOutput = document.getElementById('telemetry-log');
    const maxLogs = 20;

    const logMessages = [
        '[SYS] Initializing core modules...',
        '[CHECK] Signal integrity nominal.',
        '[ALERT] External hull temperature spike.',
        '[LOG] Decrypting Mission Log 004...',
        '[STATUS] Life support systems stable.',
        '[SYS] Power diversion complete.',
        '[WARNING] Unidentified signature detected - Sector G7.',
        '[COMMS] Transmission sequence initiated.',
        '[LOG] Protocol 7 verification code: C-47-ALPHA',
        '[ALERT] Data corruption level increasing: 0.5%',
        '[CHECK] Engine diagnostics complete. Ready.',
    ];

    function addLogEntry() {
        if (!logOutput) return;

        const randomIndex = Math.floor(Math.random() * logMessages.length);
        const message = logMessages[randomIndex];

        const newLog = document.createElement('p');
        newLog.textContent = `[${new Date().toLocaleTimeString('en-US', { hour12: false })}] ${message}`;
        
        logOutput.prepend(newLog);

        while (logOutput.children.length > maxLogs) {
            logOutput.removeChild(logOutput.lastChild);
        }
    }

    if (logOutput) {
        setInterval(addLogEntry, 1500);
    }

    const colorToggleButton = document.getElementById('color-toggle');
    const monitorContainer = document.querySelector('.monitor-container');

    if (colorToggleButton && monitorContainer) {
        
        colorToggleButton.addEventListener('click', () => {
            
            monitorContainer.classList.toggle('red-alert-mode');

            if (monitorContainer.classList.contains('red-alert-mode')) {
                colorToggleButton.textContent = 'RESTORE MONITOR MODE';
            } else {
                colorToggleButton.textContent = 'TOGGLE MONITOR MODE';
            }
        });
    }

});