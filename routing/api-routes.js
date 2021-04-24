const path = require('path');
const fs = require('fs');
const tableData = require('../db/db.json');

//module.exports = (app) => {
    //app.get('/api/tables', (req, res) => res.json(tableData));
    
//}

fs.readFile ('tableData', 'utf-8', (err, jasonString) => {
    console.log (tableData)
})
