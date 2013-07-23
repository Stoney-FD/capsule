do (root = @) ->

  root.$$ = (node) ->
    data = $(node).data '$$'
  
    unless data?
      data = {}
      $(node).data '$$', data
  
    data