import React from 'react';
import PropTypes from 'prop-types';
import {
    CardContainer,
    HorizontalLine,
    VerticalLine,
    UpperHalf,
    LowerHalf,
    LeftHalf,
    RightHalf,
    Icon,
    TitleUpper,
    TextUpper,
    BoldText,
    TextLower,
    TitleLower,
    InfoIcon,
} from './styles/style';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import SuccessRateCalculator from '../SuccessRateCalculator/SuccessRateCalculator';

const Card = ({ data }) => {

    const { successPercentage, savedPercentage } = SuccessRateCalculator({
        uploads: data.salesOverview.uploads,
        successfulUploads: data.salesOverview.successfulUploads,
        linesAttempted: data.salesOverview.linesAttempted,
        linesSaved: data.salesOverview.linesSaved,
    });
    return (
        <CardContainer role="article" aria-labelledby="card-title" aria-describedby="card-description">
            <InfoIcon icon={faInfoCircle} />
            <UpperHalf>
                <LeftHalf>

                    <Icon icon={faUpload} />
                    <TitleUpper id="card-title">Sales</TitleUpper>
                    <TextUpper id="card-description">You had <BoldText>{data.salesOverview.uploads} uploads</BoldText> and <BoldText>{data.salesOverview.linesAttempted}</BoldText> lines added.</TextUpper>
                </LeftHalf>
            </UpperHalf>
            <HorizontalLine />
            <LowerHalf>
                <LeftHalf>
                    <TitleLower>{successPercentage.toFixed(2)}%</TitleLower>
                    <TextLower>UPLOAD SUCCESS</TextLower>

                </LeftHalf>
                <VerticalLine />
                <RightHalf>
                    <TitleLower>{savedPercentage.toFixed(2)}%</TitleLower>
                    <TextLower>LINES SAVED</TextLower>
                </RightHalf>
            </LowerHalf>
        </CardContainer>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        salesOverview: PropTypes.shape({
            uploads: PropTypes.number.isRequired,
            successfulUploads: PropTypes.number.isRequired,
            linesAttempted: PropTypes.number.isRequired,
            linesSaved: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Card;
