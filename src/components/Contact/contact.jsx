import React from 'react';
import PropTypes from 'prop-types';
import { Div, Email, Icon, LastUpload, Text, Title, UserIconContainer } from './styles/style';
import UserIcon from '../userIcon/userIcon';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = ({ data }) => {

    return (
        <Div>
            <Title>YOUR FEEFO SUPPORT CONTACT</Title>
            <UserIconContainer>
                <UserIcon userName={data.supportContact.name} />
                <div>
                    <Text>{data.supportContact.name}</Text>
                    <div>
                        <Icon icon={faEnvelope} />
                        <Email>{data.supportContact.email}</Email>
                        <LastUpload
                            aria-label="Last Upload Date"
                            tabIndex="0"
                            aria-live="polite"
                        >
                            {data.salesOverview.lastUploadDate}
                        </LastUpload>
                    </div>
                </div>
            </UserIconContainer>
        </Div>
    );
};

Contact.propTypes = {
    data: PropTypes.shape({
        supportContact: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        salesOverview: PropTypes.shape({
            lastUploadDate: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Contact;
