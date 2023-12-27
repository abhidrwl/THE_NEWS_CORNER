import React from 'react'
import { useGlobalContext } from './Context'
import "./Stories.css";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();



  if (isLoading) {
    return <>
      <div id='spinner' className="spinner-border text-info" role="status">
</div>
    </>
  }
  return (
    <>
      <h2></h2>
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments, created_at } = curPost;
        return (

          <>
            <div className="card" key={objectID}>
              <a className="card1" href={url} target="_blank">
                <h2>{title}</h2>
                <p> By <span>{author}</span></p>
                <p><span> {num_comments}</span> comments</p>
                <p>{created_at.substring(8,10)}/{created_at.substring(5,7)}/{created_at.substring(0,4)}</p>
                
                <div className="go-corner" href="#">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

          </>


        )
      })}
    </>
  );
};

export default Stories;
