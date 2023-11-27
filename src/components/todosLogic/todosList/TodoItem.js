import PropTypes from 'prop-types';

export default function TodoItem({ item, data, setData }) {
  const updateStatus = (element) => {
    setData(data
      .map((item) => (item.index === parseInt(element.parentElement.parentElement.id, 10)
        ? { ...item, completed: element.checked } : item)));

    // localStorage.setItem('list', JSON.stringify(data));
  };

  const editTask = (element) => {
    setData(data
      .map((item) => (item.index === parseInt(element.parentElement.parentElement.id, 10)
        ? { ...item, description: element.value } : item)));
    // localStorage.setItem('list', JSON.stringify(data));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.parentElement.parentElement.classList.remove('active');
      document.activeElement.blur();
      // icons[0].classList.remove('hide');
      // icons[1].classList.add('hide');

      editTask(e.target);
    }
  };

  const handleChange = (e) => {
    updateStatus(e.target);
  };

  const handleClick = (e) => {
    const activeElement = document.querySelector('.active');

    if (activeElement) {
      const icons = [...activeElement.childNodes].filter((icon) => icon.innerHTML === 'more_vert' || icon.innerHTML === 'delete');

      icons[0].classList.remove('hide');
      icons[1].classList.add('hide');

      activeElement.classList.remove('active');
    }
    e.target.parentElement.parentElement.classList.add('active');
    const icons = [...e.target.parentElement.parentElement.childNodes].filter((icon) => icon.innerHTML === 'more_vert' || icon.innerHTML === 'delete');
    icons[0].classList.add('hide');
    icons[1].classList.remove('hide');
  };

  const removeTask = (e) => {
    document.querySelector('.active').remove();

    setData(data.filter((item) => item.index !== e.target.parentElement.id)
      .map((item, index) => ({ ...item, index: index + 1 })));

    // localStorage.setItem('list', JSON.stringify(data));
  };

  const handleClickDelete = (e) => {
    removeTask(e);
  };
  return (
    <>
      <li className="item5 item" draggable="false" id={item.index}>
        <div>
          <input className="complete" type="checkbox" name="checkbox-checked" defaultChecked={item.completed} onChange={handleChange} />

          <input className={`value ${!item.completed || 'line'}`} type="text" defaultValue={item.description} onKeyDown={handleKeyDown} onClick={handleClick} />
        </div>
        <i className="material-icons more">more_vert</i>
        <i className="material-icons hide" aria-hidden="true" onClick={handleClickDelete}>delete</i>
      </li>
      <li><hr /></li>
    </>
  );
}

TodoItem.propTypes = {
  item: PropTypes.oneOfType(['array']).isRequired,
  data: PropTypes.arrayOf('object').isRequired,
  setData: PropTypes.func.isRequired,
};
