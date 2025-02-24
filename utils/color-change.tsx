/**
 * @param hex (#ffffff)
 * @param alpha | 透明度
 * @returns {string} rgba
 */
export const hexToRGBA = (hex = '', alpha = 0.9) => {
    hex = hex.replace(/^#/, '')

    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
