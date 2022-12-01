import React from "react";

export const contextname = React.createContext();

const Context = (props) => {
  const [allnotes, setNotes] = React.useState([
    {
      id: 1234567,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet. In praesentium sint id quia numquam non perferendis cupiditate nam distinctio iste est voluptatem inventore. Qui unde asperiores in illum voluptates et praesentium repudiandae aut quia odio est autem velit et debitis necessitatibus. Aut delectus error qui galisum sint qui ullam galisum et odio quia et excepturi adipisci.Est blanditiis illo eum galisum possimus ex dolor aperiam ut dignissimos voluptas. At quis repellat qui animi ipsa et tempore perferendis aut dolores omnis ex molestias nihil.In sint enim sed tempora saepe vel facilis repudiandae id odit distinctio qui excepturi perferendis! Est enim dolore aut esse consequatur est cupiditate mollitia deserunt accusantium quo modi rerum. Aut inventore unde qui perspiciatis reprehenderit aut tempora excepturi vel impedit excepturi.",
      date: "1-2-1111",
    },
    {
      id: 123456,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet. In praesentium sint id quia numquam non perferendis cupiditate nam distinctio iste est voluptatem inventore. Qui unde asperiores in illum voluptates et praesentium repudiandae aut quia odio est autem velit et debitis necessitatibus. Aut delectus error qui galisum sint qui ullam galisum et odio quia et excepturi adipisci.Est blanditiis illo eum galisum possimus ex dolor aperiam ut dignissimos voluptas. At quis repellat qui animi ipsa et tempore perferendis aut dolores omnis ex molestias nihil.In sint enim sed tempora saepe vel facilis repudiandae id odit distinctio qui excepturi perferendis! Est enim dolore aut esse consequatur est cupiditate mollitia deserunt accusantium quo modi rerum. Aut inventore unde qui perspiciatis reprehenderit aut tempora excepturi vel impedit excepturi.",
      date: "1-2-1111",
    },
    {
      id: 123567,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet. In praesentium sint id quia numquam non perferendis cupiditate nam distinctio iste est voluptatem inventore. Qui unde asperiores in illum voluptates et praesentium repudiandae aut quia odio est autem velit et debitis necessitatibus. Aut delectus error qui galisum sint qui ullam galisum et odio quia et excepturi adipisci.Est blanditiis illo eum galisum possimus ex dolor aperiam ut dignissimos voluptas. At quis repellat qui animi ipsa et tempore perferendis aut dolores omnis ex molestias nihil.In sint enim sed tempora saepe vel facilis repudiandae id odit distinctio qui excepturi perferendis! Est enim dolore aut esse consequatur est cupiditate mollitia deserunt accusantium quo modi rerum. Aut inventore unde qui perspiciatis reprehenderit aut tempora excepturi vel impedit excepturi.",
      date: "1-2-1111",
    },
  ]);
  const [ref, setRef] = React.useState([
    {
      id: 1234567,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet. In praesentium sint id quia numquam non perferendis cupiditate nam distinctio iste est voluptatem inventore. Qui unde asperiores in illum voluptates et praesentium repudiandae aut quia odio est autem velit et debitis necessitatibus. Aut delectus error qui galisum sint qui ullam galisum et odio quia et excepturi adipisci.Est blanditiis illo eum galisum possimus ex dolor aperiam ut dignissimos voluptas. At quis repellat qui animi ipsa et tempore perferendis aut dolores omnis ex molestias nihil.In sint enim sed tempora saepe vel facilis repudiandae id odit distinctio qui excepturi perferendis! Est enim dolore aut esse consequatur est cupiditate mollitia deserunt accusantium quo modi rerum. Aut inventore unde qui perspiciatis reprehenderit aut tempora excepturi vel impedit excepturi.",
      date: "1-2-1111",
    },
    {
      id: 123456,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet. In praesentium sint id quia numquam non perferendis cupiditate nam distinctio iste est voluptatem inventore. Qui unde asperiores in illum voluptates et praesentium repudiandae aut quia odio est autem velit et debitis necessitatibus. Aut delectus error qui galisum sint qui ullam galisum et odio quia et excepturi adipisci.Est blanditiis illo eum galisum possimus ex dolor aperiam ut dignissimos voluptas. At quis repellat qui animi ipsa et tempore perferendis aut dolores omnis ex molestias nihil.In sint enim sed tempora saepe vel facilis repudiandae id odit distinctio qui excepturi perferendis! Est enim dolore aut esse consequatur est cupiditate mollitia deserunt accusantium quo modi rerum. Aut inventore unde qui perspiciatis reprehenderit aut tempora excepturi vel impedit excepturi.",
      date: "1-2-1111",
    },
    {
      id: 123567,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet. In praesentium sint id quia numquam non perferendis cupiditate nam distinctio iste est voluptatem inventore. Qui unde asperiores in illum voluptates et praesentium repudiandae aut quia odio est autem velit et debitis necessitatibus. Aut delectus error qui galisum sint qui ullam galisum et odio quia et excepturi adipisci.Est blanditiis illo eum galisum possimus ex dolor aperiam ut dignissimos voluptas. At quis repellat qui animi ipsa et tempore perferendis aut dolores omnis ex molestias nihil.In sint enim sed tempora saepe vel facilis repudiandae id odit distinctio qui excepturi perferendis! Est enim dolore aut esse consequatur est cupiditate mollitia deserunt accusantium quo modi rerum. Aut inventore unde qui perspiciatis reprehenderit aut tempora excepturi vel impedit excepturi.",
      date: "1-2-1111",
    },
  ]);

  const [user,setUser]=React.useState([]);
  const [login,setLogin] = React.useState("");
  
  return (
    <contextname.Provider
      value={{
        allnotes: allnotes,
        setNotes: setNotes,
        ref: ref,
        setRef: setRef,
        user:user,
        setUser:setUser,
        login:login,
        setLogin:setLogin
      }}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default Context;
