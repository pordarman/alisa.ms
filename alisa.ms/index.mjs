/**
 * Zaman ifadelerinin milisaniye cinsinden değerleri
 */

const milisaniye = 1
const saniye = milisaniye * 1000
const dakika = saniye * 60
const saat = dakika * 60
const gun = saat * 24
const hafta = gun * 7
const ay = gun * 30 // Bu değer aslında tam anlamıyla doğru değildir fakat varsayılan olarak bir ayı 30 gün olarak kabul ediyoruz
const yil = gun * 365.25
const asir = yil * 100


/**
 * Bir yazının içinden birimleri çekme
 */

const fetchMiliseconds = /(?<!\d)\d+(\.\d+)? *(milisaniye|milis|ms|miliseconds?|msecs?)(?![a-zöçşıüğ])/gi
const fetchSeconds = /(?<!\d)\d+(\.\d+)? *(saniye|sn|s|seconds?|secs?)(?![a-zöçşıüğ])/gi
const fetchMinutes = /(?<!\d)\d+(\.\d+)? *(dakika|dk|m|mins?)(?![a-zöçşıüğ])/gi
const fetchHours = /(?<!\d)\d+(\.\d+)? *(saat|h|hrs?)(?![a-zöçşıüğ])/gi
const fetchDays = /(?<!\d)\d+(\.\d+)? *(g[uü]n|days?)(?![a-zöçşıüğ])/gi
const fetchWeeks = /(?<!\d)\d+(\.\d+)? *(hafta|weeks?|w)(?![a-zöçşıüğ])/gi
const fetchMonths = /(?<!\d)\d+(\.\d+)? *(ay|months?)(?![a-zöçşıüğ])/gi
const fetchYears = /(?<!\d)\d+(\.\d+)? *(y[ıi]l|years?|yrs?|y)(?![a-zöçşıüğ])/gi
const fetchCentury = /(?<!\d)\d+(\.\d+)? *(as[ıi]r|centurys?)(?![a-zöçşıüğ])/gi





/**
 * Zaman ifadesi içeren değeri milisaniye cinsine çevirme
 * @param {String|Number} input Zaman ifadesi içeren değer
 * @param {String} birim Döndürülecek değerin birimi
 * @return {Number}
 * @example
 * 
 * mstr("1 dakika") // 60000
 * mstr("1 saat") // 3600000
 * 
 * mstr("3 saat", "dakika") // 180
 * 
 * console.log(`5 saat ${mstr("5 saat", "dakika")} dakika yapıyor`)
 * // 5 saat 300 dakika yapıyor
 */

function mstr(input, birim) {

    // Eğer bir değer girilmemişse varsayılan olarak 0 döndürür
    if (!input) return 0;

    // Eğer girilen değer bir sayı ise sayıyı döndürür
    if (!isNaN(Number(input))) return input;

    // Eğer girilen değer hem sayı değil hem de bir yazı objesi değilse varsayılan olarak 0 döndürür
    if (typeof input !== "string") return 0;


    // Girilen değerdeki en sağ ve en soldaki boşlukları kaldırır
    input = input.trim()


    // Eğer girilen değer - ile başlıyorsa döndürülecek sayıyı da eksili olarak döndür
    let isNegative = input.startsWith("-")


    // Değerin içinden milisaniye cinsini çekme
    const miliseconds = input.match(fetchMiliseconds)

    // Değerin içinden saniye cinsini çekme
    const seconds = input.match(fetchSeconds)

    // Değerin içinden dakika cinsini çekme
    const minutes = input.match(fetchMinutes)

    // Değerin içinden saat cinsini çekme
    const hours = input.match(fetchHours)

    // Değerin içinden gün cinsini çekme
    const days = input.match(fetchDays)

    // Değerin içinden hafta cinsini çekme
    const weeks = input.match(fetchWeeks)

    // Değerin içinden ay cinsini çekme
    const months = input.match(fetchMonths)

    // Değerin içinden yıl cinsini çekme
    const years = input.match(fetchYears)

    // Değerin içinden yüzyıl cinsini çekme (Biliyorum çok saçma ama neden olmasın)
    const centurys = input.match(fetchCentury)



    // Şimdi en baş değerimizi 0 olarak ayarlıyoruz
    let ms = 0



    // Ve şimdi sırasıyla yukarıda çektiğimiz her veriyi milisaniye cinsine döndürüyoruz

    // Milisaniye
    if (miliseconds) miliseconds.forEach(milisecond => {
        ms += +milisecond.replace(/(milisaniye|milis|ms|miliseconds?|msecs?| +)/gi, "") * milisaniye
    })

    // Saniye
    if (seconds) seconds.forEach(second => {
        ms += +second.replace(/(saniye|sn|s|seconds?|secs?| +)/gi, "") * saniye
    })

    // Dakika
    if (minutes) minutes.forEach(minute => {
        ms += +minute.replace(/(dakika|dk|m|mins?| +)/gi, "") * dakika
    })

    // Saat
    if (hours) hours.forEach(hour => {
        ms += +hour.replace(/(saat|h|hrs?| +)/gi, "") * saat
    })

    // Gün
    if (days) days.forEach(day => {
        ms += +day.replace(/(g[uü]n|days?| +)/gi, "") * gun
    })

    // Hafta
    if (weeks) weeks.forEach(week => {
        ms += +week.replace(/(hafta|weeks?|w| +)/gi, "") * hafta
    })

    // Ay
    if (months) months.forEach(month => {
        ms += +month.replace(/(ay|months?| +)/gi, "") * ay
    })

    // Yıl
    if (years) years.forEach(year => {
        ms += +year.replace(/(y[ıi]l|years?|yrs?| +)/gi, "") * yil
    })

    // Asır
    if (centurys) centurys.forEach(century => {
        ms += +century.replace(/(as[ıi]r|centurys?| +)/gi, "") * asir
    })



    // Ve sonra eğer kişi döndürülecek değerini yazmışsa döndürülecek değeri o cinse dönüştürüyoruz


    if (birim && typeof birim == "string") {

        switch (birim.toLocaleLowerCase()) {
            case "asır":
            case "asir":
            case "century":
            case "centurys":
                ms /= asir
                break;
            case "yıl":
            case "yil":
            case "year":
            case "years":
            case "y":
                ms /= yil
                break;
            case "ay":
            case "month":
            case "months":
                ms /= ay
                break;
            case "hafta":
            case "week":
            case "weeks":
            case "w":
                ms /= hafta
                break;
            case "gün":
            case "gun":
            case "day":
            case "days":
            case "d":
                ms /= gun
                break;
            case "saat":
            case "hour":
            case "hours":
            case "h":
                ms /= saat
                break;
            case "dakika":
            case "dk":
            case "minutes":
            case "minute":
            case "m":
                ms /= dakika
                break;
            case "saniye":
            case "s":
            case "sn":
            case "seconds":
            case "second":
            case "sec":
            case "secs":
                ms /= saniye
                break;
        }

    }


    // Veeee en sonunda ise oluşan değerimizi döndürüyoruz yey
    return isNegative ? -ms : ms

}


export default mstr