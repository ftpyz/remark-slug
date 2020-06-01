<<<<<<< HEAD
'use strict';

var toString = require('mdast-util-to-string');
var visit = require('unist-util-visit');
var slugs = require('github-slugger')();
var slugify=require("slugify");
module.exports = attacher;

function attacher() {
  return transformer;
}

/* Patch slugs on heading nodes. */
function transformer(ast) {
  slugs.reset();

  visit(ast, 'heading', function (node) {
    
    var id = slugify(slugs.slug(toString(node)));
    var data = patch(node, 'data', {});

    /* Non-html */
    patch(data, 'id', id);
    /* Legacy remark-html */
    patch(data, 'htmlAttributes', {});
    /* Current remark-html */
    patch(data, 'hProperties', {});
    patch(data.htmlAttributes, 'id', id);
    patch(data.hProperties, 'id', id);
  });
}

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
=======
'use strict'

var toString = require('mdast-util-to-string')
var visit = require('unist-util-visit')
var slugify = require('slugify')

module.exports = slug

function slug() {
  return transformer
}

// Patch slugs on heading nodes.
function transformer(ast) {
  slugs.reset()

  visit(ast, 'heading', visitor)

  function visitor(node) {
    var data = node.data || (node.data = {})
    var props = data.hProperties || (data.hProperties = {})
    var id = props.id

    id = id ? slugify(id, true) : slugify(toString(node))

    data.id = id
    props.id = id
  }
>>>>>>> 9296d9272c26063c5fc673b43cced197a903156a
}
