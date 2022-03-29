

const ReactDom = React.createElement('div', {
    className: 'post-item',
}, React.createElement('h2',
    { title: 'Học reactjs tại F8' },
    "Học ReactJS tại F8"),
    React.createElement('p', null, "Học react từ cơ bản đến nâng cao")
)
DOM.appendChild(ReactDom);
// React Dom -> render UI
ReactDOM.render(ReactDom, dom);
export default DOM;