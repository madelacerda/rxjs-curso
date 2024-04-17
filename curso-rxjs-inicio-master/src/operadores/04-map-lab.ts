import { fromEvent, tap } from "rxjs";
import { map } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac purus nec odio porta volutpat ac vel est. Maecenas finibus molestie metus vel luctus. Pellentesque non aliquam ligula. Cras maximus velit sed tortor scelerisque, at gravida dolor sagittis. Sed imperdiet quam ipsum, sed ultricies enim pellentesque tempor. In a dignissim elit. Ut scelerisque imperdiet sollicitudin. Quisque imperdiet ipsum ac turpis condimentum dapibus. Curabitur est orci, rhoncus eu aliquet at, dignissim in metus. Donec iaculis vehicula bibendum.
<br/><br/>
Nullam sollicitudin pharetra nisl, sit amet faucibus nulla fringilla ut. Integer dui sem, vulputate ac suscipit ac, tempor ac leo. Phasellus rhoncus mollis erat, eget fermentum dui aliquet maximus. Sed auctor dolor sed elementum tempus. Cras quis pretium arcu. Fusce ac porttitor urna. Aenean orci eros, sodales vehicula facilisis et, volutpat in dolor. Morbi facilisis pellentesque metus id ornare. Nam urna elit, mattis sit amet ligula in, pharetra fermentum mi. Morbi quis odio eu lorem efficitur gravida. Mauris vel condimentum risus. Cras a quam quis est lacinia consectetur in ut ante. Cras et neque elementum orci venenatis pretium in quis felis. Nullam aliquam, mauris ac posuere posuere, urna purus luctus augue, et tincidunt sem nunc nec arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi erat felis, faucibus eu sapien vel, sollicitudin maximus odio.
<br/><br/>
Mauris ut ex tempor, ultricies magna et, rhoncus enim. Nam eu metus ut ligula lobortis blandit nec nec lectus. Nullam id eros scelerisque dui auctor fermentum. In ultrices dictum lorem vehicula ultrices. Nulla accumsan id nibh et tempor. Quisque pretium mattis neque, at posuere quam posuere non. Suspendisse potenti. Curabitur tempor, neque at suscipit feugiat, leo justo porttitor neque, nec sagittis lacus sapien ac mi. Maecenas dapibus ligula luctus sodales cursus. Nam nec dolor tellus. Aliquam ornare neque nec volutpat interdum. Etiam sed ultricies ligula. Sed at lacus nunc. Cras id gravida odio.
<br/><br/>
Quisque a nunc luctus, tincidunt ante nec, porttitor tortor. Integer urna lorem, venenatis ac purus in, blandit luctus augue. Vestibulum magna sem, convallis in augue eget, feugiat accumsan urna. Quisque in ultrices neque. Maecenas suscipit eros tellus, a lobortis ipsum faucibus eu. Vestibulum rutrum, nisi nec vestibulum euismod, ligula neque venenatis quam, eu tristique magna dui eu odio. Maecenas pharetra placerat arcu, ut cursus lacus lacinia et. Donec placerat augue dui, ac ullamcorper quam tempus id. Ut vel egestas neque, non varius ligula. Mauris id sem venenatis, tempus mauris eget, facilisis ipsum. Aliquam tempus, metus sed ullamcorper condimentum, ipsum tellus tincidunt elit, vel auctor mi lacus nec odio.
<br/><br/>
Donec placerat mauris ante, nec vulputate nunc eleifend eget. Donec ut ullamcorper ipsum. Praesent in mattis velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi commodo malesuada nulla. Curabitur imperdiet lectus at tellus sagittis, sit amet finibus risus sodales. Vestibulum volutpat nisl turpis, in blandit tortor aliquet sed. Duis venenatis ipsum eu sapien sodales, nec placerat elit fringilla. Nunc mi arcu, faucibus et nisi volutpat, semper imperdiet nulla. Maecenas sapien odio, pretium in lacus non, semper blandit lectus. Nam eros mi, convallis at odio eget, pellentesque condimentum nulla. Cras luctus mi id tristique efficitur. Cras faucibus ante leo, in rutrum ligula tristique non.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};
//Strems
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
  // map((event) => calcularPorcentajeScroll(event))
  map(calcularPorcentajeScroll),
  tap(console.log)
);
progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
