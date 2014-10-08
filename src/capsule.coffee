udefine 'capsule', ['jquery', 'mixedice', 'eventmap'], ($, mixedice, EventMap) ->
  
  $ify = (elem) -> if elem instanceof $ then elem else $(elem)
  
  class Capsule
    constructor: (@factory, target) ->
      mixedice [@, Capsule::], new EventMap()
      
      if target?
        @$target = $ify target
      
      @data = {}
      
      @on 'render', =>
        return unless @template
        @template @data
      
    execute: ->
      @factory.call @, @ if @factory?
      @trigger.apply @, ['render', arguments]
      
    bindEvent: ->
      
    bindEvents: ->
      
    behavior: ->

  Capsule.TemplateConnector = {}
  
  Capsule.EventPool = new EventMap()
  
  Capsule
