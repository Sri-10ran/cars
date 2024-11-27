import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Work.css'; // Import the CSS file

function Work() {
    return (

        <Container fluid className="details text-center py-4" style={{padding: 0,marginTop:'-96px'}}>
            <Row className="gx-0 flexbox-row" style={{width:'100%',marginRight:'auto',marginLeft:'auto'}}>
                <Col className="work-col">
                    <h2 className="work-header" style={{fontSize:'18px',textAlign:'center',fontFamily:'Montserrat'}}>Have doubts? Call</h2>
                    <h1 className="work-detail" style={{fontSize:'22px',textAlign:'center',marginTop:'7px',fontFamily:'Josefin Sans',fontWeight:'640',letterSpacing:'0.6px'}}> +91 12345 67890</h1>
                </Col>
                <Col className="work-col">
                    <h2 className="work-header" style={{fontSize:'18px',textAlign:'center',fontFamily:'Montserrat'}}>We are open from</h2>
                    <h1 className="work-detail" style={{fontSize:'22px',textAlign:'center',marginTop:'7px',fontFamily:'Josefin Sans',fontWeight:'640',letterSpacing:'0.4px'}}> Mon - Sat (7 a.m - 7 p.m)</h1>
                </Col>
                <Col className="work-col">
                    <h2 className="work-header" style={{fontSize:'18px',textAlign:'center',fontFamily:'Montserrat'}}>Further? Drop mail to</h2>
                    <h1 className="work-detail" style={{fontSize:'22px',textAlign:'center',marginTop:'7px',fontFamily:'Josefin Sans',fontWeight:'640',letterSpacing:'0.4px'}}> laundryes@gmail.com</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Work;
