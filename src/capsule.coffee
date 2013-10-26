udefine 'capsule', ['jquery', 'mixer', 'eventmap'], ($, mixer, EventMap) ->
  
  class Capsule
    constructor: (fn, elem) ->
      mixer [@, Capsule::], new EventMap()
      
      [fn, elem] = [null, fn] if fn instanceof $
      
      fn.call @, @ if fn?
      
      @data = {}
      
    render: ->
      return unless @template
      @template @data
      
    execute: ->
      @before?.apply? @, arguments
      @render()
      @after?.apply? @, arguments

  Capsule.TemplateConnector = {}
  
  Capsule
