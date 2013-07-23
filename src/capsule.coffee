udefine 'capsule', ['root', 'jquery'], (root, $) ->
  
  class Capsule
    constructor: (elem) ->
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
