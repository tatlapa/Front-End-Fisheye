export default function createApi(url) {
    return {
        async get() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (err) {
                throw new Error(err);
            }
        }
    };
}
