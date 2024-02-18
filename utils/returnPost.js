import editText from './editText.js';
import returnThumbnail from './returnThumbnail.js';
// Function to process Medium posts
function returnJsonPosts(mediumPosts, mediumItems) {
  const dataMedium = [];

  mediumPosts.items.forEach((item, index) => {
    const sanitizedDescription = editText(item.description);
    const imageUrl = returnThumbnail(mediumItems[index].description);

    dataMedium.push({
      title: item.title,
      date: item.pubDate.split(' ')[0],
      link: item.link,
      image: imageUrl,
      description: sanitizedDescription.replace(/\n/g, '. ').replace('. ', ''),
      tags: item.categories
    });
  });

  return dataMedium;
}

export default returnJsonPosts;