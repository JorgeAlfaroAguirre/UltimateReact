type Props = { readonly options: string[] };

const Select = ({ options }: Props) => {
  return (
    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
};

export default Select;
