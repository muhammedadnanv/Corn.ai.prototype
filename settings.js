// settings.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settings-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Collect form data
        const apiKey = document.getElementById('api-key').value;
        const language = document.getElementById('language').value;
        const theme = document.getElementById('theme').value;
        const notifications = document.getElementById('notifications').checked;
        
        // Save settings (for demonstration purposes, we'll just log them)
        console.log('API Key:', apiKey);
        console.log('Default Language:', language);
        console.log('Theme:', theme);
        console.log('Notifications Enabled:', notifications);
        
        // Here, you would typically send the settings to your server or local storage
        alert('Settings have been saved!');
    });
});
