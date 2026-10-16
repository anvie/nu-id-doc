// Code highlighting in the NU Identity palette: green strings, purple keys, magenta keywords.

/** @type {import('prism-react-renderer').PrismTheme} */
const light = {
  plain: {color: '#262626', backgroundColor: '#FAFAFA'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#8C8C8C', fontStyle: 'italic'}},
    {types: ['punctuation', 'operator'], style: {color: '#737373'}},
    {types: ['keyword', 'builtin', 'atrule', 'important'], style: {color: '#B211DE'}},
    {types: ['property', 'attr-name', 'tag', 'selector', 'class-name'], style: {color: '#6A35EE'}},
    {types: ['string', 'char', 'attr-value', 'regex', 'url', 'inserted'], style: {color: '#0F8A5B'}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: '#B45309'}},
    {types: ['function'], style: {color: '#3C1D83'}},
    {types: ['deleted'], style: {color: '#DC2626'}},
  ],
};

/** @type {import('prism-react-renderer').PrismTheme} */
const dark = {
  plain: {color: '#E5E5E5', backgroundColor: '#111111'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#737373', fontStyle: 'italic'}},
    {types: ['punctuation', 'operator'], style: {color: '#A3A3A3'}},
    {types: ['keyword', 'builtin', 'atrule', 'important'], style: {color: '#E07CF5'}},
    {types: ['property', 'attr-name', 'tag', 'selector', 'class-name'], style: {color: '#B392FF'}},
    {types: ['string', 'char', 'attr-value', 'regex', 'url', 'inserted'], style: {color: '#6FDDAD'}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: '#FCD34D'}},
    {types: ['function'], style: {color: '#CFB9FF'}},
    {types: ['deleted'], style: {color: '#F87171'}},
  ],
};

module.exports = {light, dark};
