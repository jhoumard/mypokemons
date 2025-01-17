/**
 * Nom : Thanavine Le Cocq
 * Date : 17.01.2025
 **/

const dimensions = [
  {
    id: 1,
    name: "Ultra Space",
    created: new Date(),
  },
  {
    id: 2,
    name: "Distortion World",
    created: new Date(),
  },
  {
    id: 3,
    name: "Flower Paradise",
    created: new Date(),
  },
];

const getDimension = (id) => {
  return dimensions.find(x => x.id == id);
};

export { dimensions, getDimension };
