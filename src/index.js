import './style.css';
import homeContent from './home';
import workersContent from './workers';
import contactContent from './contact';

function page(){
    const body = document.querySelector('body');
    const content = document.querySelector('#content');

    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const home = document.createElement('button');
    home.classList.add('nav');
    home.textContent = 'ABOUT';

    const workers = document.createElement('button');
    workers.classList.add('nav');
    workers.textContent = 'WORKERS';

    const contact = document.createElement('button');
    contact.classList.add('nav');
    contact.textContent = 'CONTACT';

    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    welcome.classList.add('remove');
    welcome.classList.add('text');
    welcome.textContent = "Welcome to Familiar Restaurant";


    // body.append(title);
    body.insertBefore(navigation, content);
    navigation.append(home);
    navigation.append(workers);
    navigation.append(contact);
    content.append(welcome);

    home.addEventListener('click', () => {
        const remove = document.querySelector('.remove');
        remove.remove();
        homeContent();
    });

    workers.addEventListener('click', () => {
        const remove = document.querySelector('.remove');
        remove.remove();
        workersContent();
    });

    contact.addEventListener('click', () => {
        const remove = document.querySelector('.remove');
        remove.remove();
        contactContent();
    });
}

page();