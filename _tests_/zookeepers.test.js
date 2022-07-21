const fs = require('fs');
const { 
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers");
const { zookeepers } = require('../data/zookeepers.json');

jest.mock('fs');
test('creates a zookeeper object', () => {
  const zookeeper = createNewZookeeper(
    { name: "Marcus", id: "jhgdja3ng2" },
    zookeepers
  );
  
  expect(zookeeper.name).toBe("Marcus");
  expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
  const startingKeepers = [
    {
      id: "3",
      name: "Linda",
      age: 48,
      favoriteAnimal: "otter"
    },
    {
      id: "4",
      name: "Ryan",
      age: 20,
      favoriteAnimal: "dog"
    }
  ];

  const updatedKeepers = filterByQuery({ age: 48 }, startingKeepers);

  expect(updatedKeepers.length).toEqual(1);
});

test("finds by id", () => {
  const startingKeepers = [
    {
      id: "3",
      name: "Linda",
      age: "48",
      favoriteAnimal: "otter"
    },
    {
      id: "4",
      name: "Ryan",
      age: "20",
      favoriteAnimal: "dog"
    },
  ];

  const result = findById("3", startingKeepers);

  expect(result.name).toBe("Linda");
});

test("validates zookeeper", () => {
  const zookeeper = {
    id: "3",
    name: "Linda",
    age: 48,
    favoriteAnimal: "otter"
  };

  const invalidZookeeper = {
    id: "3",
    name: "Erica",
    age: "48",
    favoriteAnimal: "otter"
  };

  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});

