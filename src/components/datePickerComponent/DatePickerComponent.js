import { useState } from "react";
import "./datePickerComponent.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { resetGallary, getPicturesByIndex } from "../../redux/action/gallery";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleDateChange = (data) => {
    setStartDate(data);
    dispatch(resetGallary());
    dispatch(getPicturesByIndex(1));
  };
  return (
    <div className="pickerDate_container">
      <div>
        <DatePicker
          className="datePicker"
          selected={startDate}
          dateFormat="Pp"
          onChange={(date) => handleDateChange(date)}
        />
      </div>
    </div>
  );
}

export default DatePickerComponent;
