import { Component, ViewChild } from '@angular/core';
import { MathjaxComponent } from '../mathjax/mathjax.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;
  name = 'Mathjax ';

  subscribedParam = 'initial value';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.subscribedParam = params.get('post');
    });
    // console.log(this.subscribedParam);
  }

  blogs = [
    // {
    //   title: 'Test 1',
    //   content: `$\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$.`,
    //   date: '09/08/2023',
    // },
    {
      title: 'Puzles de Lápiz',
      date: '10/08/2023',
      link: 'puzles-lapiz',
      content: `A través de los años mis intereses y actividades han variado bastante. He ido de ver videos en YouTube 
      sobre química a ver videos sobre el baloncesto, de intentar resolver puzles de madera a resolver cubos Rubik y de leer 
      novelas a ver películas en Netflix. Recientemente, un pasatiempo que he estado haciendo es resolver puzles de lápiz. <br />
      <br />
      No sorprendentemente, los puzles de lápiz son aquellos rompecabezas de lógica que se resuelven con lápices. Estos incluyen 
      sudokus y sus variantes, al igual que otros tipos de puzles como Masyu, Tapa, Star Battle, etc. El término «puzle de lápiz» 
      es muy amplio, y todos los tipos de puzle mencionados anteriormente son muy distintos entre sí. Por ejemplo, las variantes de 
      sudoku todas se sienten diferente. Algunas variantes restringen la ubicación de los números más que un sudoku regular, añadiendo 
      rigidez a la solución. Otras tienen un truco tan poderoso que se puede comenzar con un tablero vacío sin números y aún así encontrar 
      una solución única de las reglas adicionales que la variante provee. <br />
      <br />
     Luego, los puzles que no son sudokus exploran temas distintos. En Masyu, se inicia con algunos círculos y se tiene que dibujar un bucle 
     cerrado siguiendo ciertas condiciones. En Tapa, se comienza con varios números en una cuadrícula (posiblemente varios números en una 
      misma celda) y se tienen que colorear algunos cuadros de negro basado en lo que dicen los números. En Star Battle, las estrellas 
      batallan una con otra para ser colocadas de tal manera que no son adyacentes y una cantidad fija de cada una es presente en cada fila, 
      columna y región marcada. Resolver cada uno de estos tipos de puzle provee experiencias variadas y una satisfacción inmensa cuando se 
      encuentra la solución. <br />
      <br />
      Durante la pandemia, pasé la mayoría de mi tiempo en mi cuarto. Sea trabajando en tarea, estudiando para competencias de matemática o 
      resolviendo rompecabezas, siempre estaba haciendo algo. Fue en este tiempo, gracias a los videos de resolución de sudokus de 
      <a href="https://www.youtube.com/@CrackingTheCryptic">Cracking The Cryptic</a> — el canal de YouTube dedicado a resolver sudokus 
      (y sus variantes) que en verdad me interesó en los puzles de lápiz — descubrí un lindo sitio web por el nombre de 
      <a href="https://www.gmpuzzles.com/blog/">GMPuzzles</a>. El sitio contiene una colección masiva de todo tipo de puzles, subiendo un 
      puzle todos los días. Fue aquí donde encontré mi joya de los puzles de lápiz: Star Battles. <br />
      <br />
      Los Star Battles son mi puzle lógico favorito por bastante. Brevemente, así es como funcionan:
      <ul>
      <li> Se comienza con una cuadrícula de $n\\times n$ celdas, donde $n$ usualmente es alrededor de $10$. </li>
      <li> Algunas de las orillas están en negrita, dividiendo la cuadrícula en $n$ diferentes regiones. </li>
      <li> Es dado una cantidad fija $s$ de estrellas. Esta es la cantidad de estrellas que hay que colocar en cada fila, columna y región 
      marcada. </li>
      <li> El objetivo del puzle es colocar estrellas en la cuadrícula de tal manera que cada fila, columna y región marcada tenga 
      <strong>exactamente</strong> $s$ estrellas, sujeto a la condición adicional que cuadros con estrellas en ellos no pueden ser adyacentes, 
      ni siquiera diagonalmente. </li>
      </ul>
      Por ejemplo, un puzle de Star Battle se podría ver así: <br /> <br />
      <div class="center">
      <img src=".././assets/imgs/star-battle-grant-fikes.png" width="30%" height="30%"></img> <br />
      <a href="https://www.gmpuzzles.com/blog/2022/04/star-battle-by-grant-fikes-6/">Star Battle por Grant Fikes</a> <br />
      </div>
      <br />
      En este puzle, $n=8$ y $s=1$,
      así que cada una de las $8$ filas, columnas y regiones marcadas contiene exactamente una estrella. ¡Recomiendo que intentes el puzle por tu 
      cuenta (no voy a mencionar la solución en este post)! <br />
      <br />
      Sospecho que la razón por la cual amo tanto los Star Battles es por la gran variedad de técnicas e ideas que surgen de un concepto tan simple. 
      De hecho, tiene algunas ideas que he encontrado útiles intentando resolver otros tipos de problemas, incluyendo el problema de mate ocasional 
      que estoy intentando en mi tiempo libre. Un ejemplo de una de esas ideas es restringir tu visión. En un Star Battle, el poder de una región 
      marcada es que sabes exactamente cuantas estrellas contiene. Entonces, si restringes tu visión a $m$ filas y encuentras exactamente $m$ regiones
      completamente contenidas en esas filas, sabes que las $m\\cdot s$ estrellas contenidas en esas filas deben estar en esas $m$ regiones. Por ello,
      puedes marcar todo cuadro que no es parte de una de esas $m$ regiones como un cuadro que no contiene una estrella (¿cómo puedes usar esto para 
      el puzle anterior?). Esta idea de «restringir tu visión» es algo que se puede usar mucho en problemas más complejos. Por ejemplo, si estás 
      lidiando con un diagrama complicado en un problema de geometría, quizás restringir tu visión a algunas líneas y figuras importantes en tu figura 
      es la clave para resolver el problema. <br />
      <br />
      Mi amor por los Star Battles es tal que decidí que quería crear algunos yo mismo. Entonces, junto a mi amigo Francisco Villeda, nos reunimos un
      par de veces para crear algunos Star Battles de nuestra cuenta. Sin importar que tan buena o mala experiencia sea resolverlos, estoy orgulloso de 
      lo que se nos ocurrió. Los resultados fueron los siguientes dos puzles (los colores son solamente artístico): <br />
      <br />
      <div class="center">
      <img src=".././assets/imgs/crab-claws.png" width="30%" height="30%"></img>
      <img src=".././assets/imgs/golden-key.png" width="30%" height="30%"></img><br />
      <a href="https://git.io/JKvre">Crab Claws</a> y <a href="https://git.io/JKCLH">Golden Key</a> <br />
      por Francisco Villeda y Ezra Guerrero
      </div>
      <br />
      En resumen, los puzles de lápices han sido un pasatiempo que disfruto un montón. Me dan todo lo que quiero de mi tiempo libre: una actividad
      con la cual me puedo divertir y resolver problemas al mismo tiempo. Estos puzles son asombrosos y recomiendo que todos intenten al menos uno 
      que no es solo un sudoku clásico. Créanme, se van a divertir.`,
    },
  ];
}
