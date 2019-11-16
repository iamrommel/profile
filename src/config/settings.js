import pkg from '../../package'

export const Settings = {
    client: {
        appSettings: {
            GA_TRACKINGID: process.env.GA_TRACKINGID
        },
        version: pkg.version
    }
}