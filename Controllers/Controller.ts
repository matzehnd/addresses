import { UseCase } from "./../UseCases/UseCase.ts";
import { Request } from "https://deno.land/x/oak@v10.0.0/request.ts";
import { Body } from "../body.ts";
import { Context } from "https://deno.land/x/oak@v10.0.0/context.ts";
import {
  RouterContext,
  RouteParams,
} from "https://deno.land/x/oak@v10.0.0/router.ts";

export class Controller<
  T,
  S extends Body,
  R extends string,
  B extends { [index: string]: any }
> {
  constructor(
    public route: R,
    private useCase: UseCase<T & B, S>,
    private permissions: any[] = [],
    private validator: (request: Request) => Promise<T>,
    private paramGetter: (params: RouteParams<R>) => Promise<B>
  ) {
    this.handle = this.handle.bind(this);
  }

  public async handle<P extends RouteParams<R> = RouteParams<R>>(
    ctx: RouterContext<R, P>
  ) {
    const params = await this.paramGetter(ctx.params);

    const body = await this.validator(ctx.request);
    await this.checkPermissons(body);
    const res = await this.useCase.execute({ ...body, ...params });
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
