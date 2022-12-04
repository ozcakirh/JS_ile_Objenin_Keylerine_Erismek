// Tarih : 04.12.2022 02:59
// Key :  Value
const  Verimiz = { 
    'Hüseyin' : 'Baba',
    'Cahide'  : 'Anne',
    'Mumin'   : 'Evlat ',
    'Tubanur' : 'Evlat',
    'Kadrajimdan71' : 'Instagram Adresim'
}

/* Bir Objenin İçersindeki Anahtar (Key) Değerlerine ulaşma örneği */

// Java Script , Küçük Büyük Harfe Duyarlıdır
// Bu Örnek İçin , Sisteminizde Node JS Kurulu olmalıdır
// Yazdıktan sonra Ctrl + S Tuşu ile Kayıt Yapmalısınız. Yoksa Projeniz Çalışmaz
// Bu Örneği : GitHub Üzerinden Bulabilirsiniz. Github : https://github.com/OZCAKIRH

//console.log(Object.keys(Verimiz));

const YeniVeri = Object.keys(Verimiz).map(Isimler => ({Isimler}) );

console.log(YeniVeri);
