const { inquirerMenu, pause } = require('./helpers/inquirer');
const Task = require('./models/task');


require('colors');

const main = async() => {
    console.log('Hello world!!');

    let opt = '';
    const tasks = new Tasks();

    do {
        
        opt = await inquirerMenu();

        switch (key) {
            case value:
                
                break;
        
        }

        await pause();
    } while (opt !== '0');

}

main();