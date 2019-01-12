import React, { PureComponent } from 'react'
import './feature.css'
import { Grid, Image, Segment, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class feature extends PureComponent {

    render() {

        return (
            
            <Grid columns={4} doubling={true} stackable>
                {this.props.data !== undefined ? this.props.data.map(data => {
                    return <Grid.Column key={data.id}>
                        <div className='feature_content'>
                            <Link to={'/playlist/' + data.id}>
                                <Segment className='feature_box'>
                                    <Image className='category_img' src={data.images[0].url}></Image>
                                    <div className='title_box'>
                                        <h3 className="category_title">{data.title}</h3>
                                    </div>
                                </Segment>
                            </Link>
                        </div>
                    </Grid.Column>
                }) : null}

            </Grid>

        )
    }

}


export default feature