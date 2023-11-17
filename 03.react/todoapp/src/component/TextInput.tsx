function TextInput({
  inputId,
  areaId,
  inputClassName,
  areaClassName,
  inputValue,
  textValue,
  inputOnChange,
  textOnChange,
  inputHolder="",
  textHolder="",
  required = false,
}:TextInputType) {
  return (
    <article className="text">
      <input
        type="text"
        name="title"
        id={inputId}
        className={inputClassName}
        defaultValue={inputValue}
        onChange={inputOnChange}
        placeholder={inputHolder}
        required={required}
      />
      <textarea
        name="content"
        id={areaId}
        className={areaClassName}
        defaultValue={textValue}
        onChange={textOnChange}
        placeholder={textHolder}
        required={required}
      />
    </article>
  );
}

export default TextInput;
