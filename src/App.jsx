import { useState } from "react";
import { marked } from "marked";
import "./app.css";

function App() {
  const [content, setContent] = useState("<h1>Hello</h1>");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const getMarkdownAsHtml = () => {
    return { __html: marked(content) };
  };

  return (
    <>
      <div className="container">
        <div className="textarea-con">
          <nav>
            <h3>Editor</h3>
          </nav>

          <form>
            <textarea
              name="text-area"
              id="editor"
              value={content}
              onChange={handleChange}
              cols="79"
              rows="10"
              placeholder="Enter text here..."></textarea>
          </form>
        </div>
        <div className="preview-con">
          <nav>
            <h3>Previewer</h3>
          </nav>
          <div
            id="preview"
            className="content"
            dangerouslySetInnerHTML={getMarkdownAsHtml()}></div>
        </div>
      </div>
    </>
  );
}

export default App;
