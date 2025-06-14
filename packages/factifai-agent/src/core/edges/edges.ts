import { GraphStateType } from "../graph/graph";

export const shouldContinueEdge = (state: GraphStateType) => {
  if (state.isComplete === false) {
    return "tools";
  }

  return "end";
};

export const shouldGenerateReport = (state: GraphStateType) => {
  // Skip report generation if noReport flag is set
  if (state.noReport === true) {
    return "end";
  }
  
  if (state.isComplete === true) {
    return "report";
  }

  return "end";
};
