import hexToHsl from 'hex-to-hsl'
import hsl from 'hsl-to-hex-simple'

const fixedTemp = {
  tmin: -10,
  tminColor: "#00ffff",
  tmidle: 10,
  tmidleColor: "#fff700",
  tmax: 30,
  tmaxColor: "#ff8c00"
}

const { tmin, tminColor, tmidle, tmidleColor, tmax, tmaxColor } = fixedTemp

// function for linear color interpolation based on the obtained air temperature

export const bgcolor = (tcurrent) => {

  const hexInterpolation = (t, tColor) => {
    const t1 = tmidle
    const t2 = t
    const [h1, saturation, luminosity] = hexToHsl(tmidleColor)
    const h2 = hexToHsl(tColor)[0]
    const h = (h1 - h2) / (t1 - t2) * tcurrent + (h2 * t1 - h1 * t2) / (t1 - t2)
    const hex = hsl(h, saturation, luminosity)
    return hex
  }

  if (tcurrent >= tmidle) {
    return hexInterpolation(tmax, tmaxColor)
  } else {
    return hexInterpolation(tmin, tminColor)
  }
}
