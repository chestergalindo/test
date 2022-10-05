import { render } from '@testing-library/react';
import React from 'react';
import { Paragraph } from './index';

test('should', () => {
  //const { debug } = render( <Paragraph /> );
  //debug();
  const { container } = render(<Paragraph />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <p
        class="paragraph"
      >
         Paragraph
      </p>
    </div>
  `);
});
