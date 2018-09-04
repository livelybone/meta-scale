export default function () {
  var viewport = Array.prototype.filter.call(document.getElementsByTagName('meta'), function (meta) {
    return meta.getAttribute('name') === 'viewport'
  })
  if (viewport.length < 1) return 1
  viewport = viewport[viewport.length - 1]
  var contentStr = viewport.getAttribute('content')
  var reg = /initial-scale\s*=\s*([^,]+)(,|$)/
  var arr = contentStr.match(reg)
  var scale = arr ? +arr[1] : 1
  return scale || 1
}