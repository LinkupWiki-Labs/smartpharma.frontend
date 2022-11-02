import React from 'react'
import {Flex,Text,Button,Input} from '@chakra-ui/react'
import Header from '../../components/Header.js'
import HubIcon from '@mui/icons-material/Hub';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {useRouter} from 'next/router'

export default function Dashboard(){
	const router = useRouter()
	return(
		<Flex direction='column'>
			<Header/>
			<Flex p='2' gap='2' direction='column'>
				<Text textDecoration='3px solid #F092DD underline' fontWeight='bold' fontSize='24px'>Dashboard</Text>
				<Flex p='1' gap='2'>
					<Button bg='#F092DD' color='#fff'>Add Post</Button>
					<Button bg='#000' onClick={(()=>{router.push('/dashboard/mynetwork')})} color='#fff'><HubIcon/> My Network</Button>
				</Flex>
				<Posts/>
				<Text textDecoration='3px solid #000 underline' color='#F092DD' fontWeight='bold' fontSize='20px'>Recently Viewed Posts</Text>
				<Recents/>
			</Flex>
			
		</Flex>
	)
}

const Map=()=>{
	return(
		<Text>Map</Text>
	)
}

const Posts=()=>{
	return(
		<Flex direction='column' gap='2' zIndex='-1'>
			<Flex gap='2'>
				<Input placeholder='Search for drugs' type='text'/>
				<Button bg='#392F5A' color='#fff'><ManageSearchIcon/>Search</Button>
			</Flex>
			<Flex direction='column' p='' gap='2'>
				<PostsCard/>
				<PostsCard/>
			</Flex>
		</Flex>
	)
}

const PostsCard=()=>{
	return(
		<Flex zIndex='-1' direction='column' gap='1' p='2' bg='#eee' borderRadius='5' boxShadow='md'>
			<Text>Name:ksdhi</Text>
			<Text>Location:</Text>
			<Text>Type:Request</Text>
			<Text>Date:2-11-2022</Text>
			<Text>Amount/Volume:200 units</Text>
			<Flex p='1' gap='2'>
				<Button bg='#392F5A' color='#fff'>Contact</Button>
				<Button bg='#000' color='#fff'><BookmarkAddIcon/> Add to Favorites</Button>
			</Flex>
		</Flex>
	)
}

const Recents=()=>{
	return(
		<Flex direction='column' gap='2' zIndex='-1'>
			<RecentsCard/>
			<RecentsCard/>
		</Flex>
	)
}

const RecentsCard=()=>{
	return(
		<Flex zIndex='-1' direction='column' gap='1' p='2' bg='#eee' borderRadius='5' boxShadow='md'>
			<Text>Name:ksdhi</Text>
			<Text>Location:</Text>
			<Text>Type:Request</Text>
			<Text>Date:2-11-2022</Text>
			<Text>Amount/Volume:200 units</Text>
			<Button bg='#F092DD' color='#fff'>Contact</Button>
		</Flex>
	)
}