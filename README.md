
# Todo List 만들기


<img width="100%" src="https://user-images.githubusercontent.com/128350568/232490501-5c918ede-42a3-45fb-a3bd-ba9c587bd5ed.gif"/>

배포 주소 : https://to-do-list-snowy-alpha.vercel.app/

Done 컴포넌트======================================================================================

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
 
 Working 컴포넌트==================================================================================
 
 const Working = ({ item, completeBtn, removeBtn }) => {
    return(
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

