import * as Yup from "yup";
import { camelCasetoNormal } from "../utils";

export const generateSchema = (param) => {
  const labels = Object.keys(param) || [];
  const schema = {};

  labels.map((label) => {
    if (label.indexOf("email") !== -1)
      schema[label] = Yup.string()
        .email(`${camelCasetoNormal(label)} is must be valid`)
        .required(`${camelCasetoNormal(label)} is required`);
    else if (label.indexOf("password") >= 0 || label.indexOf("Password") >= 0)
      schema[label] = Yup.string()
        .min(6)

        .required(`${camelCasetoNormal(label)} is required`);
    else if (label.indexOf("confirm") >= 0)
      schema[label] = Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          "Password is not match to confirm Password"
        )
        .required();
    else
      schema[label] = Yup.string().required(
        `${camelCasetoNormal(label)} is required`
      );
  });
  return Yup.object().shape(schema);
};
