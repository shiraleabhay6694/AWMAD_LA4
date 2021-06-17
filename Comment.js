import React, { Component } from 'react'


export class Comment extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             comment:''
        }

        this.handleComment=this.handleComment.bind(this)
        this.handleName=this.handleName.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleComment(e)
    {
        this.setState({comment:e.target.value})
        
    }

    handleName(e)
    {
        this.setState({name:e.target.value})
    }

    handleSubmit(e)
    {
      
       console.log(`
       name: ${this.state.name} 
       comment :${this.state.comment}
       `)
        
    }
    

    render() {
        return (
            
            <form onSubmit={this.handleSubmit} className="container">
                <div className="jumbotron">
                    <h1>Comment Section</h1>
                    <label>
                        Name   :
                        <input type="text" value={this.state.name} placeholder="Enter name here" onChange={this.handleName} />
                    </label>
                    <br></br>
                    <label>
                        Comment   :
                        <input type="text" value={this.state.comment} placeholder="Type Comment here" onChange={this.handleComment}/>
                    </label>
                    <br></br>
                    <button className="btn btn-lg btn-success" type="submit">POST</button>
                </div>
                
            </form>
        )
    }
}

export default Comment
