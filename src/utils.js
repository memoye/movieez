import { pic, texture } from "./assets"
import { fetchVids, openTrailer } from "./features/trailer/trailerSlice"

export const languagesJSON = {
    "ab": { "name": "Abkhaz", "nativeName": "аҧсуа" },
    "aa": { "name": "Afar", "nativeName": "Afaraf" },
    "af": { "name": "Afrikaans", "nativeName": "Afrikaans" },
    "ak": { "name": "Akan", "nativeName": "Akan" },
    "sq": { "name": "Albanian", "nativeName": "Shqip" },
    "am": { "name": "Amharic", "nativeName": "አማርኛ" },
    "ar": { "name": "Arabic", "nativeName": "العربية" },
    "an": { "name": "Aragonese", "nativeName": "Aragonés" },
    "hy": { "name": "Armenian", "nativeName": "Հայերեն" },
    "as": { "name": "Assamese", "nativeName": "অসমীয়া" },
    "av": { "name": "Avaric", "nativeName": "авар мацӀ, магӀарул мацӀ" },
    "ae": { "name": "Avestan", "nativeName": "avesta" },
    "ay": { "name": "Aymara", "nativeName": "aymar aru" },
    "az": { "name": "Azerbaijani", "nativeName": "azərbaycan dili" },
    "bm": { "name": "Bambara", "nativeName": "bamanankan" },
    "ba": { "name": "Bashkir", "nativeName": "башҡорт теле" },
    "eu": { "name": "Basque", "nativeName": "euskara, euskera" },
    "be": { "name": "Belarusian", "nativeName": "Беларуская" },
    "bn": { "name": "Bengali", "nativeName": "বাংলা" },
    "bh": { "name": "Bihari", "nativeName": "भोजपुरी" },
    "bi": { "name": "Bislama", "nativeName": "Bislama" },
    "bs": { "name": "Bosnian", "nativeName": "bosanski jezik" },
    "br": { "name": "Breton", "nativeName": "brezhoneg" },
    "bg": { "name": "Bulgarian", "nativeName": "български език" },
    "my": { "name": "Burmese", "nativeName": "ဗမာစာ" },
    "ca": { "name": "Catalan; Valencian", "nativeName": "Català" },
    "ch": { "name": "Chamorro", "nativeName": "Chamoru" },
    "ce": { "name": "Chechen", "nativeName": "нохчийн мотт" },
    "ny": { "name": "Chichewa; Chewa; Nyanja", "nativeName": "chiCheŵa, chinyanja" },
    "zh": { "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語" },
    "cv": { "name": "Chuvash", "nativeName": "чӑваш чӗлхи" },
    "kw": { "name": "Cornish", "nativeName": "Kernewek" },
    "co": { "name": "Corsican", "nativeName": "corsu, lingua corsa" },
    "cr": { "name": "Cree", "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ" },
    "hr": { "name": "Croatian", "nativeName": "hrvatski" },
    "cs": { "name": "Czech", "nativeName": "česky, čeština" },
    "da": { "name": "Danish", "nativeName": "dansk" },
    "dv": { "name": "Divehi; Dhivehi; Maldivian;", "nativeName": "ދިވެހި" },
    "nl": { "name": "Dutch", "nativeName": "Nederlands, Vlaams" },
    "en": { "name": "English", "nativeName": "English" },
    "eo": { "name": "Esperanto", "nativeName": "Esperanto" },
    "et": { "name": "Estonian", "nativeName": "eesti, eesti keel" },
    "ee": { "name": "Ewe", "nativeName": "Eʋegbe" },
    "fo": { "name": "Faroese", "nativeName": "føroyskt" },
    "fj": { "name": "Fijian", "nativeName": "vosa Vakaviti" },
    "fi": { "name": "Finnish", "nativeName": "suomi, suomen kieli" },
    "fr": { "name": "French", "nativeName": "français, langue française" },
    "ff": { "name": "Fula; Fulah; Pulaar; Pular", "nativeName": "Fulfulde, Pulaar, Pular" },
    "gl": { "name": "Galician", "nativeName": "Galego" },
    "ka": { "name": "Georgian", "nativeName": "ქართული" },
    "de": { "name": "German", "nativeName": "Deutsch" },
    "el": { "name": "Greek, Modern", "nativeName": "Ελληνικά" },
    "gn": { "name": "Guaraní", "nativeName": "Avañeẽ" },
    "gu": { "name": "Gujarati", "nativeName": "ગુજરાતી" },
    "ht": { "name": "Haitian; Haitian Creole", "nativeName": "Kreyòl ayisyen" },
    "ha": { "name": "Hausa", "nativeName": "Hausa, هَوُسَ" },
    "he": { "name": "Hebrew (modern)", "nativeName": "עברית" },
    "hz": { "name": "Herero", "nativeName": "Otjiherero" },
    "hi": { "name": "Hindi", "nativeName": "हिन्दी, हिंदी" },
    "ho": { "name": "Hiri Motu", "nativeName": "Hiri Motu" },
    "hu": { "name": "Hungarian", "nativeName": "Magyar" },
    "ia": { "name": "Interlingua", "nativeName": "Interlingua" },
    "id": { "name": "Indonesian", "nativeName": "Bahasa Indonesia" },
    "ie": { "name": "Interlingue", "nativeName": "Originally called Occidental; then Interlingue after WWII" },
    "ga": { "name": "Irish", "nativeName": "Gaeilge" },
    "ig": { "name": "Igbo", "nativeName": "Asụsụ Igbo" },
    "ik": { "name": "Inupiaq", "nativeName": "Iñupiaq, Iñupiatun" },
    "io": { "name": "Ido", "nativeName": "Ido" },
    "is": { "name": "Icelandic", "nativeName": "Íslenska" },
    "it": { "name": "Italian", "nativeName": "Italiano" },
    "iu": { "name": "Inuktitut", "nativeName": "ᐃᓄᒃᑎᑐᑦ" },
    "ja": { "name": "Japanese", "nativeName": "日本語 (にほんご／にっぽんご)" },
    "jv": { "name": "Javanese", "nativeName": "basa Jawa" },
    "kl": { "name": "Kalaallisut, Greenlandic", "nativeName": "kalaallisut, kalaallit oqaasii" },
    "kn": { "name": "Kannada", "nativeName": "ಕನ್ನಡ" },
    "kr": { "name": "Kanuri", "nativeName": "Kanuri" },
    "ks": { "name": "Kashmiri", "nativeName": "कश्मीरी, كشميري‎" },
    "kk": { "name": "Kazakh", "nativeName": "Қазақ тілі" },
    "km": { "name": "Khmer", "nativeName": "ភាសាខ្មែរ" },
    "ki": { "name": "Kikuyu, Gikuyu", "nativeName": "Gĩkũyũ" },
    "rw": { "name": "Kinyarwanda", "nativeName": "Ikinyarwanda" },
    "ky": { "name": "Kirghiz, Kyrgyz", "nativeName": "кыргыз тили" },
    "kv": { "name": "Komi", "nativeName": "коми кыв" },
    "kg": { "name": "Kongo", "nativeName": "KiKongo" },
    "ko": { "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)" },
    "ku": { "name": "Kurdish", "nativeName": "Kurdî, كوردی‎" },
    "kj": { "name": "Kwanyama, Kuanyama", "nativeName": "Kuanyama" },
    "la": { "name": "Latin", "nativeName": "latine, lingua latina" },
    "lb": { "name": "Luxembourgish, Letzeburgesch", "nativeName": "Lëtzebuergesch" },
    "lg": { "name": "Luganda", "nativeName": "Luganda" },
    "li": { "name": "Limburgish, Limburgan, Limburger", "nativeName": "Limburgs" },
    "ln": { "name": "Lingala", "nativeName": "Lingála" },
    "lo": { "name": "Lao", "nativeName": "ພາສາລາວ" },
    "lt": { "name": "Lithuanian", "nativeName": "lietuvių kalba" },
    "lu": { "name": "Luba-Katanga", "nativeName": "" },
    "lv": { "name": "Latvian", "nativeName": "latviešu valoda" },
    "gv": { "name": "Manx", "nativeName": "Gaelg, Gailck" },
    "mk": { "name": "Macedonian", "nativeName": "македонски јазик" },
    "mg": { "name": "Malagasy", "nativeName": "Malagasy fiteny" },
    "ms": { "name": "Malay", "nativeName": "bahasa Melayu, بهاس ملايو‎" },
    "ml": { "name": "Malayalam", "nativeName": "മലയാളം" },
    "mt": { "name": "Maltese", "nativeName": "Malti" },
    "mi": { "name": "Māori", "nativeName": "te reo Māori" },
    "mr": { "name": "Marathi (Marāṭhī)", "nativeName": "मराठी" },
    "mh": { "name": "Marshallese", "nativeName": "Kajin M̧ajeļ" },
    "mn": { "name": "Mongolian", "nativeName": "монгол" },
    "na": { "name": "Nauru", "nativeName": "Ekakairũ Naoero" },
    "nv": { "name": "Navajo, Navaho", "nativeName": "Diné bizaad, Dinékʼehǰí" },
    "nb": { "name": "Norwegian Bokmål", "nativeName": "Norsk bokmål" },
    "nd": { "name": "North Ndebele", "nativeName": "isiNdebele" },
    "ne": { "name": "Nepali", "nativeName": "नेपाली" },
    "ng": { "name": "Ndonga", "nativeName": "Owambo" },
    "nn": { "name": "Norwegian Nynorsk", "nativeName": "Norsk nynorsk" },
    "no": { "name": "Norwegian", "nativeName": "Norsk" },
    "ii": { "name": "Nuosu", "nativeName": "ꆈꌠ꒿ Nuosuhxop" },
    "nr": { "name": "South Ndebele", "nativeName": "isiNdebele" },
    "oc": { "name": "Occitan", "nativeName": "Occitan" },
    "oj": { "name": "Ojibwe, Ojibwa", "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ" },
    "cu": { "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic", "nativeName": "ѩзыкъ словѣньскъ" },
    "om": { "name": "Oromo", "nativeName": "Afaan Oromoo" },
    "or": { "name": "Oriya", "nativeName": "ଓଡ଼ିଆ" },
    "os": { "name": "Ossetian, Ossetic", "nativeName": "ирон æвзаг" },
    "pa": { "name": "Panjabi, Punjabi", "nativeName": "ਪੰਜਾਬੀ, پنجابی‎" },
    "pi": { "name": "Pāli", "nativeName": "पाऴि" },
    "fa": { "name": "Persian", "nativeName": "فارسی" },
    "pl": { "name": "Polish", "nativeName": "polski" },
    "ps": { "name": "Pashto, Pushto", "nativeName": "پښتو" },
    "pt": { "name": "Portuguese", "nativeName": "Português" },
    "qu": { "name": "Quechua", "nativeName": "Runa Simi, Kichwa" },
    "rm": { "name": "Romansh", "nativeName": "rumantsch grischun" },
    "rn": { "name": "Kirundi", "nativeName": "kiRundi" },
    "ro": { "name": "Romanian, Moldavian, Moldovan", "nativeName": "română" },
    "ru": { "name": "Russian", "nativeName": "русский язык" },
    "sa": { "name": "Sanskrit (Saṁskṛta)", "nativeName": "संस्कृतम्" },
    "sc": { "name": "Sardinian", "nativeName": "sardu" },
    "sd": { "name": "Sindhi", "nativeName": "सिन्धी, سنڌي، سندھی‎" },
    "se": { "name": "Northern Sami", "nativeName": "Davvisámegiella" },
    "sm": { "name": "Samoan", "nativeName": "gagana faa Samoa" },
    "sg": { "name": "Sango", "nativeName": "yângâ tî sängö" },
    "sr": { "name": "Serbian", "nativeName": "српски језик" },
    "gd": { "name": "Scottish Gaelic; Gaelic", "nativeName": "Gàidhlig" },
    "sn": { "name": "Shona", "nativeName": "chiShona" },
    "si": { "name": "Sinhala, Sinhalese", "nativeName": "සිංහල" },
    "sk": { "name": "Slovak", "nativeName": "slovenčina" },
    "sl": { "name": "Slovene", "nativeName": "slovenščina" },
    "so": { "name": "Somali", "nativeName": "Soomaaliga, af Soomaali" },
    "st": { "name": "Southern Sotho", "nativeName": "Sesotho" },
    "es": { "name": "Spanish; Castilian", "nativeName": "español, castellano" },
    "su": { "name": "Sundanese", "nativeName": "Basa Sunda" },
    "sw": { "name": "Swahili", "nativeName": "Kiswahili" },
    "ss": { "name": "Swati", "nativeName": "SiSwati" },
    "sv": { "name": "Swedish", "nativeName": "svenska" },
    "ta": { "name": "Tamil", "nativeName": "தமிழ்" },
    "te": { "name": "Telugu", "nativeName": "తెలుగు" },
    "tg": { "name": "Tajik", "nativeName": "тоҷикӣ, toğikī, تاجیکی‎" },
    "th": { "name": "Thai", "nativeName": "ไทย" },
    "ti": { "name": "Tigrinya", "nativeName": "ትግርኛ" },
    "bo": { "name": "Tibetan Standard, Tibetan, Central", "nativeName": "བོད་ཡིག" },
    "tk": { "name": "Turkmen", "nativeName": "Türkmen, Түркмен" },
    "tl": { "name": "Tagalog", "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔" },
    "tn": { "name": "Tswana", "nativeName": "Setswana" },
    "to": { "name": "Tonga (Tonga Islands)", "nativeName": "faka Tonga" },
    "tr": { "name": "Turkish", "nativeName": "Türkçe" },
    "ts": { "name": "Tsonga", "nativeName": "Xitsonga" },
    "tt": { "name": "Tatar", "nativeName": "татарча, tatarça, تاتارچا‎" },
    "tw": { "name": "Twi", "nativeName": "Twi" },
    "ty": { "name": "Tahitian", "nativeName": "Reo Tahiti" },
    "ug": { "name": "Uighur, Uyghur", "nativeName": "Uyƣurqə, ئۇيغۇرچە‎" },
    "uk": { "name": "Ukrainian", "nativeName": "українська" },
    "ur": { "name": "Urdu", "nativeName": "اردو" },
    "uz": { "name": "Uzbek", "nativeName": "zbek, Ўзбек, أۇزبېك‎" },
    "ve": { "name": "Venda", "nativeName": "Tshivenḓa" },
    "vi": { "name": "Vietnamese", "nativeName": "Tiếng Việt" },
    "vo": { "name": "Volapük", "nativeName": "Volapük" },
    "wa": { "name": "Walloon", "nativeName": "Walon" },
    "cy": { "name": "Welsh", "nativeName": "Cymraeg" },
    "wo": { "name": "Wolof", "nativeName": "Wollof" },
    "fy": { "name": "Western Frisian", "nativeName": "Frysk" },
    "xh": { "name": "Xhosa", "nativeName": "isiXhosa" },
    "yi": { "name": "Yiddish", "nativeName": "ייִדיש" },
    "yo": { "name": "Yoruba", "nativeName": "Yorùbá" },
    "za": { "name": "Zhuang, Chuang", "nativeName": "Saɯ cueŋƅ, Saw cuengh" }
}

