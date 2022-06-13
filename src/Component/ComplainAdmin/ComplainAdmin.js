import React from 'react';
import './ComplainAdmin.css';

class Admin extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <div class="container py-5 px-4">

        <div class="row">
        
          <div class="col-5 px-0">
            <div class="bg-black">


              <div class="messages-box">
                <div class="list-group rounded-0">

                  <div class="chat">
                    <div class="media d-flex">
                        <img src="/images/profile.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="user">yujin_ahn</h6>
                          <small class="date small font-weight-bold ml-5">12 June</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Hello Admin, I Need Your Help</p>
                      </div>
                    </div>
                  </div>

                  <div class="chat mt-3">
                    <div class="media d-flex">
                        <img src="/images/winter.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="user">winterrr__</h6>
                          <small class="date small font-weight-bold ml-5">4 June</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Hello Admin, This Problem Product To Me</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
         
          <div class="col-7 px-0">
            <div class="px-4 py-5 chat-box bg-black">
                     
              <div class="chat-bubble w-50 mb-1 d-flex">
                <img src="/images/profile.png" alt="user" width="10%" class="rounded-circle" />
              <div class="media-body ml-5">
                <div class="bg-dark rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-muted">Hello Admin, I Need Your Help</p>
                </div>
              </div>
              </div>
            </div>

            <form action="#" class="bg-dark">
              <div class="input-group">
                <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control border-0 py-1 bg-dark" />
                <div class="input-group-append">
                  <button id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      </div>
     
      
)
};
}

export default Admin;