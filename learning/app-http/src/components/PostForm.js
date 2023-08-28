import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
        title: '',
        body: '',
        id: null,
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()//to prevent the page to reload.
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)
        .then(response=>{
            console.log(response)
            this.setState({ id: response.data.id }); // Set the postId in state

        })

        .catch(error=>{
            console.log(error)
        })}

//takes the data which has to sent and it takes data and response    }
    render() {
        const { userId, title, body,id } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={userId}
                            onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>

                </form>
                {/* {postId} */}
                {id && <h1>Post ID: {id}</h1>}


            </div>
        )
    }
}

export default PostForm;
