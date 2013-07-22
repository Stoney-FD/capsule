udefine 'capsule', ['root', 'jquery'], (root, $) ->
  
  class Capsule
    constructor: (elem) ->
      @data = {}
      
    render: ->
      return unless @template
      @template @data
      
    execute: ->
      @before?()
      @render()
      @after?()