export const sampleMovie = {
    "adult": false,
    "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    "belongs_to_collection": {
        "id": 939352,
        "name": "Transformers: Rise of the Beasts Collection",
        "poster_path": "/6sAdtwp5LV0jlNVhefTMEsjP7py.jpg",
        "backdrop_path": null
    },
    "budget": 195000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "https://www.transformersmovie.com",
    "id": 667538,
    "imdb_id": "tt5090568",
    "original_language": "en",
    "original_title": "Transformers: Rise of the Beasts",
    "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "popularity": 865.072,
    "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    "production_companies": [
        {
            "id": 82819,
            "logo_path": "/gXfFl9pRPaoaq14jybEn1pHeldr.png",
            "name": "Skydance",
            "origin_country": "US"
        },
        {
            "id": 4,
            "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
            "name": "Paramount",
            "origin_country": "US"
        },
        {
            "id": 435,
            "logo_path": "/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png",
            "name": "di Bonaventura Pictures",
            "origin_country": "US"
        },
        {
            "id": 6734,
            "logo_path": null,
            "name": "Bay Films",
            "origin_country": "US"
        },
        {
            "id": 114732,
            "logo_path": "/tNCbisMxO5mX2X2bOQxHHQZVYnT.png",
            "name": "New Republic Pictures",
            "origin_country": "US"
        },
        {
            "id": 38831,
            "logo_path": null,
            "name": "Tom DeSanto/Don Murphy Production",
            "origin_country": ""
        },
        {
            "id": 2598,
            "logo_path": "/i42C5gRq7XqlG4S9vkchuJZfrBn.png",
            "name": "Hasbro",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2023-06-06",
    "revenue": 429800000,
    "runtime": 127,
    "spoken_languages": [
        {
            "english_name": "Quechua",
            "iso_639_1": "qu",
            "name": ""
        },
        {
            "english_name": "Spanish",
            "iso_639_1": "es",
            "name": "Español"
        },
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Unite or fall.",
    "title": "Transformers: Rise of the Beasts",
    "video": false,
    "vote_average": 7.484,
    "vote_count": 3091,
    "credits": {
        "cast": [
            {
                "adult": false,
                "gender": 2,
                "id": 1560244,
                "known_for_department": "Acting",
                "name": "Anthony Ramos",
                "original_name": "Anthony Ramos",
                "popularity": 17.714,
                "profile_path": "/2Stnm8PQI7xHkVwINb4MhS7LOuR.jpg",
                "cast_id": 6,
                "character": "Noah Diaz",
                "credit_id": "60662146e1ad790029066453",
                "order": 0
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1676520,
                "known_for_department": "Acting",
                "name": "Dominique Fishback",
                "original_name": "Dominique Fishback",
                "popularity": 12.573,
                "profile_path": "/zduC0PM7xKzFX4F7DH8CCt5gt6O.jpg",
                "cast_id": 7,
                "character": "Elena Wallace",
                "credit_id": "608b0e363852020040ff410d",
                "order": 1
            },
            {
                "adult": false,
                "gender": 2,
                "id": 19540,
                "known_for_department": "Acting",
                "name": "Peter Cullen",
                "original_name": "Peter Cullen",
                "popularity": 16.673,
                "profile_path": "/9Snf4fBUkk5MrAjqtNtgZRJYJbj.jpg",
                "cast_id": 10,
                "character": "Optimus Prime (voice)",
                "credit_id": "60d25b2b07165000738d3a34",
                "order": 2
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2372,
                "known_for_department": "Acting",
                "name": "Ron Perlman",
                "original_name": "Ron Perlman",
                "popularity": 42.213,
                "profile_path": "/9riPBfsWpzEzh2y9ucxTW22iakI.jpg",
                "cast_id": 11,
                "character": "Optimus Primal (voice)",
                "credit_id": "60d9fd440b731600456062e0",
                "order": 3
            },
            {
                "adult": false,
                "gender": 2,
                "id": 22970,
                "known_for_department": "Acting",
                "name": "Peter Dinklage",
                "original_name": "Peter Dinklage",
                "popularity": 22.144,
                "profile_path": "/9CAd7wr8QZyIN0E7nm8v1B6WkGn.jpg",
                "cast_id": 59,
                "character": "Scourge (voice)",
                "credit_id": "6388e6840398ab007f8be4f4",
                "order": 4
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1620,
                "known_for_department": "Acting",
                "name": "Michelle Yeoh",
                "original_name": "Michelle Yeoh",
                "popularity": 23.557,
                "profile_path": "/6oxvfyrrM3YmhgFZSqc8ESqPZoC.jpg",
                "cast_id": 40,
                "character": "Airazor (voice)",
                "credit_id": "6345fb88d6c300007f5f9653",
                "order": 5
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1427948,
                "known_for_department": "Acting",
                "name": "Pete Davidson",
                "original_name": "Pete Davidson",
                "popularity": 29.309,
                "profile_path": "/mSlLMk45CUgMGT1o7Pkh9zYaLxK.jpg",
                "cast_id": 41,
                "character": "Mirage (voice)",
                "credit_id": "6345fb9407e2810082f15336",
                "order": 6
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1700631,
                "known_for_department": "Acting",
                "name": "Liza Koshy",
                "original_name": "Liza Koshy",
                "popularity": 11.04,
                "profile_path": "/67PtOsPiLTvyFtRtJ1pK23oJICc.jpg",
                "cast_id": 60,
                "character": "Arcee (voice)",
                "credit_id": "6388e6941b157d00b7888461",
                "order": 7
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2627590,
                "known_for_department": "Acting",
                "name": "Cristo Fernández",
                "original_name": "Cristo Fernández",
                "popularity": 5.911,
                "profile_path": "/pRuCGBvmLgtALcEUcFemzTDYad1.jpg",
                "cast_id": 63,
                "character": "Wheeljack (voice)",
                "credit_id": "6388e790a410c800c887a6a1",
                "order": 8
            },
            {
                "adult": false,
                "gender": 1,
                "id": 141610,
                "known_for_department": "Acting",
                "name": "Luna Lauren Velez",
                "original_name": "Luna Lauren Velez",
                "popularity": 17.567,
                "profile_path": "/98BvmTJCZHx0jPv0oNcv04Jkmfb.jpg",
                "cast_id": 17,
                "character": "Breanna Diaz",
                "credit_id": "612ee010eb79c200446713ee",
                "order": 9
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2940842,
                "known_for_department": "Acting",
                "name": "Dean Scott Vazquez",
                "original_name": "Dean Scott Vazquez",
                "popularity": 38.738,
                "profile_path": "/bo4Cmv8rXIYSskIbMFbrcIedFnG.jpg",
                "cast_id": 68,
                "character": "Kris Diaz",
                "credit_id": "644b9867336e01054173538e",
                "order": 10
            },
            {
                "adult": false,
                "gender": 2,
                "id": 3002060,
                "known_for_department": "Acting",
                "name": "Tobe Nwigwe",
                "original_name": "Tobe Nwigwe",
                "popularity": 2.596,
                "profile_path": "/52Zu83S7T9tkzQeQuLyLJgUoXVa.jpg",
                "cast_id": 14,
                "character": "Reek",
                "credit_id": "60ecdb57706e560045c05a3b",
                "order": 11
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1890500,
                "known_for_department": "Acting",
                "name": "Sarah Stiles",
                "original_name": "Sarah Stiles",
                "popularity": 7.255,
                "profile_path": "/t1OuHZmz9GlbFu7bfOUg3nzIki6.jpg",
                "cast_id": 109,
                "character": "Jillian",
                "credit_id": "64826db5e272600107210afc",
                "order": 12
            },
            {
                "adult": false,
                "gender": 1,
                "id": 90461,
                "known_for_department": "Acting",
                "name": "Leni Parker",
                "original_name": "Leni Parker",
                "popularity": 5.462,
                "profile_path": "/rmOCAuZxYO50EmRxNDdrS3JB6f1.jpg",
                "cast_id": 113,
                "character": "Ms. Greene",
                "credit_id": "64826e6cc9dbf9011dfad449",
                "order": 13
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2069637,
                "known_for_department": "Acting",
                "name": "Frank Marrs",
                "original_name": "Frank Marrs",
                "popularity": 0.6,
                "profile_path": "/6uEP6rv08fuX0vgyEot9FAuY60L.jpg",
                "cast_id": 112,
                "character": "Receptionist",
                "credit_id": "64826e4ec9dbf900e3fe7b3b",
                "order": 14
            },
            {
                "adult": false,
                "gender": 2,
                "id": 237,
                "known_for_department": "Acting",
                "name": "Aidan Devine",
                "original_name": "Aidan Devine",
                "popularity": 9.142,
                "profile_path": "/3qrUCw73cAN0923x5jCxAiiSaJE.jpg",
                "cast_id": 110,
                "character": "Bishop",
                "credit_id": "64826dcec9dbf900c5708b9b",
                "order": 15
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2567003,
                "known_for_department": "Acting",
                "name": "Kerwin Jackson",
                "original_name": "Kerwin Jackson",
                "popularity": 0.652,
                "profile_path": null,
                "cast_id": 114,
                "character": "Hotel Security Guard",
                "credit_id": "6486a4fac0348b00aed510b6",
                "order": 16
            },
            {
                "adult": false,
                "gender": 2,
                "id": 59613,
                "known_for_department": "Crew",
                "name": "Mike Chute",
                "original_name": "Mike Chute",
                "popularity": 3.148,
                "profile_path": "/i1zw8nmh7pWHj3KbrVb2GI5ZY2F.jpg",
                "cast_id": 115,
                "character": "NYC Police Officer",
                "credit_id": "6486a50be272600147baadcd",
                "order": 17
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1890932,
                "known_for_department": "Crew",
                "name": "Tyler Hall",
                "original_name": "Tyler Hall",
                "popularity": 4.686,
                "profile_path": "/lN0FFCcqLTAKMv9uyWYR2o1OPRl.jpg",
                "cast_id": 116,
                "character": "NYC Police Officer",
                "credit_id": "6486a51d028f14013b867899",
                "order": 18
            },
            {
                "adult": false,
                "gender": 2,
                "id": 937792,
                "known_for_department": "Acting",
                "name": "Sean Tucker",
                "original_name": "Sean Tucker",
                "popularity": 4.738,
                "profile_path": "/45OP1d88I1Gsr57kRv7Q1u3HbW8.jpg",
                "cast_id": 117,
                "character": "Bridge Security Guard",
                "credit_id": "6486a52899259c00ff0f83d6",
                "order": 19
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1199754,
                "known_for_department": "Acting",
                "name": "Jay Farrar",
                "original_name": "Jay Farrar",
                "popularity": 0.748,
                "profile_path": null,
                "cast_id": 118,
                "character": "Museum Guard",
                "credit_id": "6486a539bf31f25054b6b1c4",
                "order": 20
            },
            {
                "adult": false,
                "gender": 2,
                "id": 4103472,
                "known_for_department": "Acting",
                "name": "Lucas Huarancca",
                "original_name": "Lucas Huarancca",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 111,
                "character": "Amaru",
                "credit_id": "64826e1ce375c000e24e293b",
                "order": 21
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2131852,
                "known_for_department": "Acting",
                "name": "Amiel Cayo",
                "original_name": "Amiel Cayo",
                "popularity": 0.648,
                "profile_path": "/AbkBl3JoWlSbWtpsFqQI7ypTpAe.jpg",
                "cast_id": 119,
                "character": "Amaru's Son",
                "credit_id": "6486a579bf31f250569c5e7f",
                "order": 22
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4107906,
                "known_for_department": "Acting",
                "name": "Santusa Cutipa",
                "original_name": "Santusa Cutipa",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 120,
                "character": "Amaru's Wife",
                "credit_id": "6486a58cbf31f2505f3f5eb2",
                "order": 23
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4107907,
                "known_for_department": "Acting",
                "name": "Yesenia Inquillay",
                "original_name": "Yesenia Inquillay",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 121,
                "character": "Amaru's Granddaughter",
                "credit_id": "6486a5a2bf31f25055a1c086",
                "order": 24
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4107908,
                "known_for_department": "Acting",
                "name": "Sumac T'Ika",
                "original_name": "Sumac T'Ika",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 122,
                "character": "Amaru's Granddaughter",
                "credit_id": "6486a5aee375c000c528aafe",
                "order": 25
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4107909,
                "known_for_department": "Acting",
                "name": "Josue Sallo",
                "original_name": "Josue Sallo",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 123,
                "character": "Amaru's Grandson",
                "credit_id": "6486a5bae375c000ff494d5f",
                "order": 26
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4107910,
                "known_for_department": "Acting",
                "name": "Mellissa Alvarez",
                "original_name": "Mellissa Alvarez",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 124,
                "character": "Amaru's Daughter-In-Law",
                "credit_id": "6486a5ca99259c00accd948a",
                "order": 27
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4107911,
                "known_for_department": "Acting",
                "name": "Gloria Cusi",
                "original_name": "Gloria Cusi",
                "popularity": 0.6,
                "profile_path": null,
                "cast_id": 125,
                "character": "Amaru's Relative",
                "credit_id": "6486a5d2e375c00139c1041e",
                "order": 28
            },
            {
                "adult": false,
                "gender": 2,
                "id": 50217,
                "known_for_department": "Acting",
                "name": "Michael Kelly",
                "original_name": "Michael Kelly",
                "popularity": 12.703,
                "profile_path": "/8V6RKWbbx8lyt3Xxz9B1OAPvHRt.jpg",
                "cast_id": 71,
                "character": "Agent Burke",
                "credit_id": "6472c80195665800a8d821c5",
                "order": 29
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1070318,
                "known_for_department": "Acting",
                "name": "Jason D. Avalos",
                "original_name": "Jason D. Avalos",
                "popularity": 1.38,
                "profile_path": null,
                "cast_id": 126,
                "character": "Security Guard",
                "credit_id": "6486a5eae375c00139c1043d",
                "order": 30
            },
            {
                "adult": false,
                "gender": 1,
                "id": 197819,
                "known_for_department": "Acting",
                "name": "Lesley Stahl",
                "original_name": "Lesley Stahl",
                "popularity": 3.237,
                "profile_path": "/m0vTn5aGk0bw3BNm29wpJHvPpAA.jpg",
                "cast_id": 127,
                "character": "Lesley Stahl",
                "credit_id": "6486a600e375c000ff494d87",
                "order": 31
            },
            {
                "adult": false,
                "gender": 2,
                "id": 31531,
                "known_for_department": "Acting",
                "name": "John DiMaggio",
                "original_name": "John DiMaggio",
                "popularity": 16.744,
                "profile_path": "/awmyFwU6ErFJbGFFzhBYZ9AQn8m.jpg",
                "cast_id": 61,
                "character": "Transit / Stratosphere (voice)",
                "credit_id": "6388e7530398ab007c887aff",
                "order": 32
            },
            {
                "adult": false,
                "gender": 2,
                "id": 164614,
                "known_for_department": "Acting",
                "name": "David Sobolov",
                "original_name": "David Sobolov",
                "popularity": 4.405,
                "profile_path": "/eOBHvvlfQQ4b4120YJ2c2C7anKR.jpg",
                "cast_id": 62,
                "character": "Rhinox / Battletrap / Apelinq (voice)",
                "credit_id": "6388e7800398ab007c887b08",
                "order": 33
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1518933,
                "known_for_department": "Acting",
                "name": "Michaela Jaé Rodriguez",
                "original_name": "Michaela Jaé Rodriguez",
                "popularity": 7.862,
                "profile_path": "/ow7NJkG2ClrHdg13cN8uVvXmESf.jpg",
                "cast_id": 64,
                "character": "Nightbird (voice)",
                "credit_id": "6388e7b3229ae2158118b5e8",
                "order": 34
            },
            {
                "adult": false,
                "gender": 2,
                "id": 91671,
                "known_for_department": "Acting",
                "name": "Colman Domingo",
                "original_name": "Colman Domingo",
                "popularity": 10.897,
                "profile_path": "/2tu6T9ugnf82qIMGVKWSb0dvvq5.jpg",
                "cast_id": 69,
                "character": "Unicron (voice)",
                "credit_id": "644c7ff4596a91054d583299",
                "order": 35
            },
            {
                "adult": false,
                "gender": 2,
                "id": 105875,
                "known_for_department": "Acting",
                "name": "Tongayi Chirisa",
                "original_name": "Tongayi Chirisa",
                "popularity": 12.151,
                "profile_path": "/iNUnPz0fcz2kGYZ5lhkXo042iAl.jpg",
                "cast_id": 67,
                "character": "Cheetor (voice)",
                "credit_id": "644b9829726fb1054a06107d",
                "order": 36
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1517706,
                "known_for_department": "Acting",
                "name": "Luke Jones",
                "original_name": "Luke Jones",
                "popularity": 2.604,
                "profile_path": "/cwwKbw74j5W2MQse64keCl7eGIi.jpg",
                "cast_id": 128,
                "character": "Additional Voice (voice)",
                "credit_id": "6486a766028f1400e4b22021",
                "order": 37
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1674833,
                "known_for_department": "Acting",
                "name": "Yvick Letexier",
                "original_name": "Yvick Letexier",
                "popularity": 2.744,
                "profile_path": "/2mTvSkBjg8ilrOUFUGwVZm1oyBB.jpg",
                "cast_id": 130,
                "character": "Mirage (French Voice)",
                "credit_id": "64f7c4461b722c00e34e9f15",
                "order": 38
            },
            {
                "adult": false,
                "gender": 1,
                "id": 3592,
                "known_for_department": "Acting",
                "name": "Dorothée",
                "original_name": "Dorothée",
                "popularity": 1.4,
                "profile_path": "/uTxAi60VShutWVM0vy9EZZKFrUM.jpg",
                "cast_id": 131,
                "character": "Airazor (French Voice)",
                "credit_id": "64f7c48e1b722c00ae5119e5",
                "order": 39
            },
            {
                "adult": false,
                "gender": 1,
                "id": 52328,
                "known_for_department": "Acting",
                "name": "Ophélie Winter",
                "original_name": "Ophélie Winter",
                "popularity": 4.159,
                "profile_path": "/rqmYdE977fnYgoCEvwLCgi5gtns.jpg",
                "cast_id": 132,
                "character": "Arcee (French Voice)",
                "credit_id": "64f7c4aeffc9de00e132fefc",
                "order": 40
            }
        ],
        "crew": [
            {
                "adult": false,
                "gender": 2,
                "id": 488,
                "known_for_department": "Directing",
                "name": "Steven Spielberg",
                "original_name": "Steven Spielberg",
                "popularity": 38.104,
                "profile_path": "/tZxcg19YQ3e8fJ0pOs7hjlnmmr6.jpg",
                "credit_id": "6154561967dcc90043e3757a",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 15841,
                "known_for_department": "Editing",
                "name": "William Goldenberg",
                "original_name": "William Goldenberg",
                "popularity": 2.744,
                "profile_path": "/eOgoea8HbZt2TfLn0tDNI1TepSN.jpg",
                "credit_id": "647ea96eccde0400de90496b",
                "department": "Editing",
                "job": "Editor"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 865,
                "known_for_department": "Production",
                "name": "Michael Bay",
                "original_name": "Michael Bay",
                "popularity": 20.481,
                "profile_path": "/8I9H9IKROECFEn7usvyChbRMhbI.jpg",
                "credit_id": "6346230c699fb70081dc5b31",
                "department": "Production",
                "job": "Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 3183,
                "known_for_department": "Production",
                "name": "Don Murphy",
                "original_name": "Don Murphy",
                "popularity": 4.117,
                "profile_path": "/xX9mLKLbsnYhdRMrdpK2ULJIe0s.jpg",
                "credit_id": "6388e9fb1b157d009718bc43",
                "department": "Production",
                "job": "Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 3964,
                "known_for_department": "Art",
                "name": "Patrick Tatopoulos",
                "original_name": "Patrick Tatopoulos",
                "popularity": 5.517,
                "profile_path": "/6tkcPHANqVx7sXTXKR8knw87h06.jpg",
                "credit_id": "615456ade8a3e10043033ca6",
                "department": "Art",
                "job": "Production Design"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 6870,
                "known_for_department": "Production",
                "name": "Duncan Henderson",
                "original_name": "Duncan Henderson",
                "popularity": 4.16,
                "profile_path": null,
                "credit_id": "634622eb07e2810082f16f35",
                "department": "Production",
                "job": "Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 10952,
                "known_for_department": "Production",
                "name": "Lorenzo di Bonaventura",
                "original_name": "Lorenzo di Bonaventura",
                "popularity": 1.921,
                "profile_path": "/skMUk4eVV6e08mv31A48jdYpEPp.jpg",
                "credit_id": "5fb33b71ec4552003efa9198",
                "department": "Production",
                "job": "Producer"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 9271,
                "known_for_department": "Art",
                "name": "Michele Laliberte",
                "original_name": "Michele Laliberte",
                "popularity": 0.704,
                "profile_path": null,
                "credit_id": "647ea9ebcf4b8b01419092b4",
                "department": "Art",
                "job": "Supervising Art Director"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 9776,
                "known_for_department": "Production",
                "name": "Chantal Feghali",
                "original_name": "Chantal Feghali",
                "popularity": 2.768,
                "profile_path": null,
                "credit_id": "6154580fe8a3e10043033e91",
                "department": "Visual Effects",
                "job": "Visual Effects Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 13245,
                "known_for_department": "Editing",
                "name": "Joel Negron",
                "original_name": "Joel Negron",
                "popularity": 4.31,
                "profile_path": null,
                "credit_id": "647ea977caef2d00df8a04e9",
                "department": "Editing",
                "job": "Editor"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 17598,
                "known_for_department": "Camera",
                "name": "Enrique Chediak",
                "original_name": "Enrique Chediak",
                "popularity": 2.139,
                "profile_path": null,
                "credit_id": "612edf01fac5020026fce2e2",
                "department": "Camera",
                "job": "Director of Photography"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 10994,
                "known_for_department": "Production",
                "name": "Tom DeSanto",
                "original_name": "Tom DeSanto",
                "popularity": 3.348,
                "profile_path": null,
                "credit_id": "6388e9f1d388ae007f5821ff",
                "department": "Production",
                "job": "Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 24308,
                "known_for_department": "Production",
                "name": "Brian Goldner",
                "original_name": "Brian Goldner",
                "popularity": 1.694,
                "profile_path": null,
                "credit_id": "61545674e18b97008c9759e4",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 24309,
                "known_for_department": "Production",
                "name": "Mark Vahradian",
                "original_name": "Mark Vahradian",
                "popularity": 2.095,
                "profile_path": "/soKYRPi4hYTnVABGkAGCRGnU87J.jpg",
                "credit_id": "6154560ddd731b0042a5fcca",
                "department": "Production",
                "job": "Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 20208,
                "known_for_department": "Production",
                "name": "Brad Fischer",
                "original_name": "Brad Fischer",
                "popularity": 6.298,
                "profile_path": "/xJbGB0pDWKc4tniAQpFxhL7xLyT.jpg",
                "credit_id": "6154568afe6c18008b4680a2",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 20227,
                "known_for_department": "Sound",
                "name": "Felix Andrew",
                "original_name": "Felix Andrew",
                "popularity": 1.092,
                "profile_path": null,
                "credit_id": "647eaba893828e00a765dea2",
                "department": "Sound",
                "job": "Sound Mixer"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 29018,
                "known_for_department": "Production",
                "name": "Dana Goldberg",
                "original_name": "Dana Goldberg",
                "popularity": 6.476,
                "profile_path": null,
                "credit_id": "6154567ffe6c180062a9705a",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 56737,
                "known_for_department": "Production",
                "name": "Don Granger",
                "original_name": "Don Granger",
                "popularity": 4.76,
                "profile_path": "/ilhrUzybaDqaZOiaw1M8dzkZ0ZF.jpg",
                "credit_id": "61545668fe6c1800428e0a94",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 57049,
                "known_for_department": "Production",
                "name": "Brian Oliver",
                "original_name": "Brian Oliver",
                "popularity": 1.185,
                "profile_path": "/jjRoepjAT6nDzNEglANnM9ppPxa.jpg",
                "credit_id": "6154564ddd731b008b8bf77b",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 58433,
                "known_for_department": "Production",
                "name": "David Ellison",
                "original_name": "David Ellison",
                "popularity": 6.212,
                "profile_path": "/jOhjFZWW2KqsOzm4IiE71FHmcIf.jpg",
                "credit_id": "6154569743d9b100294b088f",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 74569,
                "known_for_department": "Writing",
                "name": "Joby Harold",
                "original_name": "Joby Harold",
                "popularity": 4.818,
                "profile_path": "/q3jMKt9f93fZwJHVQoov0hFAFwJ.jpg",
                "credit_id": "5e2f8fdcac8e6b0015bd5c86",
                "department": "Writing",
                "job": "Screenplay"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 74569,
                "known_for_department": "Writing",
                "name": "Joby Harold",
                "original_name": "Joby Harold",
                "popularity": 4.818,
                "profile_path": "/q3jMKt9f93fZwJHVQoov0hFAFwJ.jpg",
                "credit_id": "634623bfcf62cd007eae2392",
                "department": "Writing",
                "job": "Story"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 112947,
                "known_for_department": "Writing",
                "name": "Erich Hoeber",
                "original_name": "Erich Hoeber",
                "popularity": 3.767,
                "profile_path": "/iIV4kJKeaOth7n7iYVMOl2DQ3lw.jpg",
                "credit_id": "634623a7f3b49a007c955918",
                "department": "Writing",
                "job": "Screenplay"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 112948,
                "known_for_department": "Writing",
                "name": "Jon Hoeber",
                "original_name": "Jon Hoeber",
                "popularity": 3.468,
                "profile_path": null,
                "credit_id": "634623acd55c3d007a1acb8a",
                "department": "Writing",
                "job": "Screenplay"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1097215,
                "known_for_department": "Crew",
                "name": "Vaia Zaganas",
                "original_name": "Vaia Zaganas",
                "popularity": 1.138,
                "profile_path": "/hrILpV8bSEe1BYPNkN4mRai8mJW.jpg",
                "credit_id": "636df3a981383100dd361001",
                "department": "Crew",
                "job": "Stunts"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1193446,
                "known_for_department": "Art",
                "name": "Anthony Leonardi III",
                "original_name": "Anthony Leonardi III",
                "popularity": 1.242,
                "profile_path": null,
                "credit_id": "647eaab393828e0133791e3f",
                "department": "Directing",
                "job": "Second Unit Director"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1269034,
                "known_for_department": "Crew",
                "name": "Jen Weissenberg",
                "original_name": "Jen Weissenberg",
                "popularity": 2.068,
                "profile_path": "/eldqpfXTxspQmIr7LQ2qqnWwPYs.jpg",
                "credit_id": "636df3c8d7fbda00e7b750be",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1326399,
                "known_for_department": "Art",
                "name": "Louis Dandonneau",
                "original_name": "Louis Dandonneau",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eaa19ccde0400c13aad03",
                "department": "Art",
                "job": "Set Decoration"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1327222,
                "known_for_department": "Art",
                "name": "Philippe Lord",
                "original_name": "Philippe Lord",
                "popularity": 1.4,
                "profile_path": null,
                "credit_id": "6154571ed1ca2a0042646d04",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1378695,
                "known_for_department": "Sound",
                "name": "Erik Aadahl",
                "original_name": "Erik Aadahl",
                "popularity": 2.915,
                "profile_path": "/Ny1Ru6rlJFGmIB1vhbP9ENZsqo.jpg",
                "credit_id": "647eab9a0fb39800fb0d017b",
                "department": "Sound",
                "job": "Sound Designer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1378695,
                "known_for_department": "Sound",
                "name": "Erik Aadahl",
                "original_name": "Erik Aadahl",
                "popularity": 2.915,
                "profile_path": "/Ny1Ru6rlJFGmIB1vhbP9ENZsqo.jpg",
                "credit_id": "647eab94ccde0400fbcee21b",
                "department": "Sound",
                "job": "Supervising Sound Editor"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1384359,
                "known_for_department": "Art",
                "name": "Félix Larivière-Charron",
                "original_name": "Félix Larivière-Charron",
                "popularity": 0.678,
                "profile_path": null,
                "credit_id": "647ea9fdcf4b8b01419092be",
                "department": "Art",
                "job": "Supervising Art Director"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1384360,
                "known_for_department": "Art",
                "name": "Ann Smart",
                "original_name": "Ann Smart",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "6154572add731b006201d390",
                "department": "Art",
                "job": "Set Decoration"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1398122,
                "known_for_department": "Acting",
                "name": "Gui DaSilva-Greene",
                "original_name": "Gui DaSilva-Greene",
                "popularity": 1.691,
                "profile_path": "/8scb1cYtbaGsrlVJ7szgIBjiuXE.jpg",
                "credit_id": "64cfb6d4d9f4a603bafac9bb",
                "department": "Crew",
                "job": "Stunts"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1402019,
                "known_for_department": "Costume & Make-Up",
                "name": "Colleen Quinton",
                "original_name": "Colleen Quinton",
                "popularity": 1.411,
                "profile_path": null,
                "credit_id": "6154574643d9b10043997e54",
                "department": "Costume & Make-Up",
                "job": "Makeup Designer"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1425353,
                "known_for_department": "Art",
                "name": "Mathieu Giguère",
                "original_name": "Mathieu Giguère",
                "popularity": 0.98,
                "profile_path": null,
                "credit_id": "6154570de18b9700628ef275",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1445475,
                "known_for_department": "Art",
                "name": "Arthur Jongewaard",
                "original_name": "Arthur Jongewaard",
                "popularity": 0.69,
                "profile_path": null,
                "credit_id": "647ea9e193828e011625f13f",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1510496,
                "known_for_department": "Acting",
                "name": "Rodney Alexandre",
                "original_name": "Rodney Alexandre",
                "popularity": 4.607,
                "profile_path": "/2yWvyUvq4dNEamZPjpTCWNYR9jo.jpg",
                "credit_id": "636df34021621b00b49e1e8d",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1538204,
                "known_for_department": "Production",
                "name": "Wittney Horton",
                "original_name": "Wittney Horton",
                "popularity": 0.753,
                "profile_path": null,
                "credit_id": "647ea9810fb39800a7a0106d",
                "department": "Production",
                "job": "Casting"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1551545,
                "known_for_department": "Directing",
                "name": "Steven Caple Jr.",
                "original_name": "Steven Caple Jr.",
                "popularity": 4.302,
                "profile_path": "/aU8p958QyhfV2jurc3L5pn7sN6L.jpg",
                "credit_id": "5fb33ac6d55e4d003cd58727",
                "department": "Directing",
                "job": "Director"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1631516,
                "known_for_department": "Production",
                "name": "Cliff Lanning",
                "original_name": "Cliff Lanning",
                "popularity": 6.209,
                "profile_path": "/fMbBthNyuTtB2bayJHSrmrWIR0G.jpg",
                "credit_id": "647eaaa80fb39800de68a44b",
                "department": "Directing",
                "job": "First Assistant Director"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1635225,
                "known_for_department": "Crew",
                "name": "Alvin Zalamea",
                "original_name": "Alvin Zalamea",
                "popularity": 1.467,
                "profile_path": null,
                "credit_id": "636df392d7fbda00bb8f8259",
                "department": "Crew",
                "job": "Stunt Double"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1640991,
                "known_for_department": "Art",
                "name": "Brent David Mannon",
                "original_name": "Brent David Mannon",
                "popularity": 1.4,
                "profile_path": null,
                "credit_id": "647eaa22ccde0401355c3995",
                "department": "Art",
                "job": "Set Decoration"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1663700,
                "known_for_department": "Sound",
                "name": "Jongnic Bontemps",
                "original_name": "Jongnic Bontemps",
                "popularity": 0.692,
                "profile_path": null,
                "credit_id": "646d29ae9661fc0157366504",
                "department": "Sound",
                "job": "Original Music Composer"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1731667,
                "known_for_department": "Costume & Make-Up",
                "name": "Ciara Whaley",
                "original_name": "Ciara Whaley",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "61545735af58cb0044e29991",
                "department": "Costume & Make-Up",
                "job": "Costume Design"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 1810161,
                "known_for_department": "Art",
                "name": "Marie-Soleil Dénommé",
                "original_name": "Marie-Soleil Dénommé",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647ea9d6caef2d00df8a0514",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1867396,
                "known_for_department": "Art",
                "name": "Georges Samuel",
                "original_name": "Georges Samuel",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eab3b93828e00f9d8d398",
                "department": "Art",
                "job": "Set Dresser"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1890965,
                "known_for_department": "Art",
                "name": "Frédéric Berthiaume",
                "original_name": "Frédéric Berthiaume",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647ea9a30e29a22be293a8e6",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1929030,
                "known_for_department": "Art",
                "name": "Radia Slaimi",
                "original_name": "Radia Slaimi",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eab7bcaef2d00fce6ffb2",
                "department": "Art",
                "job": "Set Designer"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 1938584,
                "known_for_department": "Crew",
                "name": "Nathalie Legault",
                "original_name": "Nathalie Legault",
                "popularity": 0.98,
                "profile_path": null,
                "credit_id": "647ea93e0e29a22be3284621",
                "department": "Costume & Make-Up",
                "job": "Makeup Artist"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 1981111,
                "known_for_department": "Art",
                "name": "Dennis Ogle",
                "original_name": "Dennis Ogle",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eab2c0fb39801355a903d",
                "department": "Art",
                "job": "Set Decoration Buyer"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2121799,
                "known_for_department": "Art",
                "name": "Manuel Charbonneau",
                "original_name": "Manuel Charbonneau",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eaaf993828e0133791e5a",
                "department": "Art",
                "job": "Set Dresser"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 2224819,
                "known_for_department": "Crew",
                "name": "Nitasha Bhambree",
                "original_name": "Nitasha Bhambree",
                "popularity": 1.015,
                "profile_path": null,
                "credit_id": "636df3511684f700c4ea414a",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2252524,
                "known_for_department": "Directing",
                "name": "Geneviéve Duguay",
                "original_name": "Geneviéve Duguay",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eaa720fb39800de68a42d",
                "department": "Directing",
                "job": "Third Assistant Director"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2295472,
                "known_for_department": "Crew",
                "name": "Adam Winlove-Smith",
                "original_name": "Adam Winlove-Smith",
                "popularity": 4.316,
                "profile_path": "/5zdDvfKOBiCP0i4kurhz4wvfgym.jpg",
                "credit_id": "636df3b61684f70083dbcf63",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 2300589,
                "known_for_department": "Crew",
                "name": "Stephannie Hawkins",
                "original_name": "Stephannie Hawkins",
                "popularity": 21.393,
                "profile_path": "/tXsJfDknfeB4lt1LbVw0hAqxHHb.jpg",
                "credit_id": "636df311d7fbda00ca8ba8df",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 2300590,
                "known_for_department": "Crew",
                "name": "E. Nova Zatzman",
                "original_name": "E. Nova Zatzman",
                "popularity": 1.708,
                "profile_path": "/4wNYheN7WXrp1nR4ugwr5vwZwt3.jpg",
                "credit_id": "636df36d1684f700ab805ddf",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 2389963,
                "known_for_department": "Art",
                "name": "Simon Théberge",
                "original_name": "Simon Théberge",
                "popularity": 1.021,
                "profile_path": null,
                "credit_id": "647eab850e29a22be08e643f",
                "department": "Art",
                "job": "Set Designer"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 2431754,
                "known_for_department": "Art",
                "name": "Ève Boulonne",
                "original_name": "Ève Boulonne",
                "popularity": 1.535,
                "profile_path": null,
                "credit_id": "647ea9bbccde0400c13aacd5",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2435602,
                "known_for_department": "Art",
                "name": "Travis Nunnally",
                "original_name": "Travis Nunnally",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eab210e29a22bdfece642",
                "department": "Art",
                "job": "Set Dresser"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 2560300,
                "known_for_department": "Crew",
                "name": "Vanessa Zamarripa",
                "original_name": "Vanessa Zamarripa",
                "popularity": 5.576,
                "profile_path": "/wxGSsJ53bQPVOG3JRjlCSVrxHPs.jpg",
                "credit_id": "636df37cd7fbda0088757c04",
                "department": "Crew",
                "job": "Stunts"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2561259,
                "known_for_department": "Costume & Make-Up",
                "name": "Eli Girard",
                "original_name": "Eli Girard",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647ea933caef2d00df8a04c6",
                "department": "Costume & Make-Up",
                "job": "Hairstylist"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2615718,
                "known_for_department": "Art",
                "name": "Michael Nallan",
                "original_name": "Michael Nallan",
                "popularity": 1.38,
                "profile_path": null,
                "credit_id": "647eaa2dcf4b8b00a878f11c",
                "department": "Art",
                "job": "Set Decoration"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2806442,
                "known_for_department": "Art",
                "name": "Shoko Kambara",
                "original_name": "Shoko Kambara",
                "popularity": 0.702,
                "profile_path": null,
                "credit_id": "647eab100e29a22bdfece636",
                "department": "Art",
                "job": "Assistant Art Director"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 2998872,
                "known_for_department": "Production",
                "name": "Valerii An",
                "original_name": "Valerii An",
                "popularity": 1.38,
                "profile_path": null,
                "credit_id": "615455eae8a3e10062205c5a",
                "department": "Production",
                "job": "Executive Producer"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3005590,
                "known_for_department": "Art",
                "name": "Eduardo Santibanez",
                "original_name": "Eduardo Santibanez",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eab47ccde0400de904a35",
                "department": "Art",
                "job": "Set Dresser"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3072850,
                "known_for_department": "Writing",
                "name": "Darnell Metayer",
                "original_name": "Darnell Metayer",
                "popularity": 1.115,
                "profile_path": null,
                "credit_id": "63462393cdf2e6007ad2a2c0",
                "department": "Writing",
                "job": "Screenplay"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3072852,
                "known_for_department": "Writing",
                "name": "Josh Peters",
                "original_name": "Josh Peters",
                "popularity": 1.036,
                "profile_path": null,
                "credit_id": "634623a0f621b20079f98b95",
                "department": "Writing",
                "job": "Screenplay"
            },
            {
                "adult": false,
                "gender": 2,
                "id": 3128690,
                "known_for_department": "Costume & Make-Up",
                "name": "Frédéric Bélanger",
                "original_name": "Frédéric Bélanger",
                "popularity": 0.98,
                "profile_path": null,
                "credit_id": "647ea905ccde0400c13aac83",
                "department": "Costume & Make-Up",
                "job": "Hair Department Head"
            },
            {
                "adult": false,
                "gender": 1,
                "id": 3158816,
                "known_for_department": "Art",
                "name": "Caroline Davignon",
                "original_name": "Caroline Davignon",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647ea9c6caef2d00fce6ff02",
                "department": "Art",
                "job": "Art Direction"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3231077,
                "known_for_department": "Art",
                "name": "Clothilde Caillé-Levesque",
                "original_name": "Clothilde Caillé-Levesque",
                "popularity": 0.652,
                "profile_path": null,
                "credit_id": "647eaaefccde040118aae629",
                "department": "Art",
                "job": "Set Designer"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3527987,
                "known_for_department": "Crew",
                "name": "Kye Walstrom",
                "original_name": "Kye Walstrom",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "636df3d721621b007dd9348c",
                "department": "Crew",
                "job": "Stunt Driver"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3743667,
                "known_for_department": "Directing",
                "name": "Esteban Sánchez",
                "original_name": "Esteban Sánchez",
                "popularity": 0.753,
                "profile_path": null,
                "credit_id": "647eaadccf4b8b00c3d3996f",
                "department": "Directing",
                "job": "Second Assistant Director"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 3987675,
                "known_for_department": "Directing",
                "name": "James Madigan",
                "original_name": "James Madigan",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eaac6caef2d00c29bb41b",
                "department": "Directing",
                "job": "Second Unit Director"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4099165,
                "known_for_department": "Costume & Make-Up",
                "name": "Melissa Puch",
                "original_name": "Melissa Puch",
                "popularity": 0.648,
                "profile_path": null,
                "credit_id": "647ea94993828e00dcde3a42",
                "department": "Costume & Make-Up",
                "job": "Makeup Artist"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4099166,
                "known_for_department": "Costume & Make-Up",
                "name": "Soraya Qadi",
                "original_name": "Soraya Qadi",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647ea9550e29a22be1f0ec91",
                "department": "Costume & Make-Up",
                "job": "Key Hair Stylist"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4099171,
                "known_for_department": "Directing",
                "name": "Clara Haddad",
                "original_name": "Clara Haddad",
                "popularity": 1.4,
                "profile_path": null,
                "credit_id": "647eaa9793828e00a765de39",
                "department": "Directing",
                "job": "Third Assistant Director"
            },
            {
                "adult": false,
                "gender": 0,
                "id": 4099175,
                "known_for_department": "Art",
                "name": "Dale Byrns",
                "original_name": "Dale Byrns",
                "popularity": 0.6,
                "profile_path": null,
                "credit_id": "647eaae7caef2d01362c99b2",
                "department": "Art",
                "job": "Set Designer"
            }
        ]
    },
    "similar": {
        "page": 1,
        "results": [
            {
                "adult": false,
                "backdrop_path": "/4svggv4gfe6vHsrGpaRMzrXLozt.jpg",
                "genre_ids": [
                    80,
                    35,
                    10402
                ],
                "id": 299,
                "original_language": "en",
                "original_title": "Ocean's Eleven",
                "overview": "Danny Ocean and his gang attempt to rob the five biggest casinos in Las Vegas in one night.",
                "popularity": 11.554,
                "poster_path": "/A4R6u7SidBPVXMVzGSysCiRGTRz.jpg",
                "release_date": "1960-08-10",
                "title": "Ocean's Eleven",
                "video": false,
                "vote_average": 6.416,
                "vote_count": 298
            },
            {
                "adult": false,
                "backdrop_path": "/bAG05yQkT56yFuLAETr12UfK05y.jpg",
                "genre_ids": [
                    28,
                    80,
                    53,
                    12
                ],
                "id": 326,
                "original_language": "en",
                "original_title": "Snakes on a Plane",
                "overview": "America is on the search for the murderer Eddie Kim. Sean Jones must fly to L.A. to testify in a hearing against Kim. Accompanied by FBI agent Neville Flynn, the flight receives some unexpected visitors.",
                "popularity": 25.056,
                "poster_path": "/9wqWQ5rXQG6daMpowqwadGjI768.jpg",
                "release_date": "2006-08-17",
                "title": "Snakes on a Plane",
                "video": false,
                "vote_average": 5.415,
                "vote_count": 1596
            },
            {
                "adult": false,
                "backdrop_path": "/mrfbeWcjgSaZ9NEb0xJMR9xzSeB.jpg",
                "genre_ids": [
                    18
                ],
                "id": 380,
                "original_language": "en",
                "original_title": "Rain Man",
                "overview": "When car dealer Charlie Babbitt learns that his estranged father has died, he returns home to Cincinnati, where he discovers that he has a savant older brother named Raymond and that his father's $3 million fortune is being left to the mental institution in which Raymond lives. Motivated by his father's money, Charlie checks Raymond out of the facility in order to return with him to Los Angeles. The brothers' cross-country trip ends up changing both their lives.",
                "popularity": 25.62,
                "poster_path": "/iTNHwO896WKkaoPtpMMS74d8VNi.jpg",
                "release_date": "1988-12-12",
                "title": "Rain Man",
                "video": false,
                "vote_average": 7.756,
                "vote_count": 5780
            },
            {
                "adult": false,
                "backdrop_path": "/70EtzaGfO2d8X5n8SLI4s61KuJh.jpg",
                "genre_ids": [
                    28,
                    80,
                    53
                ],
                "id": 393,
                "original_language": "en",
                "original_title": "Kill Bill: Vol. 2",
                "overview": "The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, checking off the victims on her Death List Five until there's nothing left to do … but kill Bill.",
                "popularity": 25.006,
                "poster_path": "/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg",
                "release_date": "2004-04-16",
                "title": "Kill Bill: Vol. 2",
                "video": false,
                "vote_average": 7.876,
                "vote_count": 12863
            },
            {
                "adult": false,
                "backdrop_path": "/tOvoWzkUzCMJ8Ra5nkmNg7ehCET.jpg",
                "genre_ids": [
                    12,
                    878,
                    28,
                    27
                ],
                "id": 395,
                "original_language": "en",
                "original_title": "AVP: Alien vs. Predator",
                "overview": "When scientists discover something in the Arctic that appears to be a buried Pyramid, they send a research team out to investigate. Little do they know that they are about to step into a hunting ground where Aliens are grown as sport for the Predator race.",
                "popularity": 25.94,
                "poster_path": "/ySWu5bCnnmgV1cVacvFnFIhgOjp.jpg",
                "release_date": "2004-08-12",
                "title": "AVP: Alien vs. Predator",
                "video": false,
                "vote_average": 5.893,
                "vote_count": 3973
            },
            {
                "adult": false,
                "backdrop_path": "/9DV1pq0FGpqHQxmwyPJdBx2AsyC.jpg",
                "genre_ids": [
                    18,
                    35
                ],
                "id": 191225,
                "original_language": "tl",
                "original_title": "Ang Tatay Kong Nanay",
                "overview": "Coring, a gay beautician, is left with a baby by his former ward, Dennis. The baby grows up thinking that Coring is his real father. Everything seems to be smooth until the kid's mother suddenly shows up to claim her son.",
                "popularity": 0.6,
                "poster_path": "/3vfJ0RFeQsXuyggmm6HDs4HLQrZ.jpg",
                "release_date": "1978-06-02",
                "title": "My Father, My Mother",
                "video": false,
                "vote_average": 4.8,
                "vote_count": 5
            },
            {
                "adult": false,
                "backdrop_path": "/9iRRfMZbnpgHDdKi2lczGGYZXDo.jpg",
                "genre_ids": [
                    12,
                    10751,
                    14
                ],
                "id": 411,
                "original_language": "en",
                "original_title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                "overview": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
                "popularity": 108.351,
                "poster_path": "/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
                "release_date": "2005-12-07",
                "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                "video": false,
                "vote_average": 7.126,
                "vote_count": 9769
            },
            {
                "adult": false,
                "backdrop_path": "/y8yvIrmoM2PLuJcSto7OmOfsXQj.jpg",
                "genre_ids": [
                    14,
                    28,
                    878,
                    53,
                    27
                ],
                "id": 440,
                "original_language": "en",
                "original_title": "Aliens vs Predator: Requiem",
                "overview": "The iconic creatures from two of the scariest film franchises in movie history wage their most brutal battle ever—in our own backyard. The small town of Gunnison, Colorado becomes a war zone between two of the deadliest extra-terrestrial life forms—the Alien and the Predator. When a Predator scout ship crash-lands in the hills outside the town, Alien Facehuggers and a hybrid Alien/Predator are released and begin to terrorize the town.",
                "popularity": 38.595,
                "poster_path": "/jCyJN1vj8jqJJ0vNw4hDH2KlySO.jpg",
                "release_date": "2007-12-25",
                "title": "Aliens vs Predator: Requiem",
                "video": false,
                "vote_average": 5.151,
                "vote_count": 2567
            },
            {
                "adult": false,
                "backdrop_path": "/kt0Ku4cTQUZe4KyZiWC6HsWCbcS.jpg",
                "genre_ids": [
                    35
                ],
                "id": 496,
                "original_language": "en",
                "original_title": "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
                "overview": "Kazakh journalist Borat Sagdiyev travels to America to make a documentary. As he zigzags across the nation, Borat meets real people in real situations with hysterical consequences. His backwards behavior generates strong reactions around him exposing prejudices and hypocrisies in American culture.",
                "popularity": 17.742,
                "poster_path": "/kfkyALfD4G1mlBJI1lOt2QCra4i.jpg",
                "release_date": "2006-11-01",
                "title": "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
                "video": false,
                "vote_average": 6.751,
                "vote_count": 4920
            },
            {
                "adult": false,
                "backdrop_path": "/1mY2vJCGQW2IUgGK6yNc852A4tR.jpg",
                "genre_ids": [
                    16,
                    35,
                    10751
                ],
                "id": 530,
                "original_language": "en",
                "original_title": "A Grand Day Out",
                "overview": "Wallace and Gromit have run out of cheese, and this provides an excellent excuse for the duo to take their holiday to the moon, where, as everyone knows, there is ample cheese.",
                "popularity": 16.429,
                "poster_path": "/og1s6iwv73WMShgNzg0WTtmrKXy.jpg",
                "release_date": "1990-05-18",
                "title": "A Grand Day Out",
                "video": false,
                "vote_average": 7.495,
                "vote_count": 747
            },
            {
                "adult": false,
                "backdrop_path": "/8uofqUSp83cRsZ4GAKy00lAxqHX.jpg",
                "genre_ids": [
                    53,
                    28,
                    878,
                    10770
                ],
                "id": 349135,
                "original_language": "en",
                "original_title": "Roboshark",
                "overview": "What starts off as a typical day on the streets of Seattle soon becomes a terrifying bloodbath, when a great white shark devours an alien space probe…and ROBOSHARK is born. The U.S. military comes after it with guns blazing, but it’s the power of social media that puts an ambitious newscaster and her tech-savvy daughter ahead of everyone else in the race to stop the destruction.",
                "popularity": 4.862,
                "poster_path": "/w9odZRm3gk2NEhuhX0eoYGzhQ0J.jpg",
                "release_date": "2015-07-23",
                "title": "Roboshark",
                "video": false,
                "vote_average": 3.871,
                "vote_count": 35
            },
            {
                "adult": false,
                "backdrop_path": "/5GyWJiBpEvVRPbWGRRYrUSdTNtn.jpg",
                "genre_ids": [
                    16,
                    18
                ],
                "id": 192681,
                "original_language": "en",
                "original_title": "Reach",
                "overview": "A tiny robot is given the gift of life with only one limitation, the length of his power cable.",
                "popularity": 0.878,
                "poster_path": "/j2NsxTPCoYMPk1j76rjUnCvK73v.jpg",
                "release_date": "2009-03-03",
                "title": "Reach",
                "video": false,
                "vote_average": 6.7,
                "vote_count": 14
            },
            {
                "adult": false,
                "backdrop_path": "/2GR6YWvCdtjt1gHiaJcAJAArV5A.jpg",
                "genre_ids": [
                    14,
                    27,
                    53
                ],
                "id": 349200,
                "original_language": "ta",
                "original_title": "ஜீரோ",
                "overview": "A newly-wedded couple's domestic bliss is smashed to smithereens when the wife starts acting crazy. Has she become mentally unstable like her dead mother, or is there a sinister force at work?",
                "popularity": 2.148,
                "poster_path": "/61X7qmMTKVgggLoGZS0OycK4XTc.jpg",
                "release_date": "2016-03-25",
                "title": "Zero",
                "video": false,
                "vote_average": 6.2,
                "vote_count": 5
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27,
                    878
                ],
                "id": 759768,
                "original_language": "en",
                "original_title": "Hybrid",
                "overview": "Hybrid is the story about a mostly human, part alien, part other - being that escapes from an underground facility. Tracked by an assassin, the creature gets mixed up into the lives of the unsuspecting.",
                "popularity": 0.6,
                "poster_path": "/9F1Co2o3LRqG1OpoDkC8UOgNUQU.jpg",
                "release_date": "2016-10-15",
                "title": "Hybrid",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/lm3HUrg2DmlXVGywKJj2qGBf16T.jpg",
                "genre_ids": [
                    27
                ],
                "id": 759951,
                "original_language": "en",
                "original_title": "Athens County Massacre",
                "overview": "Based on the actual murder investigation that shocked a nation When hikers go missing, it's a problem. When the police who are sent to investigate the wayward hikers go missing too, there's a real problem. The ultimate horror unfolds as investigators find the actual footage taken at the scene of the crime, showing in detail what the innocent victims had to endure. Packed with interviews, unseen evidence and banned footage, the Athens County Massacre reveals for the first time, the deep government conspiracy to cover up alien experimentation on human beings.",
                "popularity": 0.6,
                "poster_path": "/51LsaCUZ7MfZjAFQqYjRAYl3Hmk.jpg",
                "release_date": "2008-04-19",
                "title": "Athens County Massacre",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/vo0uR4Ylid4b6fDNSe0Gl3cjum9.jpg",
                "genre_ids": [
                    16,
                    53
                ],
                "id": 193336,
                "original_language": "ja",
                "original_title": "トウキョウ・バイス",
                "overview": "Akira, Junpei, Keiko and Kumiko are members of the Rutz Detective Agency, and are always ready for a good case. When a mysterious murder places a top secret floppy disk in the hands of Junpei, the gang suddenly has a conspiracy on their hands of grandiose proportions. Not only have they made an enemy of politicians and shady characters, but also the munitions manufacturer company Yotsuboshi itself! With murder attempts, rampaging machinery and kidnappers to handle, the group must race against the clock to foil the evil scheme before it's too late!",
                "popularity": 1.461,
                "poster_path": "/dXjHUH8vsDogJF5636hr8y6T11K.jpg",
                "release_date": "1988-06-25",
                "title": "The Tokyo Project",
                "video": false,
                "vote_average": 7,
                "vote_count": 1
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    99
                ],
                "id": 487098,
                "original_language": "en",
                "original_title": "Reeling with PJ Harvey",
                "overview": "A video album by English alternative rock musician PJ Harvey. Most of the footage featured in Reeling is live footage from a performance at the London Forum in May 1993. Other footage featured throughout includes backstage footage, in-studio footage from the Rid of Me sessions, extracts from interviews, and two full-length music videos of \"50ft Queenie\" and \"Man-Size\".",
                "popularity": 0.6,
                "poster_path": "/xRHFH7qlTaTDhfyGEjkhPm0fgwy.jpg",
                "release_date": "1994-01-01",
                "title": "Reeling with PJ Harvey",
                "video": true,
                "vote_average": 8,
                "vote_count": 1
            },
            {
                "adult": false,
                "backdrop_path": "/t0uTFH3m96SM0yaZmaOeOm2cde2.jpg",
                "genre_ids": [
                    99
                ],
                "id": 621680,
                "original_language": "en",
                "original_title": "Happy Android",
                "overview": "Street performer Paul Cooper has an unlikely ally in his ongoing battle with anxiety and depression - his robot, Tubby.",
                "popularity": 0.6,
                "poster_path": "/kjoJrwA06VkmqXKEHVEZkGCFjtB.jpg",
                "release_date": "2019-04-28",
                "title": "Happy Android",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/t57ehAW6quqF3IRUvJ2c8RhYyGG.jpg",
                "genre_ids": [
                    28,
                    878,
                    53
                ],
                "id": 488050,
                "original_language": "es",
                "original_title": "NUBO",
                "overview": "On June 29, 2016, a strange cloud formed in the sky of Cartagena de Indias, Colombia; drawing attention and creating superstition in its inhabitants. Cloud formation alters the behavior of some people, causing them hostile and murderous attitudes toward their peers. A group consisting of four young people who were not affected by the phenomenon, will seek ways to cope with this situation and return peace and tranquility to the city.",
                "popularity": 0.6,
                "poster_path": "/tDDecG1IIIlhS2GjKOcvCQCTDtp.jpg",
                "release_date": "",
                "title": "NUBO",
                "video": false,
                "vote_average": 8,
                "vote_count": 1
            },
            {
                "adult": false,
                "backdrop_path": "/nJ0jz1J3zNja31UEMeklhgFeMw5.jpg",
                "genre_ids": [
                    53,
                    878,
                    9648
                ],
                "id": 1090,
                "original_language": "en",
                "original_title": "The Thirteenth Floor",
                "overview": "Los Angeles. A wealthy man, known as Mr. Fuller, discovers a shocking secret about the world he lives in. Fearing for his life, he leaves a desperate message for a friend of his in the most unexpected place.",
                "popularity": 14.115,
                "poster_path": "/7oaie3ZBc9UuWZLF24crro1pone.jpg",
                "release_date": "1999-04-16",
                "title": "The Thirteenth Floor",
                "video": false,
                "vote_average": 7.03,
                "vote_count": 1147
            }
        ],
        "total_pages": 140,
        "total_results": 2800
    },
    "keywords": {
        "keywords": [
            {
                "id": 5967,
                "name": "peru"
            },
            {
                "id": 9951,
                "name": "alien"
            },
            {
                "id": 10150,
                "name": "end of the world"
            },
            {
                "id": 10542,
                "name": "based on toy"
            },
            {
                "id": 14544,
                "name": "robot"
            },
            {
                "id": 179431,
                "name": "duringcreditsstinger"
            },
            {
                "id": 210608,
                "name": "1990s"
            },
            {
                "id": 243959,
                "name": "brother brother relationship"
            }
        ]
    }
}

