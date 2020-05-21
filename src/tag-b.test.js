let tagB = require('./tag-b');

// fake fn 
function createTag(tag, attrs, content) {
  return attrs.id 
    ? `<${tag} id="${attrs.id}">${content}</${tag}>`
    : `<${tag}>${content}</${tag}>`;
}

test(
  'Generates 49 functions',
  () => expect(Object.keys(tagB(createTag)).length)
    .toBe(49)
);

test(
  'Second call of tagB(fn) returns memoized object',
  () => expect(tagB(createTag))
    .toBe(tagB(createTag)) 
);

test(
  'div("Hello, world") returns <div>Hello, world</div>',
  () => expect(tagB(createTag).div('Hello, world'))
    .toBe("<div>Hello, world</div>")
);

test(
  'h1("Heading") returns <h1>Heading</h1>',
  () => expect(tagB(createTag).h1('Heading'))
    .toBe("<h1>Heading</h1>")
);

test(
  `div("Hello, world", {id: "my-id"}) returns 
    <div id="my-id">Hello, world</div>`,
  () => expect(tagB(createTag).div('Hello, world', {id: "my-id"}))
    .toBe('<div id="my-id">Hello, world</div>')
);
