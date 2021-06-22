import axios from "axios";

export const fetchCMSData = (dispatch) => {
    
  dispatch({ type: FETCH_CMS_DATA });

  axios.get("https://data.cms.gov/provider-data/api/1/metastore/schemas/dataset/items")
  //https://data.cms.gov/provider-data/api/1/metastore/schemas/dataset/items
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_CMS_OK, payload: res.data});
    })

      // display error message if any
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_CMS_ERROR, payload: err });
    })

}