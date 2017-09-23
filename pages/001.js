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
    <h2>What you need to know about forms in React</h2>

  <h3>Basics</h3>

  <p>Just enough to understand the mechanics of working with forms in React.</p>

  <ol className="content articles">
    <li><a href="/controlled-vs-uncontrolled-inputs-react/">Controlled and uncontrolled form inputs in React don't have to be complicated</a></li>
    <li><a href="/turn-uncontrolled-into-controlled/">Transitioning from uncontrolled inputs to controlled</a></li>
  </ol>

  <h3>Validation</h3>

  <p>Helping the user input correct data and providing instant feedback is important when building a form. Here's how React can help:</p>

  <ol className="content articles">
    <li><a href="/y-no-field-level-validations/">Why not field-level validations?</a></li>
    <li><a href="/form-recipe-disable-submit-button-react/">Form recipe: Conditionally disabling the Submit button</a></li>
    <li><a href="/instant-form-fields-validation-react/">Instant form field validation with React's controlled inputs</a></li>
    <li><a href="/submit-time-validation-react/">Validating a React form upon submit</a></li>
  </ol>

  <h3>Forms &amp; state</h3>

  <p>Questions related to modeling, storing, or accessing form state.</p>

  <ol className="content articles">
    <li><a href="/react-forms-for-editing/">How do you make a React form start out with some values prefilled when editing?</a></li>
    <li><a href="/wizard-form-collect-info/">Collecting data from a wizard form</a></li>
    <li><a href="/should-i-put-form-state-into-redux/">Should you store your form state in Redux?</a></li>
  </ol>

  <h3>Dynamics</h3>

  <ol className="content articles">
    <li><a href="/array-form-inputs/">Making dynamic form inputs with React</a></li>
  </ol>

  <div>
    <p>
      <span className="name">Stefano</span>, if you think any of your friends would be interested in reading about forms in React, don't be hesitant to share this!
    </p>
  </div>

</div>

</div>
)
