const heading = React.createElement("h1",{id: "heading"},"hello world form react");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



{/* 

<div id="parent">
    <div id="child">
        <h1>i am an h1 tag</h1>
    </div>
</div>

convert this using react js

*/}


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


{/* 

<div id="parent">
    <div id="child">
        <h1>i am an h1 tag</h1>
        <h2>i am an h2 tag</h2>
    </div>
</div>

convert this using react js

we use array to create one more sibling of h1 tag.

*/}


const parent = React.createElement(
    "div",
    {id: "parent"}, 
    React.createElement(
    "div",
    {id: "child"},
     [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);