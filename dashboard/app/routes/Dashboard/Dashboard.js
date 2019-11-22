import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardBody,
    Table
} from './../../components';

import { HeaderMain } from "../components/HeaderMain";


import {
    TableRow
} from "./components/TableRow";
import
    Modal
 from "./components/modal";

export default class Dashboard extends React.Component{

  constructor(props){
    super(props);
    this.state = {show:false, report:false, report:false};
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal(report) {
       this.setState({
         report:report
       },this.showModal)

   }
   showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false});
    };

   render() {
     return (
         <Container>

                 <Row>
                     <Col lg={ 12 }>
                         <Card className="mb-3">
                             <CardBody>
                                 <CardTitle tag="h6">
                                     Security Scan Result

                                 </CardTitle>
                                 <p className="mb-0">

                                   <Button color="primary" className="pull-right" tag={ Link } to="/dashboard/form">Add New Scan Result</Button>
                                 </p>
                             </CardBody>
                             { /* START Table */}
                             <Table className="mb-0" hover responsive>
                                 <thead>
                                     <tr>
                                         <th className="bt-0">Repository Name</th>
                                         <th className="bt-0">Status</th>
                                         <th className="bt-0">Findings</th>
                                         <th className=" bt-0">
                                             QueuedAt
                                         </th>
                                         <th className=" bt-0">
                                             ScanningAt
                                         </th>
                                         <th className=" bt-0">
                                             FinishedAt
                                         </th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     <TableRow handleModal={this.handleModal}/>

                                 </tbody>
                             </Table>
                             { /* END Table */}


                         </Card>
                     </Col>
                 </Row>
                 <Modal
                  className="modal"
                  show={this.state.show}
                  report={this.state.report}
                  close={this.hideModal}>

                </Modal>
             </Container>
     );

  }

}
