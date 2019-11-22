import React from 'react';
import  {getReports} from '../../../services/api.service'
export class TableRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {reports: [], active_id:null, show:false};

  }
    componentDidMount(){
     this.getReports()
    }
   getReports(){

       getReports().then(response => {
          this.setState({ reports: response.data.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    render() {
      return (
        <React.Fragment>
        { this.state.reports.map((report) =>(
            <tr key={report.id} onClick={()=>{
              this.props.handleModal(report)
            }}>
                <td className="align-middle">
                    {report.repositoryName}

                </td>
                <td className="align-middle">
                      {report.status}
                </td>
                <td className="align-middle">
                    {report.findings.length}
                </td>
                <td className="align-middle">
                  {report.queuedAt}
                </td>
                <td className="align-middle">
                {report.scanningAt}
                </td>
                <td className="align-middle">
                  {report.finishedAt}
                </td>
            </tr>
          ))}

        </React.Fragment>
      )
    }
}
