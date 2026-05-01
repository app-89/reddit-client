const SearchBar = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(fetchSearchResults(term));
  };
  return (
    <input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Search Reddit..."
    />
  );
};