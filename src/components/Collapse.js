// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick eventi çalıştı
// setState state nesnesini guncelledi --> triggered render
// render metodu guncel JSX i sayfada gosteriyor

import React from 'react';

// class Collapse extends React.Component {

//     state = { showContent: false }

//     showMore = () => {
//         this.setState({ showContent: !this.state.showContent })

//     }

// /*     componentDidMount() {
//         console.log('Component Olusturuldu')
//     }

//     componentDidUpdate() {
//         console.log('Component Guncellendi')
//     } */

//     render() {


//         return (
//             <div>
//                 <button className="btn btn-primary w-100" onClick={this.showMore}>

//                     {this.props.children.props.cardTitle}

//                 </button>

//                 {
//                     this.state.showContent ? (
//                         <div className="collapse show">

//                             {this.props.children}

//                         </div>
//                     ) : null
//                 }

//             </div>
//         );
//     }

// };

const Collapse = (props) => {

    return (
        <div>
            <button className="btn btn-primary w-100">

                Link

            </button>


            <div className="collapse show">

                {props.children}

            </div>

        </div>
    );
}

export default Collapse;