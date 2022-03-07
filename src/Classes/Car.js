import React from "react";

class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>Yo, I am a Blue Car now!</h2>
        <p>
          I can nest multiple elements inside the Car class component. This
          exercise is supposed to be about classes, not class components, but
          the idea is to practice making new Class Components.
        </p>

        <p>
          A class component must include the extends React.Component statement.
          This statement creates an inheritance to React.Component, and gives
          your component access to React.Component's functions. The component
          also requires a render() method. This method returns HTML.
        </p>

        <p>
          To create a class inheritance, use the extends keyword. A class
          created with a class inheritance inherits all the methods from another
          class.
        </p>

        <p>
          The super() method refers to the parent class. By calling the super()
          method in the constructor method, we call the parent's constructor
          method and gets access to the parent's properties and methods.
        </p>
      </div>
    );
  }
}

export default Car;
