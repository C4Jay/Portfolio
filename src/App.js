import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
   
<div className="demo-big-content">
    <Layout>
        <Header title="Portfolio" scroll className="header-color">
            <Navigation>
                
            <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
    
        </Content>
                <Footer size="mini" className="footer">
    <FooterSection className="foot" type="middle" logo="C4J">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>
</div>

  );
  }
}

export default App;
