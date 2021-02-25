import express from 'express'
import morgan from 'morgan'

import {router as index_router} from './routers/index.js'


const app = express()

app.use(morgan('default'))


app.use('/user', index_router)



app.get('/', (req, res) => {
    res.send('hello dff')
})

app.listen(3000, () => {
    console.log('localhost:3000')
})