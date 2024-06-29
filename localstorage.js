document.getElementById('saveBtn').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const contactData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  localStorage.setItem('contactData', JSON.stringify(contactData));
  alert('Podaci su sačuvani u Local Storage.');
});

document.getElementById('showBtn').addEventListener('click', function () {
  const contactData = JSON.parse(localStorage.getItem('contactData'));

  if (contactData) {
    alert(
      `Ime i Prezime: ${contactData.name}\nEmail: ${contactData.email}\nTelefon: ${contactData.phone}\nPoruka: ${contactData.message}`
    );
  } else {
    alert('Nema sačuvanih podataka.');
  }
});
