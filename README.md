1.  클래스 네임에 삼항연산자 넣어서 변경하는 것.... done을 넣어야함 handleComplete
2.  button에 onClick 넣는 것 빼먹음 ㅎㅎ
3.  handleDeleteItem 로직... filter 까지는 알았지만 id 비교후 return 값을 쓰지 못함
4.  localStorage.setItem("todoItems", todoData); JSON.stringfy 안 적음 ㅎㅎ
5.      useEffect(() => {
    const newTodoData = JSON.parse(localStorage.setItem("todoItems"));
    setTodoData(newTodoData);
    }, []);
    제대로 쓴게 맞는건가? 작동이 안됨
