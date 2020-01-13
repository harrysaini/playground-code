import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            span: 0
        }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
        
    }

    setSpans = (event) => {
        const { clientHeight } = this.imageRef.current;
        this.setState({
            span: Math.ceil(clientHeight/10)  
        })
    }

    render() {
        const { description, urls } = this.props.image;
        const { span } = this.state;

        return (
            <div style={{gridRowEnd: `span ${span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    };
}

export default ImageCard;