export const getS3File = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};
