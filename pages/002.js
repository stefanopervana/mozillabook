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
   <header>
    <h2><a href="/controlled-vs-uncontrolled-inputs-react/">Controlled and uncontrolled form inputs in React don't have to be complicated</a></h2>
    <p className="date">07 Nov 2016</p>
    
      <p><img alt="Controlled and uncontrolled form inputs in React don't have to be complicated" src="https://d33wubrfki0l68.cloudfront.net/943efcba371cf87a8170b3c49370124d055a5b97/557fa/assets/images/controlled-vs-uncontrolled-cover.png"  width="100%"/></p>
    
  </header>

  
<p>You may have seen many articles saying <strong>“you shouldn’t use <code className="highlighter-rouge">setState</code>,”</strong> and the docs are claiming <strong>“<code className="highlighter-rouge">ref</code>s are bad”</strong>…
That is so contradictory.
It’s hard to understand how to “get it right” and even what are the criteria for choosing.</p>

<p>How the hell are you supposed to make forms?</p>

<p>After all, forms <em>are</em> central to many web apps out there.
And yet, form handling in React seems to be a bit of a… corner stone?</p>

<p>Fear no more.
Let me show you the differences between the approaches, as well as when you should use each.</p>

<h2 id="the-uncontrolled">The Uncontrolled</h2>

<p><strong>Uncontrolled inputs</strong> are like traditional HTML form inputs:</p>

<div className="language-jsx highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">class</span> <span className="nx">Form</span> <span className="kd">extends</span> <span className="nx">Component</span> <span className="p">&#123;</span><br></br>
  <span className="nx">render</span><span className="p">()</span> <span className="p">&#123;</span><br></br>
    <span className="k">return</span> <span className="p">(</span><br></br>
      <span className="p">&lt;</span><span className="nt">div</span><span className="p">&gt;</span><br></br>
        <span className="p">&lt;</span><span className="nt">input</span> <span className="na">type=</span><span className="s2">"text"</span> <span className="p">/&gt;</span><br></br>
      <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span><br></br>
    <span className="p">);</span><br></br>
  <span className="p">&#125;</span><br></br>
<span className="p">&#125;</span><br></br>
</code></pre></div></div>

<p>They remember what you typed.
You can then get their value using <a href="https://facebook.github.io/react/docs/refs-and-the-dom.html">a ref</a>.
For example, in <code className="highlighter-rouge">onClick</code> handler of a button:</p>

<div className="language-jsx highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">class</span> <span className="nx">Form</span> <span className="kd">extends</span> <span className="nx">Component</span> <span className="p">&#123;</span><br></br>
  <span className="nx">handleSubmitClick</span> <span className="o">=</span> <span className="p">()</span> <span className="o">=&gt;</span> <span className="p">&#123;</span><br></br>
    <span className="kd">const</span> <span className="nx">name</span> <span className="o">=</span> <span className="k">this</span><span className="p">.</span><span className="nx">_name</span><span className="p">.</span><span className="nx">value</span><span className="p">;</span><br></br>
    <span className="c1">// do something with `name`</span><br></br>
  <span className="p">&#125;</span><br></br>
<br></br>
  <span className="nx">render</span><span className="p">()</span> <span className="p">&#123;</span><br></br>
    <span className="k">return</span> <span className="p">(</span><br></br>
      <span className="p">&lt;</span><span className="nt">div</span><span className="p">&gt;</span><br></br>
        <span className="p">&lt;</span><span className="nt">input</span> <span className="na">type=</span><span className="s2">"text"</span> <span className="na">ref=</span><span className="si">&#123;</span><span className="nx">input</span> <span className="o">=&gt;</span> <span className="k">this</span><span className="p">.</span><span className="nx">_name</span> <span className="o">=</span> <span className="nx">input</span><span className="si">&#125;</span> <span className="p">/&gt;</span><br></br>
        <span className="p">&lt;</span><span className="nt">button</span> <span className="na">onClick=</span><span className="si">&#123;</span><span className="k">this</span><span className="p">.</span><span className="nx">handleSubmitClick</span><span className="si">&#125;</span><span className="p">&gt;</span>Sign up<span className="p">&lt;/</span><span className="nt">button</span><span className="p">&gt;</span><br></br>
      <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span><br></br>
    <span className="p">);</span><br></br>
  <span className="p">&#125;</span><br></br>
<span className="p">&#125;</span>
</code></pre></div></div>

<p>In other words, <strong>you have to ‘pull’ the value from the field when you need it</strong>.
This can happen when the form is submitted.</p>

<p>That is the simplest way to implement the form inputs.
There certainly are valid cases for using it: in simple forms in the real world; and when learning React.</p>

<p>It’s not as powerful, though, so let’s see those controlled inputs next.</p>

