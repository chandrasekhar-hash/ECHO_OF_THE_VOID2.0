/* Wait for the entire HTML document to load before running the script */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. REAL-TIME TELEMETRY FEED ---
    // Goal: Find the log, add new messages to it on a timer.

    const logOutput = document.getElementById('telemetry-log');
    const maxLogs = 20; // Maximum number of log entries to display

    // A list of messages to pick from randomly
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
        if (!logOutput) return; // Stop if the log element doesn't exist

        // 1. Pick a random message
        const randomIndex = Math.floor(Math.random() * logMessages.length);
        const message = logMessages[randomIndex];

        // 2. Create a new <p> element
        const newLog = document.createElement('p');
        newLog.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        
        // 3. Add the new element to the top of the log
        logOutput.prepend(newLog);

        // 4. Limit the number of entries
        while (logOutput.children.length > maxLogs) {
            logOutput.removeChild(logOutput.lastChild); // Remove the oldest log
        }
    }

    // Start the feed: Add a new log entry every 1.5 seconds (1500ms)
    setInterval(addLogEntry, 1500);


    // --- 2. SYSTEM COLOR TOGGLE ---
    // Goal: Find the button, listen for a click, and change the CSS.

    const colorToggleButton = document.getElementById('color-toggle');
    const monitorContainer = document.querySelector('.monitor-container');

    if (colorToggleButton && monitorContainer) {
        colorToggleButton.addEventListener('click', () => {
            
            // This is the magic: it adds/removes a class called 'red-alert-mode'
            monitorContainer.classList.toggle('red-alert-mode');

            // Update the button text
            if (monitorContainer.classList.contains('red-alert-mode')) {
                colorToggleButton.textContent = 'RESTORE MONITOR MODE';
            } else {
                colorToggleButton.textContent = 'TOGGLE MONITOR MODE';
            }
        });
    }

});