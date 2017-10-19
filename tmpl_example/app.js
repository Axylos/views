function buildGreetTmpl(greeting, counter) {
  const tmpl = `
    <div>
      <h1>
        Here's a big old fancy Greeting
      </h1>
      <p>Times called: ${counter}</p>
      <div class="greeting container">
        <h3>
          Why hello there, ${greeting}
        </h3>
      </div>
    </div>
  `;

  return tmpl;
}

function renderTmpl(tmplContent) {
  const el = $('.container');
  el.html(tmplContent);
}

let counter = 0;

function update(name) {
  // get input
  const input = $('input').val();

  // update times called
  counter += 1;

  // render template content and attach to dom
  const content = buildGreetTmpl(input, counter);
  renderTmpl(content);
}
