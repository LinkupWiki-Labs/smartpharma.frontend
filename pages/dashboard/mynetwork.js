import React,{useState,useEffect} from 'react'
import {Flex,Text,Button,Input,Image} from '@chakra-ui/react'

import Map,{ NavigationControl,Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;
import 'mapbox-gl/dist/mapbox-gl.css';


import Header from '../../components/Header.js';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Script from 'next/script';

export default function MyNetwork(){
	return(
		<Flex p='2' direction='column'>
			<Header/>
			<Flex gap='2' p='2' direction='column'>
				<Text textDecoration='3px solid #F092DD underline' color='#000' fontWeight='bold' fontSize='28px'>My Network</Text>
				<Text>Find and connect with other pharmacies near and or around your area.</Text>
				<Flex gap='2'>
					<Input type='text' placeholder='Find pharmacies by name or by pharmacists'/>
					<Button bg='#392F5A' color='#fff'><ManageSearchIcon/>Search</Button>
				</Flex>
				<Flex p='2' h='600px' w='90vw'>
					<MapSection/>
				</Flex>
			</Flex>
			
		</Flex>
	)
}



const MapSection=()=>{
	return(

		<Map
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken="pk.eyJ1IjoibXVzZW1iaSIsImEiOiJjbGFnam5uODEwMmU3M3BtcTV6YW8wdnAzIn0.a3v6U1sWi095uwDY8YRBhA"
		    initialViewState={{
	          	latitude: -1.099616,
			    longitude: 37.043557,
			    zoom: 10,
	        }}
		   
	    >
	    {data.map((data)=>{
	    	return(
	    		<div key={data.id}>
	    			<MarkProp data={data}/>
	    		</div>
	    	)
	    })}
	    </Map>
	)
}

const data=[
	{
		id:1,
		latitude:-1.089616,
		longitude:37.033557
	},
	{
		id:2,
		latitude:-1.028071,
		longitude:37.041622
	},
	{
		id:3,
		latitude:0.701078,
		longitude:35.259376
	},
]

const MarkProp=({data})=>{
	const [show,setShow]=useState(false)
	return( 
		<Marker longitude={data.longitude} latitude={data.latitude} color='#392F5A' onClick={(()=>{setShow(!show)})}>
			{show?<Popup/>:null}
		</Marker>
	)
}

const Popup=()=>{
	return(
		<Flex direction='column' bg='#fff' p='3' position='absolute' color='#000' top='' left='6' borderRadius='5' boxShadow='dark-lg' w='200px' gap='2'>
			<Text fontSize='18px'>Name: <span style={{color:'#f092dd'}}>Uptone Pharmacy</span></Text>
			<Text>Location: Juja, Kiambu</Text>
			<Text>Distance: 50km</Text>
		</Flex>
	)
}