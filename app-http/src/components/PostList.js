import React, { Component } from 'react'
import axios from 'axios'


export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
        //invole the get mothode foe making the get request since it is executed only onces  during components lifetime
        //promise base libreary 
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    //assign the data and render it now  using set state
  render() {
    const { posts }=this.state
    return (
      <div>
      
        list of ports
        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>):
             null
        }

      </div>
    )
  }
}

export default PostList
