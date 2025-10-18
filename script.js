// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            dateOfBirth: document.getElementById('dob').value,
            source: document.querySelector('input[name="source"]:checked').value,
            announcements: {
                like: document.getElementById('likeAnnouncements').checked,
                email: document.getElementById('emailAnnouncements').checked
            },
            contactMethod: document.getElementById('contactMethod').value
        };
        
        // Display form data (in a real application, this would be sent to a server)
        console.log('Form Data Submitted:', formData);
        
        // Show success message
        alert('Thank you for completing the survey! Your responses have been recorded.');
        
        // Optional: Reset form
        if (confirm('Would you like to fill out another survey?')) {
            form.reset();
        }
    });
    
    // Add basic form validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        if (this.value && !this.value.includes('@')) {
            this.style.borderColor = '#ff0000';
            this.setCustomValidity('Please enter a valid email address');
        } else {
            this.style.borderColor = '#ccc';
            this.setCustomValidity('');
        }
    });
});
