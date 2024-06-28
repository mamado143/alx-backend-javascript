export function taskFirst() {
<<<<<<< HEAD
=======
 
	const task = 'I prefer const when I can.';
	return task;
}
export function getLast() {
	return ' is okay';
}
export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}

>>>>>>> c36f9991e2dbbd453d7a1e0d08a2e99a3685e7b0
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
