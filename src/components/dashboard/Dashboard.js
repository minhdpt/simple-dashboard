import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        // console.log(this.props);
        const {allProjects} = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projectList={allProjects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allProjects: state.projectReducer.projects
    }
}
export default connect(mapStateToProps)(Dashboard);