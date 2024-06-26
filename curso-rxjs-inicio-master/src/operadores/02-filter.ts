import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "batman",
  },
  {
    tipo: "heroe",
    nombre: "deadpool",
  },
  {
    tipo: "villano",
    nombre: "joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);
keyup$.subscribe(console.log);
