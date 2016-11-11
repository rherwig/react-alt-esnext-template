/**
 * This is an example that simulates an API call. Make sure to remove this function and call your own APIs instead.
 * @returns {Promise}
 */
export function fetchDataFromApi() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            resolve([
                { id: 1, name: 'Remove boilerplate code' },
                { id: 2, name: 'Add your own components and APIs' }
            ])
        }, 1000);
    });
}