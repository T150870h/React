
// DOM
const h1Dom  = document.createElement('h1');
h1Dom.title = 'hello'
h1Dom.className = 'heading'
h1Dom.innerText = 'hello world';
document.body.appendChild(h1Dom);

export default h1Dom;



// React
 const  H1React = React.createElement('h1', {
     title: 'Hello',
     className: 'heading',

 }, 'hello wourd')

 const ulReact = React.createElement(
     'ul',
     {
            className: 'list',
            style: 'font-size: 20px;'
     },
        React.createElement('li', null, 'javascript'),
        React.createElement('li', null, 'react'),
     )

console.log(ulReact);
 console.dir(h1Dom);
 console.log(H1React);

// createElement là thành phần nhỏ nhất của  react 
// React.createElement(type, props, children)
// type: là thuộc tính của element
// props: title, className
 //children : giá trị của element



 