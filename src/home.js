import cookGif from './cook-background.gif';

const homeContent = () => {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.classList.add('home');
    home.classList.add('remove');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = '&#128058; FAMILIAR RESTAURANT &#128058;';

    const home1 = document.createElement('h2');
    home1.textContent = "Welcome to Familiar Restaurant";
    home1.classList.add('text');

    const home2 = document.createElement('h3');
    home2.textContent = "Here you can taste high level monsters hunted by Fel and Sui, cooked by our chef from another world Tsuyoshi Mukouda";
    home2.classList.add('text');

    const home3 = document.createElement('h3');
    home3.textContent = "Enjoy tasty meal along with your familiars";
    home3.classList.add('text');

    const gif = new Image();
    gif.src = cookGif;
    gif.classList.add('gif');

    content.append(home);
    home.append(title);
    home.append(home1);
    home.append(home2);
    home.append(home3);
    home.append(gif);
};

export default homeContent;