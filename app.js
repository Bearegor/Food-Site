import fs from 'node:fs'
import express from 'express'
import ejs from 'ejs'

const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'));

function GetData(){
  const Data = JSON.parse(fs.readFileSync('data.json'))
  const Menu = Data.menu
  const Categories = new Set()
  Menu.forEach((element) => {
    Categories.add(element.category)
  })
  console.log(Categories)
  return Menu
}



const Menu = GetData()

app.get('/', (req, res) => {
    res.render('MainPage', {Menu: Menu, Category: 'any'})
})

app.get('/:category', (req, res) => {
  res.render('MainPage', {Menu: Menu, Category: req.params.category})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
