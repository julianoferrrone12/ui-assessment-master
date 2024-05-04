import PropTypes from 'prop-types';

const SuccessRateCalculator = ({ uploads, successfulUploads, linesAttempted, linesSaved }) => {

    const successPercentage = uploads ? (successfulUploads / uploads) * 100 : 0;

    const savedPercentage = linesAttempted ? (linesSaved / linesAttempted) * 100 : 0;

    return { successPercentage, savedPercentage };
};

SuccessRateCalculator.propTypes = {
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
};

export default SuccessRateCalculator;
