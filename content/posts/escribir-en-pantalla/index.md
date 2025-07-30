+++
title = "Escribir en la pantalla"
author = ["Abraham Villa Figueroa"]
summary = "La herramientas textuales"
date = 2024-12-03
draft = false
toc = false
readTime = false
autonumber = false
math = false
showTags = true
hideBackToTop = false
hidePagination = true
+++

## Problemas estudiantiles {#problemas-estudiantiles}

La mayor parte de mi carrera universitaria utilicé Pages o Google Docs para redactar mis ensayos académicos. Nunca me gustó tomar notas en la computadora, así que a clases llevaba libretas y escribía a mano. De vez en cuando, entregaba trabajos cortos en hojas mecanografiadas con una vieja máquina de escribir de segunda mano que compré en el centro de la Ciudad de México. Pasar a imprimir antes de las clases a los puestos que hay afuera de la Facultad de Filosofía y Letras de la UNAM podía ser bastante engorroso. De todas maneras, no pensaba demasiado en los medios que utilizaba para redactar textos. Eso cambió radicalmente cuando, durante la pandemia, me puse a trabajar en mi proyecto de titulación.

Hubo tres problemas que no había encontrado antes y que me obligaron a reflexionar conscientemente cómo redactaba mis textos de trabajo:

1.  **Demasiadas notas sueltas.** Para cada libro, artículo o capítulo que leía tomaba notas a mano en hojas de bloc amarillas. Al poco tiempo, tenía pilas de notas que no sabía cómo estructurar en un argumento coherente.
2.  **Redacción de un texto extenso.** Los procesadores de palabras como Word o LibreOffice Writer son adecuados para redactar textos de diez, veinte, cuarenta cuartillas. Cuando se trabaja con textos más largos, la edición en esos programas puede convertirse en una tarea infernal. Mover párrafos, reorganizar los encabezados, cuidar el formato de cada elemento, organizar la bibliografía, buscar y remplazar términos, vigilar la continuidad y diferencia de distintas versiones... todo esto es lento y tedioso.
3.  **Reutilizar la información.** Había muchas notas que finalmente no se incorporaron a la tesis. Muchas ideas quedaron al aire y no tenía un lugar para ellas fuera del borrador de la tesis. Después de pasar tantas horas leyendo, anotando y transcribiendo diagramas, me parecía un desperdicio no poder guardar y organizar todo el material recolectado en un formato que hiciera sencillo reutilizarlo después en otros proyectos.

Para resolver estos problemas, llegué a varias herramientas que se han integrado a mi sistema de trabajo y que han hecho de la escritura en la computadora una experiencia realmente satisfactoria:

1.  **Lenguaje de marcado ( o _markup language_).** En vez de escribir en programas que aplican formato directamente al texto (denominados _What You See Is What You Get_), prefiero trabajar directamente con archivos de texto y señalar el formato con lenguajes _markup_ sencillos. Empecé usando _Markdown_ y ahora uso _Org Mode_. Para mí, la gran ventaja de escribir con lenguaje de marcado es concentra la redacción del texto sólo en su _sentido_ y no es su _apariencia_, lo que divide el trabajo en dos fases claramente diferenciadas. También, obliga a pensar más detalladamente en la estructura del texto, pues cada línea de texto es un tipo de elemento que entra en una relación jerárquica o funcional con otros elementos desde el comienzo. Esto es particularmente cierto en el caso de los encabezados.
2.  **Sistema de metadatos.** Desde mi punto de vista, la gran ventaja de los sistemas digitales de organización de notas es que permiten asociar valores funcionales a líneas de texto, lo cual facilita la recuperación de éstas lineas en diferentes contextos. La forma más sencilla de hacerlo es con etiquetas. Aunque la misma función se obtiene del empleo de propiedades en lenguajes de marcado como _YAML_, _Markdown_ u _Org Mode_. En mi caso, lo que hice fue asignar a cada nota una etiqueta que la asociara con un problema que me interesaba tratar en la tesis. De ese modo, podía hacer aparecer las notas relevantes de los distintos materiales bibliográficos cuando estaba trabajando con tema en particular. En ese entonces, utilizaba _Obsidian_ con su plugin _Dataview_ para organizar los metadatos de mis notas.
3.  **Sistema de esquematización.** Para estructurar el desarrollo argumental de cada capítulo de la tesis, enlistaba primero todas las notas que tenía sobre los temas que quería tratar en ese capítulo. Luego veía cómo las distintas notas interactuaban entre sí, qué relaciones lógicas construían entre ellas, cómo podía incorporarlas en una sola linea argumental que hiciera sentido con los objetivos de la investigación y con el resto del material. Finalmente, organizaba esas notas en un esquema o _outline_ que me servía como guía para redactar el texto del capítulo. Con _markdown_, utilicé encabezados jerárquicos para delinear las jerarquías del desarrollo argumenta.

