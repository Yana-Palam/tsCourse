class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (!this.door) {
      throw new Error("Door is close");
    }
    this.tenants.push(person);
    console.log("Person inside");
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

const key = new Key();
const personInHouse = new Person(key);
const house = new MyHouse(key);
house.openDoor(personInHouse.getKey());
house.comeIn(personInHouse);
