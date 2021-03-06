
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
    // array con tutte le tipologie di icone
    const typesArray = typesArreyFunction(arrayIcons);
    // array di tutte le icone con anche il colore associato
    const arrayColorIcon = addColorIcon(arrayIcons, colorsArray, typesArray);

    const select = $("header select");
    const iconsDiv = $("#icons");

    // aggiungo al select tutte le opzioni con le tipologie
    typesArray.forEach(
      (element) => {
        select.append(
          `
          <option value="${element}">${element.toUpperCase()}</option>
          `
        );
      }
    );

    select.change(
      function() {

        let selectValue = $(this).val();

        if(selectValue == "all") {
          print(iconsDiv, arrayColorIcon);
        } else {
          const filteredByTypes = arrayColorIcon.filter(
            (element) => {
              return (element.type == selectValue);
            }
          );
          print(iconsDiv, filteredByTypes);
        }
      }
    );



  }
);

// FUNZIONI---------------------------------------------------
const print = (container, array) => {
  container.html("");

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
