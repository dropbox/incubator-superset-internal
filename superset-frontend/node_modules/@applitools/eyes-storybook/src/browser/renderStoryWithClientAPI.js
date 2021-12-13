const getClientAPI = require('./getClientAPI');

function renderStoryWithClientAPI(index, id) {
  return new Promise(resolve => {
    let api;
    try {
      api = getClientAPI();
      api.selectStory(index, id);
      api.onStoryRendered(resolve);
    } catch (ex) {
      resolve({message: ex.message, version: api ? api.version : undefined});
    }
  });
}

module.exports = renderStoryWithClientAPI;
