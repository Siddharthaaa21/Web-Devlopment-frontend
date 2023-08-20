import React from "react";

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        incrementCount = () => {
            this.setState(prevState_checker => {
                return { count: prevState_checker.count + 1 }
            })
        }
        render() {
            return <OriginalComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
            />
        }
    }
    return NewComponent


}
export default UpdatedComponent
//hsc