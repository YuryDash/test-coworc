
type PropsType = {
    className?: string
    name: string
    onClick: () => void
}


export const Btn = (props: PropsType) => {
    return (
        <button className={props.className} onClick={props.onClick}>{props.name}</button>
    )
}