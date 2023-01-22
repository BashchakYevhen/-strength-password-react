import "./style.css"
import { useRef } from "react"

interface IClass {
    getClass: string
}
const StrengthIndicator: React.FC<IClass> = ({ getClass }) => {
    const first = useRef<HTMLLIElement>(null)
    const second = useRef<HTMLLIElement>(null)
    const third = useRef<HTMLLIElement>(null)

    switch (getClass) {
        case "short":
            first.current!.className = "item short"
            second.current!.className = " item short"
            third.current!.className = " item short"
            break;
        case "weak":
            first.current!.className = "item weak"
            second.current!.className = " item "
            third.current!.className = " item "
            break
        case "middle":
            first.current!.className = "item middle"
            second.current!.className = " item middle"
            third.current!.className = " item "
            break
        case "strong":
            first.current!.className = "item strong"
            second.current!.className = " item strong"
            third.current!.className = " item strong"
            break
        case "":
            first.current!.className = "item "
            second.current!.className = " item "
            third.current!.className = " item "
            break;
    }

    return (
        <ul className="list" >
            <li ref={first} className="item" />
            <li ref={second} className="item" />
            <li ref={third} className="item" />
        </ul>
    )
}
export default StrengthIndicator