const SubredditList = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(state => state.subreddits.list);
  return (
    <ul>
      {subreddits.map(sub => (
        <li
          key={sub.name}
          onClick={() => dispatch(setSelectedSubreddit(sub.name))}
        >
          {sub.label}
        </li>
      ))}
    </ul>
  );
};