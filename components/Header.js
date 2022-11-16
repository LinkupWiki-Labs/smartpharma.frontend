import React,{useState} from 'react'
import {Flex,Text,Button,Stack} from '@chakra-ui/react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/MenuOpen';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import HubIcon from '@mui/icons-material/Hub';
import {useRouter} from 'next/router'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header(){
	const [showmenubar,setshowmenubar]=useState(false);
	const router = useRouter();
	return(
		<Flex cursor='pointer' h='' p='2' bg='#fff' opacity='1' w='100%' justify='space-between' align='center'>
			<Text onClick={(()=>{router.push('/')})} color='#F092DD' fontSize='20px' fontWeight='bold'>LinkupPharma</Text>
			<Flex align='center' gap='2'>
				<Text cursor='pointer' fontWeight='bold'>Sign In</Text>
				<Button w='' onClick={(()=>{router.push('/')})} color='#fff' borderRadius='5px' bg='#F092DD'>Log Out</Button>
				{showmenubar ? 
						<CloseIcon onClick={(()=>{setshowmenubar(!showmenubar)})}/>
							:
						<MenuOpenIcon onClick={(()=>{setshowmenubar(!showmenubar)})}/> 
					}
					{showmenubar ? 
						<MenuSideBar router={router} setshowmenubar={setshowmenubar}/>
							:
						null 
					}
			</Flex>
		</Flex>
	)
}

const MenuSideBar=({setshowmenubar,router})=>{	
	return(
			<Flex direction='column' gap='4' p='2' w='60vw' h='90vh' bg='#392F5a' position='absolute' top='60px' right='0px' zIndex='2' >
				{navItems.map((content)=>{
					return (
						<Flex _hover={{transform:"scale(1.02)",transition:'ease-out 1s all',boxShadow:'dark-lg'}} key={content.id} color='#fff' align='center' p='2' bg='#F092DD' boxShadow='xl' borderRadius='5px' fontWeight='bold' onClick={(()=>{setshowmenubar(false);router.push(`/dashboard/${content.link}`)})}>
							{content.icon}
							<Text fontSize='20px'  color='#000' p='1.5' mb='0' cursor='pointer' >{content.name}</Text>
						</Flex>
					)
				})}			
			</Flex>
		)
}

const navItems=[
	{
		name:'Dashboard',
		link:'1',
		icon:<WidgetsIcon/>,
	},
	{
		name:'My Network',
		link:'mynetwork',
		icon:<HubIcon/>,
	},
	{
		name:'Profile',
		link:'profile',
		icon:<ManageAccountsIcon/>,
	},
	{
		name:'Settings',
		link:'settings',
		icon:<SettingsIcon/>,
	},
	{
		name:'Notifications',
		link:'notifications',
		icon:<NotificationsIcon/>,
	},
]