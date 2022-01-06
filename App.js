import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

class  App extends Component {
  constructor () {
    super ();
    this.state= {
      stName: [],
      isLoading: false,
      isStopped: false,
    };
    console.log("constructor");
  
  }

//Example of RENDER....

// renderHeader = () => {
//   return <h1>HEADER*******</h1>;
// };

// loadData = () => {
// this.setState({isLoading:true});
// //render function will call..

// setTimeout(() => {
//   console.log ("inside set timeout");
//   this.setState ({ 
//   isLoading: false, 
//   stName: ["hammad", "arsalan", "bushra"],
//   });
// }, 1000);
// };

// renderData = () => {
//   return this.state.stName.map((val) => {
//   return <h5> {val} </h5>
//   });
// };

// render ()
// {
//   console.log ("render");
//   //this.setState ({stName: ["hammad"]}); DON'T TRY THIS...
//   console.log(this.state);


// return(
//   <div>
//     {console.log ("return")}
//     {this.renderHeader()}
//     <h1>REACT LIFE CYCLES</h1>
//     {/* {this.renderData()} */}
//     {/* {this.loadData()} */}
//     {/* {this.loadData()} */}

//     {this.state.isLoading ?(
//       "....Loading"
//       ) : (
//         <button onClick= {this.loadData}>Fetch Data</button>
//       )}
//       {this.renderData ()}
//       {/* {this.renderData ()} */}
//   </div>
// );
// }

//Example of COMPONENTDIDMOUNT
// renderHeader= () =>{
//   return <h1>HEADER...</h1>;
// };
// componentDidMount (){
//   console.log("componentDidMount called");
//   this.setState({isLoading:true});
//   setTimeout(()=> {
//     this.setState({
//       isLoading:false,
//       stName: ["Constructor on first mount", "Render on first mount or on a state change", "Component on first mount aftere render"],
//     });
//   }, 4000);
// }

// renderData = () =>{
//   return this.state.stName.map ((val) =>{
//     return <h5> {val} </h5>
//   });
// };
// render (){
//   console.log("render");
//   return(
//     <div>
//       {console.log("return")}
//       {this.renderHeader()}
//       <h1>REACT LIFE CYCLES...</h1>
//       {this.state.isLoading ? "...Loading" : null}
//       {this.renderData()}
//     </div>
//   );
// }


//Example of COMPONENTDIDUPDATE
// renderHeader= () =>{
//     return <h1>HEADER...</h1>;
//   };
//   componentDidMount (){
//     console.log("componentDidMount called");
//     this.setState({isLoading:true});
//     setTimeout(()=> {
//       this.setState({
//         isLoading:false,
//         stName: ["Constructor on first mount", "Render on first mount or on a state change", "Component on first mount aftere render"],
//       });
//     }, 4000);
//   }
//   render(){
//     console.log("render");
//   return(
//     <div>
//       {console.log("return")}
//       {this.renderHeader()}
//       <h1>REACT LIFE CYCLE</h1>
//       <Student data = {this.state.stName}
//       isLoading={this.state.isLoading} />
//     </div>
//   );}
//   }
// class Student extends Component{
//   state={
//     status:'none'
//   }
//   componentDidUpdate(prevProps){
//   console.log("this.props",prevProps);
//   console.log("componentDidUpdate");
//   console.log("this.props",this.props);

//   if (prevProps.data !== this.props.data){
//     console.log("please state update");
//     this.setState({status :'updated'})
//   }
//   }
//   renderData= ()=>{
//     return this.props.data.map ((val,index) =>{
//       return <h5 key={index}> {val} </h5>
//         });
//       };
//       render (){
//         return(
//           <>
//           <div>
//             {this.props.isLoading? "...Loading" : this.renderData()}
//             <h6>{this.state.status}</h6>
//           </div>
//           </>
//         );
      
//       }
      //Example of COMPONENTWILLUNMOUNT
      renderHeader= () =>{
        return <h1>HEADER...</h1>;
      };
      componentDidMount (){
        console.log("componentDidMount called");
        this.setState({isLoading:true});
        setTimeout(()=> {
          this.setState({
            isLoading:false,
            stName: ["Constructor on first mount", "Render on first mount or on a state change", "Component on first mount aftere render"],
          });
        }, 4000);
      }
      componentWillUnmount(){
        console.log("componentWillUnmount  ");
        clearInterval(this.intervals);
      }
      render(){
        console.log("render");
      return(
        <div>
          {console.log("return")}
          {this.renderHeader()}
          <h1>REACT LIFE CYCLE</h1>
          <button onClick={()=>this.setState({isStopped:true})}>
            Stop Timer..</button>
          <Student data = {this.state.stName} isLoading={this.state.isLoading} />
          {this.state.isStopped ? null :<Timer/>}
        </div>
      );}
      }
    class Student extends Component{
      state={
        status:'none'
      }
      componentDidUpdate(prevProps){
      console.log("this.props",prevProps);
      console.log("componentDidUpdate");
      console.log("this.props",this.props);
    
      if (prevProps.data !== this.props.data){
        console.log("please state update");
        this.setState({status :'updated'})
      }
      }
      renderData= ()=>{
        return this.props.data.map ((val,index) =>{
          return <h5 key={index}> {val} </h5>
            });
          };
          render (){
            return(
              <>
              <div>
                {this.props.isLoading? "...Loading" : this.renderData()}
                <h6>{this.state.status}</h6>
           </div>
              </>
            );
          
          }
        }
class Timer extends Component{
  state={
  timer:0,
  }
  componentDidMount(){
    this.intervals = setInterval(() => {
      this.setState({timer:this.state.timer+1})
    },1000);
  }
render(){
  console.log(this.state.timer);
return <div>{this.state.timer}</div>; 
}
}
export default App;
