import React from 'react';
import {Flex,Text,Center,Button} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useRouter} from 'next/router';
export default function Premium(){
	return(
		<Flex className={styles.premiumbody} direction='column' overflowY='scroll' h='100vh'>
				<Header/>
				<Flex gap='1' direction='column' color='#fff' m='4'>
					<Text fontSize='42px' color='#fff' fontWeight={'bold'}>Pricing </Text>
					{features.map((item)=>{
						return(
							<Flex align='center' w='80%' key={item.id}>
								<BookmarkIcon />
								<Flex direction='column' p='1'>
									<Text fontSize='18px' fontWeight={'bold'}>{item.title}</Text>
									<Text color='#000'>{item.content}</Text>
								</Flex>
							</Flex>
						)
					})}
					{packages.map((item)=>{
						return(
							<Flex mt='2' key={item.id} className={styles.premiumsubscriptioncard} cursor='pointer' align='center' fontSize='20px' p='5' gap='2' bg='#fff' borderRadius='10' direction='column'>
								<Flex justify='space-between' w='100%'>
									<Text color='#000' fontWeight='bold'>{item.period}</Text>
									<Text color='#f092dd'  fontSize='20px' fontWeight={'bold'}>KSH.{item.price}</Text>
								</Flex>
								<Flex justify='space-between' w='100%'>
									<Text color='grey'>Billed:{item.billed}</Text>
									<Text color='grey'>{item.offer}%off</Text>
								</Flex>

							</Flex>
						)
					})}
			</Flex>
		</Flex>
	)
}

const features=[
	{
		id:1,
		title: "Sponsored Products",
		content: 'Boost the ranking of your products, to help increase your popularity.',
	},
	{
		id:2,
		title: "Manage your Inventory and stocks.",
		content: "Control your inventory and get a dashboard to visualize your sales.",
	},
	{
		id:3,
		title: "Get Monthly Reports",
		content: "Get detailed reports of sales and inventory",
	},
]

const packages=[
	{
		id:1,
		period:'free',
		price:'0',
		billed:'-',
		offer:'-'
	},
	{
		id:2,
		period:'1 month',
		price:'1,999',
		billed:'Monthly',
		offer:'0'
	},
	{
		id:3,
		period:'12 months',
		price:'19,999',
		billed:'Annually',
		offer:'25'
	},
]

const Header=()=>{
	const router = useRouter();
	return(
		<Flex h='' p='2' bg='#fff' opacity='' w='100%' justify='space-between' align='center'>
			<Text color='#F092DD' fontSize='24px' fontWeight='bold' cursor='pointer' onClick={(()=>{router.push('/')})}>LinkupPharma</Text>
			<Flex align='center' gap='2'>
				<Text onClick={(()=>{router.push('/signin')})} cursor='pointer' fontWeight='bold'>Sign In</Text>
				<Button w='' color='#fff' borderRadius='5px' bg='#F092DD' onClick={(()=>{router.push('/signup')})}>Sign Up</Button>
			</Flex>
		</Flex>
	)
}