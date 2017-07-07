import Papa from 'papaparse';

export default {
    parse: (csv, userOptions = {}) => new Promise((resolve, reject) => {
        const defaultOptions = {
            header: true
        };
        const options = Object.assign({}, defaultOptions, userOptions);

        Papa.parse(csv, {
            ...options,
            complete: (result) => resolve(result),
            error: (error) => reject(error)
        });
    })
};
