import React, { Component } from "react";

class intro extends Component {
  render() {
    return (
      <>
        <div className="row">
          <h3 className="text-center  text-danger">
            Introduction of Classcomponent
          </h3>
        </div>
        <div className="row mb-6">
          <p>
            Are class components used in React? Class components are basically
            JavaScript Object Oriented classes with functions you can use to
            render React components. The advantage of using classes in React is
            that they contain lifecycle methods that identify when state changes
            and updates the global state or the component state using the
            keyword this.
          </p>
          <blockquote className="text-secondary">
            class Welcome extends React.Component &#123; render() &#123; return
            &lt;h1&gt;Hello, &#123;this.props.name&#125;&lt;/h1&gt;; &#125;
            &#125;
          </blockquote>
        </div>
      </>
    );
  }
}

export default intro;
