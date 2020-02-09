import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.baseFontSize = '22px'
lincolnTheme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none'
  }
})
const typography = new Typography(lincolnTheme)

export const { scale, rhythm, options } = typography
export default typography
