// typescript : javascript + type constract

/*
// interface
// in respect of typescript, interface is more safety than class.
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

// class
// class is need some situations. such as react, ... 
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let beomjin = {
    name: 'beomjin',
    age: 1234,
    gender: "male"
}

// backtick : `
// need for template literals

// template literal
// variables can be used in string (backtick)
const sayHi = (person: Human) => {
    console.log(`name: ${person.name}, age: ${person.age}, gender: ${person.gender}`);
};

sayHi(beomjin);
*/

// sample blockchain coding

import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timeStamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.data === "string" &&
        typeof aBlock.timeStamp === "number";
}

const genesisBlock: Block = new Block(0, "89123759187234", "", "hello", 123456);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => getBlockchain()[getBlockchain().length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
}

// console.log(createNewBlock("hello"), createNewBlock("byebye"));

const getHashForBlock = (aBlock: Block): string =>
    Block.calculateBlockHash(
        aBlock.index, 
        aBlock.previousHash,
        aBlock.timeStamp,
        aBlock.data
    );

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
    if (true !== Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidateBlock: Block): void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export { };
