// Handle form submission
document.getElementById('testimonyForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect the form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const testimony = document.getElementById('testimony').value.trim();

  // Simulate saving the testimony (later we can connect to backend)
  console.log('Testimony Submitted:', { name, email, testimony });

  // Save the testimony to localStorage
      const testimonies=
  JSON.parse(localStorage.getItem('testimonies'))   || [];
    testimonies.push({
      name: name,
      email: email,
      testimony: testimony,
      date: new
  Date().toLocaleString()    
    });
    localStorage.setItem('testimonies',
  JSON.stringify(testimonies));  
  // Hide form and show thank you message
  document.querySelector('.testimony-form').style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';
});