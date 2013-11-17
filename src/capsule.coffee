udefine 'capsule', ['jquery', 'mixer', 'eventmap'], ($, mixer, EventMap) ->
  
  class Capsule
    constructor: (fn, elem) ->
      mixer [@, Capsule::], new EventMap()
      
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
