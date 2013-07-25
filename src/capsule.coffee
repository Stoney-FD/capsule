udefine 'capsule', ['root', 'jquery'], (root, $) ->
  
  class Capsule
    constructor: (fn, elem) ->
      [fn, elem] = [null, fn] if fn instanceof $
      
      fn.call(@, @) if fn?
      
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
