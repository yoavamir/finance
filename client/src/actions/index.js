import fileUpload from "../apis/fileUpload";
import history from "../history";

export const uploadFile = (formData) => async (dispatch) => {
  const response = await fileUpload.post("/upload_file", formData);
  dispatch({ type: "UPLOAD_FILE", payload: response.data });
  history.push("/");
};

export const getTotalAmount = (filename) => async (dispatch) => {
  const response = await fileUpload.get("/total_amount", {
    params: { filename },
  });
  dispatch({ type: "TOTAL_AMOUNT", payload: response.data });
};
