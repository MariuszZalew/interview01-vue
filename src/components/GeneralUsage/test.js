let arrayOfObjects = [
    {
        name: "Jaime",
        favMusic: "Stage And Screen",
        id: "e6f8e7e9-4182-4fd3-a1a4-1f21b5099831"
    },
    {
        name: "Enid",
        favMusic: "Latin",
        id: "652dd572-b4a4-4864-8832-8f4b70dee4d8"
    },
    {
        name: "Clemmie",
        favMusic: "Reggae",
        id: "545192eb-df61-4a51-8ee4-5602dadf208a"
    },
    {
        name: "Jaime",
        favMusic: "Rap",
        id: "e6f8e7e9-418c-4fd3-a1a4-1f21b5099831"
    },
    {
        name: "Milan",
        favMusic: "Rap",
        id: "b7167d9f-866c-4c71-8a99-472932d261e8"
    },
    {
        name: "Elinore",
        favMusic: "Rock",
        id: "2baba48f-2990-47fa-8a65-fe78ae839398"
    },
    {
        name: "Eloy",
        favMusic: "Non Music",
        id: "3200e04e-b985-4367-b234-010fbcad8bf7"
    },
    {
        name: "Eloy",
        favMusic: "Music",
        id: "3200e04e-b985-4361-b234-010fbcad8bf7"
    },

    {
        name: "Eloy",
        favMusic: "Rege",
        id: "3200e04e-b981-4367-b234-010fbcad8bf7"
    },
]

function convertArrayToObject(inputArray) {
  const resultObject = {};

  inputArray.forEach(obj => {
    const nameValue = obj.name;

    if (!resultObject[nameValue]) {
      resultObject[nameValue] = [];
    }

    // Push the entire object to the array
    resultObject[nameValue].push(obj);
  });

  return resultObject;
}

console.log(convertArrayToObject(arrayOfObjects))

function convertArrayToObject02(inputArray) {
  return inputArray.reduce((resultObject, obj) => {
    const nameValue = obj.name;

    if (!resultObject[nameValue]) {
      resultObject[nameValue] = [];
    }

    // Push the entire object to the array
    resultObject[nameValue].push(obj);

    return resultObject;
  }, {});
}

const groupedArrays = arrayOfObjects.reduce((accumulator, currentObject) => {
  const category = currentObject.name;

  // Check if there is already an array for the category
  const existingArray = accumulator.find(arr => arr[0]?.category === category);

  if (existingArray) {
    // Add the current object to the existing array
    existingArray.push(currentObject);
  } else {
    // Create a new array for the category and add the current object
    accumulator.push([currentObject]);
  }

  return accumulator;
}, []);

// console.log(groupedArrays);