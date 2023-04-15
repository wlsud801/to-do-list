const Working = ({ item, completeBtn, removeBtn }) => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.contents}</p>
        <div className="btnWrap">
            <button onClick={() => completeBtn(item.id, item.title, item.contents)}>완료</button>
            <button onClick={() => removeBtn(item.id, item.isDone)}>삭제</button>
        </div>
      </div>
    )
  }

  export default Working;