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
		this.state = {
			posts: [
				{
					id: 1,
					image: 'https://source.unsplash.com/collection/1163637/900x500/?sig=12345667'
				}
			]
		};
	}

	Blog() {
		const content = this.state.posts.map((post) =>
			<Carousel.Item key={post.id}>
				<img width={900} height={500} alt="900x500" src={post.image} />
				<Carousel.Caption>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
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

		if (this.state.posts.length < 10) {
			setTimeout(()=>{
				this.setState({
					posts:[
						...this.state.posts,
						{
							id: Math.floor(Math.random() * 1000),
							image:`https://source.unsplash.com/collection/1163637/900x500/?sig=${Math.floor(Math.random() * 1000)}`
						}
					]
				});
			},4000);
		}



    return (this.Blog())
	}

}

export default Slider
