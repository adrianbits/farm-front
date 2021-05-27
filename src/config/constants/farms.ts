import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'TENDIE',
    lpAddresses: {
      97: '',
      56: '0x9853A30C69474BeD37595F9B149ad634b5c323d9',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'TENDIE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x97C1e417848059Ce21767F828E81F5d0e7974e86',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'TENDIE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xCfF43c954A7f83Dd8a1cbdA16858e362D7c1B6B1',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  
]

export default farms
