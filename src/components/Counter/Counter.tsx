import {useState} from 'react';
import style from './counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={style.button} onClick={incrementCount}>incrementCount</button>
        </div>
    )
};

export default Counter;