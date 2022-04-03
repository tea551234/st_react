import React from 'react'
import ReactDOM from 'react-dom'

export default function ST_hook() {

    const [conunt, setconunt] = React.useState(0)

    React.useEffect(() => {
        const time = setInterval(() => {
            setconunt(conunt => conunt + 1)
        }, 1000)
        return () => (clearInterval(time))
    }, [])


    function add() {
        setconunt(conunt + 1)
    }

    function del() {
        setconunt(conunt - 1)
    }

    function change() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <div id='demo'>{conunt} </div>
            <button onClick={del}>-</button>
            <button onClick={add}>+</button>
            <button onClick={change}>刪除計時器</button>
        </div>
    )
}
