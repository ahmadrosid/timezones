"use client";

import Select from "react-tailwindcss-select";
import { useState } from "react";

// const asiaTimezones = {
//   "Asia/Kolkata": "GMT+5:30",
//   "Asia/Dhaka": "GMT+6",
//   "Asia/Thimphu": "GMT+6",
//   "Asia/Rangoon": "GMT+6:30",
//   "Indian/Cocos": "GMT+6:30",
//   "Asia/Bangkok": "GMT+7",
//   "Asia/Shanghai": "GMT+8",
//   "Asia/Manila": "GMT+8",
//   "Asia/Singapore": "GMT+8",
//   "Asia/Kuala_Lumpur": "GMT+8",
//   "Asia/Jakarta": "GMT+8",
//   "Asia/Tokyo": "GMT+9",
//   "Asia/Seoul": "GMT+9",
//   "Asia/Jayapura": "GMT+9",
//   "Australia/Adelaide": "GMT+9:30",
//   "Australia/Sydney": "GMT+10",
//   "Pacific/Guadalcanal": "GMT+11",
//   "Pacific/Efate": "GMT+11",
//   "Pacific/Auckland": "GMT+12",
//   "Pacific/Fiji": "GMT+12",
//   "Pacific/Tongatapu": "GMT+13",
//   "Pacific/Kiritimati": "GMT+14",
// };

