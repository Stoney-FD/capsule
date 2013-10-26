do (root = @, $ = @jQuery) ->
  udefine.globals['jquery'] = $

  udefine.inject['capsule'] =
    root: root
    name: 'Capsule'
