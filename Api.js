import rp from 'request-promise';

export async function login(payload) {
    console.log(payload);
    const options = {
        method: 'POST',
        uri: 'https://10.68.162.96/ptoApp/login',
        body: payload,
        json: true,
    };
    try {
        return rp(options)
    } catch (error) {
        console.log('The following error just happened: ' + e.body);
    }
}