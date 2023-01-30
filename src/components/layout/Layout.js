import React from "react";
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component{
    render(){

        return(
            <div className="container mx-auto h-screen text-center bg-red-900">
                <Header />
                    <main>{this.props.children}</main>
                <Footer />
            </div>
        );

    }
}

export default Layout;