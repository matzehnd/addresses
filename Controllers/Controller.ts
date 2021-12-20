import { UseCase } from "./../UseCases/UseCase.ts";
import { Context } from "https://deno.land/x/oak@v10.0.0/context.ts";
import { Request } from "https://deno.land/x/oak@v10.0.0/request.ts";
import { Body } from "../body.ts";

export class Controller<T, S extends Body> {
  constructor(
    private useCase: UseCase<T, S>,
    private permissions: any[] = [],
    private validator: (request: Request) => Promise<T>
  ) {}

  public async handle(ctx: Context) {
    const body = await this.validator(ctx.request);
    await this.checkPermissons(body);
    const res = await this.useCase.execute(body);
    this.prepareResponse(ctx, res);
  }

  private checkPermissons(body: T) {
    const permissionCheck: Promise<any>[] = [];
    this.permissions.forEach((permission) => {
      permissionCheck.push(permission.check(body));
    });
    return Promise.all(permissionCheck);
  }

  private prepareResponse({ request, response }: Context, result: S) {
    if (request.method === "POST") {
      response.status = 201;
    } else {
      response.status = 200;
    }

    response.body = result;
  }
}
