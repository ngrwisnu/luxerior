interface InputFieldType {
  type: "text" | "email" | "tel";
  placeholder: string;
  id: string;
  name: string;
  value: string;
  changeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldType) => {
  const { type, placeholder, id, name, value, changeHandler } = props;

  let className = [
    "border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none",
  ];

  return (
    <input
      data-input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={changeHandler}
      className={className.join(" ")}
      placeholder={placeholder}
    />
  );
};

export default InputField;
