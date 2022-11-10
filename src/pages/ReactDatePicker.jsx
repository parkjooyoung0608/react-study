import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 필요한 언어 import
import { ko } from "date-fns/esm/locale";

import styled from "styled-components";

const MarginBottom = styled.div`
  margin-bottom: 1rem;
`;

const DatePickerCustom = styled(DatePicker)`
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid lightgray;
  font-size: 12px;
`;

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className="container">
      <header>
        <h1>DatePicker</h1>
      </header>

      <section>
        <h3>Default</h3>
        <DatePicker
          locale={ko}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy년 MM월 dd일"
          customInput={<ExampleCustomInput />}
        />
      </section>
      <MarginBottom />

      <section>
        <h3>inline</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          inline
        />
      </section>
      <MarginBottom />

      <section>
        <h3>Custom input</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          customInput={<ExampleCustomInput />}
        />
      </section>
      <MarginBottom />

      <section>
        <h3>시작일 & 종료일</h3>
        <DatePickerCustom
          locale={ko} // 언어
          dateFormat="yyyy년 MM월 dd일" // 날짜 포멧
          selected={startDate} // 선택 : 시작 날짜
          onChange={(date) => setStartDate(date)} // 바뀌면 선택날짜로 바뀜
          selectsStart
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
        />
        <MarginBottom />
        <DatePickerCustom
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </section>
      <MarginBottom />
    </div>
  );
};

export default ReactDatePicker;
