import React from "react";
import "./Footer.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Footer(props) {
    const { description, title } = props;

    return(
        <div className="footer">

            <div className="row">
                <div className="column">
                    <Link to="/">Link1</Link>
                    <br />
                    <Link to="/">Link2</Link>
                    <br />
                    <Link to="/">Link3</Link>
                    <br />
                    <Link to="/">Link4</Link>
                </div>

                <div className="column">
                    social media icons
                </div>

                <div className="column">
                    <img 
                        className="footer-logo"
                        src="https://i.imgur.com/jdh9G07.png" />
                </div>
            </div>

            <Box component="footer">
                <Container maxWidth="lg">
                    <Typography 
                        variant="h6" 
                        align="center" 
                        gutterBottom>
                        StriveOpp
                    </Typography>
                
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="#294243"
                        component="p">
                            Making financing education accessible for students 
                            and early career professionals.
                    </Typography>
                </Container>
            </Box>
        </div>
    )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;