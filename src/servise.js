
export default class GalleryService {
    
    getPhotos = async() => {
        const res = await fetch("https://api.unsplash.com/photos", {
            method: "get",
            headers: {
                "Authorization": "Client-ID 074edaaa9f58f24c866a8b05b38897955099fcfb41029b2c68d392dc4c170343"
            }
        });
        const result = await res.json();
            return result;
    }
    getRandomPhoto = async() => {
        const res = await fetch("https://api.unsplash.com/photos/random", {
            method: "get",
            headers: {
                "Authorization": "Client-ID 074edaaa9f58f24c866a8b05b38897955099fcfb41029b2c68d392dc4c170343"
            }
        });
        const result = await res.json();
            return result;
    }

   

}


const service = new GalleryService();
