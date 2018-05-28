import React, { Component } from 'react'


class Footer extends Component {

	render() {
		const style={
			position: 'fixed',
			left: 0,
			bottom: 0,
			width: '100%',
			backgroundColor: '#3c3c3c',
			color: 'white',
			textAlign: 'center',
		}

    return (
			<div style={style}>
        <p>Footer</p>
      </div>
		)
	}

}

export default Footer
