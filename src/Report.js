import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Report extends React.Component {
  getHeader = () => {
    return (
      <>
        <h5 className="col-xs-12">LABORATORY INVESTIGATION REPORT</h5>
        <div className="row">
          <div className="col-5">
            <span>Lab Test No : 1</span>
            <span>&nbsp;&nbsp;UHID : P10052322</span>
          </div>
          <div className="col-7 align-end">
            Collection Date / Time : 30-07-2020 / 02:36:48 PM
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <span>Patient Name : K.Selva Kumar</span>
          </div>
          <div className="col-5 align-end">
            <span>Age : 26 Y </span>
            <span>&nbsp;&nbsp;Sex : Female</span>
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            <span>
              Ref.by : <span className="upper">Dr.Selva Kumar PHD</span>
            </span>
          </div>
          <div className="col-7 align-end">
            <span>Reporting Date / Time : 30-07-2020 / 02:36:48 PM</span>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <page data-size="A4">
        <section className="main container">
          {this.getHeader()}
          <div className="hr" />

          <div className="row contents">
            <div className="col-6">Name of the Test</div>
            <div className="col-2">Results</div>
            <div className="col-2">Units</div>
            <div className="col-2">Reference</div>
          </div>
          <div className="hr" />

          <div className="row contents">
            <div className="col-6">RED BLOOD CELL COUNT</div>
            <div className="col-2">3</div>
            <div className="col-2">milli/cumm</div>
            <div className="col-2">4.0 - 5.5</div>
          </div>

          <div className="row contents">
            <div className="col-12">CBC ( COMPLETE BLOOD COUNT ) :</div>
            <div className="col-6">RED BLOOD CELL COUNT</div>
            <div className="col-2">
              <span className="red">POSITIVE</span>
            </div>
            <div className="col-2">Lakhs/cumm</div>
            <div className="col-2">Women : 12.0 - 15.0</div>
          </div>
        </section>
      </page>
    );
  }
}
