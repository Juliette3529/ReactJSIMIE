const urlPath = 'https://lumiere-a.akamaihd.net/v1/images/';

const images = [
  {
    'url': 'https://swapi.co/api/starships/15/',
    'image': 'databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845'
  },
  {
    'url': 'https://swapi.co/api/starships/5/',
    'image': 'Imperial-Sentinel-Class-Shuttle_a2dc7d3b.jpeg?region=0%2C0%2C1596%2C898'
  },
  {
    'url': 'https://swapi.co/api/starships/9/',
    'image': 'Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900'
  },
  {
    'url': 'https://swapi.co/api/starships/10/',
    'image': 'solo-falcon-main_0429f7f4.jpeg?region=8%2C0%2C1543%2C868'
  },
  {
    'url': 'https://swapi.co/api/starships/11/',
    'image': 'Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864'
  },
  {
    'url': 'https://swapi.co/api/starships/12/',
    'image': 'X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864'
  },
  {
    'url': 'https://swapi.co/api/starships/13/',
    'image': 'image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080'
  },
  {
    'url': 'https://swapi.co/api/starships/21/',
    'image': 'databank_slavei_01_169_8dc3102d.jpeg?region=0%2C0%2C1560%2C878'
  },
  {
    'url': 'https://swapi.co/api/starships/22/',
    'image': 'veh_ia_1752_040381b2.jpeg?region=0%2C70%2C1280%2C720'
  },
  {
    'url': 'https://swapi.co/api/starships/23/',
    'image': 'nebulon-b-frigate_dce53bc2.jpeg?region=0%2C0%2C1181%2C664'
  }
];

export default function getStarshipImage(url, width) {
  const image = images.find(image => image.url === url);

  if (image) {
    return urlPath + image.image + '&width=' + width;
  }
  return '';
}