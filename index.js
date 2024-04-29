import inquirer from 'inquirer'

inquirer.prompt({
  type: 'editor',
  name: 'code',
  message: 'Escribe algo'
})
  .then(answers => {
    console.log(answers)
    // console.log(`tu color es ${answers.color} y ${answers.website}`)
  })
