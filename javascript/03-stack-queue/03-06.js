class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }

  enqueue(animalType) {
    const animal = { type: animalType, order: this.order++ };

    if (animalType === 'dog') {
      this.dogQueue.push(animal);
    } else if (animalType === 'cat') {
      this.catQueue.push(animal);
    } else {
      console.log('Invalid animal type.');
    }
  }

  enqueueDog(name) {
    this.dogQueue.push({
      name: name,
      id: ++this._id,
    });
  }

  dequeueAny() {
    if (this.dogQueue.length === 0 && this.catQueue.length === 0) {
      console.log('Shelter is empty. No animals to dequeue.');
      return null;
    }

    if (this.dogQueue.length === 0) {
      return this.catQueue.shift();
    } else if (this.catQueue.length === 0) {
      return this.dogQueue.shift();
    }

    return this.dogQueue[0].order < this.catQueue[0].order
      ? this.dogQueue.shift()
      : this.catQueue.shift();
  }

  dequeueDog() {
    if (this.dogQueue.length === 0) {
      console.log('No dogs.');
      return null;
    }

    return this.dogQueue.shift();
  }

  dequeueCat() {
    if (this.catQueue.length === 0) {
      console.log('No cats.');
      return null;
    }

    return this.catQueue.shift();
  }
}

// example
const animalShelter = new AnimalShelter();

animalShelter.enqueue('dog');
animalShelter.enqueue('cat');
animalShelter.enqueue('cat');

console.log(animalShelter.dequeueAny()); // oldest animal
console.log(animalShelter.dequeueCat()); // oldest cat
console.log(animalShelter.dequeueDog()); // null
