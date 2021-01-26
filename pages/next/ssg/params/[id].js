import React from 'react'

const getDate = (timestamp) => {
    return timestamp ? (new Date(timestamp)).toString() : (new Date()).toString()
}

const TestSSG = ({timestamp, time}) => {

    return <div>
        <div>构建时间: {timestamp}</div>
        <div>构建时间: {time}</div>
        {/*<div>当前时间: {getDate()}</div>*/}
    </div>
}

export default TestSSG

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
    return { props: { timestamp, time: getDate(timestamp) }, revalidate: 1 }
}
