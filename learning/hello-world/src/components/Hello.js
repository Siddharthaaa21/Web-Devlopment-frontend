//will be a simple  funtional component which would render hello
import React from 'react';
// const Hello=()=>{
//    return (
//          <div className='dummyclass'>
//             <h1>Hello Siddhartha</h1>
//             </div>
//    )
// }
// export default Hello
const Hello=()=>{
return React.createElement(
    'div',
    {
        id:'hello', className:'dummyclass'
    },React.createElement('h1',null,'Hello Siddhartha')
)// so this React.createElement is the one which is used by react to create the virtual dom....it takes 3 arguments 1st is the tag name 2nd is the property of the tag and 3rd is the content of the tag
}
export default Hello
