import React from 'react'

function UserLists({ listUsers, openDeatilSidebar }) {
    return (
        <div className='col-md-12 pt-4 pb-2'>
            <div className='col-md-12'>
                <div className='row bg-secondary p-2 rounded user_listing_row_header mb-2'>
                    <div className='col-md-3'>
                        <h5>Name <i className="fa fa-arrows-v" aria-hidden="true"></i></h5>
                    </div>
                    <div className='col-md-3'>
                        <h5>User id <i className="fa fa-arrows-v" aria-hidden="true"></i></h5>
                    </div>
                    <div className='col-md-3'>
                        <h5>Blood Group <i className="fa fa-arrows-v" aria-hidden="true"></i></h5>
                    </div>
                    <div className='col-md-3'>
                        <h5>Age <i className="fa fa-arrows-v" aria-hidden="true"></i></h5>
                    </div>
                </div>
                {
                    listUsers && listUsers.map((val, index) => {
                        if (index < 6)
                            return <div key={index} className='col-md-12 mb-2 bg-white p-2 rounded text_center_onsmallscreen' onClick={(e) => { openDeatilSidebar(e, val.id) }} >
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={val.image} className="rounded border" width="50px" height="50px" alt="Cinque Terre" />
                                            <h5 className='ps-4'>{val.firstName}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <h5>{val.id}</h5>
                                    </div>
                                    <div className='col-md-3'>
                                        <h5>{val.bloodGroup}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        <h5>{val.age}</h5>
                                    </div>
                                    <div className='col-md-1 text-center'>
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                    })
                }
                <div className='col-md-12'>
                    <h6 className='text-secondary'>Showing 1 - 6</h6>
                </div>
            </div>
        </div>
    )
}
export default React.memo(UserLists)