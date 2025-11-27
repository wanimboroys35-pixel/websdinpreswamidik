// Firebase & script interaksi akan ditambahkan di sini



const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Daftar form
const daftarForm = document.getElementById('daftarForm');
if(daftarForm){
  daftarForm.addEventListener('submit', e=>{
    e.preventDefault();
    const data = {
      nama: document.getElementById('nama').value,
      nik: document.getElementById('nik').value,
      ttl: document.getElementById('ttl').value,
      ortu: document.getElementById('ortu').value,
      alamat: document.getElementById('alamat').value,
      hp: document.getElementById('hp').value,
      status: "Menunggu Verifikasi"
    };
    db.collection('pendaftar').add(data).then(()=>{
      alert('Pendaftaran berhasil!');
      daftarForm.reset();
    });
  });
}

// Login form
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      window.location.href='dashboard_admin.html';
    }).catch(err=>alert(err.message));
  });
}


