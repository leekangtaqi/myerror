# myerror
a lightweight error handler
## API
###register(type, code)
Parameter:
  type(string=)
  code(number=)
Example:
  Err.register('NOT_FOUND', 404)
###constructor(code, opts_message | type)
Parameter:
  code(number=)
  opts_message(string=)
  type(Err.ErrType)
Example:
  new Err(404, 'NOT_FOUND'); | new Err(Err.NOT_FOUND)
  
