// İlk önce modülümüzü tanımlıyoruz
const mstr = require("../index") // Siz "./index" yerine "alisa.ms" yazınız


// Şimdi ise örnekleeerrrr

mstr("1 saniye") // 1000
mstr("-1 saniye") // -1000

mstr("1 dakika") // 60000
mstr("-1 dakika") // -60000

mstr("1 saat") // 36000000
mstr("-1 saat") // -36000000



// Yazdığınız değerin içine birden çok veri yazdırabilirsiniz
// Örnek vermek gerekirse

mstr("1 saat 30 dakika") // 5400000

mstr("1 asır 15 yıl 5 ay 3 hafta 2 gün 8 saat 9 dakika 10 saniye 854 milisaniye") // 3644100550854




// Kısaca modül böyle anlatılacak pek bir şeyi yok




// Şimdi ise döndürülecek değeri özelleştireceğiz

mstr("1 dakika", "dakika") // 1

mstr("1 saat", "dakika") // 60

mstr("1 asır", "yıl") // 100

mstr("5 hafta", "gün") // 35

mstr("60 saat", "gün") // 2.5


/**
 * 2. parametre olarak şunları girebilirsiniz
 * 
 * • milisaniye
 * • saniye
 * • dakika
 * • saat
 * • gün
 * • hafta
 * • ay
 * • yıl
 * • asır
 */


// Biliyorum asır çok saçma oldu ama eğer değişik fantezileriniz varsa asır'ı da kullanabilirsiniz