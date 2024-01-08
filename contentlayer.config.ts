import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Article = defineDocumentType(() => ({
  name: 'Article',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` },
    slug: { type: 'string', resolve: (post) => post._raw.sourceFileName.replace('.mdx', '') },
  },
}));

export default makeSource({ contentDirPath: 'articles', documentTypes: [Article] });
