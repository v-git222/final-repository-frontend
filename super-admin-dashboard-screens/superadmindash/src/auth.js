import axios from "axios";

export async function loginAdmin() {
  try {
    const res = await axios.post("/api/superadmin/auth/login/", {
      username: "admin",
      password: "Qazxsw12#",
    });

    const token = res.data.token;
    localStorage.setItem("token", token);
    console.log("TOKEN SAVED:", token);

    return token;
  } catch (err) {
    console.error("Login failed:", err);
  }
}