Con esas tres herramientas, fui capaz de organizar y redactar mi tesis. El proceso fue enormemente satisfactorio y me hizo reflexionar en lo distinto que era escribir en papel con escribir en la pantalla.

Después de todo ese proceso, creo que esta es la principal diferencia:

> Cuando escribes en papel, la unidad del texto es la hoja o el conjunto de hojas; mientras que cuando se escribe en la computadora, la unidad principal son las _líneas_ o _strings_ de texto continuo.

Bajo el primer esquema, es el pedazo de papel y sus limitaciones físicas las que determinan el trabajo con el texto. En el segundo caso, las líneas de texto existen de forma independiente de la unidad del sustrato físico.

![img](imgs/ai.st21.7.jpg#small)

Ninguna forma es inherentemente mejor que la otra, pero ciertamente ambas tienden a funcionar de modos distintos.


## Papel y pantalla {#papel-y-pantalla}

Con el papel, la unidad de cada texto es lo primordial. Es una fuerza centrípeta. Lo difícil es encontrar forma de hacer que los textos de relacionen  y se mezclen entre sí. Si tienes, por ejemplo, una nota que quieres dividir en dos, a menos que la cortes por la mitad, lo más práctico es simplemente copiar los contenidos relevantes en dos notas distintas, lo cual toma tiempo. En digital, es muy sencillo dividir, reordenar, expandir y modificar el texto sin tener en cuenta ese tipo de problemas prácticos.

Por eso mismo, el texto digital está hecho para la recombinación. Su naturaleza flotante hace que sea más sencillo modificarlo sin tomar en cuenta la unidad subyacente del sustrato. Esto, si bien puede parecer más práctico, también tiene un lado negativo. A veces la unidad del texto no es obvia durante el proceso de escritura, y el soporte material ayuda a que insistamos  en encontrar esa unidad incluso si todavía no está dada en el sentido del texto. Por ejemplo, si empezamos a escribir a mano o a máquina y releemos lo que llevamos y nos damos cuenta de que no está todavía en la página el punto al que queremos llegar, o que los argumentos no son convincentes, resulta muchas veces más sencillo sólo seguir escribiendo que volver atrás y corregir lo ya escrito. Así, al final, en el mejor de los casos, tendremos aquello a lo que queríamos llegar y muchas más cosas que tal vez haya que cortar, pero lo más importante es que el texto estará completo. En cambio, en la computadora es fácil borrar el texto, ya escrito, editarlo, moverlo de lugar, y esa ductilidad bien puede dificultar el proceso de escritura. Cada vez que se hace una modificación, todo el texto cambia, y para añadir la siguiente frase hay que leerlo de nuevo. Y si no nos convence y cambiamos algo otra vez, es como si volviéramos al principio. Bajo este esquema de trabajo, es más sencillo perderse en la ilusión de que estamos llegando al punto en vez de desarrollar todo lo que, en un momento dado, quieres desarrollar. En mi experiencia, y sé que esto depende de estilos muy personales de escritura, lo segundo es más difícil y menos efectivo.

Es por eso que cuando redacté mi tesis decidí que la primera versión la escribiría a mano. Era un manuscrito bastante ilegible (mi letra manuscrita no es particularmente buena) y con muchas digresiones, pero completo. Ese manuscrito tenía más de 400 páginas. La tesis en su versión final tiene alrededor de 150. Creo que si la hubiera redactado directamente en la computadora, seguramente habría pensado mejor lo que escribía y hubiera borrado mucho durante el proceso de escritura. No sé, sin embargo, si lo que escribí y quité de alguna manera no era tan importante como lo que se quedó: si no lo hubiera escrito a lo mejor no llegaba después a las ideas que sí me sirvieron.

![img](imgs/ai.st21.8.jpg#small)

Desde hace algún tiempo, he vuelto a escribir en la computadora. El principal motivo es la falta de tiempo: escribir a mano y luego transcribir es tardado. Cuando escribí mi tesis, durante la pandemia, el ritmo era distinto. Parecía que había tiempo para tomarse las cosas con calma.

Hoy mis medios de escritura no son radicalmente distintos  a los de aquél entonces. Cambié el lenguaje de marcado. En vez de _markdown_ uso _org_, más que nada porque es el formato que más se integra con la funcionalidad de Emacs, que es el mejor programa que he encontrado para trabajar con texto en la computadora. Algún día quizá escriba algo sobre él. Estoy convencido de que cualquier persona cuyo trabajo principal sea redactar textos en una pantalla sería bastante más feliz con un procesador de textos como ese que con las herramientas que son el estándar hoy en día (Word, Google Docs). Sea como sea, ahora cuando escribo en pantalla intento no corregir demasiado la primera vez, intento llegar hasta el final, y sólo cuando termino, vuelvo sobre los pasos. No lo haría así si no hubiera escrito tanto a mano.


## La importancia de los medios de producción {#la-importancia-de-los-medios-de-producción}

No creo que sea gratuita la relación entre lo que escribimos y cómo lo hacemos. Las condiciones de producción que determinan la naturaleza de las cosas también tienen un componente tecnológico, evidentemente, y no veo por qué motivo para los textos (que, al fin y al cabo, son cosas, artefactos, productos) es diferente.

Ahora que tanto se habla sobre cómo la tecnología influye en nuestras vidas y compromete la vida intelectual, política y social, me pregunto por qué nadie habla mucho sobre cómo también ha cambiado radicalmente la manera en que escribimos. Y no pienso necesariamente en alta literatura, en cuestiones de arte o estilo, en si las nuevas tendencias literarias son un reflejo de la decadencia cultural a la que nos ha sometido la computadora, o algo por el estilo. Simplemente me resulta evidentemente muy distinto el proceso que establecemos con el lenguaje cuando escribimos con un teclado y cuando escribimos sobre el papel.

Creo que la indiferencia por reflexionar cómo es que producimos nuestro entendimiento de las cosas (porque, así me lo parece, la escritura no sirve para otra cosa) en un nivel técnico tiene mucho que ver con una _ceguera_ fundamental hacia la tecnología. Incluso hoy, cuando parece que estamos obsesionados con ese tema, no vemos que la tecnología es siempre un proceso de interacción entre las posibilidades del pensamiento (en un sentido amplio: ideas sí, pero también sensaciones, la imaginación, la memoria, cualquier cosa que podamos ubicar dentro de nosotros) y de la acción. Escribir es hacer algo, las posibilidades de la escritura siempre van de la mano con las acción: cómo escribimos es también lo que escribimos. El medio es el mensaje.

Ahí está, por ejemplo, Kerouac, martillando su máquina de escribir con el espíritu del jazz, o Napoleón levantando un imperio y revolucionando Europa con las más de 36,000 [cartas que escribió](https://www.napoleon.org/en/young-historians/napodoc/a-day-in-the-life-of-napoleon-i-2/). El mundo moderno no existiría sin la escritura digital. Su naturaleza involucra íntimamente la manera en la que vivimos, trabajamos y pensamos.

![img](imgs/ai.st35.8.webp#small)

Lo que nos permite entender cabalmente cómo es que ciertas condiciones materiales determinan la vida de las personas es la perspectiva. Una vez que la situación ha evolucionado, podemos mirar hacia atrás y comparar el pasado con el estado actual de las cosas. Así somos conscientes de lo mucho que ciertas limitaciones pesaban sobre nosotros. Sumidos como estamos en la escritura digital y en los medios de comunicación contemporáneos, carecemos de un alejamiento suficiente para ver nuestra propia situación en perspectiva. Quizá en el futuro, cuando se piense y se escriba con nuevas herramientas, será evidente cómo escribir en pantallas condicionaba la vida y el trabajo. Mientras tanto, sólo podemos mirar hacia el pasado e intuir la importancia de los medios de producción tecnológicos imaginando cómo era en otras épocas mucho más difícil editar un texto, imprimirlo o distribuirlo, por ejemplo.


## No hay neutralidad técnica {#no-hay-neutralidad-técnica}

Si pensamos que la manera en que escribimos determina lo que escribimos, si el medio es también el mensaje, entonces las condiciones de producción de un texto inciden directamente en su naturaleza. Si, además, escribimos para pensar, comunicar, aprender e investigar, sucede entonces que el resultado de todas estas actividades varía según la manera en que se escribe. Mi experiencia escribiendo a mano y en la computadora así me lo ha confirmado. Las herramientas condicionan las posibilidades y los resultados. No se piensa igual con pluma y papel que con teclado y pantalla. Por ello, la decisión de emplear una herramienta y no otra es significativa.

A diferencia de las decisiones morales, estéticas o ideológicas, las decisiones técnicas en la escritura no parecen tan significativas. Quizá porque sus consecuencias se circunscriben más bien al acto inmediato de la producción. El escritor escribe como puede y como quiere y el resto del mundo se ocupa de su obra sólo cuando esta ya es un texto terminado. Las maneras en las que la técnica condiciona el proceso de producción no perviven en el manuscrito, o al menos no de forma obvia y evidente. Sin embargo, creo que siguen siendo parte de lo que la obra es. Su marca es difusa y no siempre fácil de situar e interpretar, pero sin duda está ahí.

¿De qué nos sirve encontrar esa marca? ¿Cómo podemos interpretarla? Quizá, en última instancia, no es una huella que los contemporáneos puedan entender, porque están demasiado cerca de ella y les falta la perspectiva necesaria para entender su diferencia específica. Queda la tarea en manos del futuro.

Eso es, a lo mejor, lo más pertinente de notar la importancia de los medios de producción en la escritura: nos revelan la naturaleza _histórica_ del pensamiento y la comunicación. Y nos recuerdan que la historia es un proceso abierto e inacabado, porque aunque estamos sumidos en ella y sus condicionamientos son inescapables, no podemos entenderla perfectamente. Nuestro presente es un signo que sólo el futuro sabrá descifrar.
