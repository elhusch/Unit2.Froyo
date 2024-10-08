// prompt:
// A visitor receives a prompt upon opening the website
// to enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// When they view the browser console,
// they observe a table listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have ordered three vanilla,
// two coffee, and one strawberry froyo.

// prompt user to enter comma-separated froyo flavors

const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // separate with commas
  
  const flavors = userInputString.split(",");
  
  // count how many of each flavor
  
  function countFlavors(flavors) {
    const counts = {};
    for (const flavor of flavors) {
      counts[flavor] = (counts[flavor] || 0) + 1;
    }
    return counts;
  }
  
  // call the function countFlavors/used to count how many orders of each flavor
  const counts = countFlavors(flavors);
  
  const tableData = Object.entries(counts).map(([Flavor, Amount]) => ({
    "Froyo Flavor": Flavor,
    "Ordered Amount": Amount,
  }));
  
  // create a table
  console.table(tableData);
