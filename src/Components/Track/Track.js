import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack() {
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.onRemove(this.props.track);
    }
    renderAction() {
        return (this.props.isRemoval === true ? '-' : '+' );
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} ---- {this.props.track.album}</p>
                </div>
                <button className="Track-action" onClick={(this.props.isRemoval === true) ? this.removeTrack: this.addTrack }>{this.renderAction()}</button>
            </div>
        );
    }
};