import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import loader_gif from "../../assets/loader-ezgif.gif";

const StudyOwl = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "The answer to your question will appear here"
  );
  const [loader, setLoader] = useState(false);

  const generateAnswer = async (e) => {
    setLoader(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take a few seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_GEMINI
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setLoader(false);
  };

  return (
    <div className="min-h-screen pt-24">
      <div>
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 m-auto text-center rounded py-2"
        >
          <h1 className="text-center text-5xl font-bold mb-6">Study Owl</h1>
          <textarea
            required
            className="border rounded w-full my-2 p-3 bg-transparent"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask Study owl for help..."
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
          >
            Generate answer
          </button>
        </form>
        {loader ? (
          <>
            <p className="text-center">{answer}</p>
            <div className="flex justify-center items-center h-[70vh]">
              <img className="w-1/3" src={loader_gif} alt="" />
            </div>
          </>
        ) : (
          <div className="w-full md:w-2/3 m-auto rounded bg-[#13131337] my-6">
            <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyOwl;
