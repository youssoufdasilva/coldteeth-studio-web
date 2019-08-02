const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "uyj1rgh2", // you can find this in sanity.json
  dataset: "coldteethdb", // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
});
