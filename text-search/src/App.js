import { useEffect, useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [wordNumber, setWordNumber] = useState(0);

    const getInput = (e) => {
        setText(e);
    };

    useEffect(() => {
        const paragraph = document.getElementById("paragraph");
        const textContent = paragraph.textContent;
        const word = text.trim();

        console.log(text);

        const reg = new RegExp(word, "gi");
        const highlight = textContent.replace(
            reg,
            `<span class = "bg-yellow-100 p-1 font-bold "> ${word}</span>`
        );
        if (word !== "") {
            paragraph.innerHTML = highlight;
            setWordNumber(() => (highlight.match(reg) || []).length);
        } else {
            paragraph.innerText = textContent;
            setWordNumber(0);
        }
        
    }, [text]);

    return (
        <div className="App">
            <div className="p-10">
                <div className="flex flex-col">
                    <input
                        onChange={(e) => {
                            getInput(e.target.value);
                        }}
                        className=" bg-gray-100 p-2 w-1/2 border-solid mb-3	border-gray-200 border-[1px] rounded "
                    />
                    <span>{wordNumber} Word Found </span>
                </div>
                <div className="w-1/2 pt-5 pb-5">
                    <h2 className=" text-xl mb-5 font-bold"> Search Text </h2>
                    <p id="paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cupiditate ullam, ad doloremque vel esse modi
                        asperiores voluptatibus possimus eius quia eum omnis
                        corporis. Sint hic fugiat et at asperiores impedit
                        obcaecati odit provident culpa distinctio. Numquam
                        cumque autem temporibus aspernatur? Cum repellat minima
                        mollitia laudantium pariatur dolorum nisi, consequuntur
                        laboriosam culpa neque sequi deleniti incidunt.
                        Laudantium a praesentium aliquam numquam beatae eos
                        repellendus atque quam unde sint. Reiciendis fugit
                        placeat minus maiores natus quas, ea, quibusdam eum hic
                        doloribus vitae corporis necessitatibus ratione sint
                        commodi tempore possimus asperiores laboriosam? Quisquam
                        ipsum labore adipisci velit veritatis vel saepe mollitia
                        quasi cumque?
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default App;
