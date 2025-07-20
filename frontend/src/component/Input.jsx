

export default function Input({label,id,type,placeholder,...props}){


    return (
    <>
    <div className="input-section">
        <label htmlFor={id}>{label}</label>
        <input type={type}  name={id} placeholder={placeholder} {...props}/>
    </div>
    </>
    
);
}