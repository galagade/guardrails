import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardBody,
    Table,
    UncontrolledModal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from './../../../components';

const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(-40vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>

                <div className="modal-body">
                {props.report &&(
                  <h3>{props.report.repositoryName}</h3>
                )}
                {props.report &&(
                  props.report.findings.map((finding) =>(

                    <Row key={finding.ruleId} className="d-flex mt-3">
                        <Col lg={ 4 } className="d-flex mb-2 bold">
                          Ruleid
                        </Col>
                        <Col lg={ 8 } className="d-flex mb-2">
                          {finding.ruleId}
                        </Col>
                        <Col lg={ 4 } className="d-flex mb-2 bold">
                          Description
                        </Col>
                        <Col lg={ 8 } className="d-flex mb-2">
                          <p className="text-left">{finding.metadata.description}</p>
                        </Col>
                        <Col lg={ 4 } className="d-flex mb-2 bold">
                          Severity
                        </Col>
                        <Col lg={ 8 } className="d-flex mb-2">
                            {finding.metadata.severity}
                        </Col>
                        <Col lg={ 4 } className="d-flex mb-2 bold">
                          Path name and line of code
                        </Col>
                        <Col lg={ 8 } className="d-flex mb-2">
                          <p className="block" >{finding.location.path} - </p>
                          <p className="ml-1" >{finding.location.positions.begin.line}</p>
                        </Col>
                    </Row>

                  ))

                )}


                    <button className="btn btn-primary  ml-10" onClick={props.close}>Close</button>
                </div>

            </div>
        </div>
    )
}

export default modal;
