import React from 'react';
import { render } from '@testing-library/react';
import Card from '../card';

describe('Card component', () => {
    it('renders without crashing', () => {
        const data = {
            salesOverview: {
                uploads: 10,
                successfulUploads: 7,
                linesAttempted: 50,
                linesSaved: 30,
                lastUploadDate: 123456789
            }
        };
        render(<Card data={data} />);
    });
});
