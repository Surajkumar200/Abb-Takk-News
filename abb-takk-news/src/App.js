import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 5;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News   setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general" />}/>
          <Route exact path="/business" element={<News   setProgress={this.setProgress} key="business" pageSize={5} country="in" category="business" />}/>
          <Route exact path="/entertainment" element={<News   setProgress={this.setProgress} key="entertainment" pageSize={5} country="in" category="Entertainment" />}/>
          <Route exact path="/general" element={<News   setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general" />}/>
          <Route exact path="/health" element={<News   setProgress={this.setProgress} key="health" pageSize={5} country="in" category="Health" />}/>
          <Route exact path="/science" element={<News   setProgress={this.setProgress} key="science" pageSize={5} country="in" category="Science" />}/>
          <Route exact path="/sports" element={<News   setProgress={this.setProgress} key="sports" pageSize={5} country="in" category="Sports" />}/>
          <Route exact path="/technology" element={<News   setProgress={this.setProgress} key="technology" pageSize={5} country="in" category="Technology" />}/> 
        </Routes>
      </Router>
    
   

    )
  }
};

export default App
