import React, { Component } from 'react'
import { Search, Loader } from 'semantic-ui-react'
import { get_Playlist_category_Api } from '../../redux/playlist_category.redux'
import { get_Hotboard_Api } from '../../redux/hotBoard.redux'
import { get_Category_Api } from '../../redux/category.redux'
import { connect } from 'react-redux'
import './playlist_category.css'
import Feature from './feature/feature'
import HotBoard from './hotBoard/hotBoard'
import Category from './category/category'

class Playlist_category extends Component {
    componentDidMount() {
        const featureUrl = 'https://api.kkbox.com/v1.1/new-hits-playlists?territory=TW'
        const hotBoardUrl = 'https://api.kkbox.com/v1.1/charts?territory=TW'
        const categoryUrl = 'https://api.kkbox.com//v1.1/featured-playlist-categories?territory=TW'
        this.props.get_Playlist_category_Api(featureUrl)
        this.props.get_Hotboard_Api(hotBoardUrl)
        this.props.get_Category_Api(categoryUrl)
    }
    render() {
        console.log(this.props);
        return (
            <div className="header">
                 
                <h1>歌單</h1>
                <Search open={false} style={{ display: 'block' }}></Search>
                {this.props.data.playlist_category.bool != false ? <Loader active={true} inline='centered' size='huge' /> : null}
                {this.props.data.playlist_category.bool && this.props.data.playlist_category.hot_board == true ? null :
                    <div style={this.props.data.playlist_category.bool && this.props.data.playlist_category.hot_board == true ? { display: 'none' } : { display: 'block' }}>
                        <h2 className='subheader'>最新主打</h2>
                        <Feature data={this.props.data.playlist_category.playlist_category_data.data} />
                        <h2 className='subheader'>排行榜</h2>
                        <HotBoard data={this.props.data.hot_board.hot_board_data.data} />
                        <h2 className='subheader'>歌單分類</h2>
                        <Category data={this.props.data.category.category_data.data} />
                    </div>}


            </div>
        )
    }
}
const mapStatetoProps = state => { return { data: state } }
const actionCreate = { get_Playlist_category_Api, get_Hotboard_Api, get_Category_Api }
Playlist_category = connect(mapStatetoProps, actionCreate)(Playlist_category)

export default Playlist_category