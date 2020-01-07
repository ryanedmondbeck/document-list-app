import React, { Component } from 'react';

async function fetchData() {
    let response = await fetch('http://localhost:5000/api/command');
    console.log(response)
    let data = await response.json();
    return data;
}

export default class DocumentList extends React.Component {

    state = {
        documents: []
    }

	componentDidMount() {
		// const url = 'https://dev1.chili-publish.com/CHILI/rest-api/v1/resources/Documents/treelevel?parentFolder=templates&numLevels=1';
		// send a get request
        fetchData().then(resp => resp.json())
            // .then(resp => {
                // console.log('data', resp)
            // })

	}

  	render() {
    	return <h1>whatever</h1>;
  	}
}
