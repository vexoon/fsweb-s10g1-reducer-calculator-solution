
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  MEMORY_PLUS,
  DIGIT,
  CALCULATE,
  
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "-",
  memory: 100,
  screen: "0",
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const typeDigit = (screen, numKey) => {
  // return screen.toString() + numKey.toString();
  console.log(screen, numKey);
  return `${screen}${numKey}`;
};

// const [value, setValue] = useState()
// const reducer = (state = initialState, action) => {
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: state.screen,
        screen: 0,
      };

    case CLEAR:
      return {
        ...state,
        total: 0,
        screen: 0,
        temp: 0,
      };

    case MEMORY_CLEAR: {
      return {
        ...state,
        memory: 0,
      };
    }

    case MEMORY_RECALL: {
      return {
        ...state,
        screen: calculateResult(state.screen, state.memory, state.operation),
        total: calculateResult(state.screen, state.memory, state.operation),
      };
    }

    case MEMORY_PLUS: {
      return {
        ...state,
        memory: state.total,
      };
    }

    case DIGIT: {
      return {
        ...state,
        screen:
          state.screen === 0
            ? action.payload
            : typeDigit(state.screen, action.payload),
      };
    }

    case CALCULATE: {
      const calculation = calculateResult(
        state.screen,
        state.temp,
        state.operation
      );

      return { ...state, total: calculation, screen: calculation, temp: 0 };
    }

    default:
      return state;
  }
};

export default reducer;
