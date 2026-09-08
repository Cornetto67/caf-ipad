// Stub de sqlite-engine.js pour la version iPad (100% LocalStorage, sans base de données réelle)

window.sqliteDB = null;
window.isSQLiteReady = true;

window.initSQLite = async function() {
    console.log("iPad Version - Mode hors ligne, SQLite désactivé.");
    window.isSQLiteReady = true;
    return Promise.resolve();
};

window.dbQuery = function(sql, params = []) {
    // Return empty array for any query so the app falls back to LocalStorage
    return [];
};

window.dbExec = function(sql, params = []) {
    // Do nothing. The app will only update localStorage, which is exactly what we want.
};

window.saveDBToServer = function() {
    // No-op
};
window.saveDBToIndexedDB = window.saveDBToServer;

window.syncSatelliteToSQLite = function(type) {
    // No-op
};

window.logAction = function(actionType, detailsText) {
    // No-op
};

window.exportSQLiteFile = function() {
    alert("Export SQLite désactivé sur iPad. Utilisez l'export JSON.");
};

window.importSQLiteFile = function(e) {
    alert("Import SQLite désactivé sur iPad. Utilisez l'import JSON.");
};
