import React from "react";

const withCounter = (WrappedComponent,incrementNum) => {
    //here originalcomponent is clickcounter and the updated one is this .... new component is 
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNum };
            });
        };

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                    //spread operatore used to pass remaining props specificed to both 
                    //make sure you do this 

                />
            );
        }
    }
    return NewComponent;
};

export default withCounter;
