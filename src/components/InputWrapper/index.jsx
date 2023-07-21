export function InputWrapper({label, type, ...rest}){
    return(
        <div className="flex flex-col items-start">
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label} {...rest} className="text-yellow-300 w-full rounded-md bg-black outline-none border border-yellow-300 p-2 placeholder:text-white"/>
        </div>
    )
}