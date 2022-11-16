import React,{useState} from 'react'
import {Flex,Center,Text,Button,Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import {Room,Visibility,VisibilityOff} from '@mui/icons-material'
import axios from 'axios';
import {useRouter} from 'next/router';

export default function ClientSignUp(){
	const [show, setShow] = useState(false);
  	const handleClick = () => setShow(!show);

  	const [username,setusername]=useState('');
  	const [email,setEmail]=useState('');
  	const [password,setpassword]=useState('');

  	const user = {
  		name:username,
  		email:email,
  		password_hash:password
  	}

  	const handleSignUp=async()=>{
  		await axios.post('http://localhost:5000/api/register',{user}).then((res)=>{
  			if (res.data.status === 401)
  				return alert('could not create account, check your credentials.')
  			router.push(`dashboard/${res.data.id}`)
  		})
  	}
	return(
		<Flex h='100vh' className={styles.SignupBody} direction='column'>
			<Header/>
			<Flex className={styles.authSection} gap='2' p='8'>
				<Text w='40vw'  fontSize='2.5rem' color='#fff' fontWeight='bold'>Welcome to LinkupPharma</Text>
				<Text w='40vw' color='#fff' fontWeight='' fontSize='1.3rem'>Welcome to the pharmaceutical sharing and exchange network.Reduce wastage and ensure pharmaceuticals are available are reduced costs.</Text>
			</Flex>
			<Flex className={styles.authForm} gap='2' direction='column'>
				<Text w='100%' textAlign='center' fontSize='2rem'><span style={{borderBottom:"4px solid #f092dd",borderRadius:"3px"}}>Sign</span> Up</Text>
				<Flex direction='column' gap='2'>
					<Text>User-Name</Text>
					<Input type='text' placeholder='User-Name' variant='filled'/>
				</Flex>
				<Flex direction='column' gap='2'>
					<Text>Email</Text>
					<Input type='email' placeholder='Email' variant='filled'/>
				</Flex>
				<Text>Password</Text>
				<InputGroup size='md'>
					
					<Input
					pr='4.5rem'
					type={show ? 'text' : 'password'}
					placeholder='Enter password'
					variant='filled'
					required
					/>
						<InputRightElement width='4.5rem'>
						<Button h='1.75rem' size='sm' onClick={handleClick} bg='#fff'>
						{show ? <VisibilityOff/> : <Visibility/>}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Text fontSize={'11px'}>By Signing up you agree to our <a href="" target="_blank" rel="noopener noreferrer" style={{color:'#f092dd'}}> terms&conditions</a > and our <a href="" target="_blank" rel="noopener noreferrer" style={{color:'#f092dd'}}>privacy policy</a>.</Text>
				<Button bg='#392f5a' color='#fff' onClick={handleSignUp}>Create Account</Button>
			</Flex>
		</Flex>
	)
}

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