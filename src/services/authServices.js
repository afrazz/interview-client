import { notification } from "antd";
import instance from "./index";

const authServices = {};

// Register Route
authServices.register = async (data) => {
  try {
    const user = await instance.post("/register", data);
    return user.data;
  } catch (err) {
    console.log(err);
    // TODO: Error handling
    notification.error({ message: err || err?.message });
    // console.log(err.message);
  }
};

export default authServices;
