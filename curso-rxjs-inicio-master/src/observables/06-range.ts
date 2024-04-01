import { asapScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 5, asapScheduler);

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
