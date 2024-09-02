document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('uploadButton');
    const uploadInput = document.getElementById('uploadInput');
    const profileImage = document.getElementById('profileImage');
    const applyButton = document.getElementById('applyButton');
    const discardButton = document.getElementById('discardButton');
    const createRecordButton = document.getElementById('createRecordButton');
    const addContactModal = document.getElementById('addContactModal');
    const closeModalButton = document.getElementById('closeModal');
    const addContactButton = document.getElementById('addContactButton');
    const contactList = document.getElementById('contactList');

    let contacts = [];

    // Handle file upload
    uploadButton.addEventListener('click', function() {
        uploadInput.click();
    });

    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle 'Apply Changes' button
    applyButton.addEventListener('click', function() {
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const business = document.getElementById('business').value;

        alert('Changes applied:\n' +
            'Full Name: ' + fullname + '\n' +
            'Email: ' + email + '\n' +
            'Business Name: ' + business
        );
    });

    // Handle 'Discard' button
    discardButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to discard changes?')) {
            document.getElementById('fullname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('business').value = '';
        }
    });

    // Handle 'Create Record' button
    createRecordButton.addEventListener('click', function() {
        addContactModal.style.display = 'block';
    });

    // Handle 'Close Modal' button
    closeModalButton.addEventListener('click', function() {
        addContactModal.style.display = 'none';
    });

    // Handle 'Add Contact' button
    addContactButton.addEventListener('click', function() {
        const newFullName = document.getElementById('newFullName').value;
        const newEmail = document.getElementById('newEmail').value;
        const newBusiness = document.getElementById('newBusiness').value;

        if (newFullName && newEmail && newBusiness) {
            const contact = { fullname: newFullName, email: newEmail, business: newBusiness };
            contacts.push(contact);
            renderContacts();
            addContactModal.style.display = 'none';
            document.getElementById('newFullName').value = '';
            document.getElementById('newEmail').value = '';
            document.getElementById('newBusiness').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Render contacts to the list
    function renderContacts() {
        contactList.innerHTML = '';
        contacts.forEach((contact, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${contact.fullname} - ${contact.email} - ${contact.business}
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            `;
            contactList.appendChild(li);
        });
    }

    // Edit Contact Function
    window.editContact = function(index) {
        const contact = contacts[index];
        document.getElementById('fullname').value = contact.fullname;
        document.getElementById('email').value = contact.email;
        document.getElementById('business').value = contact.business;
        contacts.splice(index, 1);
        renderContacts();
    };

    // Delete Contact Function
    window.deleteContact = function(index) {
        contacts.splice(index, 1);
        renderContacts();
    };

    // Example for 'Get Premium' button
    document.querySelector('.cta-button').addEventListener('click', function() {
        window.location.href = 'https://your-premium-offer-page.com'; // Redirect to the premium page
    });
});
