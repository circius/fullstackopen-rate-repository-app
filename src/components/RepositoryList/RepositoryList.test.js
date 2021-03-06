import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryListContainer from './RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // eslint-disable-next-line no-unused-vars
      const { getAllByTestId, getByText, debug } = render(<RepositoryListContainer repositories={repositories} />);
      // debug();

      const items = getAllByTestId('RepositoryItem');

      expect(items).toHaveLength(2);

      const testData = repositories.edges;


      const edgeRenderedP = ({ node }) => {
        const keysForStrings = ['fullName', 'description', 'language'];
        keysForStrings.forEach(key => {
          const testString = String(node[key]);
          const el = getByText(testString);
          expect(el).not.toBeUndefined();
        });
      };

      testData.forEach(edge => edgeRenderedP(edge));

      const statsRenderedP = (expected) => {
        expected.forEach(stat => {
          const el = getByText(stat);
          expect(el).not.toBeUndefined();
        });
      };

      statsRenderedP(["1.6K", "21.9K", "88", "3"]); // <- checking, loosely, formik
      statsRenderedP(["69", "1.8K", "72"]); // <- checking, loosely, reactAsync
    });
  });
});