export const sampleActor = {
    "adult": false,
    "gender": 2,
    "id": 24342,
    "known_for_department": "Acting",
    "name": "David Prowse",
    "original_name": "David Prowse",
    "popularity": 6.159,
    "profile_path": "/xTocYiKHlRYN8tfh8vyQFsRXC0K.jpg",
    "cast_id": 16,
    "character": "Darth Vader (performer)",
    "credit_id": "52fe420dc3a36847f800047f",
    "order": 8
}



export const filterBtns = [
    { id: Math.random(), label: 'All', isActive: true },
    { id: Math.random(), label: '🤺 Action', isActive: false },
    { id: Math.random(), label: '🧙‍♂️ Adventure', isActive: false },
    { id: Math.random(), label: '🐲 Animation', isActive: false },
    { id: Math.random(), label: '😝 Comedy', isActive: false },
    { id: Math.random(), label: '📄 Documentary', isActive: false },
    { id: Math.random(), label: '🎭 Drama', isActive: false },
    { id: Math.random(), label: '💭 Fantasy', isActive: false },
    { id: Math.random(), label: '😱 Horror', isActive: false },
    { id: Math.random(), label: '🌹 Romance', isActive: false }
]

export const showCategories = [
    { id: Math.random(), label: 'All', isActive: true },
    { id: Math.random(), label: '🤺 Action', isActive: false },
    { id: Math.random(), label: '🧙‍♂️ Adventure', isActive: false },
    { id: Math.random(), label: '🐲 Animation', isActive: false },
    { id: Math.random(), label: '😝 Comedy', isActive: false },
    { id: Math.random(), label: '📄 Documentary', isActive: false },
    { id: Math.random(), label: '🎭 Drama', isActive: false },
    { id: Math.random(), label: '💭 Fantasy', isActive: false },
    { id: Math.random(), label: '😱 Horror', isActive: false },
    { id: Math.random(), label: '🌹 Romance', isActive: false }
]

