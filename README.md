## [![Alisa Logo](https://i.hizliresim.com/aug2sp9.png)](https://www.npmjs.com/package/alisa.ms/)


[![Paketin adı](https://img.shields.io/badge/Paketin%20adı-ms--tr-red)](https://www.npmjs.com/package/alisa.ms/)
[![Paket boyutu](https://img.shields.io/bundlejs/size/alisa.ms?label=Paketin%20boyutu)](https://www.npmjs.com/package/alisa.ms/)
[![Versiyonu](https://img.shields.io/npm/v/alisa.ms.svg?label=Paketin%20versiyonu)](https://www.npmjs.com/package/alisa.ms/)
[![Lisans](https://img.shields.io/npm/l/alisa.ms.svg?label=Lisans)](https://www.npmjs.com/package/alisa.ms/)

[![NPM](https://nodei.co/npm/alisa.ms.png?downloads=true)](https://www.npmjs.com/package/alisa.ms/)

# Kaynak dosyası

- [alisa.ms](https://github.com/pordarman/alisa.ms)

<br>

# Yaratıcılar

- [Ali Çelik](https://github.com/pordarman)

<br>

# Sosyal medya hesabı

- Ali: [Instagram](https://www.instagram.com/ali.celk/) - [Discord](https://discord.com/users/488839097537003521) - [Spotify](https://open.spotify.com/user/215jixxk4morzgq5mpzsmwwqa?si=41e0583b36f9449b)

<br>

# Nedir bu modül?

- Bu modülü [ms](https://www.npmjs.com/package/ms/) modülünün türkçe versiyonu gibi düşünebilirsiniz

- Fakat bu versiyon klasik [ms](https://www.npmjs.com/package/ms/) versiyonundan daha güçlü ve daha pratiktir

- Elinizde **"12345 gün"** gibi bir değer var ve siz bunu milisaniye cinsinden yazmak istiyorsanız bu modül tam da size göre

<br>

# Peki nasıl kullanılır?

Çok kolay, ilk önce herhangi bir javascript (.js) dosyası açınız ve alttaki kodu yazınız (fakat bunu yazmandan önce **npm i alisa.ms** ile modülü indirmelisiniz)
<br>
```js
const mstr = require("alisa.ms")
```
İşte bu kadar şimdi istediğiniz işlemleri gerçekleştirebilirsiniz

<br>

# Örnekler

Diyelim ki elinizde "12345 gün" diye bir yazınız var ve siz bunu milisaniye cinsinden görmek istiyorsunuz
<br>

```js
mstr("12345 gün") // 1066608000000

// Veee işte bu kadar, 12345 günün kaç milisaniye olduğunu öğrendiniz tebrikleerrr 🎉
```
  
Gördüğünüz gibi modül gayet basit ve anlaşılabilir

<br>

Eğer girdiğiniz değeri milisaniye cinsinden değil de dakika cinsinden görmek istiyorsanız aşağıdaki gibi yazabilirsiniz
```js
mstr("12345 gün", "dakika") // 17776800

// Gördüğünüz gibi 2. parametre olarak döndürülecek değeri girdiğinizde o değer cinsinden döndürür
```

<br>

Üstelik sadece 1 değer girmek zorunda değilsiniz! İçine istediğiniz kadar zaman ifadesi içerek veri giriniz yine çalışacaktır
```js
mstr("1 asır, 25 yıl, 5 ay, 15 gün, 8 saat, 9 dakika, 10 saniye, 213 salise") // 3958985350000

// Gördüğünüz gibi içine istediğiniz kadar veri yazmakta tamamen özgürsünüz!
```

<br>

# Ve son olarak

- Eğer bu modülü geliştirmek istiyorsanız [github](https://github.com/pordarman) üzerinden bana istekte bulunursanız size seve seve yardımcı olurum

- Buraya kadar okuduğunuz için teşekkür ederimmmm, iyi ki varsınız 💗

- Sonraki modüllerde görüşmek üzereeeeee!!!

<br>

![kalp kalp kalp](https://gifdb.com/images/high/drake-heart-hands-aqm0moab2i6ocb44.webp)
