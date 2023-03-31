const FONT_SIZE = {
    XXS: '9px',
    XS: '11px',
    S: '13px',
    SM: '14px',
    M: '18px',
    L: '19px',
    XL: '23px',
    XXL: '45px'
  } as const

  const LAMBDA_URL = 'https://vucii4wk16.execute-api.eu-central-1.amazonaws.com/Prod'
  const PRESIGNED_URL = LAMBDA_URL + '/get-presigned-url?file='

  export {
    FONT_SIZE,
    PRESIGNED_URL
  }