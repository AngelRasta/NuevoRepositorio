import express from "express";
import ejs from 'ejs'
import {  dirname, join } from 'path';
import { fileURLToPath } from "url";


import  indexRouters  from './routes/index.js'

const app = express ()

const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(join(__dirname, 'views'))

app.set('views', join(__dirname, 'views'))

app.set ('view engine', 'ejs')

app.use(indexRouters)

app.use(express.static(join(__dirname, 'public')))

app.listen(3000) 

console.log('server esta en el ', 3009)

