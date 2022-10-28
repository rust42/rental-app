const carImages = {
    'audi-black': [
        '/cars/audi-black/1.webp',
        '/cars/audi-black/2.webp',
        '/cars/audi-black/3.webp',
        '/cars/audi-black/4.webp',
    ],
    'bmw-black': [
        '/cars/bmw-black/1.png',
        '/cars/bmw-black/2.png',
        '/cars/bmw-black/3.png',
    ],
    'ford-super-duty': [
        '/cars/ford-super-duty/1.webp',
        '/cars/ford-super-duty/2.webp',
        '/cars/ford-super-duty/3.webp',
    ],
    'honda-crv-black': [
        '/cars/honda-crv/1.jpeg',
        '/cars/honda-crv/2.jpeg',
        '/cars/honda-crv/3.jpeg',
    ],
    'honda-ridgeline': [
        '/cars/honda-ridgeline/1.jpeg',
        '/cars/honda-ridgeline/2.jpeg',
        '/cars/honda-ridgeline/3.jpeg',
    ],
    'default': ['/cars/default.webp']
};


export const getVehicleImages = (vehicle) => {
    const brand = vehicle.brand.toLowerCase();
    const color = vehicle.color.toLowerCase();


    if (brand === 'audi' && color === 'black') {
        return carImages['audi-black'];
    }

    if (brand === 'bmw' && color === 'black' ) {
        return carImages['bmw-black'];
    }

    if (brand === 'ford' && color === 'silver') {
        return carImages['ford-super-duty'];
    }

    if (brand === 'honda' && color === 'black') {
        return carImages['honda-crv-black'];
    }

    return carImages['default'];
};


export const getFirstImage = (vehicle) => {
    return getVehicleImages(vehicle)[0];
}