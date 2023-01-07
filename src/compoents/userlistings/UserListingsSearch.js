import React from 'react'

function UserListingsSearch() {
    return (
        <div className='col-md-12 pt-2'>
            <div className='user_search_input'>
                <span>
                    <i className="fa fa-search"></i>
                </span>
                <input type='text' placeholder="Search" className='shadow' />
                <div className='ms-4 filter_div'>
                    <h6 className=''><i className="fa fa-filter" aria-hidden="true"></i> Filter</h6>
                </div>
            </div>
        </div>
    )
}
export default React.memo(UserListingsSearch)
