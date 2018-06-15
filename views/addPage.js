const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`<h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

  <div class="form-group">
  <label for="name" class="col-sm-2 control-label">Author Name</label>
  <div class="col-sm-10">
    <input id="authorName" name="name" type="text" class="form-control"/>
  </div>
  </div>

  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="authorName" name="email" type="text" class="form-control"/>
      </div>
  </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
    <label for="content" class="col-sm-2 control-label">Post Content</label>
     <div class="col-sm-10">
      <textarea id="content" name="content">Enter post content here...</textarea>
     </div>
    </div>


      <div class="form-group">
        <input type="radio" id="openChoice" name="status" value="open">
        <label for="openChoice">Open</label>
        <input type="radio" id="closedChoice" name="status" value="closed">
        <label for="closedChoice">Closed</label>
      </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
