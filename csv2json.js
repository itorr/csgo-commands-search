import csv from 'csv'

import fs from 'fs'
csv.parse(fs.readFileSync('commands.csv','utf-8'),(err,data)=>{
    console.log(data);
})