import DoublyLinkedList from "./DoublyLinkedList.mjs";

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(0);
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
doublyLinkedList.push(8);

doublyLinkedList.pop();
doublyLinkedList.pop();

doublyLinkedList.shift();
doublyLinkedList.shift();

doublyLinkedList.unshift(-1);
doublyLinkedList.unshift(-2);

doublyLinkedList.insert(5, 5);

const selectedNode = doublyLinkedList.get(5);
const thirdNode = doublyLinkedList.set(3, "Third Node");

doublyLinkedList.remove(4);

console.log("head => ", selectedNode);
console.log("selectedNode => ", selectedNode);
console.log("Third Node => ", thirdNode);
console.log("tail => ", selectedNode);
