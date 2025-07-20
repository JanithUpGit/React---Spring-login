

export default function Input({label,id,...props}){


    return (
    <>
    <div className="input-section">

        <label htmlFor={id}>{label}</label>
        <input name={id} {...props}/>
    </div>
    </>
    
);
}