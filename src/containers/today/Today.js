import React, { Component } from 'react'
import Box from '../../components/box/box'
import { getFeaturedPlaylists, handleInitState } from '../../redux/box.redux'
import { connect } from 'react-redux'
import './today.scss'
import RefreshButton from '../../components/RefreshButton'

class Today extends Component {

	handleRefresh() {
		this.props.handleInitState()
		this.handleGetTodayData()
	}

	handleGetTodayData() {
		const url = 'https://api.kkbox.com/v1.1/featured-playlists?territory=' + this.props.setting.language
		this.props.box.box_data.hasOwnProperty('data') ? null : this.props.getFeaturedPlaylists(url)
	}

	componentDidMount() {
		this.handleGetTodayData()
	}

	render() {
		const box = this.props.box
		const box_data = this.props.box.box_data
		const isError = box.msg === '伺服器錯誤'
		return (
			<div className='container_header'>
				<Box msg={box.msg} data={box_data.data} title={box.title} bool={box.bool} title={box.title}/>	
				<RefreshButton onClick={() => this.handleRefresh()} className='refresh_button' show={isError} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { box: state.box, setting: state.setting }
}

const actionCreate = { getFeaturedPlaylists, handleInitState }
Today = connect(mapStateToProps, actionCreate)(Today)

export default Today
