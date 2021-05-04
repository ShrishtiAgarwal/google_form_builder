import React, { useState } from "react";
import styled from "styled-components";
import FormHeader from "../components/FormHeader";
import { Button, Input, Radio } from "antd";
import {
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

const StyledFormPage = styled.div`
  min-height: 100vh;
  background-color: #ffe3fe;
  & .button {
    display: flex;
    justify-content: center;
    & .component {
      border-radius: 25px;
      outline: none;
      margin-top: 15px;
      width: 200px;
      border: none;
      color: white;
      background: #7306e0;
      font-weight: bold;
      font-size: 16px;
      padding: 10px;
    }
  }
`;

const StyledTextTypeContent = styled.div`
  & .question__container {
    width: 100%;
    display: flex;
    height: fit-content;
    display: flex;
    justify-content: center;
    & .container {
      width: 400px;
      padding: 20px;
      justify-content: flex-start;
      margin-top: 20px;
      background-color: white;
      height: fit-content;
      border-top: 9px solid #7306e0;
      border-left: 5px solid #3edbf0;
      border-bottom: 5px solid #e9e9e9;
      border-right: 5px solid #e9e9e9;
      & .question_type {
        display: flex;
        justify-content: flex-end;
      }
      & .input {
        border: none;
        border-bottom: 3px solid purple;
        margin: 5px;
        outline: none;
      }
      & .add__option {
        border-radius: 25px;
        outline: none;
        margin-top: 15px;
        width: 100px;
        border: none;
        color: white;
        background: #7306e0;
        font-size: bold;
      }
    }

    & .controls {
      background-color: white;
      padding: 5px;
      margin-left: 20px;
      height: fit-content;
      border-top: 9px solid #7306e0;
      margin-top: 20px;
      border-left: 5px solid #3edbf0;
      border-bottom: 5px solid #e9e9e9;
      border-right: 5px solid #e9e9e9;
      outline: none;
    }
  }
`;

const CreateForm = () => {
  const [typeList] = useState(["input", "static", "radio", "dropdown"]);
  const [dataList, setDataList] = useState([
    {
      type: "input",
      question: "",
      answer: "",
    },
  ]);

  const handleDataChange = (e, index) => {
    if (e?.target?.value === "input") {
      if (dataList[index].type === "input") {
        return;
      }
      const tempArray = [...dataList];
      tempArray[index].type = "input";
      tempArray[index].question = tempArray[index].question
        ? tempArray[index].question
        : "";
      tempArray[index].answer = "";
      setDataList(tempArray);
      uiComponent();
    } else if (e.target.value === "radio") {
      if (dataList[index].type === "radio") {
        return;
      }
      const tempArray = [...dataList];
      tempArray[index].type = "radio";
      tempArray[index].question = tempArray[index].question
        ? tempArray[index].question
        : "";
      tempArray[index].radio = [""];
      setDataList(tempArray);
      uiComponent();
    } else if (e.target.value === "static") {
      if (dataList[index].type === "static") {
        return;
      }
      const tempArray = [...dataList];
      tempArray[index].type = "static";
      tempArray[index].text = "";
      setDataList(tempArray);
      uiComponent();
    } else if (e?.target?.value === "dropdown") {
      if (dataList[index].type === "dropdown") {
        return;
      }
      const tempArray = [...dataList];
      tempArray[index].type = "dropdown";
      tempArray[index].question = tempArray[index].question
        ? tempArray[index].question
        : "";
      tempArray[index].radio = [""];
      setDataList(tempArray);
      uiComponent();
    }
  };

  const addOption = (index) => {
    if (
      dataList[index].type === "radio" ||
      dataList[index].type === "dropdown"
    ) {
      const tempArray1 = [...dataList];
      const tempArray = tempArray1[index].radio;
      tempArray.push("");
      tempArray1[index].radio = tempArray;
      setDataList(tempArray1);
      uiComponent();
    }
  };

  const deletItem = (index) => {
    const tempArray1 = [...dataList];
    tempArray1.splice(index, 1);
    setDataList(tempArray1);
  };

  const changeQuestion = (e, index) => {
    const tempArray1 = [...dataList];
    tempArray1[index].question = e.target.value;
    setDataList(tempArray1);
  };

  const changeOptionValue = (e, ind, index) => {
    const tempArray1 = [...dataList];
    tempArray1[index].radio[ind] = e.target.value;
    setDataList(tempArray1);
  };

  const changeText = (e, index) => {
    const tempArray1 = [...dataList];
    tempArray1[index].text = e.target.value;
    setDataList(tempArray1);
  };

  const moveItemDown = (index) => {
    if (index === dataList.length - 1) {
      return;
    }
    const tempArray1 = [...dataList];
    const temp = tempArray1[index];
    tempArray1[index] = tempArray1[index + 1];
    tempArray1[index + 1] = temp;
    setDataList(tempArray1);
  };

  const moveItemUp = (index) => {
    if (index === 0) {
      return;
    }
    const tempArray1 = [...dataList];
    const temp = tempArray1[index];
    tempArray1[index] = tempArray1[index - 1];
    tempArray1[index - 1] = temp;
    setDataList(tempArray1);
  };

  const disableupperArrow = (index) => {
    if (index === 0) {
      return true;
    }
    return false;
  };

  const disableDownArrow = (index) => {
    if (index === dataList.length - 1) {
      return true;
    }
    return false;
  };

  const addComponent = () => {
    const tempArray = [...dataList];
    tempArray.push({
      type: "input",
      question: "",
      answer: "",
    });
    setDataList(tempArray);
    uiComponent();
  };

  function uiComponent() {
    return (
      dataList?.length > 0 &&
      dataList.map((question, index) => (
        <div>
          {question?.type === "input" && (
            <StyledTextTypeContent key={index}>
              <div className="question__container">
                <div className="container">
                  <div className="question_type">
                    <select onChange={(e) => handleDataChange(e, index)}>
                      <option disabled selected>
                        {"Select type"}
                      </option>
                      {typeList.map((data) => (
                        <option className="drop-list" value={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Input
                      className="input"
                      placeholder="Enter Question"
                      value={question.question}
                      onChange={(e) => changeQuestion(e, index)}
                    />
                  </div>
                  <Input
                    placeholder="Text (disabled)"
                    className="input"
                    disabled={true}
                  />
                </div>
                <div className="controls">
                  <div>
                    <ArrowUpOutlined
                      onClick={() => moveItemUp(index)}
                      disabled={disableupperArrow()}
                    />
                  </div>
                  <div>
                    <ArrowDownOutlined
                      onClick={() => moveItemDown(index)}
                      disabled={disableDownArrow()}
                    />
                  </div>
                  <div>
                    <DeleteOutlined onClick={() => deletItem(index)} />
                  </div>
                </div>
              </div>
            </StyledTextTypeContent>
          )}
          {question?.type === "radio" && (
            <StyledTextTypeContent key={index}>
              <div className="question__container">
                <div className="container">
                  <div className="question_type">
                    <select onChange={(e) => handleDataChange(e, index)}>
                      <option disabled selected>
                        {"Select type"}
                      </option>
                      {typeList.map((data) => (
                        <option className="drop-list" value={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Input
                    value={question.question}
                    placeholder="Enter Question"
                    className="input"
                    onChange={(e) => changeQuestion(e, index)}
                  />
                  {question?.radio.map((radioOption, ind) => (
                    <div>
                      <Radio></Radio>
                      <Input
                        placeholder="Enter Option"
                        value={radioOption}
                        className="input"
                        onChange={(e) => changeOptionValue(e, ind, index)}
                      />
                    </div>
                  ))}
                  <Button
                    className="add__option"
                    onClick={() => addOption(index)}
                  >
                    Add
                  </Button>
                </div>
                <div className="controls">
                  <div>
                    <ArrowUpOutlined
                      onClick={() => moveItemUp(index)}
                      disabled={disableupperArrow()}
                    />
                  </div>
                  <div>
                    <ArrowDownOutlined
                      onClick={() => moveItemDown(index)}
                      disabled={disableDownArrow()}
                    />
                  </div>
                  <div>
                    <DeleteOutlined onClick={() => deletItem(index)} />
                  </div>
                </div>
              </div>
            </StyledTextTypeContent>
          )}
          {question?.type === "static" && (
            <StyledTextTypeContent key={index}>
              <div className="question__container">
                <div className="container">
                  <div className="question_type">
                    <select onChange={(e) => handleDataChange(e, index)}>
                      <option disabled selected>
                        {"Select type"}
                      </option>
                      {typeList.map((data) => (
                        <option className="drop-list" value={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p>
                    <Input
                      value={question.text}
                      className="input"
                      placeholder="Enter text"
                      onChange={(e) => changeText(e, index)}
                    />
                  </p>
                </div>
                <div className="controls">
                  <div>
                    <ArrowUpOutlined
                      onClick={() => moveItemUp(index)}
                      disabled={disableupperArrow()}
                    />
                  </div>
                  <div>
                    <ArrowDownOutlined
                      onClick={() => moveItemDown(index)}
                      disabled={disableDownArrow()}
                    />
                  </div>
                  <div>
                    <DeleteOutlined onClick={() => deletItem(index)} />
                  </div>
                </div>
              </div>
            </StyledTextTypeContent>
          )}
          {question?.type === "dropdown" && (
            <StyledTextTypeContent key={index}>
              <div className="question__container">
                <div className="container">
                  <div className="question_type">
                    <select onChange={(e) => handleDataChange(e, index)}>
                      <option disabled selected>
                        {"Select type"}
                      </option>
                      {typeList.map((data) => (
                        <option className="drop-list" value={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p>
                    <Input
                      placeholder="Enter Question"
                      value={question.question}
                      className="input"
                      onChange={(e) => changeQuestion(e, index)}
                    />
                  </p>
                  {question?.radio.map((radioOption, ind) => (
                    <div>
                      {ind + 1}
                      <Input
                        value={radioOption}
                        className="input"
                        placeholder="Enter Option"
                        onChange={(e) => changeOptionValue(e, ind, index)}
                      />
                    </div>
                  ))}
                  <Button
                    className="add__option"
                    onClick={() => addOption(index)}
                  >
                    Add
                  </Button>
                </div>
                <div className="controls">
                  <div>
                    <ArrowUpOutlined
                      onClick={() => moveItemUp(index)}
                      disabled={disableupperArrow()}
                    />
                  </div>
                  <div>
                    <ArrowDownOutlined
                      onClick={() => moveItemDown(index)}
                      disabled={disableDownArrow()}
                    />
                  </div>
                  <div>
                    <DeleteOutlined onClick={() => deletItem(index)} />
                  </div>
                </div>
              </div>
            </StyledTextTypeContent>
          )}
        </div>
      ))
    );
  }

  const downloadComponent = () => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(dataList));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "playmentform.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <StyledFormPage>
      <FormHeader />
      <StyledTextTypeContent>
        <div style={{ height: "80px" }}></div>
      </StyledTextTypeContent>
      {uiComponent()}
      <div className="button">
        <Button className="component" onClick={addComponent}>
          Add component
        </Button>
      </div>
      <div className="button" style={{ paddingBottom: "40px" }}>
        <Button className="component" onClick={downloadComponent}>
          Download
        </Button>
      </div>
    </StyledFormPage>
  );
};

export default CreateForm;
