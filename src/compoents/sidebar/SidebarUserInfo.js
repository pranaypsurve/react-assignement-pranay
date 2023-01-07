import React from 'react'
import "./sidebaruserinfo.css"

function SidebarUserInfo({ userInfo, sideBarRef }) {
    const closeNav = () => {
        sideBarRef.current.style.width = "0";
    }
    return (
        <div id="mySidebar" ref={sideBarRef} className="sidebar">
            <a className="closebtn" onClick={closeNav}>&times;</a>
            <div className='row p-4'>
                {
                    userInfo && <> <div className='col-md-12 pb-4 border-bottom'>
                        <div className=''>
                            <h3>User Details</h3>
                        </div>
                        <div>
                            <div className='d-flex align-items-center'>
                                <img src={userInfo[0].image || null} className="rounded border" width="50px" height="50px" alt="" />
                                <div className='ps-4'>
                                    <h6 style={{ margin: "0" }}>{userInfo[0].firstName || null}</h6>
                                    <p className='m-0' style={{ fontSize: "10px" }}>
                                        User Id:{userInfo[0].id}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 pt-4 pb-4 border-bottom'>
                    <div className=''>
                        <h5 className='pb-2'><i className="fa fa-user-circle-o" aria-hidden="true"></i> Basic & account details</h5>
                    </div>
                    <div>
                        <b>{userInfo[0].firstName + ' ' + userInfo[0].lastName}</b><br />
                        <label>Full Name</label>
                    </div>
                    <div>
                        <b>{userInfo[0].bloodGroup}</b><br />
                        <label>Blood Group</label>
                    </div>
                </div>
                <div className='col-md-12 pt-4 pb-4 border-bottom'>
                    <div className=''>
                        <h5 className='pb-2'><i className="fa fa-user" aria-hidden="true"></i> User data</h5>
                    </div>
                    <div>
                        <b>{userInfo[0].age}</b><br />
                        <label>Age</label>
                    </div>
                </div></>
                }
                

            </div>
        </div>
    )
}

export default React.memo(SidebarUserInfo)