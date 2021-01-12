function GenerateActions(type, payload){
  return {
    type: type,
    payload,
  }
}

export default GenerateActions;