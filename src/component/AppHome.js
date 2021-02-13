import React, { Component } from 'react';
import Modal from "react-modal";


Modal.setAppElement("#root")

class AppHome extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  hideModal = () => {
    this.setState({ modalIsOpen: false });
  };
    render() {
        return (
            <div>
              
            <Modal 
            isOpen={this.state.modalIsOpen} 
            shouldCloseOnOverlayClick={false} 
            onRequestClose={e => { this.hideModal(); }}
            
            style={
              {
                overlay: {
                  backgroundColor: "gray"
                },
                content: {
                  color: "khaki",
                  backgroundColor: 'white'
                }
              }
            }
            >
            
              <h1>The Modal Heading</h1>
              <p>The Modal Paragraph</p>

              <button className="btn btn-success" onClick={e => { this.hideModal(); }}>Close Modal</button>
            </Modal>
                <div className="main-panel">
                    <div className="content-wrapper">
                      
                      
                      
                      
                      <div style={{ textAlign: "center"}} >
                        <div className="col-md-12 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body dashboard-tabs p-0">
                            
                              <br />
                            <div>
                                    
                          <br />
                                      <div className="d-flex flex-column justify-content-around">
                                      <i className="far fa-gem"></i>
                                        <b className="mb-1 text-muted">To Fund Wallet Click </b>
                                        <div className="dropdown">
                                          <a  href="fund_your_wallet.php"></a>
                                          <button className="btn btn-success" onClick={e => { this.showModal(); }}>HERE</button>
                                        </div>
                                      </div>
                            </div>
                            <br />
                              <div>
                                      
                          <br />
                                      <div className="d-flex flex-column justify-content-around">
                                      <i className="far fa-gem"></i>
                                        <b className="mb-1 text-muted">To Buy Data Click </b>
                                        <div className="dropdown">
                                        <button className="btn btn-success" onClick={e => { this.showModal(); }}>HERE</button>
                                        </div>
                                      </div>
                                    </div>
                            <br />
                            <div>
                                      
                          <br />
                                      <div className="d-flex flex-column justify-content-around">
                                      <i className="far fa-gem"></i>
                                        <b className="mb-1 text-muted">To Buy Airtme Click </b>
                                        <div className="dropdown">
                                        <button className="btn btn-success" onClick={e => { this.showModal(); }}>HERE</button>
                                        </div>
                                      </div>
                            </div>
                            <br />

                            <div>
                                      
                          <br />
                                      <div className="d-flex flex-column justify-content-around">
                                      <i className="far fa-gem"></i>
                                        <b className="mb-1 text-muted">for Cable SubScription Click</b>
                                        <div className="dropdown">
                                        <button className="btn btn-success" onClick={e => { this.showModal(); }}>HERE</button>
                                        </div>
                                      </div>
                            </div>
                            <br />
                            
                            <div>
                                      
                          <br />
                                      <div className="d-flex flex-column justify-content-around">
                                      <i className="far fa-gem"></i>
                                        <b className="mb-1 text-muted">To Convert Airtime To Cash Click </b>
                                        <div className="dropdown">
                                        <button className="btn btn-success" onClick={e => { this.showModal(); }}>HERE</button>
                                        </div>
                                      </div>
                            </div>
                          
                            
                            
                            <br />
                          
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            
                      
                    {/* Footer */}
                    <footer className="footer">
                      <div className="d-sm-flex justify-content-center justify-content-sm-between">
                        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021. All rights reserved.</span>
                        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Developer <a href="tel:+2347032623101">Sagir Garba</a> <i className="mdi mdi-heart text-danger"></i></span>
                      </div>
                    </footer>
                    
                  </div>
                </div>


            
            </div>
        )
    }
}


export default AppHome;