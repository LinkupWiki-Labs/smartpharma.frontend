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
    useToast,
  } from '@chakra-ui/react';
import { useEffect,useState } from 'react';

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
					<Input type='text' placeholder='Name of Drug' variant='filled'/>
				</Flex>
				<Flex direction='column'>
					<Text>Type of Post:</Text>
					<Select>
						<option>Request Drugs</option>
						<option>Sell Drugs</option>
					</Select>
				</Flex>
				<Flex direction='column'>
					<Text>Mobile</Text>
					<Input type='tel' placeholder='Mobile' variant='filled'/>
				</Flex>
                <Button bg='#F092DD' borderRadius='0' color='#fff'>Add new Post</Button>
			</Stack>
                        </ModalBody>
                    </ModalContent>
                    </Modal>
                </>
      )
}   

export default AddNewSalesPersonModal;

