interface IAction {
  type: string;
}

interface IPayloadAction extends IAction {
  payload?: { [key: string]: any };
}
