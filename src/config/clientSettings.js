import { Utils } from 'pcmli.umbrella.uni-core'

const getClientSettings = () => {
    if (!Utils.hasWindow()) return {}
    const win = Utils.getWindow()
    const serializedJavascript = win.env
    return serializedJavascript || {}
}

export const ClientSettings = getClientSettings()