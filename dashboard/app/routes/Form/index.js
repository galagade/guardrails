import React from 'react';
import { Link } from 'react-router-dom';
import  {addReport} from '../../services/api.service'
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
  InputGroup,
  InputGroupAddon,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from './../../components';
export default class ScanResultForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repositoryName: '',
      findings: '',
      status:'',
      queuedAt:'',
      scanningAt:'',
      finishedAt:'',
      error_repositoryName:false,
      error_repositoryName_message:'',
      error_queuedAt:false,
      error_queuedAt_message:'',
      error_scanningAt:false,
      error_scanningAt_message:'',
      error_finishedAt:false,
      error_finishedAt_message:'',
      error_findings:false,
      error_findings_message:'',
      error_status:false,
      error_status_message:'',
      success:false,
      checked:false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(e) {
    let fieldname = e.target.getAttribute('name')

    if(fieldname == "repositoryName"){
      this.setState({
        repositoryName: e.target.value
      });
    }
    if(fieldname == "status"){
      this.setState({
        status: e.target.value
      });
    }
    if(fieldname == "findings"){
      this.setState({
        findings: e.target.value
      });
    }
    if(fieldname == "queuedAt"){
      this.setState({
        queuedAt: e.target.value
      });
    }
    if(fieldname == "finishedAt"){
      this.setState({
        finishedAt: e.target.value
      });
    }
    if(fieldname == "scanningAt"){
      this.setState({
        scanningAt: e.target.value
      });
    }

  }

  clearErrors(){
    this.setState({
      error_repositoryName:false,
      error_queuedAt:false,
      error_scanningAt:false,
      error_finishedAt:false,
      error_findings:false,
      error_status:false,
    })
  }
  clearInputs(){
    this.setState({
      repositoryName: '',
      findings: '',
      status:'',
      queuedAt:'',
      scanningAt:'',
      finishedAt:'',
    })
  }
  checkErrors(data){
      if(typeof data.errors.repositoryName !="undefined"){
        this.setState({
            error_repositoryName: true,
           error_repositoryName_message: data.errors.repositoryName.msg,
        })
      }
      if(typeof data.errors.status !="undefined"){

        this.setState({
          error_status: true,
           error_status_message: data.errors.status.msg,
        })
      }
      if(typeof data.errors.findings !="undefined"){
        this.setState({
            error_findings: true,
           error_findings_message: data.errors.findings.msg,
        })
      }
      if(typeof data.errors.queuedAt !="undefined"){
        this.setState({
            error_queuedAt: true,
           error_queuedAt_message: data.errors.queuedAt.msg,
        })
      }
      if(typeof data.errors.scanningAt !="undefined"){
        this.setState({
            error_scanningAt: true,
           error_scanningAt_message: data.errors.scanningAt.msg,
        })
      }
      if(typeof data.errors.finishedAt !="undefined"){
        this.setState({
            error_finishedAt: true,
           error_finishedAt_message: data.errors.finishedAt.msg,
        })
      }
    }

    onSubmit(e) {

     e.preventDefault();
     this.clearErrors()
     const obj = {
       repositoryName: this.state.repositoryName,
       findings: this.state.findings,
       status:this.state.status,
       queuedAt:this.state.queuedAt,
       scanningAt:this.state.scanningAt,
       finishedAt:this.state.finishedAt,
     };
     addReport(obj)
         .then(res => {
           this.clearInputs()
           this.setState({
             success:true,
           })
           setTimeout(()=>{
             this.props.history.push('/dashboard');
           },300)

     }).catch(err=>{
       console.log(err.response.data);
        this.checkErrors(err.response.data)
     });


   }
    render() {
      return (
        <React.Fragment>
        <Container>

            <Row>
                <Col lg={ 12 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                          Add New Security Scan Result

                        </CardTitle>
        <Form onSubmit={this.onSubmit}>
            { /* START Input */}
            <FormGroup row>
                <Label for="input-1" sm={4}>
                    Repository Name
                </Label>
                <Col sm={8}>
                    <Input
                        type="text"
                        name="repositoryName"
                        id="input-1"
                        placeholder="Enter Repository Name..."
                        value={this.state.repositoryName}
                        onChange={this.onChangeValue }
                    />
                    {this.state.error_repositoryName &&(
                      <div className="invalid-feedback">{this.state.error_repositoryName_message}</div>
                    )}
                </Col>
            </FormGroup>
            { /* END Input */}


            { /* START Select */}
            <FormGroup row>
                <Label for="country-selector-1" sm={4}>
                    Status
                </Label>
                <Col sm={8}>
                    <CustomInput
                        type="select"
                        name="status"
                        id="country-selector-1"
                        value={this.state.status}
                        onChange={this.onChangeValue }
                    >
                        <option value="">Select Status...</option>
                        <option value="Queued">Queued</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Success">Success</option>
                        <option value="Failure">Failure</option>

                    </CustomInput>
                    {this.state.error_status &&(
                      <div className="invalid-feedback">{this.state.error_status_message}</div>
                    )}
                </Col>
            </FormGroup>
            { /* END Select */}
            { /* START Input */}
            <FormGroup row>
                <Label for="queuedAt-1" sm={4}>
                    QueuedAt
                </Label>
                <Col sm={8}>
                    <Input
                        type="text"
                        name="queuedAt"
                        id="queuedAt-1"
                        placeholder="QueuedAt timestamp..."
                        value={this.state.queuedAt}
                        onChange={this.onChangeValue }
                    />
                    {this.state.error_queuedAt &&(
                      <div className="invalid-feedback">{this.state.error_queuedAt_message}</div>
                    )}
                </Col>
            </FormGroup>
            { /* END Input */}
            { /* START Input */}
            <FormGroup row>
                <Label for="scanningAt-1" sm={4}>
                    ScanningAt
                </Label>
                <Col sm={8}>
                    <Input
                        type="text"
                        name="scanningAt"
                        id="scanningAt-1"
                        placeholder="ScanningAt timestamp..."
                        value={this.state.scanningAt}
                        onChange={this.onChangeValue }
                    />
                    {this.state.error_scanningAt &&(
                      <div className="invalid-feedback">{this.state.error_scanningAt_message}</div>
                    )}
                </Col>
            </FormGroup>
            { /* END Input */}
            { /* START Input */}
            <FormGroup row>
                <Label for="finishedAt-1" sm={4}>
                    FinishedAt
                </Label>
                <Col sm={8}>
                    <Input
                        type="text"
                        name="finishedAt"
                        id="finishedAt-1"
                        placeholder="FinishedAt timestamp..."
                        value={this.state.finishedAt}
                        onChange={this.onChangeValue }
                    />
                    {this.state.error_finishedAt &&(
                      <div className="invalid-feedback">{this.state.error_finishedAt_message}</div>
                    )}
                </Col>
            </FormGroup>
            { /* END Input */}
            { /* START Textarea */}
            <FormGroup row>
                <Label for="message-1" sm={4}>
                    Findings
                </Label>
                <Col sm={8}>
                    <Input
                        type="textarea"
                        name="findings"
                        id="message-1"
                        placeholder="Enter Your Json Findings..."
                        className="mb-2"
                        rows="5"
                        value={this.state.findings}
                        onChange={this.onChangeValue }
                    />
                    {this.state.error_findings &&(
                      <div className="invalid-feedback">{this.state.error_findings_message}</div>
                    )}


                </Col>
            </FormGroup>
              { /* END Textarea */}
            <FormGroup row>
                <Col sm={12}>
                  <Button color="primary">Save</Button>
                </Col>
            </FormGroup>

        </Form>
        </CardBody>
    </Card>
    </Col>
</Row>

</Container>
        </React.Fragment>
      )
    }
}
