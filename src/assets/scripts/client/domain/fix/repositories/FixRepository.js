import Papa from 'papaparse';

export default {
    parseCsv: (csv) => new Promise((resolve, reject) => {
        Papa.parse(csv, {
            header: true,
            complete: (result) => resolve(result),
            error: (error) => reject(error)
        });
    })
};
