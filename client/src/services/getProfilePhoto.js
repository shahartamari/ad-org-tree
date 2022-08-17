
const baseUrl = `https://${process.env.REACT_APP_GRAPH_ENDPOINT}/${process.env.REACT_APP_GRAPH_VERSION}/`;

const getProfilePhoto = async (id, token) => {
  const result = await fetch(`${baseUrl}users/${id}/photos/48x48/$value`, {
    headers: {
      authorization: `bearer ${token}`,
    
    }
  });

  if (result.status !== 404) {
    return await result.blob();
  }
  return null;
};

export default getProfilePhoto;
