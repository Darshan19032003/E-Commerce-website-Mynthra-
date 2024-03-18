function editProfile() {
    document.getElementById('profile-details').style.display = 'none';
    document.getElementById('edit-profile-form').style.display = 'block';
  }
  
  function saveProfile() {
    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const newDob = document.getElementById('new-dob').value;
  
    document.getElementById('username').innerText = newUsername;
    document.getElementById('email').innerText = newEmail;
    document.getElementById('dob').innerText = newDob;
  
    cancelEdit();
  }
  
  function cancelEdit() {
    document.getElementById('profile-details').style.display = 'block';
    document.getElementById('edit-profile-form').style.display = 'none';
  }
  