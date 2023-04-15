const Done = ({ item, todoBtn, removeBtn }) => {
    return(
        <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.contents}</p>
            <div className="btnWrap">
                <button onClick={() => todoBtn(item.id, item.title, item.contents)}>취소</button>
                <button onClick={() => removeBtn(item.id, item.isDone)}>삭제</button>
            </div>
        </div>
    )
  }

  export default Done;