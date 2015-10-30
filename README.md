# myerror
a lightweight error handler
## API
###register(type, code)
Parameter:</br>
  type(string=)</br>
  code(number=)</br>
Example:</br>
  Err.register('NOT_FOUND', 404)
###constructor(code, opts_message | type)
Parameter:</br>
  code(number=)</br>
  opts_message(string=)</br>
  type(Err.ErrType)</br>
Example:</br>
  new Err(404, 'NOT_FOUND'); | new Err(Err.NOT_FOUND)
  
