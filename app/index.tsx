import {
  Dimensions
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const buttonSpacing = 2;
const buttonSize = (screenWidth - buttonSpacing * 5) / 4;

const mainButtons = [
  ["C", "÷", "×", "⌫"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
];

const bottomButtons = [
  ["1", "2", "3"],
  ["%", "0", "."],
];

