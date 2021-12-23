/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import {
    Route,
    Routes,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Acasa from "./Acasa";
  import InfoUtile from "./InfoUtile"
  import Contact from "./Contacte";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container position='left ' style={{
    margin: '15% !important',
  }}>
    <Header
      as='h1'
      content='Electricitate şi gaz'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        color: 'white',
      }}
    />
    <Header
      as='h2'
      content='Oferte in piata concurenţiala'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button default size='huge' color="green">
      Alege oferta
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='left'
            style={{ minHeight: 700, padding: '1em 0em', backgroundImage: 'url(../images/background.jpg)', backgroundRepeat: 'repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}
            vertical
            
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container position='left' >
                <Menu.Item as='a' active>Acasa</Menu.Item>
                <Menu.Item as='a'>Info utile</Menu.Item>
                <Menu.Item as='a'>Contact</Menu.Item>
                {/* <HashRouter>
        
        <div>
          <h1>Prinde oferta momentului</h1>
          <ul className="header">
            <li><NavLink exact to="/">Acasa</NavLink></li>
            <li><NavLink to="/info_utile">Info Utile</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
            <Route exact path="/" element={<Acasa />}/>
            <Route path="/info_utile" element={<InfoUtile />}/>
            <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </div>
      </HashRouter> */}

                {/* <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item> */}
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>Acasa</Menu.Item>
            <Menu.Item as='a'>Info utile</Menu.Item>
            <Menu.Item as='a'>Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', color: 'orange', fontWeight: 'bold' }}>
            Preţul energiei electrice a atins un nou record pe bursa de profil
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Preţul energiei electrice atinge noi recorduri pe bursa de profil OPCOM, 
            ajungând la peste <b>2.300 de lei pe MWh</b> în vârf de consum pe piaţa spot, după cum arată datele postate pe site-ul operatorului bursier.

            <br/>

            Raportat la luna iunie, când preţul energiei electrice pe piaţa spot a bursei OPCOM (Piaţa pentru Ziua Următoare PZU)
             a avut o medie de <b>378 lei pe MWh</b>, preţul este uriaş.

            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image rounded size='large' src='../images/market_stock.jpg' />
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Segment>

    {/* <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='../images/ceo.png' />
              <b>Francesco</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment> */}

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
          <Grid.Column width={3}>
              <Header inverted as='h4' content='' />
              <List link inverted>
                <List.Item as='a'>Termeni şi condiţii</List.Item>
                <List.Item as='a'>Politica de confidenţialitate</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as='h4' content='' />
              <List link inverted>
                <List.Item as='a'>Intrebari Frecvente</List.Item>
                <List.Item as='a'>Contact</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3} >
              <Header as='h4' inverted>
                
              </Header>
              
              <Icon link name='facebook official'style={{ padding: '0em 1em 1em 1em' }}/>
              <Icon link name='instagram' style={{ padding: '0em 1em 1em 1em' }}/>
              <Icon link name='phone' style={{ padding: '0em 1em 1em 1em' }}/>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout