do (root = @, $ = @jQuery) ->
  udefine.configure (root) ->
    udefine.modules.globals['jquery'] = $

    udefine.inject.add 'capsule',
      root: root
      name: 'Capsule'