const options = [
  {
    label: "Asia",
    options: [
      {
        value: "Asia/Aden",
        label: "Asia/Aden",
      },
      {
        value: "Asia/Almaty",
        label: "Asia/Almaty",
      },
      {
        value: "Asia/Amman",
        label: "Asia/Amman",
      },
      {
        value: "Asia/Anadyr",
        label: "Asia/Anadyr",
      },
      {
        value: "Asia/Aqtau",
        label: "Asia/Aqtau",
      },
      {
        value: "Asia/Aqtobe",
        label: "Asia/Aqtobe",
      },
      {
        value: "Asia/Ashgabat",
        label: "Asia/Ashgabat",
      },
      {
        value: "Asia/Ashkhabad",
        label: "Asia/Ashkhabad",
      },
      {
        value: "Asia/Atyrau",
        label: "Asia/Atyrau",
      },
      {
        value: "Asia/Baghdad",
        label: "Asia/Baghdad",
      },
      {
        value: "Asia/Bahrain",
        label: "Asia/Bahrain",
      },
      {
        value: "Asia/Baku",
        label: "Asia/Baku",
      },
      {
        value: "Asia/Bangkok",
        label: "Asia/Bangkok",
      },
      {
        value: "Asia/Barnaul",
        label: "Asia/Barnaul",
      },
      {
        value: "Asia/Beirut",
        label: "Asia/Beirut",
      },
      {
        value: "Asia/Bishkek",
        label: "Asia/Bishkek",
      },
      {
        value: "Asia/Brunei",
        label: "Asia/Brunei",
      },
      {
        value: "Asia/Calcutta",
        label: "Asia/Calcutta",
      },
      {
        value: "Asia/Chita",
        label: "Asia/Chita",
      },
      {
        value: "Asia/Choibalsan",
        label: "Asia/Choibalsan",
      },
      {
        value: "Asia/Chongqing",
        label: "Asia/Chongqing",
      },
      {
        value: "Asia/Chungking",
        label: "Asia/Chungking",
      },
      {
        value: "Asia/Colombo",
        label: "Asia/Colombo",
      },
      {
        value: "Asia/Dacca",
        label: "Asia/Dacca",
      },
      {
        value: "Asia/Damascus",
        label: "Asia/Damascus",
      },
      {
        value: "Asia/Dhaka",
        label: "Asia/Dhaka",
      },
      {
        value: "Asia/Dili",
        label: "Asia/Dili",
      },
      {
        value: "Asia/Dubai",
        label: "Asia/Dubai",
      },
      {
        value: "Asia/Dushanbe",
        label: "Asia/Dushanbe",
      },
      {
        value: "Asia/Famagusta",
        label: "Asia/Famagusta",
      },
      {
        value: "Asia/Gaza",
        label: "Asia/Gaza",
      },
      {
        value: "Asia/Harbin",
        label: "Asia/Harbin",
      },
      {
        value: "Asia/Hebron",
        label: "Asia/Hebron",
      },
      {
        value: "Asia/Ho_Chi_Minh",
        label: "Asia/Ho_Chi_Minh",
      },
      {
        value: "Asia/Hong_Kong",
        label: "Asia/Hong_Kong",
      },
      {
        value: "Asia/Hovd",
        label: "Asia/Hovd",
      },
      {
        value: "Asia/Irkutsk",
        label: "Asia/Irkutsk",
      },
      {
        value: "Asia/Istanbul",
        label: "Asia/Istanbul",
      },
      {
        value: "Asia/Jakarta",
        label: "Asia/Jakarta",
      },
      {
        value: "Asia/Jayapura",
        label: "Asia/Jayapura",
      },
      {
        value: "Asia/Jerusalem",
        label: "Asia/Jerusalem",
      },
      {
        value: "Asia/Kabul",
        label: "Asia/Kabul",
      },
      {
        value: "Asia/Kamchatka",
        label: "Asia/Kamchatka",
      },
      {
        value: "Asia/Karachi",
        label: "Asia/Karachi",
      },
      {
        value: "Asia/Kashgar",
        label: "Asia/Kashgar",
      },
      {
        value: "Asia/Kathmandu",
        label: "Asia/Kathmandu",
      },
      {
        value: "Asia/Katmandu",
        label: "Asia/Katmandu",
      },
      {
        value: "Asia/Khandyga",
        label: "Asia/Khandyga",
      },
      {
        value: "Asia/Kolkata",
        label: "Asia/Kolkata",
      },
      {
        value: "Asia/Krasnoyarsk",
        label: "Asia/Krasnoyarsk",
      },
      {
        value: "Asia/Kuala_Lumpur",
        label: "Asia/Kuala_Lumpur",
      },
      {
        value: "Asia/Kuching",
        label: "Asia/Kuching",
      },
      {
        value: "Asia/Kuwait",
        label: "Asia/Kuwait",
      },
      {
        value: "Asia/Macao",
        label: "Asia/Macao",
      },
      {
        value: "Asia/Macau",
        label: "Asia/Macau",
      },
      {
        value: "Asia/Magadan",
        label: "Asia/Magadan",
      },
      {
        value: "Asia/Makassar",
        label: "Asia/Makassar",
      },
      {
        value: "Asia/Manila",
        label: "Asia/Manila",
      },
      {
        value: "Asia/Muscat",
        label: "Asia/Muscat",
      },
      {
        value: "Asia/Nicosia",
        label: "Asia/Nicosia",
      },
      {
        value: "Asia/Novokuznetsk",
        label: "Asia/Novokuznetsk",
      },
      {
        value: "Asia/Novosibirsk",
        label: "Asia/Novosibirsk",
      },
      {
        value: "Asia/Omsk",
        label: "Asia/Omsk",
      },
      {
        value: "Asia/Oral",
        label: "Asia/Oral",
      },
      {
        value: "Asia/Phnom_Penh",
        label: "Asia/Phnom_Penh",
      },
      {
        value: "Asia/Pontianak",
        label: "Asia/Pontianak",
      },
      {
        value: "Asia/Pyongyang",
        label: "Asia/Pyongyang",
      },
      {
        value: "Asia/Qatar",
        label: "Asia/Qatar",
      },
      {
        value: "Asia/Qostanay",
        label: "Asia/Qostanay",
      },
      {
        value: "Asia/Qyzylorda",
        label: "Asia/Qyzylorda",
      },
      {
        value: "Asia/Rangoon",
        label: "Asia/Rangoon",
      },
      {
        value: "Asia/Riyadh",
        label: "Asia/Riyadh",
      },
      {
        value: "Asia/Saigon",
        label: "Asia/Saigon",
      },
      {
        value: "Asia/Sakhalin",
        label: "Asia/Sakhalin",
      },
      {
        value: "Asia/Samarkand",
        label: "Asia/Samarkand",
      },
      {
        value: "Asia/Seoul",
        label: "Asia/Seoul",
      },
      {
        value: "Asia/Shanghai",
        label: "Asia/Shanghai",
      },
      {
        value: "Asia/Singapore",
        label: "Asia/Singapore",
      },
      {
        value: "Asia/Srednekolymsk",
        label: "Asia/Srednekolymsk",
      },
      {
        value: "Asia/Taipei",
        label: "Asia/Taipei",
      },
      {
        value: "Asia/Tashkent",
        label: "Asia/Tashkent",
      },
      {
        value: "Asia/Tbilisi",
        label: "Asia/Tbilisi",
      },
      {
        value: "Asia/Tehran",
        label: "Asia/Tehran",
      },
      {
        value: "Asia/Tel_Aviv",
        label: "Asia/Tel_Aviv",
      },
      {
        value: "Asia/Thimbu",
        label: "Asia/Thimbu",
      },
      {
        value: "Asia/Thimphu",
        label: "Asia/Thimphu",
      },
      {
        value: "Asia/Tokyo",
        label: "Asia/Tokyo",
      },
      {
        value: "Asia/Tomsk",
        label: "Asia/Tomsk",
      },
      {
        value: "Asia/Ujung_Pandang",
        label: "Asia/Ujung_Pandang",
      },
      {
        value: "Asia/Ulaanbaatar",
        label: "Asia/Ulaanbaatar",
      },
      {
        value: "Asia/Ulan_Bator",
        label: "Asia/Ulan_Bator",
      },
      {
        value: "Asia/Urumqi",
        label: "Asia/Urumqi",
      },
      {
        value: "Asia/Ust-Nera",
        label: "Asia/Ust-Nera",
      },
      {
        value: "Asia/Vientiane",
        label: "Asia/Vientiane",
      },
      {
        value: "Asia/Vladivostok",
        label: "Asia/Vladivostok",
      },
      {
        value: "Asia/Yakutsk",
        label: "Asia/Yakutsk",
      },
      {
        value: "Asia/Yangon",
        label: "Asia/Yangon",
      },
      {
        value: "Asia/Yekaterinburg",
        label: "Asia/Yekaterinburg",
      },
      {
        value: "Asia/Yerevan",
        label: "Asia/Yerevan",
      },
    ],
  },
  {
    label: "Australia",
    options: [
      {
        value: "Australia/ACT",
        label: "Australia/ACT",
      },
      {
        value: "Australia/Adelaide",
        label: "Australia/Adelaide",
      },
      {
        value: "Australia/Brisbane",
        label: "Australia/Brisbane",
      },
      {
        value: "Australia/Broken_Hill",
        label: "Australia/Broken_Hill",
      },
      {
        value: "Australia/Canberra",
        label: "Australia/Canberra",
      },
      {
        value: "Australia/Currie",
        label: "Australia/Currie",
      },
      {
        value: "Australia/Darwin",
        label: "Australia/Darwin",
      },
      {
        value: "Australia/Eucla",
        label: "Australia/Eucla",
      },
      {
        value: "Australia/Hobart",
        label: "Australia/Hobart",
      },
      {
        value: "Australia/LHI",
        label: "Australia/LHI",
      },
      {
        value: "Australia/Lindeman",
        label: "Australia/Lindeman",
      },
      {
        value: "Australia/Lord_Howe",
        label: "Australia/Lord_Howe",
      },
      {
        value: "Australia/Melbourne",
        label: "Australia/Melbourne",
      },
      {
        value: "Australia/NSW",
        label: "Australia/NSW",
      },
      {
        value: "Australia/North",
        label: "Australia/North",
      },
      {
        value: "Australia/Perth",
        label: "Australia/Perth",
      },
      {
        value: "Australia/Queensland",
        label: "Australia/Queensland",
      },
      {
        value: "Australia/South",
        label: "Australia/South",
      },
      {
        value: "Australia/Sydney",
        label: "Australia/Sydney",
      },
      {
        value: "Australia/Tasmania",
        label: "Australia/Tasmania",
      },
      {
        value: "Australia/Victoria",
        label: "Australia/Victoria",
      },
      {
        value: "Australia/West",
        label: "Australia/West",
      },
      {
        value: "Australia/Yancowinna",
        label: "Australia/Yancowinna",
      },
    ],
  },
  {
    label: "Europe",
    options: [
      {
        value: "Europe/Amsterdam",
        label: "Europe/Amsterdam",
      },
      {
        value: "Europe/Andorra",
        label: "Europe/Andorra",
      },
      {
        value: "Europe/Astrakhan",
        label: "Europe/Astrakhan",
      },
      {
        value: "Europe/Athens",
        label: "Europe/Athens",
      },
      {
        value: "Europe/Belfast",
        label: "Europe/Belfast",
      },
      {
        value: "Europe/Belgrade",
        label: "Europe/Belgrade",
      },
      {
        value: "Europe/Berlin",
        label: "Europe/Berlin",
      },
      {
        value: "Europe/Bratislava",
        label: "Europe/Bratislava",
      },
      {
        value: "Europe/Brussels",
        label: "Europe/Brussels",
      },
      {
        value: "Europe/Bucharest",
        label: "Europe/Bucharest",
      },
      {
        value: "Europe/Budapest",
        label: "Europe/Budapest",
      },
      {
        value: "Europe/Busingen",
        label: "Europe/Busingen",
      },
      {
        value: "Europe/Chisinau",
        label: "Europe/Chisinau",
      },
      {
        value: "Europe/Copenhagen",
        label: "Europe/Copenhagen",
      },
      {
        value: "Europe/Dublin",
        label: "Europe/Dublin",
      },
      {
        value: "Europe/Gibraltar",
        label: "Europe/Gibraltar",
      },
      {
        value: "Europe/Guernsey",
        label: "Europe/Guernsey",
      },
      {
        value: "Europe/Helsinki",
        label: "Europe/Helsinki",
      },
      {
        value: "Europe/Isle_of_Man",
        label: "Europe/Isle_of_Man",
      },
      {
        value: "Europe/Istanbul",
        label: "Europe/Istanbul",
      },
      {
        value: "Europe/Jersey",
        label: "Europe/Jersey",
      },
      {
        value: "Europe/Kaliningrad",
        label: "Europe/Kaliningrad",
      },
      {
        value: "Europe/Kiev",
        label: "Europe/Kiev",
      },
      {
        value: "Europe/Kirov",
        label: "Europe/Kirov",
      },
      {
        value: "Europe/Kyiv",
        label: "Europe/Kyiv",
      },
      {
        value: "Europe/Lisbon",
        label: "Europe/Lisbon",
      },
      {
        value: "Europe/Ljubljana",
        label: "Europe/Ljubljana",
      },
      {
        value: "Europe/London",
        label: "Europe/London",
      },
      {
        value: "Europe/Luxembourg",
        label: "Europe/Luxembourg",
      },
      {
        value: "Europe/Madrid",
        label: "Europe/Madrid",
      },
      {
        value: "Europe/Malta",
        label: "Europe/Malta",
      },
      {
        value: "Europe/Mariehamn",
        label: "Europe/Mariehamn",
      },
      {
        value: "Europe/Minsk",
        label: "Europe/Minsk",
      },
      {
        value: "Europe/Monaco",
        label: "Europe/Monaco",
      },
      {
        value: "Europe/Moscow",
        label: "Europe/Moscow",
      },
      {
        value: "Europe/Nicosia",
        label: "Europe/Nicosia",
      },
      {
        value: "Europe/Oslo",
        label: "Europe/Oslo",
      },
      {
        value: "Europe/Paris",
        label: "Europe/Paris",
      },
      {
        value: "Europe/Podgorica",
        label: "Europe/Podgorica",
      },
      {
        value: "Europe/Prague",
        label: "Europe/Prague",
      },
      {
        value: "Europe/Riga",
        label: "Europe/Riga",
      },
      {
        value: "Europe/Rome",
        label: "Europe/Rome",
      },
      {
        value: "Europe/Samara",
        label: "Europe/Samara",
      },
      {
        value: "Europe/San_Marino",
        label: "Europe/San_Marino",
      },
      {
        value: "Europe/Sarajevo",
        label: "Europe/Sarajevo",
      },
      {
        value: "Europe/Saratov",
        label: "Europe/Saratov",
      },
      {
        value: "Europe/Simferopol",
        label: "Europe/Simferopol",
      },
      {
        value: "Europe/Skopje",
        label: "Europe/Skopje",
      },
      {
        value: "Europe/Sofia",
        label: "Europe/Sofia",
      },
      {
        value: "Europe/Stockholm",
        label: "Europe/Stockholm",
      },
      {
        value: "Europe/Tallinn",
        label: "Europe/Tallinn",
      },
      {
        value: "Europe/Tirane",
        label: "Europe/Tirane",
      },
      {
        value: "Europe/Tiraspol",
        label: "Europe/Tiraspol",
      },
      {
        value: "Europe/Ulyanovsk",
        label: "Europe/Ulyanovsk",
      },
      {
        value: "Europe/Uzhgorod",
        label: "Europe/Uzhgorod",
      },
      {
        value: "Europe/Vaduz",
        label: "Europe/Vaduz",
      },
      {
        value: "Europe/Vatican",
        label: "Europe/Vatican",
      },
      {
        value: "Europe/Vienna",
        label: "Europe/Vienna",
      },
      {
        value: "Europe/Vilnius",
        label: "Europe/Vilnius",
      },
      {
        value: "Europe/Volgograd",
        label: "Europe/Volgograd",
      },
      {
        value: "Europe/Warsaw",
        label: "Europe/Warsaw",
      },
      {
        value: "Europe/Zagreb",
        label: "Europe/Zagreb",
      },
      {
        value: "Europe/Zaporozhye",
        label: "Europe/Zaporozhye",
      },
      {
        value: "Europe/Zurich",
        label: "Europe/Zurich",
      },
    ],
  },
  {
    label: "America",
    options: [
      {
        value: "America/Adak",
        label: "America/Adak",
      }, {
        value: "America/Anchorage",
        label: "America/Anchorage",
      }, {
        value: "America/Anguilla",
        label: "America/Anguilla",
      }, {
        value: "America/Antigua",
        label: "America/Antigua",
      }, {
        value: "America/Araguaina",
        label: "America/Araguaina",
      }, {
        value: "America/Argentina/Buenos_Aires",
        label: "America/Argentina/Buenos_Aires",
      }, {
        value: "America/Argentina/Catamarca",
        label: "America/Argentina/Catamarca",
      }, {
        value: "America/Argentina/ComodRivadavia",
        label: "America/Argentina/ComodRivadavia",
      }, {
        value: "America/Argentina/Cordoba",
        label: "America/Argentina/Cordoba",
      }, {
        value: "America/Argentina/Jujuy",
        label: "America/Argentina/Jujuy",
      }, {
        value: "America/Argentina/La_Rioja",
        label: "America/Argentina/La_Rioja",
      }, {
        value: "America/Argentina/Mendoza",
        label: "America/Argentina/Mendoza",
      }, {
        value: "America/Argentina/Rio_Gallegos",
        label: "America/Argentina/Rio_Gallegos",
      }, {
        value: "America/Argentina/Salta",
        label: "America/Argentina/Salta",
      }, {
        value: "America/Argentina/San_Juan",
        label: "America/Argentina/San_Juan",
      }, {
        value: "America/Argentina/San_Luis",
        label: "America/Argentina/San_Luis",
      }, {
        value: "America/Argentina/Tucuman",
        label: "America/Argentina/Tucuman",
      }, {
        value: "America/Argentina/Ushuaia",
        label: "America/Argentina/Ushuaia",
      }, {
        value: "America/Aruba",
        label: "America/Aruba",
      }, {
        value: "America/Asuncion",
        label: "America/Asuncion",
      }, {
        value: "America/Atikokan",
        label: "America/Atikokan",
      }, {
        value: "America/Atka",
        label: "America/Atka",
      }, {
        value: "America/Bahia",
        label: "America/Bahia",
      }, {
        value: "America/Bahia_Banderas",
        label: "America/Bahia_Banderas",
      }, {
        value: "America/Barbados",
        label: "America/Barbados",
      }, {
        value: "America/Belem",
        label: "America/Belem",
      }, {
        value: "America/Belize",
        label: "America/Belize",
      }, {
        value: "America/Blanc-Sablon",
        label: "America/Blanc-Sablon",
      }, {
        value: "America/Boa_Vista",
        label: "America/Boa_Vista",
      }, {
        value: "America/Bogota",
        label: "America/Bogota",
      }, {
        value: "America/Boise",
        label: "America/Boise",
      }, {
        value: "America/Buenos_Aires",
        label: "America/Buenos_Aires",
      }, {
        value: "America/Cambridge_Bay",
        label: "America/Cambridge_Bay",
      }, {
        value: "America/Campo_Grande",
        label: "America/Campo_Grande",
      }, {
        value: "America/Cancun",
        label: "America/Cancun",
      }, {
        value: "America/Caracas",
        label: "America/Caracas",
      }, {
        value: "America/Catamarca",
        label: "America/Catamarca",
      }, {
        value: "America/Cayenne",
        label: "America/Cayenne",
      }, {
        value: "America/Cayman",
        label: "America/Cayman",
      }, {
        value: "America/Chicago",
        label: "America/Chicago",
      }, {
        value: "America/Chihuahua",
        label: "America/Chihuahua",
      }, {
        value: "America/Ciudad_Juarez",
        label: "America/Ciudad_Juarez",
      }, {
        value: "America/Coral_Harbour",
        label: "America/Coral_Harbour",
      }, {
        value: "America/Cordoba",
        label: "America/Cordoba",
      }, {
        value: "America/Costa_Rica",
        label: "America/Costa_Rica",
      }, {
        value: "America/Creston",
        label: "America/Creston",
      }, {
        value: "America/Cuiaba",
        label: "America/Cuiaba",
      }, {
        value: "America/Curacao",
        label: "America/Curacao",
      }, {
        value: "America/Danmarkshavn",
        label: "America/Danmarkshavn",
      }, {
        value: "America/Dawson",
        label: "America/Dawson",
      }, {
        value: "America/Dawson_Creek",
        label: "America/Dawson_Creek",
      }, {
        value: "America/Denver",
        label: "America/Denver",
      }, {
        value: "America/Detroit",
        label: "America/Detroit",
      }, {
        value: "America/Dominica",
        label: "America/Dominica",
      }, {
        value: "America/Edmonton",
        label: "America/Edmonton",
      }, {
        value: "America/Eirunepe",
        label: "America/Eirunepe",
      }, {
        value: "America/El_Salvador",
        label: "America/El_Salvador",
      }, {
        value: "America/Ensenada",
        label: "America/Ensenada",
      }, {
        value: "America/Fort_Nelson",
        label: "America/Fort_Nelson",
      }, {
        value: "America/Fort_Wayne",
        label: "America/Fort_Wayne",
      }, {
        value: "America/Fortaleza",
        label: "America/Fortaleza",
      }, {
        value: "America/Glace_Bay",
        label: "America/Glace_Bay",
      }, {
        value: "America/Godthab",
        label: "America/Godthab",
      }, {
        value: "America/Goose_Bay",
        label: "America/Goose_Bay",
      }, {
        value: "America/Grand_Turk",
        label: "America/Grand_Turk",
      }, {
        value: "America/Grenada",
        label: "America/Grenada",
      }, {
        value: "America/Guadeloupe",
        label: "America/Guadeloupe",
      }, {
        value: "America/Guatemala",
        label: "America/Guatemala",
      }, {
        value: "America/Guayaquil",
        label: "America/Guayaquil",
      }, {
        value: "America/Guyana",
        label: "America/Guyana",
      }, {
        value: "America/Halifax",
        label: "America/Halifax",
      }, {
        value: "America/Havana",
        label: "America/Havana",
      }, {
        value: "America/Hermosillo",
        label: "America/Hermosillo",
      }, {
        value: "America/Indiana/Indianapolis",
        label: "America/Indiana/Indianapolis",
      }, {
        value: "America/Indiana/Knox",
        label: "America/Indiana/Knox",
      }, {
        value: "America/Indiana/Marengo",
        label: "America/Indiana/Marengo",
      }, {
        value: "America/Indiana/Petersburg",
        label: "America/Indiana/Petersburg",
      }, {
        value: "America/Indiana/Tell_City",
        label: "America/Indiana/Tell_City",
      }, {
        value: "America/Indiana/Vevay",
        label: "America/Indiana/Vevay",
      }, {
        value: "America/Indiana/Vincennes",
        label: "America/Indiana/Vincennes",
      }, {
        value: "America/Indiana/Winamac",
        label: "America/Indiana/Winamac",
      }, {
        value: "America/Indianapolis",
        label: "America/Indianapolis",
      }, {
        value: "America/Inuvik",
        label: "America/Inuvik",
      }, {
        value: "America/Iqaluit",
        label: "America/Iqaluit",
      }, {
        value: "America/Jamaica",
        label: "America/Jamaica",
      }, {
        value: "America/Jujuy",
        label: "America/Jujuy",
      }, {
        value: "America/Juneau",
        label: "America/Juneau",
      }, {
        value: "America/Kentucky/Louisville",
        label: "America/Kentucky/Louisville",
      }, {
        value: "America/Kentucky/Monticello",
        label: "America/Kentucky/Monticello",
      }, {
        value: "America/Knox_IN",
        label: "America/Knox_IN",
      }, {
        value: "America/Kralendijk",
        label: "America/Kralendijk",
      }, {
        value: "America/La_Paz",
        label: "America/La_Paz",
      }, {
        value: "America/Lima",
        label: "America/Lima",
      }, {
        value: "America/Los_Angeles",
        label: "America/Los_Angeles",
      }, {
        value: "America/Louisville",
        label: "America/Louisville",
      }, {
        value: "America/Lower_Princes",
        label: "America/Lower_Princes",
      }, {
        value: "America/Maceio",
        label: "America/Maceio",
      }, {
        value: "America/Managua",
        label: "America/Managua",
      }, {
        value: "America/Manaus",
        label: "America/Manaus",
      }, {
        value: "America/Marigot",
        label: "America/Marigot",
      }, {
        value: "America/Martinique",
        label: "America/Martinique",
      }, {
        value: "America/Matamoros",
        label: "America/Matamoros",
      }, {
        value: "America/Mazatlan",
        label: "America/Mazatlan",
      }, {
        value: "America/Mendoza",
        label: "America/Mendoza",
      }, {
        value: "America/Menominee",
        label: "America/Menominee",
      }, {
        value: "America/Merida",
        label: "America/Merida",
      }, {
        value: "America/Metlakatla",
        label: "America/Metlakatla",
      }, {
        value: "America/Mexico_City",
        label: "America/Mexico_City",
      }, {
        value: "America/Miquelon",
        label: "America/Miquelon",
      }, {
        value: "America/Moncton",
        label: "America/Moncton",
      }, {
        value: "America/Monterrey",
        label: "America/Monterrey",
      }, {
        value: "America/Montevideo",
        label: "America/Montevideo",
      }, {
        value: "America/Montreal",
        label: "America/Montreal",
      }, {
        value: "America/Montserrat",
        label: "America/Montserrat",
      }, {
        value: "America/Nassau",
        label: "America/Nassau",
      }, {
        value: "America/New_York",
        label: "America/New_York",
      }, {
        value: "America/Nipigon",
        label: "America/Nipigon",
      }, {
        value: "America/Nome",
        label: "America/Nome",
      }, {
        value: "America/Noronha",
        label: "America/Noronha",
      }, {
        value: "America/North_Dakota/Beulah",
        label: "America/North_Dakota/Beulah",
      }, {
        value: "America/North_Dakota/Center",
        label: "America/North_Dakota/Center",
      }, {
        value: "America/North_Dakota/New_Salem",
        label: "America/North_Dakota/New_Salem",
      }, {
        value: "America/Nuuk",
        label: "America/Nuuk",
      }, {
        value: "America/Ojinaga",
        label: "America/Ojinaga",
      }, {
        value: "America/Panama",
        label: "America/Panama",
      }, {
        value: "America/Pangnirtung",
        label: "America/Pangnirtung",
      }, {
        value: "America/Paramaribo",
        label: "America/Paramaribo",
      }, {
        value: "America/Phoenix",
        label: "America/Phoenix",
      }, {
        value: "America/Port-au-Prince",
        label: "America/Port-au-Prince",
      }, {
        value: "America/Port_of_Spain",
        label: "America/Port_of_Spain",
      }, {
        value: "America/Porto_Acre",
        label: "America/Porto_Acre",
      }, {
        value: "America/Porto_Velho",
        label: "America/Porto_Velho",
      }, {
        value: "America/Puerto_Rico",
        label: "America/Puerto_Rico",
      }, {
        value: "America/Punta_Arenas",
        label: "America/Punta_Arenas",
      }, {
        value: "America/Rainy_River",
        label: "America/Rainy_River",
      }, {
        value: "America/Rankin_Inlet",
        label: "America/Rankin_Inlet",
      }, {
        value: "America/Recife",
        label: "America/Recife",
      }, {
        value: "America/Regina",
        label: "America/Regina",
      }, {
        value: "America/Resolute",
        label: "America/Resolute",
      }, {
        value: "America/Rio_Branco",
        label: "America/Rio_Branco",
      }, {
        value: "America/Rosario",
        label: "America/Rosario",
      }, {
        value: "America/Santa_Isabel",
        label: "America/Santa_Isabel",
      }, {
        value: "America/Santarem",
        label: "America/Santarem",
      }, {
        value: "America/Santiago",
        label: "America/Santiago",
      }, {
        value: "America/Santo_Domingo",
        label: "America/Santo_Domingo",
      }, {
        value: "America/Sao_Paulo",
        label: "America/Sao_Paulo",
      }, {
        value: "America/Scoresbysund",
        label: "America/Scoresbysund",
      }, {
        value: "America/Shiprock",
        label: "America/Shiprock",
      }, {
        value: "America/Sitka",
        label: "America/Sitka",
      }, {
        value: "America/St_Barthelemy",
        label: "America/St_Barthelemy",
      }, {
        value: "America/St_Johns",
        label: "America/St_Johns",
      }, {
        value: "America/St_Kitts",
        label: "America/St_Kitts",
      }, {
        value: "America/St_Lucia",
        label: "America/St_Lucia",
      }, {
        value: "America/St_Thomas",
        label: "America/St_Thomas",
      }, {
        value: "America/St_Vincent",
        label: "America/St_Vincent",
      }, {
        value: "America/Swift_Current",
        label: "America/Swift_Current",
      }, {
        value: "America/Tegucigalpa",
        label: "America/Tegucigalpa",
      }, {
        value: "America/Thule",
        label: "America/Thule",
      }, {
        value: "America/Thunder_Bay",
        label: "America/Thunder_Bay",
      }, {
        value: "America/Tijuana",
        label: "America/Tijuana",
      }, {
        value: "America/Toronto",
        label: "America/Toronto",
      }, {
        value: "America/Tortola",
        label: "America/Tortola",
      }, {
        value: "America/Vancouver",
        label: "America/Vancouver",
      }, {
        value: "America/Virgin",
        label: "America/Virgin",
      }, {
        value: "America/Whitehorse",
        label: "America/Whitehorse",
      }, {
        value: "America/Winnipeg",
        label: "America/Winnipeg",
      }, {
        value: "America/Yakutat",
        label: "America/Yakutat",
      }, {
        value: "America/Yellowknife",
        label: "America/Yellowknife",
      }
    ]
  }
];

type SelectedValue = {
  value: string;
  label: string;
};

export function SelectTimeZone({
  onSelect,
}: {
  onSelect: (value: SelectedValue) => void;
}) {
  const [selected, setSelected] = useState(options[0].options[0]);
  const handleChange = (value: any) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <Select
      primaryColor={"indigo"}
      value={selected}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Select a timezone"
    />
  );
}
