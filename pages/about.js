export default () => (
  <div>
  <style jsx>{`

                    @font-face {
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  src: local('Cinzel-Bold'), url(../font/cinzel_bold.woff) format('woff');
}

@font-face {
  font-family: 'PT Mono';
  font-style: normal;
  font-weight: 400;
  src: local('PT Mono'), local('PTMono-Regular'), url(../font/pt_mono.woff) format('woff');
}


.body {
  font-family: Georgia, 'Nimbus Roman No9 L', 'Century Schoolbook L', serif;
  font-size: 20px;
  line-height: 1.45;
  color: black;
  background: white;
  padding: 0;
margin-top: auto;
margin-right: auto;
margin-bottom: auto;
margin-left: auto;
  max-width: 800px;
}

article {
  margin: 0 auto;
  max-width: 35em;
  padding: 2em 1em 5em;
  position: relative;
  overflow-wrap: break-word;
}

nav {
  display: block;
  height: 0;
  text-align: right;
}

nav a {
  font-size: 80%;
  color: #aaa !important;
  text-decoration: none !important;
}

a.subtlelink {
  color: black !important;
  text-decoration: none !important;
}

pre {
  padding: 5px 0 5px 15px;
  line-height: 1.35;
  margin: 1rem 0;
  max-width: 100%;
  overflow-x: auto;
}

pre[data-language=javascript] {
  cursor: pointer;
}

p:hover a.p_ident:after, pre:hover a.c_ident:after, h2:hover a.h_ident:after, h3:hover a.h_ident:after {
  content: "¶";
  font-family: 'Cinzel', Georgia, serif;
  color: #888;
  font-size: 17px;
  position: absolute;
  right: -10px;
}

@media screen and (max-width: 800px) {
  p:hover a.p_ident:after, pre:hover a.c_ident:after, h2:hover a.h_ident:after, h3:hover a.h_ident:after {
    right: 5px;
  }

  blockquote p:hover a.p_ident:after {
    right: -15px;
  }
}


code, pre, .CodeMirror {
  font-size: 18px;
  font-family: 'PT Mono', monospace;
}

code {
  padding: 0 2px;
}

h1, h2, h3 {
  font-family: 'Cinzel', Georgia, serif;
  font-weight: 700;
  margin: 1rem 0;
  letter-spacing: 2px;
}

h1 {
  font-size: 130%;
}
h2 {
  font-size: 115%;
}
h3 {
  font-size: 100%;
}

pre.cm-s-default, p, h2, h3 {
  margin-right: -30px;
  padding-right: 30px;
}

@media screen and (max-width: 800px) {
  pre.cm-s-default, p, h2, h3 {
    margin-right: 0;
    padding-right: 0;
  }
}

a, a:visited, a:active {
  text-decoration: none;
  color: #467;
}

a:hover {
  text-decoration: underline;
}

ol {
  margin: 1em 0;
  padding: 0;
  counter-reset: li;
}

ol li {
  margin: 0 0 0 40px;
  padding: 0;
  list-style: none;
  position: relative;
}

ol li:before {
  content: counter(li) ".";
  counter-increment: li;
  position: absolute;
  width: 2em;
  text-align: right;
  left: -2.5em; top: 1px;
  font-size: 90%;
}

ol li p {
  margin: 0;
}

.chap_num {
  font-size: 60%;
  color: #aaa;
  margin-top: -.7em;
}

blockquote {
  margin: 0 0 0 3em;
  padding: 0;
  position: relative;
  font-size: 85%;
}

blockquote p {
  color: #333;
}

blockquote:before {
  content: '“';
  position: absolute;
  left: -.5em;
}

blockquote p:last-of-type:after {
  content: '”';
}

blockquote footer {
  position: relative;
  margin-left: 1em;
}

p + footer {
  margin-top: -.5em;
}

blockquote footer cite {
  font-style: italic;
}

blockquote footer:before {
  content: '—';
  position: absolute;
  left: -1em;
}

.editor-wrap {
  margin: 1rem 0;
  position: relative;
  -moz-transition: margin-left .5s ease-out, margin-right .5s ease-out;
  -webkit-transition: margin-left .5s ease-out, margin-right .5s ease-out;
  -o-transition: margin-left .5s ease-out, margin-right .5s ease-out;
  transition: margin-left .5s ease-out, margin-right .5s ease-out;
  border-bottom: 1px solid #4ab;
}

.sandbox-output {
  border-top: 1px solid #4ab;
  padding: 4px 0 4px 10px;
  white-space: pre;
  max-height: 25em;
  overflow: auto;
}

.sandbox-output:empty {
  display: none;
}

.editor-wrap iframe {
  display: block;
  border: 1px dotted #4ab;
  border-top: 1px solid #4ab;
  border-bottom-width: 0;
  padding: 0; margin: 0;
  width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.sandbox-output pre {
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
}

.sandbox-output-error { color: red; }
.sandbox-output-warn { color: orange; }

.sandbox-output-etc {
  color: #1a1;
  background: #dfd;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 1px;
}

.sandbox-output-prop {
  color: #444;
}

.sandbox-output-etc-block {
  display: inline-block;
  vertical-align: top;
}

.sandbox-output-etc-block table {
  border-collapse: collapse;
}
.sandbox-output-etc-block table td {
  vertical-align: top;
  white-space: pre-wrap;
  font-family: 'PT Mono', monospace;
}
.sandbox-output-etc-block table td:first-child {
  text-align: right;
}

.sandbox-menu {
  position: absolute;
  z-index: 19;
  right: -13px; top: -1px;
  cursor: pointer;
  font-size: 80%;
  overflow: hidden;
  width: 10px;
  border-top: 2px solid #4ab;
  height: 2px;
  border-bottom: 6px double #4ab;
}

.sandbox-open-menu {
  font-family: tahoma, arial, sans-serif;
  position: absolute;
  background: white;
  border: 1px solid #aaa;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
  padding: 0;
  font-size: 75%;
  color: black;
  line-height: 1.3;
  right: -9px; top: 5px;
  z-index: 20;
}

.sandbox-open-menu div {
  cursor: pointer;
  padding: 5px 10px;
}

.sandbox-open-menu div:hover {
  background: #bdd;
}

/* Toned-down CodeMirror style */

.cm-s-default .cm-keyword, .sandbox-output-null, .sandbox-output-fun {color: #506;}
.cm-s-default .cm-atom, .sandbox-output-bool {color: #106;}
.cm-s-default .cm-number, .sandbox-output-number {color: #042;}
.cm-s-default .cm-def {color: #009;}
.cm-s-default .cm-variable-2, .cm-s-default .cm-attribute {color: #027;}
.cm-s-default .cm-variable-3 {color: #072;}
.cm-s-default .cm-comment {color: #740;}
.cm-s-default .cm-string, .sandbox-output-string {color: #700;}
.cm-s-default .cm-string-2 {color: #740;}
.cm-s-default .cm-tag {color: #170;}

.CodeMirror {
  height: auto;
  line-height: 1.35;
  border-top: 1px solid #4ab;
  overflow-wrap: normal;
}
.CodeMirror-scroll {
  max-height: 700px;
}
.CodeMirror pre {
  padding: 0 4px 0 10px;
}
.CodeMirror-gutters {
  border: none;
  background: white;
}
.CodeMirror-linenumber {
  padding: .5em 3px 0 0;
  min-width: 12px;
  color: #4ab;
  font-size: 60%;
}

.sandboxhint {
  position: absolute;
  right: -15px;
  font-family: tahoma, arial, sans-serif;
  font-size: 70%;
  padding: 4px 8px;
  background: rgb(220, 220, 220);
  color: white;
  border-radius: 5px;
}

@media screen and (max-width: 800px) {
  .sandboxhint {
    right: 5px;
  }
}

.sandboxhint:before {
  position: absolute;
  width: 0; height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 12px solid rgb(220, 220, 220);
  top: 6px;
  left: -11px;
  content: '';
}


div.image {
  max-width: 640px;
  margin: 0 30px;
}

@media screen and (max-width: 500px) {
  div.image {
    margin: 0;
  }
}

div.image img {
  max-width: 100%;
}

div.solution:before {
  content: "» Display hints...";
}

div.solution {
  color: #156;
  cursor: pointer;
}

div.solution-text {
  display: none;
}

div.solution.open:before {
  content: "";
}

div.solution.open {
  cursor: default;
}

div.solution.open div.solution-text {
  display: block;
}

td {
  vertical-align: top;
}

td + td {
  padding-left: 1em;
}

table {
  margin-left: 15px;
}
.it {
  color: #BAB7B7;
  font-style: italic;

}
                    `}</style>

    <div className="body">
  <p>Hey there!</p>
<p className="it">Esta es una muestra de <strong>The Missing Forms Handbook of React</strong>. Incluye capítulos 2, Formularios 101 y 7, Otros casos para formularios. Puede obtener el libro completo en <code>https://goshakkk.name/the-missing-forms-handbook-of-react/</code></p>

<p>This is a sample of <strong>The Missing Forms Handbook of React</strong>. It includes chapters 2, Forms 101, and 7, Other cases for forms. You can get the full book at <code>https://goshakkk.name/the-missing-forms-handbook-of-react/</code></p>

<p className="it">Si algo no está claro, o si tenes alguna pregunta, estaría más que feliz de ayudarte. Enviame un correo electrónico a <code>me@goshakkk.name</code>.</p>

<p>If anything is not clear, or if you have any questions, I would be more than happy to help. Email me at <code>me@goshakkk.name</code>.</p>

<p>Have a wonderful one! Gosha Arinich</p>

<h3>About you</h3>

<p className="it">Este libro es para vos si trabajar con forms en React te parece extraño. Deberías haber seguido al menos los documentos oficiales y tener una idea básica de cómo funciona React.</p>

<p>This book is for you if working with forms in React seems alien. You should already have at least followed the official docs and have a basic idea of how React works.</p>

<p className="it">Este libro no es para vos si estás buscando una visión general de React. Los documentos oficiales serían el mejor lugar para empezar.</p>
<p>This book is not for you if you are looking for a general React overview. The official docs would be the best place to get started.</p>

<h3>About me</h3>
<p className="it">Soy Gosha Arinich. Trabajo como consultor y blog sobre React.</p>
<p>I’m Gosha Arinich. I work as a consultant and blog about React.</p>

<h2>How to read this book</h2>
<p className="it"><strong>The Missing Forms Handbook of React</strong> está estructurado como una serie de preguntas y situaciones comunes y respuestas a ellas.</p>
<p><strong>The Missing Forms Handbook of React</strong> is structured as a series of common questions and situations, and answers to them.</p>

<p className="it">El libro se centra en el concepto de tratar las forms como datos, que se introduce en los primeros capítulos. Los capítulos posteriores demuestran las aplicaciones prácticas del concepto de modo que puedas "sentirlo", así como cubrir las especificidades de ciertos casos.</p>
<p>The book focuses on the concept of treating forms as data, which is introduced in the first chapters. Later chapters demonstrate practical applications of the concept so that you can "get a feel" for it, as well as cover the specifics of certain cases.</p>

<p className="it">Tené en cuenta que los fragmentos de código no son el punto per se, son sólo una demostración.</p>
<p>Note that the code snippets are not the point per se, they are just a demonstration.</p>

<p className="it">Cada capítulo es algo autónomo, así que saltar alrededor debe estar bien si estás buscando la solución rápida. Sin embargo, seguí leyendo el primer par de capítulos para la línea de base.</p>
<p>Each chapter is somewhat self-contained so jumping around should be fine if you are looking for the quick fix. However, still read the first couple of chapters for the baseline.</p>

<h2>Forms 101</h2>
<p className="it">Haciendo el form más simple</p>
<p>Making the simplest form</p>

<p className="it">Finalmente estamos listos para hacer nuestro primer formulario. Vamos a bucear. ¿Listo?</p>
<p>We're finally ready to make our first form. Let's dive in. Ready?</p>
<pre>
class SignUpForm extends React.Component &#123;<br></br>
		constructor() &#123;<br></br>
			super();<br></br>
			this.state = &#123;<br></br>
				firstName: '',<br></br>
			&#125;;<br></br>
		&#125;<br></br>
		handleFirstNameChange = (evt) =&#62; &#123;<br></br>
			this.setState(&#123; firstName: evt.target.value &#125;);<br></br>
		&#125;<br></br>
		handleSubmit = (evt) =&#62; &#123;<br></br>
			evt.preventDefault();<br></br>
			alert(`Signed up as: $&#123;this.state.firstName&#125;`);<br></br>
		&#125;<br></br>
		render() &#123;<br></br>
			return (<br></br>
				&#60;form onSubmit=&#123;this.handleSubmit&#125;&#62;<br></br>
						&#60;label&#62;<br></br>
							First name<br></br>
							&#60;input<br></br>
								type="text"<br></br>
								placeholder="Enter first name"<br></br>
								value=&#123;this.state.firstName&#125;<br></br>
								onChange=&#123;this.handleFirstNameChange&#125;<br></br>
							/&#62;<br></br>
				&#60;/label&#62;<br></br>
				&#60;button&#62;Sign up as &#123;this.state.firstName&#125;&#60;/button&#62;<br></br>
			&#60;/form&#62;<br></br>
		)<br></br>
	&#125;<br></br>
&#125;
</pre>
<p>https://goshakkk.jsbin.com/gopayi/12/edit?js,output</p>

<p className="it">¿Viste eso? ¡La etiqueta del botón se actualiza a medida que escribimos! ¡¿Cuan genial es eso?!</p>
<p>Did you see that? The button label is updated as we type! How cool is that?!</p>

<p className="it">Es increíblemente sencillo implementar esto porque los valores de formulario viven en el state.</p>
<p>It's stunningly simple to implement this because the form values live in the state.</p>

<p className="it">Ahora, el código puede parecer un poco fuera de lugar, así que vamos a caminar a través de lo que está pasando aquí.</p>
<p>Now, the code may still look a bit out-of-place, so let's walk through what's going on in here.</p>

<p className="it">Recordemos cómo definimos una form anteriormente:</p>
<p>Recall what we defined a form as previously:</p>
<ul>
<li className="it">datos: una colección de campos y sus valores correspondientes.</li>
<li>data: a collection of fields and their corresponding values. &#123;<br></br>
first_name: 'John', last_name: 'Doe' &#125;</li>
<li className="it">vistas: una colección de entradas.</li>
<li>views: a collection of inputs. &#60;input<br></br> value=&#123;first_name&#125; <br></br>onChange=&#123;updateFirstName&#125; /&#62;</li>
<li className="it">y una forma de submit de alguna manera, guardar, enviar estos datos</li>
<li>and a way to somehow submit, save, send this data</li>
</ul>

<p className="it">Estos son los bits que son absolutamente necesarios para cualquier form. Hay otras cosas opcionales, también, pero éstas están presentes en virtualmente cada form fuera de ella. Así que vamos a empezar con las forms.</p>

<p>These are the bits that are absolutely required for any form. There are other optional things, too, but these are present in virtually every form out there. So let's start with them.</p>

<h2>Data</h2>

<p className="it">El propósito primario de cualquier formulario es pedirle al usuario de la aplicación ciertas piezas de información. No es de extrañar entonces que esta es la "capa" más importante de cualquier form.</p>
<p>The primary purpose of any form is to ask the application user for certain pieces of information. It's no wonder then that this is the most important "layer" of any form.</p>

<p className="it">React nos da un mecanismo para realizar un seguimiento y cambiar dinámicamente los datos dentro de un componente. Ese mecanismo es el state.</p>
<p>React gives us a mechanism to keep track of, and dynamically change, data within a component. That mechanism is state.</p>

<p className="it">Tendremos un atributo de state para cada campo, y pasaremos los valores de campo actuales a los componentes de entrada en render.</p>
<p>We will have a state attribute for every field, and we will pass the current field values to the input components in render.</p>

<p className="it">Podemos decir que los datos de nuestra form están representados por un objeto de form &#123;<br></br>
firstName: 'Some name'&#125;.</p>
<p>We can say the data of our form is represented by an object of shape &#123;<br></br>
firstName: 'Some name'&#125;.</p>

<h2>Updating the Data</h2>
<p className="it">Un formulario que no permite cambiar sus inputs no es bueno. ¡Necesitamos una forma de actualizar los input fields!</p>
<p>A form that doesn't allow changing its inputs is no good. We need a way to update fields!</p>

<p className="it">Para que esto suceda, vamos a escribir una función que puede unir los input fields y el state de nuestro formulario.</p>
<p>To make that happen, we're going to write a function that can tie together the input fields and our form's state.</p>

<p className="it">Vamos a cubrir un componente de entrada de texto HTML primitivo aquí, pero el mismo principio se aplica a otros tipos de inputs y componentes de entrada personalizados: ya sea auto-fabricados o de bibliotecas de formularios.</p>
<p>We are going to cover a primitive HTML text input component here, but the same principle applies to other types of inputs and custom input components: whether self-made or from form libraries.</p>

<p className="it">El componente <code>&#60;input /&#62;</code> soporta un prop <code>onChange</code>, que debería ser una función. Esta función llama un event handler, porque va a recibir un evento como un argumento.</p>
<p>The  <code>&#60;input /&#62;</code> component supports an  onChange prop, which should be  a function. This function is called an event handler, because it is going to receive an event as an argument.</p>

<p className="it">  <code>onChange</code> se va a llamar cada vez que el usuario cambia el valor del input.</p>

<p>  <code>onChange</code> is going to be called every time the user changes the value of the input.</p>

<p className="it">Si has hecho alguna codificación JS/jQuery en el pasado, esto se va a sentir familiar.</p>
<p>If you've done any JS/jQuery coding in the past, this is going to feel familiar.</p>

<p className="it">Un evento es un objeto con muchas propiedades. Solo estamos interesados ​​en una:</p>
<p>An event is an object with many properties. We are only interested in one:</p>

<p className="it"><code>target.value . target</code> va a ser un nodo DOM de input, y el <code>value</code><br></br>
tiene su nuevo valor.</p>
<p><code>target.value . target</code> is going to be an input DOM node, and <code>value</code><br></br> 
holds its new value.</p>

<p className="it">Lo más común es actualizar el state de acuerdo con este nuevo valor. Algo como esto:</p>
<p>Most commonly, we would update the state according to this new value. Something like this:</p>
<pre>
this.setState(&#123; firstName: evt.target.value` &#125;);
</pre>
<bloquote>
<p className="it">Aside: obtener el valor de una casilla de verificación es un poco diferente. Varios componentes de entrada se tratarán más adelante en el libro.</p>
<p>Aside: getting the value of a checkbox is a bit different. Various input components will be covered later in the book.</p>
</bloquote>
<bloquote>
<p className="it">Aside: el evento para cambiar un valor de entrada de texto se llama oninput en las APIs Web. Sin embargo, en React, se llama onChange para estar en línea con otros elementos de formulario. También refleja mejor lo que está sucediendo - un valor está cambiando.</p>
<p>Aside: the event for changing a text input value is called oninput in the Web APIs. Nevertheless, in React, it is called onChange to be in line with other form elements. It also reflects better what's happening — a value is changing.</p>
</bloquote>
<p className="it">Otra cosa que vale la pena señalar es el hecho de que debemos enlazar a los manejadores de eventos. El comportamiento de esto en JavaScript es un tema que merece su propio libro, y no estamos aquí para hablar sobre él en gran detalle.</p>
<p>One other thing worth pointing out is the fact we need to bind event handlers. The behavior of this in JavaScript is a topic deserving its own book, and we're not here to talk about it in great detail.</p>

<p className="it">Un resumen rápido es útil, así que aquí hay tres maneras que normalmente se maneja: </p>
<p>A quick summary is helpful, so here are three ways it's typically handled:</p>

<p className="it">Bind (Vincular) en el constructor. Este es el enfoque más universal, aunque un poco detallado.</p>

<p>Bind in constructor. This is the most universal, although a bit verbose approach.</p>

<pre>
class SignUpForm extends React.Component &#123;<br></br>
constructor() &#123;<br></br>
super();<br></br>
this.state = &#123;<br></br>
firstName: '',<br></br>
&#125;;<br></br>
this.handleFirstNameChange =<br></br>
this.handleFirstNameChange.bind(this);<br></br>
&#125;<br></br>
handleFirstNameChange(evt) &#123;<br></br>
this.setState(&#123; firstName: evt.target.value &#125;);<br></br>
&#125;<br></br>
&#125;<br></br>
</pre>


<p className="it">Bind (Vincular) en render. Es menos ciertamente menos verbosa que la vinculación en el constructor, pero puede tener implicaciones de rendimiento.</p>

<p>Bind in render. It's less certainly less verbose than binding in constructor, but it may have performance implications.</p>

<pre>
handleFirstNameChange(evt) &#123;<br></br>
this.setState(&#123; firstName: evt.target.value &#125;);<br></br>
&#125;<br></br>
render() &#123;<br></br>
// ...<br></br>
onChange=&#123;this.handleFirstNameChange.bind(this)&#125;<br></br>
&#125;<br></br>
</pre>


<p className="it">Utilice una función de flecha como una propiedad de clase. Esta sintaxis es todavía experimental, pero muchos proyectos la utilizan.</p>
<p>Use an arrow function as a class property. This syntax is still experimental, but many projects use it.</p>

<pre>
handleFirstNameChange = (evt) =&#62; &#123;<br></br>
this.setState(&#123; firstName: evt.target.value &#125;);<br></br>
&#125;<br></br>
</pre>

<p className="it">Este estilo va a ser utilizado en todo el libro. Si no puede utilizarlo en su proyecto, cambiar esto en bind en constructor o bind en render debe llegar allí.</p>
<p>This style is going to be used throughout the book. If you can't use it on your project, changing this into either bind in constructor or bind in render should get you there.</p>

<p className="it">Material relevante:</p>
<p>Relevant material:</p>

<p className="it">Métodos para manejar esto: https://medium.com/@housecor/react- binding-patterns-5-approach-for-handling-this-92c651b5af56</p>

<p>Approaches for handling this: https://medium.com/@housecor/react- binding-patterns-5-approaches-for-handling-this-92c651b5af56</p>

<p className="it">¿Por qué y cómo vincular métodos en sus clases de componentes de React:</p>
<p>Why and how to bind methods in your React component classes: http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your- react-component-classes/</p>

<h2>View</h2>

<p className="it">Después de que los datos y el mecanismo de actualización estén en su lugar, necesitamos procesar los propios inputs.</p>

<p>After with data and update mechanism in place, we need to render the inputs themselves.</p>

<p className="it">Pasamos el valor actual y un manejador de eventos desde la sección anterior al componente de entrada:</p>

<p>We pass in the current value and an event handler from the section before to the input component:</p>
<pre>
&#60;input<br></br>
value=&#123;this.state.firstName&#125;<br></br>
onChange=&#123;this.handleFirstNameChange&#125;<br></br>
/&#62;<br></br>
</pre>

<p className="it">Esto es suficiente para usar el componente <code>&#60;input /&#62;</code> primitivo, pero incluso con componentes de interfaz de usuario personalizados, sigue siendo similar.</p>

<p>This is enough to use the primitive <code>&#60;input /&#62;</code> component, but even with custom UI components, it's still going to be similar.</p>

<p className="it">Una forma de enviar</p>
<h2>A way to submit</h2>

<p className="it">También queremos responder al formulario que se envía. </p>

<p>We also want to respond to the form getting submitted.</p>

<p className="it">Para hacer eso, pasaremos <code>onSubmit</code> al componente de formulario, y eso es todo. El evento <code>"submit"</code> puede ser activado por:</p>
<p>To do that, we pass <code>onSubmit</code> to the form component, and that’s it. The <code>“submit”</code> event can be triggered by either:</p>
<ul>
<li className="it">haciendo clic en un botón o tipo de <code>type=submit</code> en el formulario presionando Enter mientras está en un cuadro de texto </li>

<li>clicking a button or input <code>type=submit</code> in the form pressing Enter while in a text box</li>
<li className="it">Es por eso que no debes añadir <code>onClick</code> al botón: rompería el caso Enter. En su lugar, simplemente pase onSubmit a la &#60;form&#62; directamente.</li>
<li>Which is why you shouldn't add <code>onClick</code> to the button : it would break the Enter case. Instead, just pass onSubmit to the &#60;form&#62; directly.</li>
</ul>
<p className="it">Ahora, lo que sucede en el manejador de envío es principalmente de usted. Usted hace su cosa aquí, lo que sea - hacer una solicitud a un servidor remoto o algo así. En este libro, no importa mucho. </p>
<p>Now, what happens in the submit handler is mostly up to you. You do your thing here, whatever that is — making a request to a remote server or something. In this book, it doesn't matter that much.</p>

<p className="it">Una cosa que debe asegurarse es llamar a <code>evt.preventDefault()</code> en <code>onSubmit</code>. Es necesario decirle al navegador que ni siquiera intente procesar este formulario.</p>
<p>One thing you need to make sure is to call <code>evt.preventDefault()</code> in the <code>onSubmit</code> handler. It's needed to tell the browser not even to try processing this form.</p>

<p className="it">¿Pero por qué necesitamos establecer el state? </p>
<h2>But why do we need to set the state?</h2>

<p className="it">Es una pregunta super-común que la gente pregunta todo el tiempo. </p>

<p>It's a super-common question that people ask all the time.</p>

<p className="it">Si escribo una letra en la entrada, ¿no funcionaría? </p>
<p>If I type a letter into the input, wouldn't it just work?</p>

<p className="it">En realidad, no lo hará. </p>
<p>Actually, it won't.</p>

<p className="it">Lo que hemos state haciendo hasta ahora es controlar la entrada. En términos sueltos, estamos estableciendo su valor explícitamente basado en lo que tenemos en state. Su valor no puede ser diferente de lo que pasa en value=&#123;...&#125;</p>
<p>What we've been doing up until now is controlling the input. In loose terms, we are setting its value explicitly based on what we have in state. Its value can't be different from what we pass into value=&#123;...&#125;</p>

<p className="it">La única manera en que la string dentro de la entrada va a cambiar es si actualizamos el state ... lo que hacemos dentro de <code>handleFirstNameChange</code> . </p>
<p>The only way the string inside the input is going to change is if we update the state... which we do, inside <code>handleFirstNameChange</code> .</p>

<p className="it">Usted puede estar preguntándose si el valor de la entrada es siempre igual a state, no significa que <code>evt.target.value</code> sería ese mismo valor? No. El valor en el evento es lo que debe ser el nuevo valor. </p> 
<p>You may be wondering if the value of the input is always equal to state, wouldn't that mean <code>evt.target.value</code> would be that same value? No. The value in the event is what the new value should be.</p>

<p className="it">Por ejemplo, si un campo de nombre tiene el valor "Nuevo Yor" y escribe "k", el evento contendrá el valor "Nueva York". El valor del evento se utiliza para actualizar el state, que cambia el valor dentro de la entrada. </p>
<p>For example, if a name field has the value "New Yor", and you type "k", the event will contain the value "New York". The value from the event is then used to update the state, which changes the value inside input.</p>

<div className="image"><a></a><img src="/static/001.jpg" width="100%"/></div>


<code>https://goshakkk.jsbin.com/fayupe/2/edit?js,output</code>

<p className="it">Sin embargo, si no actualiza el state dentro del manejador de eventos, el nuevo valor no va a quedarse, y el campo seguirá diciendo "New Yor". </p>
<p>However, if you don't update the state inside the event handler, the new value is just not going to stick around, and the field will still say "New Yor".</p>

<p className="it">Vea usted mismo: </p>

<p>See for yourself:</p>

<code>https://goshakkk.jsbin.com/fayupe/4/edit?js,output</code>
 
<p className="it">¿Cómo se manejan las ediciones? </p>
<h2>How are edits handled?</h2>

<p className="it">Eso es genial, piensas, pero si el único tipo de formulario fuera una forma vacía, todo el mundo sería miserable. En cambio, nuestras aplicaciones a menudo implican crear y actualizar datos (las partes C y U de CRUD.) </p>

<p>That’s cool, you think, but if the only kind of form were an empty form, everyone would be miserable. Instead, our applications often involve creating and updating data (the C and U parts of CRUD.)</p>

<p className="it"> Así que usar formularios para editar datos es bastante estándar. ¿Hay alguna manera de hacer eso en React? ¡Por qué sí! </p>

<p>So using forms for editing data is pretty standard. Is there a way to do that in React? Why yes!</p>

<p className="it"> Al crear un formulario para crear, por ejemplo, una entrada en un blog, no hay datos existentes. Pero después de crear una publicación, es más probable que detecte un error tipográfico y, por lo tanto, necesitaría editar la publicación. </p>

<p>When making a form to create, say, a blog post, there is no existing data. But after you create a post, you’re more than likely to spot a typo, and therefore would need to edit the post.</p>

<p className="it"> Cuando lo hace, obtiene una copia del texto actual de la publicación; pero a medida que empiece a cambiarlo, no se refleja en el blog hasta que presione ‘Save.’. Igual aquí. </p>

<p>When you do so, you get a copy of the current text of the post; but as you start changing it, it’s not reflected on the blog until you press ‘Save.’ Same here.</p>

<p className="it"> Para lograrlo, simplemente queremos pasar los valores existentes al componente de formulario. Así, tal vez: </p>
<p>To achieve that, we would simply want to pass existing values to the form component. Like this, perhaps:</p>
<pre>
&#62;PostForm title=&#123;currentTitle&#125; body=&#123;currentBody&#125; /&#62;
</pre>
<p className="it"> Por último, esto no será utilizable a menos que PostForm utilice estos props para inicializar su state: </p>
<p>Finally, this won’t be usable unless PostForm uses these props to initialize its state:</p>

<pre>
class PostForm extends React.Component &#123;
constructor(props) &#123;
super(props);
this.state = &#123;
title: props.title || '',
body: props.body || '',
&#125;;
&#125;
&#125;
</pre>

<p className="it"> El código habla por sí mismo. </p>
<p>The code speaks for itself.</p>

<code>  https://goshakkk.jsbin.com/pawicu/4/edit?js,output</code>

<p className="it"> Aparte: Si lees artículos en React, puedes ver que "establecer el state de los props es un 'anti-patrón'". El principal problema es manejar las actualizaciones del state en respuesta a los cambios de los props. Esto puede ser una preocupación válida, pero debe entenderse como un consejo, no la regla final. En este caso particular, este uso tiene sentido. </p>

<p>Aside: If you read through articles on React, you may see that "setting state from props is an 'anti-pattern'". The main issue is handling updates to the state in response to the props changing. This can be a valid concern but should be understood as advice, not the ultimate rule. In this particular case, this usage makes sense.</p>

<p className="it"> En este momento, simplemente iniciamos desde los props. </p>

<p>Right now, we simply initialize from props.</p>

<p className="it"> Otras veces, puede ser necesario para responder al cambio de los props. Esto no es un requisito muy a menudo, pero si lo es, sólo hay una cosa importante para pensar antes de implementar: ¿cómo exactamente debe responder a la actualización de los props. </p>

<p>Other times, it may be needed to respond to props changing. This is not a requirement very often, but if it is, there is just one important thing to think about before implementing: how exactly should the form respond to props updating.</p>
<p className="it"> ¿Debería actualizar el state del formulario para que coincida con los props? </p>
<p>Should it update the form state to match the props?</p>
<p className="it"> ¿Debería mantener los nuevos props para referencia? Por ejemplo, para implementar el restablecimiento del formulario. </p>
<p>Should it just keep the new props for reference? For example, to implement resetting the form.</p>
 <p className="it"> Una vez que determine el comportamiento deseado, la implementación debe ser sencilla. </p>
<p>Once you determine the desired behavior, the implementation should be straightforward.</p>

<p className="it">Otros casos para formularios </p>
 
<h2>Other cases for forms</h2>

<p className="it">No siempre es una string </p>
<p>Not always a string</p>

<p className="it"> A veces, tiene una entrada de texto que debe utilizarse para introducir algo que no sea una string, por ejemplo un número. </p>
<p>Sometimes, you have a text input that should be used to enter something other than a string — a number, for example.</p>
<p className="it">Pero <code>&#60;input /&#62;</code> espera que una string de valor, y da uno de nuevo en <code>onChange</code>. qué hacemos? Este es bastante fácil.</p>
<p>But <code>&#60;input /&#62;</code> expects a string for value , and gives one back in <code>onChange</code>. What do we do? This one is pretty easy.</p>

<p className="it">Sólo necesitamos una forma de convertir entre strings y números. (O codificar un número en una string, y decodificar un número de una string.) </p>

<p>We just need a way to convert between strings and numbers. (Or encode a number into a string, and decode a number from a string.)</p>

<p className="it"><code>parseInt(string, 10)</code> y <code>number.toString()</code> para la victoria, ¿verdad?</p>
  <p><code>parseInt(string, 10)</code> and <code>number.toString()</code> for the win, right?</p>
<p className="it">Sobre todo. Hay sólo un caso más a tener en cuenta. Mientras que un valor vacío de una string se puede representar como '', es diferente con números. Cero no es un "número vacío", lo que sea que signifique, es tan numeroso como es posible. </p>
<p>Mostly. There is just one more case to keep in mind. While an empty value of a string can be represented as '' , it's different with numbers. Zero is not an "empty number," whatever that means, it's as numbery as it gets.</p>

<p className="it"> Debemos, por lo tanto, tener una manera de representar la ausencia de un número - y null funciona perfectamente para eso. </p>
<p>We should, therefore, have a way to represent the absence of a number — and null works perfectly for that.</p>

<p className="it"> Por lo tanto, en términos de datos, nuestro campo de state numérico puede ser un número o null.</p>
<p>So, in terms of data, our numerical state field can be either a number or null.</p>
<p className="it">Para manejarlo, vamos a necesitar dos cosas: </p>
<p>To handle it, we are going to need two things:</p>
<ul>
<li className="it"> 1. Convertir a string para pasar a value=&#123;...&#125;. Fácil. Si el valor es null, vamos a pasar una string vacía, de lo contrario, number.toString().</li>
<li>1.	Convert to string to pass into value=&#123;...&#125; . Easy. If the value is null , we're going to pass an empty string, otherwise, number.toString() .</li>

<li className="it"> 2. Para convertir la string de nuevo en un número. Tira los caracteres no numéricos. Si la longitud de string es 0, entonces dar un null, de lo contrario
  parseInt (x, 10).</li> 
<li>2.	To convert the string back into a number. Strip non-numerical characters. If the string length is 0, then give a null , otherwise
  parseInt(x, 10) .</li>
</ul>

<p className="it">Además, a diferencia de la lógica de la forma, esto es más que fino de extraer en un componente separado, sólo para introducir números, o incluso utilizar uno existente.</p>

<p>Also, unlike form logic, this is more than fine to extract into a separate component, just for inputting numbers, or even use an existing one.</p>

<p className="it">¿Por qué? Porque el formulario funciona en valores de dominio. El hecho de que el valor de entrada sea internamente una string es un detalle de implementación que no concierne al propio formulario.</p>

<p>Why? Because the form operates in domain values. The fact that the input value is internally a string is an implementation detail that is of no concern to the form itself.</p>

<code>https://goshakkk.jsbin.com/cidage/2/edit?js,output</code>
<p className="it">Nota: una entrada para el número decimal sería un poco más complicada de implementar.</p>
<p>Note: an input for the decimal number would be slightly more complicated to implement.</p>

<p className="it">No siempre un cuadro de texto</p>
<h2>Not always a textbox</h2>
<p className="it">Hay más que formularios que sólo cuadros de texto:</p>
<p>There is more to forms than just textboxes:</p>

<pre>checkboxes radio boxes<br></br>
  select s<br></br>
  type=file<br></br>
</pre>

<p className="it">Hay peculiaridades con la prevención de la configuración de la casilla de checkbox/radio a través de JS... pero React maneja estos para nosotros</p>

<p>There are quirks with preventing the setting of checkbox/radio value via JS... but React handles these for us </p>

<p className="it">De cualquier manera, tenga en cuenta que tocado no es valioso para ocultar mensajes de error para entradas distintas de los cuadros de texto, y tal vez seleccione.</p>

<p>Either way, keep in mind that touched isn't valuable for hiding error messages for inputs other than textboxes, and maybe selects.</p>

<p> Casillas de verificación </p>
<h2>Checkboxes</h2>
<p className="it">Las casillas de verificación son bastante orientales para trabajar. Ellos son la entrada más simple, uno que está pasando alrededor de verdadero o falso.</p>
<p>Checkboxes are pretty east to work with. They are the simplest input, one that is passing around either true or false.</p>

<p className="it">Hay dos diferencias menores entre las casillas de verificación y las entradas de texto:</p>
<p>Two minor differences between checkboxes and text inputs are in:</p>

<p className="it">El nombre del prop para pasar el valor actual. Está checked=&#123;bool&#125; <br></br>
en lugar de <code>value=&#123;someString&#125; ;</code> y</p>

<p>The name of the prop to pass current value. It's checked=&#123;bool&#125; <br></br>
instead of <code>value=&#123;someString&#125; ;</code> and</p>

<p className="it">El nombre del atributo para obtener el nuevo valor en el controlador onChange es <code>evt.target.checked</code> en lugar de <code>evt.target.value</code> .</p>
<p>The attribute name to get the new value in onChange handler is
  <code>evt.target.checked</code> instead of <code>evt.target.value</code> .</p>

<pre>
&#125;<br></br>
<br></br>
handleFirstNameChange = (evt) => &#123; this.setState(&#123; firstName:<br></br> evt.target.value &#125;);<br></br>
&#125;<br></br>
<br></br>
handleAgreeChange = (evt) =&#62; &#123;<br></br>
this.setState(&#123; agreed: evt.target.checked &#125;);<br></br>
&#125;<br></br>
<br></br>
handleSubmit = (evt) =&#62; &#123;<br></br>
alert(`Signed up as: $&#123;this.state.firstName&#125;`);<br></br>
&#125;<br></br>
<br></br>
render() &#123; return (<br></br>
&#60;form onSubmit=&#123;this.handleSubmit&#125;><br></br>
&#60;input<br></br>
type="text"  placeholder="Enter first name"<br></br> value=&#123;this.state.firstName&#125;<br></br>
onChange=&#123;this.handleFirstNameChange&#125;<br></br>
/&#62;<br></br>
</pre>
<p>Agree to terms</p>

<pre>
&#60;input<br></br>
type="checkbox" checked=&#123;this.state.agreed&#125;<br></br> onChange=&#123;this.handleAgreeChange&#125;<br></br>
/&#62;<br></br>
&#60;button&#62;Sign up as &#123;this.state.firstName&#125; (&#123;this.state.agre <br></br>ed.toString()&#125;)&#60;/button&#62;<br></br>
&#60;/form&#62;<br></br>
)<br></br>
&#125;<br></br>
&#125;<br></br>
</pre>

<code>  https://goshakkk.jsbin.com/xasuka/4/edit?js,output</code>
 
<h2>Radios</h2>

<p className="it">Tradicionalmente, los botones de radio se han delimitado utilizando el atributo de nombre:</p>

<p>Traditionally, radio buttons have been scoped using the name attribute:</p>

  <code>https://goshakkk.jsbin.com/veledi/1/edit?html,output</code>

<p className="it">El navegador se asegurará de que sólo una radio con el atributo
   <code>name="color"</code> está seleccionado. El atributo de nombre actúa como un mecanismo para permitir que el navegador relacione los botones de radio.</p>

<p>The browser will make sure only one radio with the attribute
  <code>name="color"</code> is selected. The name attribute acts as a mechanism to let the browser relate radio buttons together.</p>

<p className="it">En React, sin embargo, tenemos que ser más específicos, y por una buena razón. No hay nombre ni nada. Las radios son sólo puntos de vista que:  </p>
<p>In React, however, we have to be more specific, and for a good reason. There's no name or anything. Radios are just views that:</p>

<p className="it">saber si están seleccionados, y puede pedir al formulario que cambie la selección</p>
<p>know whether they are selected, and can ask the form to change the selection</p>

<p className="it">Una cosa que hace que las radios sean únicas: normalmente tienen tanto comprobados como valorados. marcado, como su nombre indica, se utiliza para decidir si marcar este botón como seleccionado, mientras que el valor se utiliza a menudo en el controlador onChange.</p>
<p>One thing that makes radios unique is: they usually have both checked and value props. checked , as the name implies, is used to decide whether to mark this button as selected, whereas value is often used in the onChange handler.</p>

<p className="it">Algo en la línea de:</p>
<p>Something along the lines of:</p>

<p className="it">El ejemplo HTML de antes se puede traducir fácilmente en React. Observar:</p>
<p>The HTML example from before can be easily translated into React. Observe:</p>

<code>  https://goshakkk.jsbin.com/rejowa/2/edit?js,output</code>

<p className="it">Y mira, incluso puede cambiar el estilo basado en lo que ha seleccionado:</p>
<p>And look, it can even change the styling based on what's selected:</p>


<p className="it">"Los formularios son datos" en su máxima expresión!</p>
<h2>"Forms are data" at its finest!</h2>

<p className="it">Nota: aunque estamos usando el atributo value para establecer el nuevo color, no hay razón por la cual no podamos haberlo hecho de manera diferente.</p>
<p>Note: even though we are using the value attribute to set the new color, there is no reason we couldn't have done it differently.</p>

<p className="it">En lugar de confiar en el valor, podríamos generar manejadores de eventos sobre la marcha:</p>
<p>Instead of relying on value , we could generate event handlers on the fly:</p>

<p className="it">Lo que es especialmente útil si se trata de tipos de datos distintos de</p>
<p className="it">   string y desea evitar el análisis entre una string y otro tipo.</p>

<p>Which is especially handy if you're dealing with data types other than</p>
<p>  string and want to avoid parsing between a string and that other type.</p>

<h2>Select</h2>

<p className="it">Usar select es muy simple ...</p>
<p>Using select is dead simple...</p>

<p className="it">Tenga en cuenta que siempre debe establecer un valor prop en la selección. De lo contrario, el navegador puede hacer que parezca que la primera opción está seleccionada, pero su state seguirá diciendo que nada está seleccionado, es decir, su state y vista estarán fuera de sincronización.</p>
<p>Keep in mind that you should always set a value prop on the select. Otherwise, the browser may make it look like the first option is selected, but your state will still say nothing is selected — i.e. your state and view will be out of sync.</p>

<p className="it">Si el valor de select está vacío cuando se inicializa el formulario (null en el state), necesitará incluir una opción vacía, como en el ejemplo anterior.</p>
<p>If the value of select is empty when the form is initialized ( null in the state), you would need to include an empty option , like in the example above.</p>
<code>  https://goshakkk.jsbin.com/yosawa/3/edit?js,output</code>

<p className="it">Mientras que un selecto desnudo puede ser todo lo que necesita, una función de búsqueda dentro de una selección grande se desea. Para ello, puede utilizar un componente ya hecho.</p>
<p>While a bare select can be all you need, a search feature inside a big select is desired. For that, you can use a ready-made component.</p>

<h2>File inputs</h2>

<p className="it">¿De qué otra manera actualizarías tu imagen de Twitter si no fuera por &#60;input type = "file" /&#62;?</p>
<p>How else would you update your Twitter pic if it weren't for &#60;input type="file" /&#62; ?</p>

<p className="it">Una entrada de archivo es algo inusual con respecto al flujo de datos ... en eso, no se controla realmente.</p>

<p>A file input is somewhat unusual with respect to the data flow... in that, it is not actually controlled.</p>

<p className="it">Controlar el valor de una entrada de archivo no es algo que tiene mucho sentido. Los datos sólo fluyen de una manera en este caso: de la entrada al componente de formulario, pero no en ambos sentidos.</p>

<p>Controlling the value of a file input is not something that makes much sense. The data only flows one way in this case: from the input to the form component, but not both ways.</p>

<p className="it">Y en <code>onChange</code>, almacenaríamos el objeto File (https://developer.mozilla.org/en/docs/Web/API/File) en el state:</p>

<p>And in <code>onChange</code> , we would store the File object (https://developer.mozilla.org/en/docs/Web/API/File) in the state:</p>

<p className="it">Sin embargo, enviar el archivo al servidor está fuera del alcance del libro.</p>
<p>Sending the File to the server is outside the scope of the book, however.</p>

<p className="it">¿Qué hace que una entrada sea controlada?</p>
<h2>What makes an input controlled?</h2>

<p className="it">Un elemento de formulario se convierte en "controlado" si se establece su valor a través de un prop. Eso es todo.</p>
<p>A form element becomes "controlled" if you set its value via a prop. That's all.</p>
<p className="it">Cada uno de los elementos del formulario, sin embargo, tiene un apoyo diferente para establecer ese valor, por lo que aquí es un resumen:</p>
<p>Each of the form elements, though, has a different prop for setting that value, so here's a summary:</p>
<p className="it">Elemento Valor de propiedad Nuevo valor en la devolución de llamada</p>
<p>Element	Value property	New value in the callback</p>
<pre>
  &#60;input type="text"
/&#62; 	
  value="string"	
  evt.target.value
&#60;textarea /&#62;	value="string"	evt.target.value
  &#60;input type="checkbox" /&#62;	checked=
&#123;boolean&#125;	
  evt.target.checked 
&#60;input type="radio"
/&#62;	checked=
&#123;boolean&#125;	
evt.target.checked

  &#60;select /&#62; 	  value="option value"	
  evt.target.value
 </pre>

<p className="it">¿A dónde debe ir el state?</p>
<h2>Where should the state go?</h2>

<p className="it">Cuando se trabaja con forms más sofisticadas, puede ser el caso de que el formulario se muestra una parte a la vez, como un asistente de varios pasos.</p>
<p>When working with more sophisticated forms, it can be the case that the form is shown one part at a time, like a multi-step wizard.</p>

<p className="it">Para casos como este, es importante tener en cuenta que cada paso individual sólo debe mostrar las vistas, pero no almacenar los datos.</p>
<p>For cases like this, it's important to keep in mind that each individual step should only display the views, but not store the data.</p>

<p className="it">Los datos deben ser almacenados en una matriz común de estos pasos - porque ahí es donde pertenece, y ahí es donde se utilizará para la presentación.</p>
<p>The data should be stored in a common parent of these steps — because that's where it belongs, and that's where it will be used for submission.</p>
<p className="it">Mi post de blog sobre la recopilación de datos de un formulario de asistente demuestra la idea: <code>https://goshakkk.name/wizard-form-collect-info/</code></p>
<p>My blog post on collecting data from a wizard form demonstrates the idea: <code>https://goshakkk.name/wizard-form-collect-info/</code></p>
 
<p className="it">Esta fue una muestra de The Missing Forms Handbook of React: capítulos 2, Formularios 101 y 7, Otros casos para formularios. Puede obtener el libro completo en <code>https://goshakkk.name/the-missing-forms-handbook-of-react/</code></p>
<p>This was a sample of The Missing Forms Handbook of React: chapters 2, Forms 101, and 7, Other cases for forms. You can get the full book at <code>https://goshakkk.name/the-missing-forms-handbook-of-react/</code></p>

<p className="it">Si algo no está claro, o si tiene alguna pregunta, estaría más que feliz de ayudar. Envíeme un correo electrónico a <code>me@goshakkk.name</code>.</p>
<p>If anything is not clear, or if you have any questions, I would be more than happy to help. Email me at <code>me@goshakkk.name</code>.</p>

<p className="it">¡Tenga una maravillosa! Gosha Arinich</p>
<p>Have a wonderful one! Gosha Arinich</p>

</div>

</div>
)
