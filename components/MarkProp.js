import React from 'react'
import { Marker } from 'react-map-gl';
import Pin from './pin.js'
import {Flex,Text} from '@chakra-ui/react';

function MarkProp({location}){
	
	return(
		<Marker
	    	latitude={parseFloat(location.latitude)}
	    	longitude={parseFloat(location.longitude)}
	    >
	   		<PopUp/>
	    	<Pin style={{color:"#F092DD"}} />
	    </Marker>
	)
}
export default MarkProp

const PopUp=()=>{
	return(
		<Flex w='100px' bg='#fff' borderRadius='5' direction='column'>
			<Text fontSize='10px' p='1'>Name</Text>
		</Flex>
	)
}