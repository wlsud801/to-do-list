const Working = ({ item, completeChkBtn, removeBtn }) => {
    return (
        <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.contents}</p>
            {
                item.isDone !== true
                ? <div className="btnWrap">
                    <button onClick={() => completeChkBtn(item)}>완료</button>
                    <button onClick={() => removeBtn(item.id, item.isDone)}>삭제</button>
                </div>
                : <div className="btnWrap">
                    <button onClick={() => completeChkBtn(item)}>취소</button>
                    <button onClick={() => removeBtn(item.id, item.isDone)}>삭제</button>
                </div>
            }
        </div>
    )
}

export default Working;
