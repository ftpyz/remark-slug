# remark-slug

https://github.com/remarkjs/remark-slug adresinden forklanmıştır. github-sluggeri kullandığı için Türkçe harflerde problem yaratıyordu. slugify paketi kullanılacak şekilde tekrar düzenlendi.

## Kurulum

[npm][]:

```sh
npm install https://github.com/ftpyz/remark-slugify --save
```

## Gridsome Example

```sh
{
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
             'remark-slugify',
          ],
        }
      }
    },
```

## License

[MIT][license] © [GurmeWoo][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/remark-slug/master.svg
[build]: https://travis-ci.org/remarkjs/remark-slug
[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-slug.svg
[coverage]: https://codecov.io/github/remarkjs/remark-slug
[downloads-badge]: https://img.shields.io/npm/dm/remark-slug.svg
[downloads]: https://www.npmjs.com/package/remark-slug
[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-slug.svg
[size]: https://bundlephobia.com/result?p=remark-slug
[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg
[backers-badge]: https://opencollective.com/unified/backers/badge.svg
[collective]: https://opencollective.com/unified
[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg
[chat]: https://spectrum.chat/unified/remark
[npm]: https://docs.npmjs.com/cli/install
[health]: https://github.com/remarkjs/.github
[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md
[support]: https://github.com/remarkjs/.github/blob/master/support.md
[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md
[license]: license
[author]: https://gurmwoo.com
[remark]: https://github.com/remarkjs/remark
[ghslug]: https://github.com/Flet/github-slugger
[to-hast]: https://github.com/syntax-tree/mdast-util-to-hast
[rehype-slug]: https://github.com/rehypejs/rehype-slug
[remark-html]: https://github.com/remarkjs/remark-html
[remark-rehype]: https://github.com/remarkjs/remark-rehype
[rehype]: https://github.com/rehypejs/rehype
[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
[sanitize]: https://github.com/rehypejs/rehype-sanitize
