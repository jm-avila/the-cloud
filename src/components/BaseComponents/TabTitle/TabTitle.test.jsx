import React from 'react';
import TabTitle from './TabTitle';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('TabTitle render.', () => {
  test('the document title should match the texts passed by props concatenated by a space.', async () => {
    const mainText = 'mainText';
    const secondaryText = 'secondaryText';
    const titleText = `${mainText} ${secondaryText}`;

    render(<TabTitle tabTitle={mainText} tabSubTitle={secondaryText} />);

    await wait(() => expect(document.title).toEqual(titleText));
  });
});
