import React from 'react'

const Hovy = ({top, left, opacity}) => {
    return (
        <div className={`absolute rounded-full bg-[#adbeff] h-14 w-14 transition-all ease-in-out duration-75`} style={{ top: top, left: left, opacity: opacity }} />
    )
}

export default Hovy