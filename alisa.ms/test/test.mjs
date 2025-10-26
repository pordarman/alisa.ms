// İlk önce modülümüzü tanımlıyoruz
import mstr from "../index.mjs"; // Siz "./index" yerine "alisa.ms" yazınız
import { strictEqual } from 'assert';


// Şimdi ise örnekleeerrrr
strictEqual(mstr("1 saniye"), 1000);
strictEqual(mstr("-1 saniye"), -1000);

strictEqual(mstr("1 dakika"), 60000);
strictEqual(mstr("-1 dakika"), -60000);

strictEqual(mstr("1 saat"), 3600000);
strictEqual(mstr("-1 saat"), -3600000);

strictEqual(mstr("1 saat 30 dakika"), 5400000);

strictEqual(mstr("1 asır 15 yıl 5 ay 3 hafta 2 gün 8 saat 9 dakika 10 saniye 854 milisaniye"), 3641616550854);

strictEqual(mstr("1 dakika", "dakika"), 1);

strictEqual(mstr("1 saat", "dakika"), 60);

strictEqual(mstr("1 asır", "yıl"), 100);

strictEqual(mstr("5 hafta", "gün"), 35);

strictEqual(mstr("60 saat", "gün"), 2.5);

console.log("Tüm testler geçti!");

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