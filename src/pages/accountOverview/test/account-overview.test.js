import React from 'react';
import { render } from '@testing-library/react';
import AccountOverview from '../account-overview';

describe('AccountOverview component', () => {
  it('renders without crashing', () => {
    const data = {
      supportContact: {
        name: 'John Smith',
        email: 'john.smith@feefo.com'
      },
      salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
        lastUploadDate: 1605001226079,
      }
    };
    render(<AccountOverview data={data} />);
  });
});
