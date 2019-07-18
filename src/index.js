import { useEffect, useRef, useState } from 'preact/hooks'

import hook from './hook'

const useTime = hook({ useEffect, useRef, useState })
export default useTime
