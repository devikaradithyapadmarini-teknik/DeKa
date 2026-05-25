// Contoh membership ustadz
const membershipUsers = [
 "Ustadz Abdul Somad",
 "Ustadz Adi Hidayat",
 "Ustadz Hanan Attaki",
 "Ustadz Khalid Basalamah",
 "Ustadz Felix Siauw"
];

// LOGIN
function login(){

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  if(username === "admin" && password === "admin"){
    window.location.href = "admin.html";
  }else{
    window.location.href = "user.html";
  }
}

// CHECKOUT
function checkout(){

  const paket =
    parseInt(document.getElementById("paket").value);

  const jam =
    parseInt(document.getElementById("jam").value);

  const member =
    document.getElementById("member").checked;

  const booking =
    document.getElementById("booking").checked;

  const delivery =
    document.getElementById("delivery").checked;

  let total = paket * jam;

  // Diskon membership 20%
  if(member){
    total -= total * 0.20;
  }

  // Booking online
  if(booking){
    total += 2000;
  }

  // Delivery
  if(delivery){
    total += 5000;
  }

  document.getElementById("hasil").innerHTML =
    "Total Bayar : Rp " + total;
}

// TRACKING
let statusIndex = 0;

const statusPengiriman = [
 "Pesanan Diproses",
 "Driver Menuju Lokasi",
 "Pesanan Sampai"
];

function updateTracking(){

  statusIndex++;

  if(statusIndex >= statusPengiriman.length){
    statusIndex = 0;
  }

  document.getElementById("tracking").innerHTML =
    statusPengiriman[statusIndex];
}