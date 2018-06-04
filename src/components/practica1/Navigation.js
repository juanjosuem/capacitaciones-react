import React, { Component } from 'react'
import logo from './../../logo.svg';
import { Grid, Navbar,Nav,NavItem,NavDropdown,MenuItem, Button, FormGroup , FormControl } from 'react-bootstrap';


class Navigation extends Component {

	render() {
		const className = ' menu-active';
		const json = [
		  { type: 'link', text: 'Home', url: '#' },
		  { type: 'link', text: 'About Us', url: '#' },
		  {
		    type: 'dropdown',
		    text: 'Functions',
		    links: [
		      { type: 'link', text: 'Function 1', url: '#' },
		      { type: 'link', text: 'Function 2', url: '#' },
		      { type: 'link', text: 'Function 3', url: '#' },
		    ]
		  },
		];
		function DinamicNav(props) {
			const content = props.json.map((item) =>
			<NavDropdown eventKey={3} title={item.text} id="basic-nav-dropdown">
			{item.text == 'Functions' ? (
					item.links.map((sub) =>
						<MenuItem eventKey={3.2}>
						{sub.text}
						</MenuItem>)
			) :<MenuItem eventKey={3.4}>Separated link</MenuItem>}

			</NavDropdown>

			);

			return (
				<Nav>
					<NavItem eventKey={1} href="#">
						Link
					</NavItem>
					<NavItem eventKey={2} href="#">
						Link
					</NavItem>
				 {content}
			 </Nav>
			);
		}
		return (
			<div>
			<Navbar inverse fixedTop>
				<Grid>
				<span >ICONO</span>
					<Navbar.Header>
						<Navbar.Brand>
							<img src={logo} className={className} alt="logo" />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
				 <DinamicNav json={json} />
				 <Navbar.Collapse>
					 <Navbar.Form pullLeft>
						 <FormGroup>
							 <FormControl type="text" placeholder="Search" />
						 </FormGroup>{' '}
						 <Button type="submit">Submit</Button>
					 </Navbar.Form>
				 </Navbar.Collapse>
				</Grid>
			</Navbar></div>
		)
	}

}

export default Navigation
