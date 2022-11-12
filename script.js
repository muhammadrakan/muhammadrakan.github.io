// alert('hai cantik')
// alert('aku kangen la sama kamu')
// const kangen = prompt('kamu kangen tida sama aku? \nkangen / ngga')
// if (kangen == "kangen") {
//     alert('aku juga kangen sama kamu :(')
//     alert('kangen sama senyuman kamu, pipi kamu, suara kamu, semuanya la pokonya afnafjnasn')
//     alert("oiya kamu nanti mau persami ya?")
//     const semangat = prompt('kamu semangat ga ni persami nya? \n semangat / ga semangat')

//     if (semangat == "semangat") {
//         alert('GITUU DONGG SEMANGATTT')
//         alert('aku doain dari sini ya cantik biar lancar persami nya')
//         alert('aku ada sesuatu ni buat kamu, jgn kejang-kejang ya pas buka nya')
//         } else if (semangat == 'ga semangat') {
//             alert('ko gitu sih >:(')
//             alert('aku males lanjutin ah kalo kamu males gini huh')
//         } else {
//             alert('ketik yang bener ya cantik, ulangi lagi')
//         }
//     } else if (kangen == "ngga") {
//         alert('yahh kamu tida kangen sm aku ya..')
//         alert('okay..')
//     } else {
//         alert('ketik yang bener ya cantik, ulangi lagi')
//     }

const qrcode = document.querySelector('.kontener-dua');
const tombol = document.querySelector('.btn')
tombol.addEventListener('click', function() {
    qrcode.classList.toggle('ilang');
})