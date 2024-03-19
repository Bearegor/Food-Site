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

  const Options = {
    Sizes: new Array(),
    Breads: new Array(),
    Vegies: new Array(),
    Sauces: new Array(),
    Fillings: new Array(),
  }

  for (const [key, value] of Object.entries(Data.sizes)){
    Options.Sizes.push(value)
  }
  for (const [key, value] of Object.entries(Data.breads)){
    Options.Breads.push(value)
  }
  for (const [key, value] of Object.entries(Data.vegetables)){
    Options.Vegies.push(value)
  }
  for (const [key, value] of Object.entries(Data.sauces)){
    Options.Sauces.push(value)
  }
  for (const [key, value] of Object.entries(Data.fillings)){
    Options.Fillings.push(value)
  }

  const SetCategories = new Set()
  Menu.forEach((element) => {
    SetCategories.add(element.category)
  })
  const Categories = Array.from(SetCategories)
  // Categories.forEach((element, index, arr) =>{
  //   arr[index] = element.charAt(0).toUpperCase() + element.slice(1)
  // })
  console.log(Categories)

  return [Menu, Categories, Options]
}


const [Menu, Categories, Options] = GetData()

// console.log(Menu)

app.get('/', (req, res) => {
    res.render('MainPage',
    {Menu: Menu, Categories: Categories, Options: Options})
})

// app.get('/:category', (req, res) => {
//   res.render('MainPage',
//   {Menu: Menu, Category: req.params.category, Options: Options})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
