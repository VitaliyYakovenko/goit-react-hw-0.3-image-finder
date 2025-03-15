const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `49167758-1510a922add5d62de9e0ce5f1`;



export default async function getImg(query, page = 1) {

    try {
        const resp = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=20&image_type=photo&pretty=true&orientation=horizontal`);
        if (!resp.ok) {
            throw new Error("Error message");
        }
        const data = await resp.json();
        return data;
    } catch (e) {
         console.log("error message");
    };
};