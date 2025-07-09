import LZString from "lz-string";

export const compress = (data) => {
    const dataCompressed = LZString.compressToBase64(JSON.stringify(data))
    return dataCompressed
}

export const decompress = (data) => {
    const datadescompressed = LZString.decompressFromBase64(data)
    return JSON.parse(datadescompressed)
}