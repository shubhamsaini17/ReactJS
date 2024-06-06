import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id: "heading"},"hello world form react");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{
  /* 

<div id="parent">
    <div id="child">
        <h1>i am an h1 tag</h1>
    </div>
</div>

convert this using react js

*/
}

// parent is an object, and this object is an react element

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//     "div",
//     {id: "child"},
//     React.createElement("h1",{},"i am h1")
// ));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

{
  /* 

<div id="parent">
    <div id="child">
        <h1>i am an h1 tag</h1>
        <h2>i am an h2 tag</h2>
    </div>
</div>

convert this using react js

we use array to create one more sibling of h1 tag.

*/
}

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//     "div",
//     {id: "child"},
//      [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
// ));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// episode 3

// JSX => Babel transpiles it to React.createElement => ReactElement- JS ObJECT => HTMLElement (when render).
// const jsxHeading = <h1 className="head">Namaste React using JSX👋</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);



// if you want to write JSX in multiple line use brackets => so that babel get to know form where is jsx starting and ending

// example

// const jsxHeading2 =  (<h1 className="head">
// Namaste React using JSX👋
// </h1>);



//=======================================================================

// react element 4

// const Heading =  (<h1 className="head">
// Namaste React using JSX👋
// </h1>);

// components
// 2 types
// class components -old
// functional components - new


// const fn1 = () => true;
// const fn2 = () => {
//     return true;
// };

const Title = () => (
    <h1>Namaste React using Title</h1>
)
// React functional components => and it is also a just a normal function of javascript

const number = 1000;
const HeadingComponet1 = () => {

    return <div> 
            <Title/>
            {/* Both below 2 and above 1 are 3  same ways to insert component inside component */}
            <Title></Title>
            {Title()}
            {/* functional components => and it is also a just a normal function of javascript so we can also insert components inside by calling it like a js funtion*/}
            {
                 // you can write Javascript in bettween jsx inside curly pranthis { }
            }
                <h2>{number}</h2>
            
             <h1 className="heading">Namaste react functional component</h1>
           </div>
}

// { Component Compostion } => using one component inside other componets
//  eg:  in above <Title/> title component used in HeadingComponent1.

// or same

const HeadingComponet2 = () => <h1>Namaste react</h1>;
// or 
const HeadingComponet3 = () => ( 
<h1>Namaste react</h1>
);


// how to render Heading component in Root

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet1/>);



const headElement = ( <h1> this is a react elemnet </h1> );

// converting the above reactElement into a react functional component

const headElement1 = () => (
    <h1> this is a react elemnet </h1>
);



// putting react element inside a react component
// or we can also put element inside element using { }

//react Element
const reactElement = (
    <h1>React Element</h1>
)
// React functional components

const ReactComponet = () => (
    <div> 
    {reactElement} 
    {/* an attacker can run a mailcious script inside our jsx using {javascript}
    but before executing the code in curle parantihies, jsx/ react will sanatize or check that injected javascript code before execution, which prevent XSS Attack.(cross site scripting attack) */}

    <h1 className="heading">react functional component</h1>
    </div> 
)

const root1 = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<ReactComponet/>);


