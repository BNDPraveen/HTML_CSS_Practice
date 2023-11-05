let input = prompt("What would you like to do");
const todo = [];
todo.push("Go for a walk");
todo.push("Water the plants");
while (input !== "quit") {
  if (input === "new") {
    const entry = prompt("Enter new todo");
    todo.push(entry);
    console.log(`${entry} added`);
  } else if (input === "list") {
    console.log("************************");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("************************");
  } else if (input === "delete") {
    let index = prompt("Enter the index of to do delete");
    if (todo.length > index && index > -1) {
      todo.splice(index, 1);
      console.log(`${todo[index]} deleted`);
    } else {
      console.log("Index value incorrect");
    }
  }
  input = prompt("What would you like to do");
}
console.log("QUIT THE APP");
