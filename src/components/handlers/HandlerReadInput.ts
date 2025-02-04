import I_clickFunc from "../interfaces/I_clickFunc";
import Input from "../Input";

export default abstract class HandlerReadInput implements I_clickFunc {
  private input: Input;
  private val: string;

  constructor(input: Input) {
    this.input = input;
    this.val = "";
  }

  protected readtInput(): string {
    return this.input.getInput().value;
  }

  protected getValue(): string {
    return this.val;
  }
  protected setValue(value: string) {
    this.val = value;
  }

  abstract func(): void;
}
