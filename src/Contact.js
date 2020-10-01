import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="#">forums</a>.
        </p>
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    e-mail:
    <input type="mail" name="mail" />
  </label>
  <label>
    Message:
    <input type="text" name="mess" />
  </label>
  <input type="submit" value="Submit" />
</form>
      </div>
    );
  }
}
 
export default Contact;