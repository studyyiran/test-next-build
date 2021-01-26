import React from 'react'

export default ({timestamp}) => {
    const getDate = (timestamp) => {
        return timestamp ? (new Date(timestamp)).toString() : (new Date()).toString()
    }
    return <div>
        <div>构建时间: {timestamp}</div>
        <div>构建时间: {getDate(timestamp)}</div>
        <div>当前时间: {getDate()}</div>
    </div>
}

export async function getStaticPaths() {
    const params = [1,2,3]
    const paths = params.map((id) => ({ params: { id: `${id}` } }))

    const result = {
        paths,
        fallback: true
    }
    console.log(result)
    return result;
}


export async function getStaticProps({ params }) {
    const timestamp = Date.now()
    return { props: { timestamp }, revalidate: 3 }
}