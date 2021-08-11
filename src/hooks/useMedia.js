
import { useMediaQuery } from 'react-responsive'

const useMedia = () => {
    const xxs = useMediaQuery({ query: '(max-width: 575px)' })
    const xxsMin = useMediaQuery({ query: '(min-width: 320px)' })
    const xs = useMediaQuery({ query: '(max-width: 713px)' })
    const xsMin = useMediaQuery({ query: '(min-width: 576px)' })
    const sm = useMediaQuery({ query: '(max-width: 991px)' })
    const smMin = useMediaQuery({ query: '(min-width: 768px)' })
    const md = useMediaQuery({ query: '(max-width: 1199px)' })
    const mdMin = useMediaQuery({ query: '(min-width: 992px)' })
    return ({
        xxs,
        xs,
        sm,
        md,
        xxsMin,
        xsMin,
        smMin,
        mdMin,
    }
        
    )
}

export default useMedia
