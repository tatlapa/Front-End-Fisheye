export default function createPhotographer(data) {
    return {
        name: data.name,
        id: data.id,
        city: data.city,
        country: data.country,
        tagline: data.tagline,
        price: data.price,
        portrait: data.portrait
    };
}
