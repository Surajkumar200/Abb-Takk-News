import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}  - Abb Takk apko rakhe age`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3d7fbe878704028901a15ed6ae59387&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(100);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }
  // not use but use for privious button
  /* handlePrevClick = async () => {
     console.log("Previous");
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3d7fbe878704028901a15ed6ae59387&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
     this.setState({ loading: true });
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({
       page: this.state.page - 1,
       articles: parsedData.articles,
       loading: false,
     })
 
   }*/
  // not use but use for next button
  /* handleNextClick = async () => {
     console.log("Next");
     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3d7fbe878704028901a15ed6ae59387&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
       this.setState({ loading: true });
       let data = await fetch(url);
       let parsedData = await data.json()
       this.setState({
         page: this.state.page + 1,
         articles: parsedData.articles,
         loading: false,
       })
     }
   };*/
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Abb TAkk - Letest {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spiner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner />}
        >
          <div className="container">

            <div className="row">
  
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }
}

export default News

// use in last div 
/*  <div className="container d-flex justify-content-between">
<button type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
<button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div>*/