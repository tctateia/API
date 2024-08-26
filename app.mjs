export const apiKey = 'hroz54veFechugzkhDwAePdWcqng7nNbjMDpsEoZUTAdwXP2E9KEcfu';
export const apiUrl = 'https://api.pexels.com/v1/search';

export async function goGetData(url = apiUrl) {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const json = await response.json();
        const picHolder = [];
        json.photos.forEach((pic) => {
            picHolder.push(pic.src.medium);
        });
        return picHolder;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

export async function fetchImages() {
    try {
        const images = await goGetData();
        displayImages(images);
    } catch (error) {
        console.error('Error loading images:', error);
    }
}


fetchImages();

