/**
 * Zaman birimlerinin milisaniye cinsinden karşılıkları ve eşleşecek ifadeleri
 */
const TIME_UNITS = [
    {
        multiplier: 1,
        patterns: ['milisaniye', 'milis', 'ms', 'milisecond', 'miliseconds?', 'msecs?']
    },
    {
        multiplier: 1000,
        patterns: ['saniye', 'sn', 's', 'second', 'seconds?', 'secs?']
    },
    {
        multiplier: 1000 * 60,
        patterns: ['dakika', 'dk', 'm', 'minute', 'minutes?']
    },
    {
        multiplier: 1000 * 60 * 60,
        patterns: ['saat', 'h', 'hour', 'hours?']
    },
    {
        multiplier: 1000 * 60 * 60 * 24,
        patterns: ['gün', 'gun', 'day', 'days?', 'd']
    },
    {
        multiplier: 1000 * 60 * 60 * 24 * 7,
        patterns: ['hafta', 'week', 'weeks?', 'w']
    },
    {
        multiplier: 1000 * 60 * 60 * 24 * 30,
        patterns: ['ay', 'month', 'months?']
    },
    {
        multiplier: 1000 * 60 * 60 * 24 * 365,
        patterns: ['yıl', 'yil', 'y', 'year', 'years?', 'yrs?']
    },
    {
        multiplier: 1000 * 60 * 60 * 24 * 365 * 100,
        patterns: ['asır', 'asir', 'century', 'centurys?']
    }
];

// Tüm regex'leri tek bir dizi içinde oluştur
const TIME_REGEX = new RegExp(
    `(?<!\\d)(\\d+(\\.\\d+)?)\\s*(${TIME_UNITS.flatMap(t => t.patterns).join('|')})(?![a-zöçşıüğ])`,
    'gi'
);


/**
 * Zaman ifadesi içeren değeri milisaniye cinsine çevirme
 * @param {String|Number} input Zaman ifadesi içeren değer
 * @param {"milisaniye" | "saniye" | "dakika" | "saat" | "gün" | "hafta" | "ay" | "yıl" | "asır"} returnUnit Dönüşüm yapılacak birim
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

function mstr(input, returnUnit) {
    // Eğer input boşsa 0 döndür
    if (!input) return 0;

    // Eğer input zaten sayıysa doğrudan döndür
    if (!isNaN(Number(input))) return Number(input);

    // Eğer input string değilse geçersiz say
    if (typeof input !== 'string') return 0;

    input = input.trim();

    // Negatif değer kontrolü
    const isNegative = /^(-|eksi)/i.test(input);
    if (isNegative) input = input.replace(/^(-|eksi)/i, '').trim();

    let total = 0;

    // Metindeki tüm zaman ifadelerini bul
    const matches = input.matchAll(TIME_REGEX);
    for (const match of matches) {
        const value = parseFloat(match[1]);
        const unit = match[3].toLowerCase();

        // Hangi zaman birimiyle eşleştiğini bul
        const unitObj = TIME_UNITS.find(u => u.patterns.includes(unit));
        if (!unitObj) continue;

        total += value * unitObj.multiplier;
    }

    // Eğer farklı bir birimde dönüş istenmişse çevir
    if (returnUnit) {
        const unitObj = TIME_UNITS.find(u =>
            u.patterns.includes(returnUnit.toLowerCase())
        );
        if (unitObj) {
            total /= unitObj.multiplier;
        }
    }

    return isNegative ? -total : total;
}

export default mstr;