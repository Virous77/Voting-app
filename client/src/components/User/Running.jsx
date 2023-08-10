import { useQuery } from "react-query";
import { getAPI } from "../apis/apis";
import { useGlobalContext } from "../../store/globalContext";
import { getLocalData } from "../../utils/utils";

const Running = () => {
  const { handleSetNotification } = useGlobalContext();
  const id = getLocalData("vId");

  const { data, isLoading } = useQuery("running", {
    queryFn: () => {
      return getAPI({
        endPoints: `/vote?admin_address=${id}&startDate=${new Date()}&endDate=${new Date()}`,
      });
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return <div>Running</div>;
};

export default Running;
