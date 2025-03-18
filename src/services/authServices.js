import instance from "./instance";

const authServices = {
  register: async (data) => {
    return await instance.post("/auth/register", data);
  },
  login: async (data) => {
    try {
      const response = await instance.post("/auth/login", data);

      const { message, token, role, freelancerID, user, email } = response.data;
      const username = user.username;
      const clientname = user.name;
      const clientID = user._id;

      if (token) {
        // Store the token in localStorage (or sessionStorage if needed)
        localStorage.setItem("token", token); // Store the JWT
        localStorage.setItem("role", role);
        localStorage.setItem("freelancerID", freelancerID);
        localStorage.setItem("clientID", clientID);
        localStorage.setItem("username", username);
        localStorage.setItem("clientname", clientname);
        localStorage.setItem("email", email);
      }

      return { ...response.data, role, freelancerID, username, email };
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed. Please check your credentials.");
    }
  },
  forgotPassword: async (data) => {
    return await instance.post("/auth/forgot-password", data);
  },
  resetPassword: async (token, data) => {
    return await instance.post(`/auth/reset-password/${token}`, data);
  },
};

export default authServices;
