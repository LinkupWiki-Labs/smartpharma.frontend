import React from 'react';
import {Flex,Text,Image,Button,Input} from '@chakra-ui/react'
import {useRouter} from 'next/router'

export default function Landing(){
	return(
		<Flex direction='column'>
			<Flex position='absolute' top='0' w='100%'>
				<Header/>
			</Flex>
			<Image opacity='0.8' zIndex='-100' position='absolute' top='0' left='0' src='./1.jpg' alt='photo' h='100vh' w='100vw' objectFit='cover'/>
			<InfoSection />
			<Flex bg='#F092DD' w='350px' opacity='0.8' borderRadius='5' m='-10vh 5vh' p='2'>
				{links.map((link)=>{return(<Text key={link.id} textDecoration='1px solid #000 underline' cursor='pointer' color='#000' p='3' fontWeight='bold' borderRight='1px solid #fff'>{link}</Text>)})}
			</Flex>
		</Flex>
	)
}

const InfoSection=()=>{
	return(
		<Flex fontWeight='bold' direction='column' p='4'  gap='4' border='0px solid #000' bg='#392F5a' color='#fff' borderRadius='10' m='15vh 30px' w='350px' boxShadow='dark-lg'>
			<Text color='#F092DD' fontSize='48px' fontWeight='bold'>Smart Pharma</Text>
			<Text>The smart way to connect with the pharmaceutical network.</Text>
			<Text>Smart Pharama is a digital platform that provides a professional tools to manage, Track and keep record of your pharmaceutical stock and infomation.</Text>
			<Text>With our <span style={{color:'#F092DD'}}>sharing network feature</span>, connect with other pharmaceuticals, drug stores to help manage overStock medicines in our network.</Text>
			<Flex w='100%' gap='4'>
				<Button w='50%' borderRadius='5px' bg='#F092DD'>Sign Up</Button>
				<Button flex='1' bg='#fff' color='#000'>Learn More</Button>
			</Flex>
		</Flex>
	)
}

const Header=()=>{
	const router = useRouter();
	return(
		<Flex h='' p='2' bg='#fff' opacity='0.85' w='100%' justify='space-between'>
			<Text textShadow='#000 0px 1px 1px' color='#F092DD' fontSize='32px' fontWeight='bold'>Smart Pharma</Text>
			<Flex align='center' gap='2'>
				<Text onClick={(()=>{router.push('/dashboard/1')})} cursor='pointer' fontWeight='bold'>Sign In</Text>
				<Button w='' color='#fff' borderRadius='5px' bg='#F092DD'>Sign Up</Button>
			</Flex>
		</Flex>
	)
}

const links=['Aboutus','Contact','FAQs','Pricing']