import React, {Component}  from 'react';
import BookCard from './BookCard';


class BookList extends Component {
    state = {
        books: [
            {
                title: 'CSS Master',
                image: require('../assets/images/css_master_tiffany.png'),
                description: 'Organize, Efficient, Powerfull-CSS Done Right',
                author: 'Tiffany B. Brown',
            },
            {
                title: 'Github Essentials',
                image: require('../assets/images/github_essents.png'),
                description: 'Unleash the power of collaborative workflow development using Github, one step at a time',
                author: 'Achilleas Pipinellis',
            },
            {
                title: 'Functional Programming in Javascript',
                image: require('../assets/images/functional_programming_JS.png'),
                description: 'Unlock the powers of functional programming hidden within Javascript to build smarter, cleaner, and more reliable web apps',
                author: 'Dan Mantyla',
            },
            {
                title: 'Bootstrap Site Blueprint Volume II',
                image: require('../assets/images/bootstrap_print_vol2.png'),
                description: 'Maximize the potential of Bootstrap for faster and more responsive web application',
                author: 'by Matt Lambert',
            },
            {
                title: 'Getting Started with HTML5 WebSocket Programming',
                image: require('../assets/images/gs_html5.png'),
                description: 'Develop and deploy your first secure and scalable real-time web application',
                author: 'Vangos Pterneas',
            },
            {
                title: 'HTML5 and CSS3 Responsive Web Design Cookbook',
                image: require('../assets/images/html_and_css3.png'),
                description: 'Learn the secrets of developing responsive websites capable of interfacing with todays mobile interest devices',
                author: 'Benjamin LaGrone',
            }
        ]
        
    }
    
    
    render(){
        return(
            <div>
                <BookCard 
                    kaka="milan"
                    kaka2="man u" ///bisa lebih dari satu porps yang dikirim
                    contoh={this.state.test}//bisa kirim state
                    buku={this.state.books}
                />
            </div>
        )
    }
}

export default BookList;