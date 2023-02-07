const storeServices = () => {
    const bodyUrl = `http://localhost:5000/api`;

    return {
        getCollection: async (name) => {
            const response = await fetch(`${ bodyUrl }/${ name }`);

            if (!response.ok) {
                throw new Error(`Something get terrible wrong. Status: ${ response.status }`)
            }

            return response.json();
        }
    }
}

export default storeServices;