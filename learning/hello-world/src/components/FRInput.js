import React from 'react'

// function FRInput() {
//   return (
//     <div>
//         <input type="text"/>
      
//     </div>
//   )
// }
const FRInput = React.forwardRef ((props, ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
            {/* receives ref and attaches to native ref */}
            {/* tihs child component is basically forwading ref components */}

        </div>
    )
})

export default FRInput
//every funtional component receives a prop
//ref attribute/parameter 
