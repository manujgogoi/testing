console.clear("Console was cleared");
console.log("This is a log message");
console.warn("This is a warning");
console.error("This is an error");

console.time("loop");
const myLoop = () => {
  for (var x = 1; x <= 100; x++) {
    console.log(`${x},`);
  }
};
myLoop();
console.timeEnd("loop");

console.table({
  name: "Manuj Gogoi",
  address: "Kakotibari",
  phone: "9706683939",
  district: "Charaideo",
  state: "Assam",
  country: "India",
  pin: "785691",
});

//console.count() method
for (let i = 0; i < 5; i++) {
  console.count(i);
  console.count(i);
  console.count(i);
  console.count("Hello");
}
console.count("Hello");

// console.group() and console.groupEnd() method
console.group("A group");
console.warn("warning!");
console.error("error here");
console.log("vivi vini vici");
console.groupEnd("A group");
console.log("new section");

// Custom Console log example
const spacing = "10px";
const styles = `padding: ${spacing}; background-color: ${"#333"}; color: ${"#aaa"}; font-style: 
       italic; border: 1px solid black; font-size: 2em;`;
console.log("%cManuj Gogoi", styles);
