import React, { Component } from 'react'
import NewsBox from './NewsBox'

export default class Newsc extends Component {

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            country: 'us'
        }
        // console.log('cunstrucotr');
        
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=a839ec25e4324b8a83f72f27ffa23a63`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles }, ()=>console.log(this.state.articles));
        
        // console.log('componentDidMount');
    }


  render() {
    return (
        <>
        <div className="container my-5">
            <div className="row">
                {
                (this.state.articles === undefined) ? 'loading..' :

                
                this.state.articles.map((element)=>{
                    return <div className="col-md-3 my-4" key={element.url}>
                        <NewsBox title={element.title}
                            discription={element.description} imageurl={element.urlToImage}
                            url={element.url} />
                    </div>
                })
                }
                
            </div>
        </div>
        </>
    )
  }
}