<p><em>For what it’s worth, I’m giving away two chapters of my book about forms. Get it below if you want; and continue reading the article.</em></p>

<p><em>Article continues:</em></p>

<h2 id="the-controlled">The Controlled</h2>

<p>A <strong>controlled input</strong> accepts its current value as a prop, as well as a callback to change that value.
You could say it’s a more “React way” of approaching this (which doesn’t mean you should <strong>always</strong> use it).</p>

<div className="language-jsx highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="o">&lt;</span><span className="nx">input</span> <span className="nx">value</span><span className="o">=</span><span className="p">&#123;</span><span className="nx">someValue</span><span className="p">&#125;</span> <span className="nx">onChange</span><span className="o">=</span><span className="p">&#123;</span><span className="nx">handleChange</span><span className="p">&#125;</span> <span className="sr">/</span><span className="err">&gt;
</span></code></pre></div></div>

<p>Which is fine and all… but the value of this input <em>has</em> to live in the <code className="highlighter-rouge">state</code> somewhere.
Typically, the component that renders the input (aka the form component) saves that in its <code className="highlighter-rouge">state</code>:</p>

<div className="language-jsx highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">class</span> <span className="nx">Form</span> <span className="kd">extends</span> <span className="nx">Component</span> <span className="p">&#123;</span><br></br>
  <span className="kd">constructor</span><span className="p">()</span> <span className="p">&#123;</span><br></br>
    <span className="k">super</span><span className="p">();</span><br></br>
    <span className="k">this</span><span className="p">.</span><span className="nx">state</span> <span className="o">=</span> <span className="p">&#123;</span><br></br>
      <span className="na">name</span><span className="p">:</span> <span className="s1">''</span><span className="p">,</span><br></br>
    <span className="p">&#125;;</span><br></br>
  <span className="p">&#125;</span><br></br>
