import { Component, ViewChild } from '@angular/core';
import { MathjaxComponent } from '../mathjax/mathjax.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-es',
  templateUrl: './blog-es.component.html',
  styleUrls: ['./blog-es.component.css']
})
export class BlogESComponent {
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
        title: 'Aprender Enseñando',
        date: '17/08/2023',
        link: 'aprender-ensenar',
        content: `Aprender y enseñar son dos verbos muy íntimamente relacionados. Para aprender, debe haber alguien o algo que lo enseñe
        y para enseñar se requiere alguien que aprenda. Aún así, el enlace es aún más fuerte. Yo soy fiel creente que la mejor manera de
        aprender es enseñando y que cuando uno enseña aprende mucho más de lo que cree. Esta creencia tiene fundamentos sólidos que llevo
        varios años solidificando. Para poder enseñar algo, se requiere un entendimiento más profundo que el que provee solo el conocer
        el tema. Poder expresar ideas de una manera que comunique el mensaje no solo claramente pero también simplemente no es sencillo
        y solo al intentar enseñar un tema se puede aprender como hacer esto. <br />
        <br />
        Desde que era pequeño siempre he disfrutado aprender cosas nuevas. Recuerdo como antes de tener mi propio celular o computadora, 
        le pedía prestada la suya a mi papá para poder aprender algo nuevo en <a href="https://www.khanacademy.org/">Khan Academy</a> o 
        ver algún video de astronomía en YouTube. Sin embargo, la parte que más disfrutaba no era ver los videos o hacer ejercicios, si 
        no comentarle a mi papá que es lo que había aprendido. No era hasta el momento que intentaba comunicarle a mi papá lo que había 
        visto que comenzaba en verdad a probar mi entendimiento. Había aprendido cosas nuevas, pero hasta que las intentaba enseñar 
        comenzaba a entenderlas en verdad. <br />
        <br />
        A mi criterio, la mejor parte de aprender algo nuevo es compartirlo con los demás. Como describí antes desde pequeño he tenido
        ese deseo de compartir, y ese deseo solo se ha intensificado desde entonces. Cuando estaba en quinto grado, aprendimos a sumar
        decimales. Poco antes de ese examen, yo había aprendido como multiplicarlos (probablemente de Khan Academy). Entonces,
        cuando terminé rápido el examen, decidí que para pasar el tiempo que quedaba iba a describir detalladamente como multiplicar dos
        números que tenían un punto decimal. No seré el mejor multiplicando, pero jamás se me va a olvidar que hacer si alguno de mis
        números tienen un punto decimal. <br />
        <br />
        El año después de este suceso participaría en la ronda departamental de las olimpiadas matemáticas de Honduras. Con mi resultado en
        esa prubea, entraría a la Academia Sabatina de Jóvenes Talento, donde iría a aprender matemática todos los sábados por cinco meses. 
        Durante mi trayecto olímpico continué intentando compartir todo lo que aprendía. Siepre que me salía un problema que me parecía
        bonito se lo compartía a mi papá. Al principio, podía ver como seguía mis explicaciones y luego reusaba los problemas para el 
        club de matemática o inclusive alguna de sus clases. Se que mi papá me ha enseñado mucha más matemática de lo que ha aprendido de mi,
        pero me gustaría creer que le he enseñado bastante. Después, cuando los problemas se volvían más complicados y las ideas involucradas
        eran un poco más complejas, sospecho que mi papá solo disfrutaba escuchar como me emocionaba mientras explicaba la solución que
        tanto me había gustado. <br />
        <br />
        En 2020 — con la pandemia en su máxima expresión — fui de solo enseñar aprendiendo a también aprender enseñando. Ese año comencé a dar
        clase para la misma academia sabatina que me había enseñado por los cuatro años anteriores. Ahora, estaba presentado con el desafío de
        compartirle a las nuevas generaciones lo que yo ya había aprendido antes. Sospecho que parte de la razón por la que mi nivel mejoró
        tanto durante la pandemia fue precisamente porque tenía que dar clase. Preparar las clases e intentar presentar el material de la mejor
        manera posible me hizo pensar mucho sobre temas a los que no les daba mucha importancia. Esto me ayudó mucho a solidificar mis bases
        y a entender con más profundidad lo que ya sabía. Fue alrededor de estos momentos que comencé a darme cuenta del gran valor que tiene
        la dualidad del aprendizaje y la enseñanza. <br />
        <br />
        El día de hoy hago un esfuerzo muy consciente por enseñar lo que aprendo y aprender lo que enseño. Ahora le doy clase a los posibles
        olímpicos internacionales de Honduras, lo cual me está haciendo mucho mejor olímpico de lo que fui cuando participaba en competencias.
        También, intento compartir con mis amigos bastante de lo que aprendo en mis clases, así refuerzo mi aprendizaje de la misma manera que
        hacía antes con videos de YouTube y temas de Olimpiada. Este año apliqué con el departamento de matemáticas de mi universidad para ser
        asistente en las clases que tomé el año pasado. De esta manera espero reforzar lo que aprendí el año pasado, ayudar a los nuevos
        estudiantes y ganar un poco de dinero. Estoy muy feliz de poder compartir todo lo que aprendo y espero que todos puedan experimentar la 
        alegría que es aprender y enseñar. $\\blacksquare$`,
      },
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
        que no es solo un sudoku clásico. Créanme, se van a divertir. $\\blacksquare$`,
      },
    ];  
}
