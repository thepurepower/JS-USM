"use strict";

/**
 * Класс предмета
 */
class Item {

    /**
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /**
     * @returns {string}
     */
    getInfo() {
        return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }

    /**
     * @param {number} newWeight
     */
    setWeight(newWeight) {
        this.weight = newWeight;
    }

}


/**
 * Класс оружия
 */
class Weapon extends Item {

    /**
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     * @param {number} damage
     * @param {number} durability
     */
    constructor(name, weight, rarity, damage, durability) {

        super(name, weight, rarity);

        this.damage = damage;
        this.durability = durability;
    }

    /**
     * @returns {string}
     */
    getInfo() {

        return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;

    }

    use() {

        if (this.durability > 0) {
            this.durability -= 10;
        }

    }

    repair() {
        this.durability = 100;
    }

}


/**
 * Функция-конструктор предмета
 * @param {string} name
 * @param {number} weight
 * @param {string} rarity
 */
function ItemConstructor(name, weight, rarity) {

    this.name = name;
    this.weight = weight;
    this.rarity = rarity;

}


ItemConstructor.prototype.getInfo = function () {

    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;

};


ItemConstructor.prototype.setWeight = function (newWeight) {

    this.weight = newWeight;

};


/**
 * Функция-конструктор оружия
 * @param {string} name
 * @param {number} weight
 * @param {string} rarity
 * @param {number} damage
 * @param {number} durability
 */
function WeaponConstructor(
    name,
    weight,
    rarity,
    damage,
    durability
) {

    ItemConstructor.call(
        this,
        name,
        weight,
        rarity
    );

    this.damage = damage;
    this.durability = durability;

}


WeaponConstructor.prototype =
Object.create(
    ItemConstructor.prototype
);

WeaponConstructor.prototype.constructor =
WeaponConstructor;


WeaponConstructor.prototype.getInfo =
function () {

    return `${ItemConstructor.prototype.getInfo.call(this)}, Damage: ${this.damage}, Durability: ${this.durability}`;

};


WeaponConstructor.prototype.use =
function () {

    if (this.durability > 0) {
        this.durability -= 10;
    }

};


WeaponConstructor.prototype.repair =
function () {

    this.durability = 100;

};



function main() {

    const sword =
        new Item(
            "Steel Sword",
            3.5,
            "rare"
        );

    console.log(
        sword.getInfo()
    );

    sword.setWeight(4);

    console.log(
        sword.getInfo()
    );


    const bow =
        new Weapon(
            "Longbow",
            2,
            "uncommon",
            15,
            100
        );

    console.log(
        bow.getInfo()
    );

    bow.use();

    console.log(
        bow.durability
    );

    bow.repair();

    console.log(
        bow.durability
    );


    const axe =
        new WeaponConstructor(
            "Battle Axe",
            5,
            "legendary",
            40,
            80
        );


    console.log(
        axe?.getInfo()
    );

    console.log(
        axe?.damage
    );

    console.log(
        axe?.magicPower
    );

}


main();