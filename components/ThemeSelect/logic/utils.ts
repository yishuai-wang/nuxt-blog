import Ajv from 'ajv'
import type { JSONSchemaType } from 'ajv'
import type { ThemeData } from './types'
import { THEME_KEY } from './constant'

const ajv = new Ajv()

const themeSchema: JSONSchemaType<ThemeData> = {
  type: 'object',
  properties: {
    themeName: {
      type: 'string',
    },
    themeIcon: {
      type: 'string',
    },
    themeDescription: {
      type: 'string',
    },
  },
  required: ['themeName', 'themeIcon', 'themeDescription'],
}

const themeDataValidate = ajv.compile(themeSchema)

export const getLocalThemeData = () => {
  if (!isBrowser())
    return null

  const localTheme = localStorage.getItem(THEME_KEY)
  if (!localTheme)
    return null
  try {
    const localThemeData = JSON.parse(localTheme)
    return themeDataValidate(localThemeData) ? localThemeData : null
  }
  catch (err) {
    return null
  }
}
