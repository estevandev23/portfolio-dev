import { useEffect } from 'react'
import { useNavbarMobile } from '../providers/NavbarMobileProvider'

export default function useCloseNavbarMobile () {
  const { hiddenNavbar } = useNavbarMobile()
  useEffect(() => {
    hiddenNavbar()
  }, [])
}
