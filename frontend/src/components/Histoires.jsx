import React, { useEffect } from "react";
import Cardpost from "./Cardpost";
import { useSelector, useDispatch } from "react-redux";
import { getpost } from "../JS/userSlice/postSlice";

function Histoires() {
  const dispatch = useDispatch();
  const poste = useSelector((state) => state.post?.postlist || []);

  useEffect(() => {
    dispatch(getpost()); // جلب البيانات عند تحميل الصفحة
  }, [dispatch]);


  return (
    <div>
      {poste.length > 0 ? (
        poste.map((el) => <Cardpost key={el._id} product={el} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Histoires;
