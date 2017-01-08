import React from 'react';
import {Col, Well, Image} from 'react-bootstrap';
const wellStyle={
    backgroundColor:"white"
}
const imgStyle={
    marginBottom: '10px',
	width: '100%'
}
export const Bios=({title, imgSrc, children})=>
<Col xs={6}>
    <Well style={wellStyle}>
        <Image style={imgStyle} src={imgSrc} responsive/>
        <p className="lead">{title}</p>
        <p>{children}</p>
    </Well>
</Col>