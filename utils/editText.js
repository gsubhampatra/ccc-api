import sanitizeHtml from 'sanitize-html';
// Function to sanitize and cut text
function editText(text) {
  const tagsRegex = /<p>(.*?)<\/p>/g;
  const textRegex = /<\/?[A-Za-z]>/g;
  const transformTags = { 'a': '', 'div': '', 'figure': '' };

  const sanitizeText = sanitizeHtml(text, { transformTags });
  const tags = sanitizeText.match(tagsRegex)[0];
  const indexChosen = (tags === '<p></p>') ? 1 : 0;
  const sanitizedText = sanitizeText.match(tagsRegex)[indexChosen].replace(textRegex, '');

  return sanitizedText;
}

export default editText;