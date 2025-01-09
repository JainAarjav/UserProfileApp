function Message()
{
    const name = 'Mosh';
    if (name)
        return <h1>hello</h1>;
   return <h1>Hello {name}</h1>; 
}

export default Message;