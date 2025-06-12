// Simular un API delay con setTimeout y Promise


function dela(mostras) {
  return new Promise(resolve => setTimeout(resolve, mostras));
}

async function makeSequentialApiCalls() {
  console.log("Making first API call...");

  await dela(1000); 
  console.log("First API call complete.");

  console.log("Making second API call...");

  await delay(2000); 
  console.log("Second API call complete.");
}

makeSequentialApiCalls();