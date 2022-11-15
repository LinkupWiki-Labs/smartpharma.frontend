import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Flex,
    Center,
    Textarea,
    Input,
    Select,
    InputGroup,Heading,
    Stack,
    useToast,Checkbox, CheckboxGroup
  } from '@chakra-ui/react';
import { useEffect,useState } from 'react';
import axios from 'axios';

function NewPost({isnewpostModalvisible,setisnewpostModalvisible}){
    const { isOpen, onOpen, onClose } = useDisclosure();

    const HandleModalOpen=()=>{
      if(isnewpostModalvisible !== true){
      }else{
        onOpen();
        setisnewpostModalvisible(false)
      }
    }

    useEffect(()=>{
      HandleModalOpen();
    },[isnewpostModalvisible])

    const [body,setBody]=useState('')
	const [name,setname]=useState('');
	const [request,setrequest]=useState('');
	const [location,setlocation]=useState(false);
	const [expdate,setexpdate]=useState('');
	const [locationposition,setLocationPosition]=useState()

	const product = {
		name:name,
		request:request,
		expdate:expdate,
		location:locationposition
	}

	useEffect(()=>{
		getPropertyPosition()
	},[])
	const getPropertyPosition=()=>{
		if("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition(position=>{
				const{latitude,longitude}=position.coords
					setLocationPosition({latitude,longitude})
					console.log(locationposition)
			})
		}
	}

	const handleAddNewProduct=async()=>{
		if (locationposition === undefined)
		    return alert('Allow window to access location first.');

    await axios.post('http://localhost:5000/api/addproduct',{product}).then((res)=>{console.log(res.status)}).catch((err)=>{console.log(err)})
		console.log(product);
	}

    return (
            <>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>
                  <Text>Add new Post</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={2}>
                    <Flex direction='column'>
                      <Text>Name of Drug</Text>
                      <Input type='text' placeholder='Name of Drug' variant='filled' onChange={((e)=>{setname(e.target.value)})}/>
                    </Flex>
                    <Flex direction='column'>
                      <Text>Type of Post:</Text>
                      <Select onChange={((e)=>{setrequest(e.target.value)})}>
                        <option>Request Drugs</option>
                        <option>Share Drugs</option>
                      </Select>
                    </Flex>
                    <Flex direction='column'>
                      <Text>Expiry Date</Text>
                      <Input type='date' placeholder='Date' variant='filled' onChange={((e)=>{setexpdate(e.target.value)})}/>
                    </Flex>
                    <Flex gap='2'>
	                   <Checkbox onClick={(()=>{setlocation(!location)})} type='checkbox' placeholder='Location' variant='filled'/>
						<Text>Allow Location to list a new product</Text>
                    </Flex>
                    <Button bg='#F092DD' borderRadius='0' color='#fff' onClick={handleAddNewProduct}>Add new Post</Button>
                  </Stack>
                </ModalBody>
                </ModalContent>
              </Modal>
            </>
      )
}   

export default NewPost;

