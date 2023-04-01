//visit http://localhost:3000/api/hello and you gonna see an "hello world" message

const hello = (req, res) => {
  try {
    res.status(200).send("Hello World!");
  } catch (error) {
    res.status(500).send(error);
  }
};

export default hello;