import React, {Component} from 'react';
import MenuItem from "../menu-item/menu-item";
import './directory.scss';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections : [
                {
                    title: 'hats',
                    backgroundImageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    backgroundImageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    backgroundImageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    backgroundImageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    backgroundImageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, title, backgroundImageUrl, size }) => (
                    <MenuItem key={id} title={title} backgroundImageUrl={backgroundImageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default Directory;
