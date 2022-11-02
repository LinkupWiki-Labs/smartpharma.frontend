import React,{useState,useEffect} from 'react'
import {Flex,Text,Button,Input,Image} from '@chakra-ui/react'
import Map from 'react-map-gl';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from '../../components/Header.js'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

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
				<Image src='../3.jpg' objectFit='cover' w='100vw' h='500px' alt='photo'/>
			</Flex>
		</Flex>
	)
}

const MapSection=()=>{
	const INITIAL_VIEWPORT ={
			width:390,
			height:400,
			latitude: -1.0990963,
		    longitude: 37.01161,
		    zoom: 14
	}
	const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
useEffect(()=>{
		//getPropertyPosition()
		console.log(viewport)
	},)
	
	const getPropertyPosition=()=>{
		if("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition(position=>{
				const{latitude,longitude}=position.coords
					setViewport({...viewport, latitude,longitude})
			})
		}
	}
	const token = mapboxgl.accessToken
	return(
		<Map
     		mapStyle="mapbox://styles/mapbox/outdoors-v11"
			token={"sk.eyJ1IjoibXVzZW1iaSIsImEiOiJjbDl6OHlmdjcwYnNtM29sbmExYmxrbmo1In0.PudFblsnFBNqZn5Jyew-2A"}
		    {...viewport}
   		/>
	)
}

const data=[
	{
		latitude:"-1.0990963",
		longitude:"37.01161"
	},
]

