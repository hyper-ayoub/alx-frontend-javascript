// Import the ClassRoom class from 0-classroom.js. //
// function initializeRooms() //
// should return an array of 3 ClassRoom object //
// sizes 19, 20, and 34 (in this order)//

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const first = new ClassRoom(19);
  const second = new ClassRoom(20);
  const third = new ClassRoom(34);
  return [first, second, third];
}

