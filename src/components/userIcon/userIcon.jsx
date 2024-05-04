import React from 'react';
import PropTypes from 'prop-types';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { SquareIcon, Square, Icon, Letter } from './styles/style';

const UserIcon = ({ userName }) => {
    const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';
    return (
        <SquareIcon role="img" aria-label={`User icon for ${userName}`}>
            <Square>
                <Icon icon={faSquare} />
                <Letter>{firstLetter}</Letter>
            </Square>
        </SquareIcon>
    );
};

UserIcon.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default UserIcon;
