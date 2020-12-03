// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

$(document).ready(
  function() {

    const arrayIcons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];
    const colorsArray = ["#1f26e3", "#f6675e", "#09aa10"];
    const typesArray = typesArreyFunction(arrayIcons);
    const arrayColorIcon = addColorIcon(arrayIcons, colorsArray, typesArray);
    console.log(arrayColorIcon);


    const iconsDiv = $("#icons");
    print(iconsDiv, arrayColorIcon);


  }
);

// FUNZIONI---------------------------------------------------
const print = (container, array) => {

  array.forEach(
    (element) => {
      const {name, prefix, family, color} = element;
      container.append(
        `
        <div class="icon">
          <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
          <h2>${name}</h2>
        </div>
        `
      );
    }
  );

};

const typesArreyFunction = (initialArray) => {
  const allTypesArray = [];

  initialArray.forEach(
    (element) => {
      if (allTypesArray.includes(element.type) == false)
      allTypesArray.push(element.type);
    }
  );

  return allTypesArray;
};

const addColorIcon = (initialArray, colorsArray, typesArray) => {

  const initialArrayWithColor = initialArray.map(
    (element) => {
      const indexType = typesArray.indexOf(element.type);
      const color = colorsArray[indexType];

      return {
        ...element,
        color
      };
    }
  );

  return initialArrayWithColor;
};
