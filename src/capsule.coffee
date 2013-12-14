udefine 'capsule', ['jquery', 'mixedice', 'eventmap'], ($, mixedice, EventMap) ->
  
  class Capsule
    constructor: (fn, elem) ->
      mixedice [@, Capsule::], new EventMap()
      
      [fn, elem] = [null, fn] if fn instanceof $
      
      fn.call @, @ if fn?
      
      @data = {}
      
      @on 'render', =>
        return unless @template
        @template @data
      
    execute: ->
      @trigger.apply @, ['render', arguments]

  Capsule.TemplateConnector = {}
  
  Capsule
