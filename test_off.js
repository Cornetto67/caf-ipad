const fs = require('fs');
// Just read Planning.html to see if there's any obvious JS syntax error around offWeeksMulti
const html = fs.readFileSync('Planning.html', 'utf8');
if (html.indexOf('INSERT OR REPLACE INTO off_weeks') !== -1) {
    console.log('Off weeks INSERT found.');
}
