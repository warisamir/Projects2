var inquirer = require('inquirer');
const cp = require('child_process')


function displayDetails(){
inquirer
  .prompt([
    {
           type:'list',
           name :'Selection',
           choices:['About' , 'Skills' , 'Projects' , 'Academics']
    }
  ])
  .then((choices) => {
       if(choices.Selection =='About'){
              console.log(`Hii my name is waris amir , I am from uttar pradesh , currently i'm pursuing Btech`)
              displayNext()
       }

       else if(choices.Selection=='Skills'){
              console.log('JavaScript , Node , React , C++ ,DBMS , HTML , CSS , Java ')
              displayNext()
       }

       else if(choices.Selection=='Projects'){
            cp.execSync('start chrome https://github.com/warisamir')
            displayNext()
       }

       else if(choices.Selection=='Academics'){
              cp.execSync('start chrome https://github.com/warisamir')
              displayNext()
       }
  })
 
}

displayDetails()


function displayNext(){
       var inquirer = require('inquirer');
inquirer
  .prompt([
         { type:'list',
       name :'GoBack',
       choices:['back']
         }
  ])
  .then((choice) => {
    if(choice.GoBack = 'back'){
           displayDetails()
    }
  })
 
}
