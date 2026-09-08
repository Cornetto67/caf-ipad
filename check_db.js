const fs = require('fs');
const initSqlJs = require('./libs/sql-wasm.js');

(async () => {
    const SQL = await initSqlJs({ locateFile: file => `./libs/${file}` });
    const fileBuffer = fs.readFileSync('caf_auto.sqlite');
    const db = new SQL.Database(fileBuffer);
    
    try {
        const off = db.exec("SELECT * FROM off_weeks");
        console.log("off_weeks:", JSON.stringify(off));
        
        const parc = db.exec("SELECT * FROM parc_machines");
        console.log("parc_machines:", JSON.stringify(parc));
    } catch (e) {
        console.error("Error reading DB:", e);
    }
})();
