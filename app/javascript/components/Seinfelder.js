import React from 'react'
import axios from 'axios'

let quoteUrl = ""
let quoteText = "quote__text"

class Seinfelder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: ""
        };

    }

    getQuote(){

        axios.get('https://quotecatalog.com/quotes/tv/seinfeld/')
            .then((response) => {
                if(response.status === 200) {
                    console.log("200")
                    const html = response.data;
                    const $ = cheerio.load(html);
                    const urlElems = $('a')
                  // We now loop through all the elements found
                    for (let i = 0; i < urlElems.length; i++) {
                        console.log("for")
                     
                        const quote = $(urlElems[i]).find('quote__text')[0]

                        // We proceed, only if the element exists
                        if (quote) {
                        // We wrap the span in `$` to create another cheerio instance of only the span
                        // and use the `text` method to get only the text (ignoring the HTML)
                        // of the span element
                        const urlText = $(quote).text()

                        // We then print the text on to the console
                        console.log(urlText)
                        }
                    }
                }
            }, (error) => console.log(err) );
    }

    printQuote(quote){
        this.setState({
            quote: this.state.quote
        })
    }

    // componentDidMount(){
    //     fetch('posts.json')
    //         .then((response) => {return response.json()})
    //         .then((data) => {this.setState({ posts: data }) });
    // }

    render(){
        return(
            <div>
                <button onClick={this.getQuote()}>This is the BEST</button>
            </div>
        )
    }
}
    
export default Seinfelder