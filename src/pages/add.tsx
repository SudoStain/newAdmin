import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Container,
  Card,
  CardSubtitle,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert
} from 'reactstrap';
import { addData } from '../API'
import { useRouter } from 'next/router'

const Add = () => {
  const [addItem, setAddItem] = useState<IItem>({
    firstname:'', lastname: '', email:'', address:'', longitude: 0, latitude: 0, occupation: 'engineer'
  })
  const [success, setSuccess] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const router = useRouter()

  useEffect(() => {
    setAddItem({
      firstname:'', lastname: '', email:'', address:'', longitude: 0, latitude: 0, occupation: 'engineer'
    })
  }, [])
  
  const onAdd = () => {
    if (addItem.firstname && addItem.lastname && addItem.email && addItem.address ) {
      addData(addItem)
      .then( data => {
          console.log(data)
          setSuccess(true)
      })
      .catch( err => {
        console.log(err)
      })
    } else {
      setError(true)
    }

    console.log("handleAdd State: ")
  }

  const handleChange = (e: any) => {
    setAddItem({...addItem, [e.target.name]: e.target.value})
  }

  const onCancel = () => {
    router.push('/')
  }

  const onMain = () => {
    setSuccess(false)
    router.push('/')
  }

  const onAgain = () => {
    setSuccess(false)
    setAddItem({
      firstname:'', lastname: '', email:'', address:'', longitude: 0, latitude: 0, occupation: 'engineer'
    })
  }

  return (
    <Container style={{ marginTop: 100, width: '60%' }}>
      <Card
        color="primary"
        inverse
        body
        outline
      >
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            <Alert
              color="info"
              isOpen={error}
              style={{width: '100%', margin:'auto'}}
            >
              Failed! Please fill the form!
              <Button close style={{float: 'right'}} onClick={()=>setError(false)} />
            </Alert>
            <Form className="form">
              <FormGroup row className="row">
                <Label
                  for="firstname"
                  sm={4}
                >
                  First Name :
                </Label>
                <Col sm={8}>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                    value={addItem.firstname}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  for="lastname"
                  sm={4}
                >
                  Last Name :
                </Label>
                <Col sm={8}>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    type="text"
                    value={addItem.lastname}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  for="email"
                  sm={4}
                >
                  Email :
                </Label>
                <Col sm={8}>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={addItem.email}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  for="address"
                  sm={4}
                >
                  Address :
                </Label>
                <Col sm={8}>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Address"
                    type="text"
                    value={addItem.address}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  for="latitude"
                  sm={4}
                >
                  Latitude :
                </Label>
                <Col sm={8}>
                  <Input
                    id="latitude"
                    name="latitude"
                    placeholder="Latitude"
                    type="number"
                    value={addItem.latitude}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  for="longitude"
                  sm={4}
                >
                  Longitude :
                </Label>
                <Col sm={8}>
                  <Input
                    id="longitude"
                    name="longitude"
                    placeholder="Longitude"
                    type="number"
                    value={addItem.longitude}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  for="occupation"
                  sm={4}
                >
                  Occupation
                </Label>
                <Col sm={8}>
                  <Input
                    id="occupation"
                    name="occupation"
                    type="select"
                    value={addItem.occupation}
                    onChange={handleChange}
                  >
                    <option value="engineer">Engineer</option>
                    <option value="designer">Designer</option>
                    <option value="programmer">Programmer</option>
                    <option value="doctor">Doctor</option>
                    <option value="teacher">Teacher</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={4}>
                  <Button
                    color="primary"
                    outline
                    onClick={() => onAdd()}
                    style={{margin: '10px'}}
                  >
                    Add Data
                  </Button>
                </Col>
                <Col sm={4}>
                  <Button
                    color="info"
                    outline
                    onClick={() => onCancel()}
                    style={{margin: '10px'}}
                  >
                    Cancel
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </CardSubtitle>
        </CardBody>
      </Card>
      <Modal
        isOpen={success}
      >
        <ModalBody>
          Data Add Success!
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={()=>onAgain()}
          >
            Add Another Data
          </Button>
          {' '}
          <Button onClick={() =>onMain()}>
            Go to Main
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default Add