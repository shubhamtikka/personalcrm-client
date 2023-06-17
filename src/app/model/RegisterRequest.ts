export class RegisterRequest {
  firstName!: string;
  lastName!: string;
  emailId!: string;
  password!: string;

  public isValid(): boolean {
    return (
      !!this.firstName || !!this.lastName || !!this.emailId || !!this.password
    );
  }
}
