console.time();
// This setTimeout executed after the Synchronous task has finished
setTimeout(() => {
  console.log("Ready!");
  console.timeEnd();
}, 0);

// Synchronous task
// Only one main thread
let i = 1;
while (i > 0) {
  if (i % 1e9 === 0) {
    console.log(`Executed ${i} times`);
    // break;
  }
  ++i;
}
