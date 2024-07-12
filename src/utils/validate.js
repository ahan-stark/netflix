export const checkValidateData = (email, password,name = null) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidate = emailRegex.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordValidate = passwordRegex.test(password);
  if (!emailValidate) return "email is not valid";
  if (!passwordValidate) return "password is not valid";
  return null;
};