<br></br>
  <span className="nx">handleNameChange</span> <span className="o">=</span> <span className="p">(</span><span className="nx">event</span><span className="p">)</span> <span className="o">=&gt;</span> <span className="p">&#123;</span><br></br>
    <span className="k">this</span><span className="p">.</span><span className="nx">setState</span><span className="p">(&#123;</span> <span className="na">name</span><span className="p">:</span> <span className="nx">event</span><span className="p">.</span><span className="nx">target</span><span className="p">.</span><span className="nx">value</span> <span className="p">&#125;);</span><br></br>
  <span className="p">&#125;;</span><br></br>
<br></br>
  <span className="nx">render</span><span className="p">()</span> <span className="p">&#123;</span><br></br>
    <span className="k">return</span> <span className="p">(</span><br></br>
      <span className="p">&lt;</span><span className="nt">div</span><span className="p">&gt;</span><br></br>
        <span className="p">&lt;</span><span className="nt">input</span><br></br>
          <span className="na">type=</span><span className="s2">"text"</span><br></br>
          <span className="na">value=</span><span className="si">&#123;</span><span className="k">this</span><span className="p">.</span><span className="nx">state</span><span className="p">.</span><span className="nx">name</span><span className="si">&#125;</span><br></br>
          <span className="na">onChange=</span><span className="si">&#123;</span><span className="k">this</span><span className="p">.</span><span className="nx">handleNameChange</span><span className="si">&#125;</span><br></br>
        <span className="p">/&gt;</span><br></br>
      <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span><br></br>
    <span className="p">);</span><br></br>
  <span className="p">&#125;</span><br></br>
<span className="p">&#125;</span><br></br>
</code></pre></div></div>

<p>(Of course, it can be in the state of another component, or even in the separate state store, <a href="/should-i-put-form-state-into-redux/">like Redux</a>.)</p>

<p>Every time you type a new character, <code className="highlighter-rouge">handleNameChange</code> is called.
It takes in the new value of the input and sets it in the state.</p>

<p><img src="https://d33wubrfki0l68.cloudfront.net/d92387dc57d2689c2b02e5f511b2b13c6b22433b/dbafb/assets/images/controlled-vs-uncontrolled/controlled-flow.png" width="100%" /></p>

<ul>
  <li>
    <p>It starts out as an empty string — <code className="highlighter-rouge">''</code>.</p>
  </li>
  <li>
    <p>You type <code className="highlighter-rouge">a</code> and <code className="highlighter-rouge">handleNameChange</code> gets an <code className="highlighter-rouge">a</code> and calls <code className="highlighter-rouge">setState</code>.
The input is then re-rendered to have the value of <code className="highlighter-rouge">a</code>.</p>
  </li>
  <li>
    <p>You type <code className="highlighter-rouge">b</code>. <code className="highlighter-rouge">handleNameChange</code> gets the value of <code className="highlighter-rouge">ab</code> and sets that to the state.
The input is re-rendered once more, now with <code className="highlighter-rouge">value="ab"</code>.</p>
  </li>
</ul>

<p><strong>This flow kind of ‘pushes’ the value changes to the form component</strong>, so the <code className="highlighter-rouge">Form</code> component always has the current value of the input, without needing to ask for it explicitly.</p>

<p>This means your data (state) and UI (inputs) are always in sync.
The state gives the value to the input, and the input asks the <code className="highlighter-rouge">Form</code> to change the current value.</p>

<p>This also means that the form component can respond to input changes immediately; for example, by:</p>

<ul>
  <li>in-place feedback, like validations</li>
  <li><a href="/form-recipe-disable-submit-button-react/">disabling the button unless all fields have valid data</a></li>
  <li>enforcing a specific input format, like credit card numbers</li>
</ul>

<p>But if you don’t need any of that and consider uncontrolled to be simpler, go for it.</p>

<h3 id="what-makes-an-element-controlled">What makes an element “controlled”</h3>

<p>There are other form elements, of course.
You have checkboxes and radios and <code className="highlighter-rouge">select</code>s and textareas.</p>

<p>A form element becomes “controlled” if you set its value via a prop.
That’s all.</p>

<p>Each of the form elements, though, has a different prop for setting that value, so here’s a little table to summarize:</p>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Value property</th>
      <th>Change callback</th>
      <th>New value in the callback</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code className="highlighter-rouge">&lt;input type="text" /&gt;</code></td>
      <td><code className="highlighter-rouge">value="string"</code></td>
      <td><code className="highlighter-rouge">onChange</code></td>
      <td><code className="highlighter-rouge">event.target.value</code></td>
    </tr>
    <tr>
      <td><code className="highlighter-rouge">&lt;input type="checkbox" /&gt;</code></td>
      <td><code className="highlighter-rouge">checked=&#123;boolean&#125;</code></td>
      <td><code className="highlighter-rouge">onChange</code></td>
      <td><code className="highlighter-rouge">event.target.checked</code></td>
    </tr>
    <tr>
      <td><code className="highlighter-rouge">&lt;input type="radio" /&gt;</code></td>
      <td><code className="highlighter-rouge">checked=&#123;boolean&#125;</code></td>
      <td><code className="highlighter-rouge">onChange</code></td>
      <td><code className="highlighter-rouge">event.target.checked</code></td>
    </tr>
    <tr>
      <td><code className="highlighter-rouge">&lt;textarea /&gt;</code></td>
      <td><code className="highlighter-rouge">value="string"</code></td>
      <td><code className="highlighter-rouge">onChange</code></td>
      <td><code className="highlighter-rouge">event.target.value</code></td>
    </tr>
    <tr>
      <td><code className="highlighter-rouge">&lt;select /&gt;</code></td>
      <td><code className="highlighter-rouge">value="option value"</code></td>
      <td><code className="highlighter-rouge">onChange</code></td>
      <td><code className="highlighter-rouge">event.target.value</code></td>
    </tr>
  </tbody>
</table>

<h2 id="conclusion">Conclusion</h2>

<p>Both the controlled and uncontrolled form fields have their merit.
<strong>Evaluate your specific situation and pick the approach</strong> — what works for you is good enough.</p>

<p>If your form is incredibly simple in terms of UI feedback, uncontrolled with refs is entirely fine.
You don’t have to listen to what the various articles are saying is “bad.”</p>

<table>
  <thead>
    <tr>
      <th>feature</th>
      <th>uncontrolled</th>
      <th>controlled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>one-time value retrieval (e.g. on submit)</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td><a href="/submit-time-validation-react/">validating on submit</a></td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td><a href="/instant-form-fields-validation-react/">instant field validation</a></td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td><a href="/form-recipe-disable-submit-button-react/">conditionally disabling submit button</a></td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>enforcing input format</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>several inputs for one piece of data</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td><a href="/array-form-inputs/">dynamic inputs</a></td>
      <td>❌</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

<p>Also, this is not an once-and-for-all decision: you can always migrate to controlled inputs.
<a href="/turn-uncontrolled-into-controlled/">Going from uncontrolled to controlled inputs is not hard</a>.</p>

<p>Finally, here’s <a href="/on-forms-react/">the organized list of my posts about forms in React</a>.</p>

<h2 id="references">References</h2>

<ul>
  <li><a href="https://facebook.github.io/react/docs/forms.html">Forms page on the official React docs</a></li>
  <li><a href="https://facebook.github.io/react/docs/events.html">Supported events</a></li>
  <li><a href="https://facebook.github.io/react/docs/refs-and-the-dom.html">Refs</a></li>
</ul>
  </div>

</div>

)
