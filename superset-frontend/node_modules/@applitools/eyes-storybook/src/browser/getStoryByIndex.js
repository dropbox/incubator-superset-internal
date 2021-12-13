const getClientAPI = require('./getClientAPI');

async function getStoryByIndex(index) {
  let api;
  try {
    api = getClientAPI();
    const stories = await api.getStories();
    if (!stories[index]) {
      console.log('error cannot get story', index);
    }
    return stories[index];
  } catch (ex) {
    throw new Error(JSON.stringify({message: ex.message, version: api ? api.version : undefined}));
  }
}

module.exports = getStoryByIndex;
