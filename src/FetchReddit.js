import React,{useEffect} from 'react'

function FetchReddit() {
    const fetchData = async()=>{
        const response = await fetch("https://www.reddit.com/r/reactjs.json")
        const data = await response.json();
        console.log(data)
    }
    useEffect(() => {
      fetchData()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default FetchReddit
