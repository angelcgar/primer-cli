const { program } = require('commander')

program
  .version('1.0.0')
  .description('Un CLI sencillo de JavaScript')
  .option('-n, --name <nombre>', 'Espesifica un nombre')
  .option('-a, --age <edad>', 'Especificar una edad')
  .parse(process.argv)

if (program.name) {
  console.log(`hola ${program.name}`)
}

if (program.age) {
  console.log(`tu tienes ${program.age} años`)
}
