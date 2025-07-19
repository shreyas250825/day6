import "reflect-metadata";

function ValidateEmail(target: any, propertyKey: string, parameterIndex: number) {
  const existingRequiredParams: number[] = Reflect.getOwnMetadata("validate_email", target, propertyKey) || [];
  existingRequiredParams.push(parameterIndex);
  Reflect.defineMetadata("validate_email", existingRequiredParams, target, propertyKey);
}

class UserService {
  register(@ValidateEmail email: string) {
    if (!email.includes("@")) {
      throw new Error("Invalid email!");
    }
    console.log(`Registered with email: ${email}`);
  }
}

new UserService().register("user@example.com"); // works
