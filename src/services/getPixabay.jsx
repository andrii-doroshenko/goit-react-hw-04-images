const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27407559-16eca6dd65687bb41f2493a6b';

export const getPixabayQuery = async (queryValue, page) => {
  const url = `${BASE_URL}?q=${queryValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error();
    }

    return resp;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
