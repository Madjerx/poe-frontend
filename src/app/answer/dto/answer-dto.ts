export class AnswerDto {
    public id?: number;
    public text: string = '';

    public constructor(formValues: any) {
        Object.assign(this, formValues);
      }
    
}
