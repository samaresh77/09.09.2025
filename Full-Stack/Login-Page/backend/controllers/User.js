import express from "express"


const registerUser = async (req, res) => {
  // Registration logic here
  res.send("User registered");
}

const loginUser = async (req, res) => {
  // Login logic here
  res.send("User logged in");
}

const logoutUser = async (req, res) => {
  // Logout logic here
  res.send("User logged out");
}
const getUserProfile = async (req, res) => {
  // Get user profile logic here
  res.send("User profile data");
}

export { registerUser, loginUser, logoutUser, getUserProfile };

