const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
    ${pages.map(arg => {
      return html`<li><A href="/wiki/${arg.slug}">${arg.title}</a></li>`
    })}
    </ul>
  </ul>`);
