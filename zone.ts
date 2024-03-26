// const moment = require("moment-timezone");
import moment from "moment-timezone";

const asianTimezones = moment.tz.names().filter(zone => zone.startsWith("Asia/"));
const europeTimezones = moment.tz.names().filter(zone => zone.startsWith("Europe/"));
const africaTimezones = moment.tz.names().filter(zone => zone.startsWith("Africa/"));
const australiaTimezones = moment.tz.names().filter(zone => zone.startsWith("Australia/"));
const americasTimezones = moment.tz.names().filter(zone => zone.startsWith("America/"));

console.log(americasTimezones.map(t => ({value: t, label: t})));
