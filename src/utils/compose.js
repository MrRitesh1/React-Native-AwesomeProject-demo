import React from 'react'

function Compose(props) {
    const { component = [], children } = props

    return (
        <>
            {
                component.reduceRight((acc, Comp) => {
                    return <Comp>{acc}</Comp>
                }, children)
            }
        </>
    )
}
export default Compose