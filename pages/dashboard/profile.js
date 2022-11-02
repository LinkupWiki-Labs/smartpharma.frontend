import React,{useState} from 'react';
import {useRouter} from 'next/router';
import {Flex,Text,Button,Input} from '@chakra-ui/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header from '../../components/Header.js'
function Profile(){
	const [active,setActive]=useState(false);
	const [currentValue,setcurrentValue]=useState('');
	const router = useRouter()
	const [account,setAccount]=useState('user')
	return(
		<Flex p='' direction='column' gap='2'>
			<Header/>
			<Text textDecoration='3px solid #F092DD underline' color='#000' fontWeight='bold' fontSize='28px' m='2'>My Profile</Text>
			<Flex p='2' align='center' justify='space-around'>
				<AccountCircleIcon style={{fontSize:'200px'}}/>
				<Flex p='1' direction='column' w='60%' gap='2'>
					<Text p='2' bg='#eee'>John Doe</Text>
					<Text p='2' bg='#eee'>Johndoe@gmail.com</Text>
					<Text p='2' bg='#eee'>0759233322</Text>
					<Text p='2' bg='#eee'>New Hope Chemist</Text>
					<Text p='2' bg='#eee'>Location:Juja,KIambu</Text>
				</Flex>
			</Flex>
			<Button m='2' color='#fff' bg='#F092DD'>Edit Profile</Button>
			<Flex p='2' direction='column' gap='2'>
				<Flex p='2' justify='space-between' borderBottom='1px solid #000' align='center' bg='#eee'>
					<Text fontSize='20px' fontWeight='bold'>Address</Text>
					{active && currentValue === 'address' ? 
						<KeyboardArrowUpIcon onClick={(()=>{setcurrentValue('');setActive(!active)})}/>
						:
						<KeyboardArrowDownIcon onClick={(()=>{setcurrentValue('address');setActive(!active)})}/>
					}
				</Flex>
				{active && currentValue === 'address' ? 
					<>
					<Flex bg='#eee' p='2' direction='column' gap='3'>
						<Text fontWeight='bold' fontSize='18px'>Juja,Jkuat</Text>
						<Flex gap='2'>
							<Text color='#F092DD' fontSize='14px'>Edit</Text>
							<Text color='red' fontSize='14px'>Delete</Text>
						</Flex>
					</Flex>
					<Button bg='#fff' border='1px solid #000'>Add New Address</Button>
					</>
					:
					null
				}
			</Flex>
			<Flex p='2' direction='column' gap='2'>
				<Flex justify='space-between' borderBottom='1px solid #000' align='center' bg='#eee' p='1'>
					<Text fontSize='20px' fontWeight='bold'>Security</Text>
					{active && currentValue === 'security' ? 
						<KeyboardArrowUpIcon onClick={(()=>{setcurrentValue('');setActive(!active)})}/>
						:
						<KeyboardArrowDownIcon onClick={(()=>{setcurrentValue('security');setActive(!active)})}/>
					}
				</Flex>
				{active && currentValue === 'security' ? 
					<>
					<Flex gap='2' direction='column'>
						<Text fontWeight='bold'>Password</Text>
						<Input type='password' value='sammydennis'/>
						<Button bg='#ff' border='1px solid #000'>Change Password</Button>
					</Flex>
					</>
					:
					null
				}
				</Flex>
			
			<Flex p='2' direction='column' gap='2'>
				<Flex justify='space-between' borderBottom='1px solid #000' align='center' bg='#eee' p='1' color='red'>
					<Text fontSize='20px' color='red' fontWeight='bold'>Delete Account</Text>
					{active && currentValue === 'delete' ? 
						<KeyboardArrowUpIcon onClick={(()=>{setcurrentValue('');setActive(!active)})}/>
						:
						<KeyboardArrowDownIcon onClick={(()=>{setcurrentValue('delete');setActive(!active)})}/>
					}
				</Flex>
				{active && currentValue === 'delete' ? 
					<>
					<Text>By deleting your account , all your information, products and activities in our platform will be erased as your account will be permamnetly deleted and will not be restored.</Text>
					<Button bg='#ff' border='1px solid red'>Delete Account</Button>
					</>
					:
					null
				}
				
			</Flex>
		</Flex>
	)
}

export default Profile;
