import React from "react";
import MaskedInput from "react-text-mask";

export const textMaskPhone = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const onlyLetters = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
        /([A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑÜ ])/,
      ]} //200
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskCEP = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};

export const agencyAccount = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/^[0-9]*$/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};

export const textMaskPlate = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskCredit = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskCredVal = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, "/", /\d/, /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskCredCvv = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskRG = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /[a-z\d]/,
        /[a-z\d]/,
        ".",
        /[a-z\d]/,
        /[a-z\d]/,
        /[a-z\d]/,
        ".",
        /[a-z\d]/,
        /[a-z\d]/,
        /[a-z\d]/,
        "-",
        /[a-z\d]/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskCNPJ = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskBankAg = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskBankAcc = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, "-", /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskChassi = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskRenavan = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};

export const textMaskCNH = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskNF = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]} //100
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskOrgao = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/[a-z\A-Z]/, /[a-z\A-Z]/, /[a-z\A-Z]/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskUF = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/[a-z\A-Z]/, /[a-z\A-Z]/]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskDispositivoSeg = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};
export const textMaskCpf = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};

export const textMaskNumber= (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,
        /[a-z\A-Z\d]/,      
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      keepCharPositions={false}
    />
  );
};


export function CheckCPF(cpf) {
  if (!cpf) {
    const cpft = "00000000000";
    const test = cpft.replace(/[^\d]+/g, "");
    if (!/[0-9]{11}/.test(test)) return false;
    cpf = test;
  } else {
    const test = cpf.replace(/[^\d]+/g, "");
    if (!/[0-9]{11}/.test(test)) return false;
    if (cpf === "00000000000") return false;
    cpf = test;
  }
  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  )
    return false;
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;
  return true;
}
export function nameField(value) {
  if (!value) return false;
  const letters = /^([a-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇ ]{2,}\s[a-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇ ]{1,})/i;
  const name = value;
  if (name.match(letters)) {
    return true;
  } else {
    return false;
  }
}

export function fromThisYear(value) {
  let minYear = 2020,
    maxYear = 10;
  let thisYear = new Date().getFullYear();
  let fromYear = [];
  for (let x = 0; x <= maxYear; x++) {
    fromYear.push(thisYear + x);
  }
}