export const dummyMovies = [
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie
]

export const sampleUser = {
    name: 'Brown',
    userImg: pic,
    coverImg: texture,
    joinDate: convertTimestamp(Date.now()),
    favorites: [...dummyMovies], // movies you like...
    watchlist: [...dummyMovies], //upcoming from watchlist
    genres: ['action', 'sci-fi', 'animations', 'adventure']
}

export function formatDate(dateString) {
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    const formattedDate = `${parseInt(day, 10)} ${months[monthIndex]}, ${year}`;

    return formattedDate;
}

export function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
}

export const base_img_url = 'https://image.tmdb.org/t/p/original'


// convert minutes to 'HH hr, MM minutes'
export function toTimeStr(minutes) {

    minutes = Number(minutes)

    if (minutes < 1) {
        return "Less than a minute";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const hourStr = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
    const minuteStr = remainingMinutes > 0 ? `${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}` : '';

    return `${hourStr}${hourStr && minuteStr ? ', ' : ''}${minuteStr}`;
}

export function getGender(gen) {
    return ['F', 'M'][gen - 1]
}

export function getImage(img) {
    return base_img_url + img
}

export function getYear(dateStr) {
    const date = new Date(dateStr)
    return date.getFullYear()
}

export function preview(inputString) {
    // Split the input string into words
    const words = inputString.split(' ');

    // Slice the first 30 words and join them back into a string
    return words.slice(0, 40).join(' ');
}

export function langToStr(lang) {

    if (languagesJSON[lang].name === languagesJSON[lang].nativeName) {
        return languagesJSON[lang].name
    } else if (languagesJSON[lang].name !== languagesJSON[lang].nativeName) {
        return `${languagesJSON[lang].name} (${languagesJSON[lang].nativeName})`
    } else {
        return '-'
    }
}