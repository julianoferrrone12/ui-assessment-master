import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../contact';

describe('Contact component', () => {
    it('renders without crashing', () => {
        const data = {
            supportContact: {
                name: 'John Smith',
                email: 'john.smith@example.com'
            },
            salesOverview: {
                lastUploadDate: 1605001226079
            }
        };
        render(<Contact data={data} />);
    });
});
