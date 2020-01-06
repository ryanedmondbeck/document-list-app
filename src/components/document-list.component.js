import React, { Component } from 'react';
import axios from 'axios';
// import xmlparser from 'react-xml-parser';

export default class DocumentList extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			documents: []
		}
	}

	componentDidMount() {
		const url = 'https://dev1.chili-publish.com/CHILI/rest-api/v1/resources/Documents/treelevel?parentFolder=templates&numLevels=1';
		// const proxyurl = 'http://crossorigin.me/'
		// const params = {
		// 	'parentFolder': 'templates',
		// 	'numLevels': 1
		// }
		const headers = {
  			headers: {
  				// 'Content-Type': 'application/xml;charset=utf-8',
    			'Accept': 'application/xml',
    			'API-KEY': 'testKey1234=',
  			}
		};
		// send a get request
		axios.get(url, headers)
			.then(res => {
				// const documents = res.data;
				console.log(res.data);
			})	
			.catch(() => console.log("Can’t access " + url + " response."))

	}

  	render() {
    	return <h1>whatever</h1>;
  	}
}