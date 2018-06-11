import React, { Component } from 'react'
import logo from './../../logo.svg';
import { Grid, Navbar,Nav,NavItem,NavDropdown,MenuItem, Button, FormGroup , FormControl } from 'react-bootstrap';


class Navigation extends Component {
	constructor(props) {
		super(props);
		this.renderNav = this.renderNav.bind(this);
		const className = ' menu-active';
		this.className = className;
		const json = [
			{ id: 33, type: 'link', text: 'Home', url: '#' },
			{ id: 44, type: 'link', text: 'About Us', url: '#' },
			{
				id: 55,
				type: 'dropdown',
				text: 'Functions',
				links: [
					{ id: 6, type: 'link', text: 'Function 1', url: '#' },
					{ id: 7, type: 'link', text: 'Function 2', url: '#' },
					{ id: 8, type: 'link', text: 'Function 3', url: '#' },
				]
			},
		];
		this.json = json;
	}

	renderNav() {
		const content = this.json.map((item) =>
		<NavDropdown key={item.id} title={item.text} id="basic-nav-dropdown">
		{item.text === 'Functions' ? (
				item.links.map((sub, index) =>
					<MenuItem key={index}>
					{sub.text}
					</MenuItem>)
		) :<MenuItem eventKey={item.id}>Separated link</MenuItem>}

		</NavDropdown>

		);
		return (
			<Nav>
				<NavItem href="#">
					Link
				</NavItem>
				<NavItem href="#">
					Link
				</NavItem>
			 --{content}
		 </Nav>
		)
	}

	render() {
		return (
			<div>
			<Navbar inverse fixedTop>
				<Grid>
				<span >ICONO</span>
					<Navbar.Header>
						<Navbar.Brand>
							<img src={logo} className={this.className} alt="logo" />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
				 {this.renderNav()}
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

//<DinamicNav json={json} />
