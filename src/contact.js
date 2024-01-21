import truck from './truck-kun.gif';

const contactContent = () => {
    const content = document.querySelector('#content');

    const contact1 = document.createElement('div');
    contact1.classList.add('contact');
    contact1.classList.add('remove');
    content.append(contact1);

    const truckGif = new Image();
    truckGif.src = truck;
    truckGif.classList.add('gif');

    const contactInfo = document.createElement('h2');
    contactInfo.textContent = "In order to taste all the delicacies in our Familiar restaurant in the isekai world you need to contact the Truck kun!!!";
    contactInfo.classList.add('text');

    contact1.append(truckGif);
    contact1.append(contactInfo);
};

export default contactContent;