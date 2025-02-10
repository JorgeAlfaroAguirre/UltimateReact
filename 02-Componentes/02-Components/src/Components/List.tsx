type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <div>
      <ul className="list-group">
        {data.map((element, index) => (
          <li className="list-group-item" key={`${index}-${element}`}>
            {index + 1}.- {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
