import mukouda from './mukouda.png';
import fel from './fel.png';
import sui from './sui.png';

const workersContent = () => {
    const content = document.querySelector('#content');

    const workers = document.createElement('div');
    workers.classList.add('workers');
    workers.classList.add('remove');
    content.append(workers);

    const workers1 = document.createElement('div');
    workers.append(workers1);
    const mukoudaImg = new Image();
    mukoudaImg.src = mukouda;
    mukoudaImg.classList.add('icons');
    const mukoudaName = document.createElement('h2');
    mukoudaName.textContent = 'Tsuyoshi Mukouda';
    const mukoudaTitle = document.createElement('h2');
    mukoudaTitle.textContent = 'Cook';
    workers1.append(mukoudaImg);
    workers1.append(mukoudaName);
    workers1.append(mukoudaTitle);

    const workers2 = document.createElement('div');
    workers.append(workers2);
    const felImg = new Image();
    felImg.src = fel;
    felImg.classList.add('icons');
    const felName = document.createElement('h2');
    felName.textContent = 'Fel';
    const felTitle = document.createElement('h2');
    felTitle.textContent = 'Hunter - Taster';
    workers2.append(felImg);
    workers2.append(felName);
    workers2.append(felTitle);

    const workers3 = document.createElement('div');
    workers.append(workers3);
    const suiImg = new Image();
    suiImg.src = sui;
    suiImg.classList.add('icons');
    const suiName = document.createElement('h2');
    suiName.textContent = 'Sui The Slime';
    const suiTitle = document.createElement('h2');
    suiTitle.textContent = 'Hunter - Taster - Cleaner';
    workers3.append(suiImg);
    workers3.append(suiName);
    workers3.append(suiTitle);
};

export default workersContent;