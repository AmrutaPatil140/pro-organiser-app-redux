import React, { Component } from 'react'
import styles from "./CreateBoard.module.scss";
import {addNewBoard} from '../../ReusableFunctions/ReusableFunctions';

 class CreateBoard extends Component {
   constructor(props) {
     super(props)
    
     this.state = {
        boardName:"",
        boardMembers:"",
        boardType:""

     }
   }
   
    //Function to saveBoard in Database
      createBoardHandler=(e)=>{
      e.preventDefault();
      const{boardName,boardMembers,boardType}=this.state
      const memberArray=boardMembers.split(',');
      const board={

        boardName,
        boardMembers:memberArray,
        boardType
        
      }
      //Function Defined in Common file.
      addNewBoard(board)
      .then((created)=>{
        if(created){
          this.props.history.push('/');
        }
      })
   }
    render() {
        return (
            <>
               
                <div className={styles.boardContainer}>
                  <p>Create a Board</p>
                  <form onSubmit={this.createBoardHandler}>
                    <label htmlFor="name">Enter a name for your Board</label>
                    <input
                      required
                      className={styles.fields}
                      type="text"
                      id="name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({
                          boardName:e.target.value
                        })
                      }}
                      placeholder="eg.Agile Sprint Board"
                    ></input>
                    <label htmlFor="team">Add your team members</label>
                    <input
                      required
                      className={styles.fields}
                      type="text"
                      id="team"
                      value={this.state.members}
                      onChange={(e) => {
                        this.setState({
                          boardMembers:e.target.value
                        })
                      }}
                      placeholder="Add your Team (separated by commas)"
                    ></input>
                    <label htmlFor="type">Enter the type of your Board</label>
                    <input
                      className={styles.fields}
                      type="text"
                      id="type"
                      value={this.state.type}
                      onChange={(e) => {
                        this.setState({
                          boardType:e.target.value
                        })
                      }}
                      placeholder="eg.Design UX(optional)"
                    ></input>
                    <button
                      type="submit"
                      className={styles.CreateBoard}
                      id="CreateBoard"
                    >
                      Create
                    </button>
                  </form>
                </div>
    
            </>
          );
    }
}

export default CreateBoard
