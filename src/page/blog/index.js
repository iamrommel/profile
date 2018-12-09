import React from 'react'
import {Post} from './Post'


export class Index extends React.Component {

  state = {posts: []}

  componentDidMount() {
    fetch('/medium-feeds')
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts, 'posts')
        this.setState({posts})
      })
      .catch((error) => {
        console.error(error)
      })
  }


  render() {

    const {posts} = this.state


    return (
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Blogs</h2>
              <h3 className="section-subheading text-muted">My personal thoughts about software development and related
                stuff.</h3>
            </div>
          </div>
          <div className="row">

              {
                posts.map((post, index) => <Post key={index}  {...post}/>)
              }

          </div>
        </div>
      </section>

    )
  }
}
