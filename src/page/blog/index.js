import React from 'react'


export class Index extends React.Component {

  state = {posts: []}

  componentDidMount() {
    fetch('https://feed2json.org/convert?url=https://medium.com/feed/rommels-software-development-perspective')
      .then((response) => response.json())
      .then((responseJson) => {

        const {items} = responseJson
        this.setState({posts: items})
        return items
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
            <div className="col-lg-12">
              {
                posts.map((post, index) => {
                  console.log(post)
                })
              }
            </div>
          </div>
        </div>
      </section>

    )
  }
}
