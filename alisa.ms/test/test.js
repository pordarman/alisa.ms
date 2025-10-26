// İlk önce modülümüzü tanımlıyoruz
const mstr = require("../index") // Siz "./index" yerine "alisa.ms" yazınız
const assert = require('assert');


// Şimdi ise örnekleeerrrr
assert.strictEqual(mstr("1 saniye"), 1000);
assert.strictEqual(mstr("-1 saniye"), -1000);

assert.strictEqual(mstr("1 dakika"), 60000);
assert.strictEqual(mstr("-1 dakika"), -60000);

assert.strictEqual(mstr("1 saat"), 3600000);
assert.strictEqual(mstr("-1 saat"), -3600000);

assert.strictEqual(mstr("1 saat 30 dakika"), 5400000);

assert.strictEqual(mstr("1 asır 15 yıl 5 ay 3 hafta 2 gün 8 saat 9 dakika 10 saniye 854 milisaniye"), 3641616550854);

assert.strictEqual(mstr("1 dakika", "dakika"), 1);

assert.strictEqual(mstr("1 saat", "dakika"), 60);

assert.strictEqual(mstr("1 asır", "yıl"), 100);

assert.strictEqual(mstr("5 hafta", "gün"), 35);

assert.strictEqual(mstr("60 saat", "gün"), 2.5);

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