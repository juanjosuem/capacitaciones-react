import React, { Component } from 'react'
import logo from './../../logo.svg';
import { Grid, Navbar,Nav,NavItem,NavDropdown,MenuItem, Button, FormGroup , FormControl } from 'react-bootstrap';


class Navigation extends Component {

	render() {
		return (
			<Navbar inverse fixedTop>
				<Grid>
					<Navbar.Header>
						<Navbar.Brand>
							<img src={logo} className="App-logo" alt="logo" />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Nav>
					 <NavItem eventKey={1} href="#">
						 Link
					 </NavItem>
					 <NavItem eventKey={2} href="#">
						 Link
					 </NavItem>
					 <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						 <MenuItem eventKey={3.1}>Action</MenuItem>
						 <MenuItem eventKey={3.2}>Another action</MenuItem>
						 <MenuItem eventKey={3.3}>Something else here</MenuItem>
						 <MenuItem divider />
						 <MenuItem eventKey={3.4}>Separated link</MenuItem>
					 </NavDropdown>
				 </Nav>
				 <Navbar.Collapse>
					 <Navbar.Form pullLeft>
						 <FormGroup>
							 <FormControl type="text" placeholder="Search" />
						 </FormGroup>{' '}
						 <Button type="submit">Submit</Button>
					 </Navbar.Form>
				 </Navbar.Collapse>
				</Grid>
			</Navbar>
		)
	}

}

export default Navigation
