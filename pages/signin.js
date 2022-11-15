import React,{useState} from 'react'
import {Flex,Center,Text,Button,Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import {Room,Visibility,VisibilityOff} from '@mui/icons-material'
import {useRouter} from 'next/router'
import axios from 'axios'

export default function ClientSignUp(){
	const [show, setShow] = useState(false);
  	const handleClick = () => setShow(!show);
  	const router = useRouter();

  	const [password,setpassword]=useState('');
  	const [username,setUsername]=useState('');
  	let route = '';

  	const user = {
  		name:username,
  		password_hash:password,
  	}
  	const handleSignIn=async()=>{
  		console.log(user)
  		await axios.post('http://localhost:5000/api/login',{user}).then((res)=>{
  			if (res.data.status === 401)
  				return alert('wrong credentials try again.')
  			router.push(`dashboard/${res.data.id}`)
  		})
  		// if(password === 'client' && username === 'client')
  		// 	route = 'dashboard/1';
  		// //router.push(`/${route}`)
  	}
	return(
		<Flex direction='column'>
			<Header/>
			<Flex h='100vh' className={styles.SigninBody}>
				<Flex className={styles.authSection} gap='2' p='8'>
					<Text w='40vw'  fontSize='4rem' color='#fff' >Welcome Back!</Text>
					<Text color='#fff'>Dont Have an Account?</Text>
					<Text mt='-2' onClick={(()=>{router.push('/signup')})} textDecoration='3px solid #fff underline' cursor='pointer'  fontSize='22px' color="#000" fontWeight='bold'>Sign Up now.</Text>
				</Flex>
				<Flex className={styles.authForm} gap='2' direction='column'>
					<Text fontSize='2.5rem' ><span style={{borderBottom:"4px solid #f092dd",borderRadius:"3px"}}>Sign</span> In</Text>
					<Text color='grey'>Welcome back, Please sign in to your account.</Text>
					<Flex direction='column' gap='2'>
						<Text fontWeight='bold'>Username</Text>
						<Input type='text' placeholder='Username' variant='filled' onChange={((e)=>{setUsername(e.target.value)})}/>
					</Flex>
					<Text fontWeight='bold'>Password</Text>
					<InputGroup size='md'>
						<Input
						pr='4.5rem'
						type={show ? 'text' : 'password'}
						placeholder='Enter password'
						variant='filled'
						onChange={((e)=>{setpassword(e.target.value)})}
						required
						/>
							<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' onClick={handleClick} bg='#fff'>
							{show ? <VisibilityOff/> : <Visibility/>}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Text cursor='pointer' fontSize='14px' color='red'> Forgot Password?</Text>
					<Button bg='#f092dd' color='#fff' onClick={handleSignIn}>Sign In</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

const passwords=[
	{
		acc:'client',
		password:'client'
	},
]

const Header=()=>{
	const router = useRouter();
	return(
		<Flex h='' p='2' bg='#fff' opacity='' w='100%' justify='space-between' align='center'>
			<Text color='#F092DD' fontSize='24px' fontWeight='bold'>LinkupPharma</Text>
			<Flex align='center' gap='2'>
				<Text onClick={(()=>{router.push('/signin')})} cursor='pointer' fontWeight='bold'>Sign In</Text>
				<Button w='' color='#fff' borderRadius='5px' bg='#F092DD' onClick={(()=>{router.push('/signup')})}>Sign Up</Button>
			</Flex>
		</Flex>
	)
}