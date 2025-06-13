function InputControl({ label, type, id, inputRef, required, rows }) {
    const inputClasses = "block font-inherit border border-solid border-gray-300 rounded p-1 w-full";

    return (
        <div className="mb-2">
            <label html={id} className="block font-bold mb-2">{label}</label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    required={required}
                    rows={rows}
                    ref={inputRef}
                    className={inputClasses}
                ></textarea>
            ) : (
                <input
                    type={type}
                    required={required}
                    id={id}
                    ref={inputRef}
                    className={inputClasses}
                />
            )}
        </div>
    );
}

export default InputControl;