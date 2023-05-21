import React from 'react'

const NewsItem =(props)=>{
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (   
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={!imageUrl?"https://sportshub.cbsistatic.com/i/r/2023/05/14/98c1614c-841a-40ce-8861-acb0097bf1ec/thumbnail/1200x675/153e6ae903ea999f53c61cdc2c1029af/usatsi-20644582-1.jpg":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...
        </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted' >By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary" >Read More</a>
          </div>
        </div>
      </div>
    );

  }


export default NewsItem
