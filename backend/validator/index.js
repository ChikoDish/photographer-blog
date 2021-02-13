import { check, validationResult } from "express-validator";
//const  = pkg;

export const signupValidator = [
  //check("name", "Name is required").notEmpty();
  check("email", "Should not be empty")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
    }),
  check("password", "Should not be empty").notEmpty(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be 6 character long")
    .matches(/\d/)
    .withMessage("Password must have a number"),
];

export const forgetPasswordValidaor = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];

export const resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const changePasswordValidator = [
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  check("email", "email is required").isEmpty(),
];

// export default {
//   resetPasswordValidator,
//   signupValidation,
//   forgetPasswordValidaor,
// };
