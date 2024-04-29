import inquirer from 'inquirer'

inquirer.prompt({
  type: 'list',
  name: 'color',
  message: '¿Cual es tu color favorito?',
  choices: ['rojo', 'azul', 'verde']
})
  .then(answers => {
    console.log(answers)
    // console.log(`tu color es ${answers.color} y ${answers.website}`)
  })
