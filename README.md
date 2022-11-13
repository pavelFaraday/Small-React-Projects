# Small-React-Projects

Small React Projects

1. use-state - simple projects for understanding how works React **useState** Hook.
2. class-components - What is **Class Components**

###### Adventage of Functional (Stateless) components:

-   Simple functions
-   Use Func components as much as possible
-   Absence of 'this' keyword
-   Solution without using state
-   Mainly responsible for the UI
-   Stateless/ Dumb/ Presentational

###### Adventage of Class (Statefull) components:

-   More feature rich
-   Maintain their own private data - state
-   Complex UI logic
-   Provide lifesicle hooks
-   Stateful / Dumb / Presentational

###### Props VS State

**Props**

-   props get passed to the component
-   Function parameters
-   props are immutable
    In Functional Components - props
    In Class Components - this.prop

**State**

-   state is managed within the component
-   Variables declared in the function body
-   state can be changed
    In Functional Components - useState Hook
    In Class Components - this.state

    ###### props.children

    props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render. Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering.

###### Event Binding with "this"

-   V1
    `<button onClick={this.changeText.bind(this)}>Click</button>`
-   V2
    `<button onClick={() => this.changeText()}>Click</button>`

-   V3:

```
constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
}

<button onClick={this.changeText}>Click</button>
```

-   V4:

```
changeText = () => {
    this.setState({
        message: "Hello",
    });
};

<button onClick={this.changeText}>Click</button>
```

###### Conditional Rendering

-   if/else
-   Element Variables
-   Ternary Conditional Operator
-   Short Circuit Operator

###### Keys & Lists

A "key" is a special string attribute you need to include when creating lists of elements.

```
key={list.id}
```
