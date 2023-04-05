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

  const LAMBDA_URL = 'https://mg27m8a3vk.execute-api.eu-central-1.amazonaws.com/Prod/'
  const PRESIGNED_URL = LAMBDA_URL + '/get-presigned-url?file='
  const REQUEST_RETRIEVAL_URL = LAMBDA_URL + '/request-retrieval'

  export {
    FONT_SIZE,
    PRESIGNED_URL,
    REQUEST_RETRIEVAL_URL
  }