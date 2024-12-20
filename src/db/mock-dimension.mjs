/*
Author : Jérémie Chevalley
Date : 20.12.2024
Description : Database des dimensions
*/

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

//Récupère le dimension dont l'id vaut `dimensionId`
const getDimension = (dimensionId) => {
  return dimensions.find((dimension) => dimension.id == dimensionId);
};

export { dimensions, getDimension };
