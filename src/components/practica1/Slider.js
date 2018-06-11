import React, { Component } from 'react'
import {Carousel } from 'react-bootstrap';


class Slider extends Component {
	constructor(props) {
		super(props);
		this.Blog = this.Blog.bind(this);
		const posts = [
			{id: 1, image: 'https://media.gettyimages.com/photos/tokyo-city-japan-picture-id598602275?k=6&m=598602275&s=170667a&w=0&h=DN6SRuwZktkWr9TgCLnEn-b_JbM3jPMGOTCpXCwELUk=',title: 'Ciudad de Tokyo', content: 'Paisaje de ciudad de tokyo'},
			{id: 2, image: 'https://media.gettyimages.com/photos/jardin-du-luxembourg-luxembourg-garden-paris-16-october-2016-picture-id615570870', title: 'Otoño', content: 'Arbol de otoño'},
			{id: 3, image: 'https://media.gettyimages.com/photos/give-yourself-a-green-light-picture-id477694912',title: 'Lluvia en la ciudad', content: 'Lluvia en Tokyo'}
		];
		this.posts = posts;

	}

	Blog() {
		const content = this.posts.map((post) =>
			<Carousel.Item key={post.id}>
				<img width={900} height={500} alt="900x500" src={post.image} />
				<Carousel.Caption>
					<h3>{post.title}</h3>
					<p>post.content</p>
				</Carousel.Caption>
			</Carousel.Item>
		);
		return (
			<Carousel>
			{content}
			</Carousel>
		);
	}

	render() {
    return (this.Blog())
	}

}

export default Slider
