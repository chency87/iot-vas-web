import defaultSettings from '@/settings'

const title = defaultSettings.title || 'IoT 指纹识别'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
