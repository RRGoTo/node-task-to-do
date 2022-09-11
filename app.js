const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');


require('colors');

const main = async() => {
    console.log('Hello world!!');

    let opt = '';
    const tasks = new Tasks();

    do {
        
        opt = await inquirerMenu();

        console.log('Selected Option: ', opt);

        switch (opt) {
            case '1':
                const desc = await readInput('Task Description: ');
                tasks.createTask(desc);
            break;
        
            case '2':
                console.log(tasks._listado);
            break;
        }

        await pause();
    } while (opt !== '0');

}

main();