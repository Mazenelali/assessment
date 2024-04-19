import { useEffect, useMemo, useState } from "react";
import Article from "./components/Article";
import Xmark from "./icon/xmark-solid.svg";

function App() {
    const [text, setText] = useState("");
    const [wordNumber, setWordNumber] = useState(0);

    const arrayOfArticle = [
        {
            title: "The Art of Conversation",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl vel sapien consectetur posuere at in elit. Ut id lobortis urna. Nam nec ex sagittis, consectetur metus nec, vulputate orci. Proin nec urna pretium, dictum libero vel, convallis tortor.",
        },
        {
            title: "Exploring the Depths of the Ocean",
            body: "Nullam at fermentum turpis. Nullam scelerisque quam non ligula vestibulum, vel sodales turpis laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce fermentum lacus auctor leo venenatis, eget varius odio consequat.",
        },
        {
            title: "The Rise of Artificial Intelligence",
            body: "Praesent tempus nunc eu sapien fermentum fermentum. Nulla vel nisi id libero tincidunt faucibus. Vivamus ac fermentum elit. Nam quis velit et nulla bibendum congue. Suspendisse potenti. Nunc quis tincidunt purus.",
        },
        {
            title: "The Art of Conversation",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl vel sapien consectetur posuere at in elit. Ut id lobortis urna. Nam nec ex sagittis, consectetur metus nec, vulputate orci. Proin nec urna pretium, dictum libero vel, convallis tortor.",
        },
        {
            title: "Exploring the Depths of the Ocean",
            body: "Nullam at fermentum turpis. Nullam scelerisque quam non ligula vestibulum, vel sodales turpis laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce fermentum lacus auctor leo venenatis, eget varius odio consequat.",
        },
    ];

    const getInput = (e) => {
        setText(e);
    };

    useEffect(() => {
        let countWord = 0;
        arrayOfArticle.forEach((eachArticle, index) => {
            const paragraph = document.getElementById(`art-${index}`);
            const textContent = paragraph.textContent.toLocaleLowerCase();
            const word = text.trim();
            const reg = new RegExp(word, "gi");
            const highlight = textContent.replace(
                reg,
                `<span class="bg-yellow-100 py-1 font-bold">${word}</span>`
            );
            if (word !== "") {
                paragraph.innerHTML = highlight;
                countWord += (highlight.match(reg) || []).length;
            } else {
                paragraph.innerText = textContent;
                setWordNumber(0);
            }
        });
        setWordNumber(countWord);
    }, [text]);

    return (
        <div className="App">
            <div className="  w-full flex  justify-center p-10  ">
                <div className="w-3/4 h-full flex items-center flex-col bg-slate-100 py-10 rounded-xl">
                    <div className=" w-2/3 flex flex-col">
                        <div className=" flex relative ">
                            <input
                                onChange={(e) => {
                                    getInput(e.target.value);
                                }}
                                placeholder="Search Text"
                                value={text}
                                className=" bg-gray-100 p-2 w-full  border-solid mb-3 	border-gray-200 border-[1px] rounded "
                            />
                            <img
                                onClick={() => setText("")}
                                src={Xmark}
                                alt="cancel"
                                className="w-4 h-4  cursor-pointer  absolute right-3 top-3   "
                            />
                        </div>

                        <span>{wordNumber} Word Found </span>
                    </div>
                    <div className="w-full flex items-center flex-col ">
                        {arrayOfArticle.map((eachArticle, index) => (
                            <Article
                                key={index}
                                title={eachArticle.title}
                                body={eachArticle.body}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
