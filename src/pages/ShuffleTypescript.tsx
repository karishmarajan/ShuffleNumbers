import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";

 
class ShuffleTypescript extends React.Component<{}> {
    state = { 
        numbers:[1,2,3,4,5,6,7,8,9],
     };

     handleShuffle = () => {
        this.setState({
          numbers: this.state.numbers.sort(() => 0.5 - Math.random()),
        });
      };
      handleSort = () => {
        this.setState({ numbers: this.state.numbers.sort() });
      };

    render() { 
        return ( 
            <div className="container">
            <Header />
            <div className="main-view">
              <div className="flex-container">
                {this.state.numbers.map((n) => (
                  <div className={n % 2 === 0 ? "even-cell" : "odd-cell"}>{n}</div>
                ))}
              </div>
            </div>
            <div className='btn-div'>
              <button className='btn-view' onClick={() => this.handleShuffle()}>Shuffle</button>
              <button className='btn-view' onClick={() => this.handleSort()}>Sort</button>
            </div>
            <Footer />
          </div>
         );
    }
}
 
export default ShuffleTypescript;