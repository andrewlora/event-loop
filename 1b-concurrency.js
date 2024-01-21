const crypto = require("node:crypto");
const rounds = 50000;
let times = 13;
while (times--) {
  console.time(`ready${times}`);
  setTimeout(
    (times) => {
      crypto.pbkdf2(
        `password${times}`,
        `salt${times}`,
        rounds,
        512,
        "sha512",
        () => {
          console.timeEnd(`ready${times}`);
        }
      );
    },
    100,
    times
  );
}