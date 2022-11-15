import React,{useState} from 'react'
import {Flex,Text,Button,Input} from '@chakra-ui/react'
import Header from '../../components/Header.js'
import HubIcon from '@mui/icons-material/Hub';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {useRouter} from 'next/router'
import AddNewPost from '../../components/modals/NewPostModal.js'

export default function Dashboard(){
	const router = useRouter();
	const [isnewpostModalvisible,setisnewpostModalvisible] = useState();

	return(
		<Flex direction='column'>
			<AddNewPost isnewpostModalvisible={isnewpostModalvisible} setisnewpostModalvisible={setisnewpostModalvisible}/>
			<Header/>
			<Flex p='4' gap='4' direction='column'>
				<Text textDecoration='3px solid #F092DD underline' fontWeight='bold' fontSize='24px'>Dashboard</Text>
				<Flex p='1' gap='2'>
					<Button bg='#F092DD' color='#fff' onClick={(()=>{setisnewpostModalvisible(true)})}>Add Post</Button>
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
		<Flex direction='column' gap='2' zIndex=''>
			<Flex gap='2'>
				<Input type='text' placeholder='Search for products' variant='filled'/>
				<Button onClick={(()=>{console.log('works')})} bg='#392F5A' color='#fff' cursor='pointer'><ManageSearchIcon/>Search</Button>
			</Flex>
			<Flex direction='column' p='' gap='4'>
				<PostsCard/>
				<PostsCard/>
			</Flex>
		</Flex>
	)
}

const PostsCard=()=>{
	return(
		<Flex zIndex='' direction='column' gap='1' p='2' bg='#eee' borderRadius='5' boxShadow='md'>
			<Text>Name:ksdhi</Text>
			<Text>Location:</Text>
			<Text>Type:Request</Text>
			<Text>Date:2-11-2022</Text>
			<Text>Amount/Volume:200 units</Text>
			<Flex p='1' gap='2'>
				<Button bg='#392F5A' color='#fff' cursor='pointer'>Contact</Button>
				<Button bg='#000' color='#fff' cursor='pointer'><BookmarkAddIcon/> Add to Favorites</Button>
			</Flex>
		</Flex>
	)
}

const Recents=()=>{
	return(
		<Flex direction='column' gap='4' zIndex=''>
			<RecentsCard/>
			<RecentsCard/>
		</Flex>
	)
}

const RecentsCard=()=>{
	return(
		<Flex zIndex='' direction='column' gap='1' p='2' bg='#eee' borderRadius='5' boxShadow='md'>
			<Text>Name:ksdhi</Text>
			<Text>Location:</Text>
			<Text>Type:Request</Text>
			<Text>Date:2-11-2022</Text>
			<Text>Amount/Volume:200 units</Text>
			<Button bg='#F092DD' color='#fff' cursor='pointer'>Contact</Button>
		</Flex>
	)
}
