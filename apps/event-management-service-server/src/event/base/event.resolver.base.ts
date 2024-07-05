/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Event } from "./Event";
import { EventCountArgs } from "./EventCountArgs";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventFindUniqueArgs } from "./EventFindUniqueArgs";
import { CreateEventArgs } from "./CreateEventArgs";
import { UpdateEventArgs } from "./UpdateEventArgs";
import { DeleteEventArgs } from "./DeleteEventArgs";
import { UserInterestFindManyArgs } from "../../userInterest/base/UserInterestFindManyArgs";
import { UserInterest } from "../../userInterest/base/UserInterest";
import { Profile } from "../../profile/base/Profile";
import { EventService } from "../event.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Event)
export class EventResolverBase {
  constructor(
    protected readonly service: EventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async _eventsMeta(
    @graphql.Args() args: EventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Event])
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async events(@graphql.Args() args: EventFindManyArgs): Promise<Event[]> {
    return this.service.events(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Event, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "own",
  })
  async event(
    @graphql.Args() args: EventFindUniqueArgs
  ): Promise<Event | null> {
    const result = await this.service.event(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "create",
    possession: "any",
  })
  async createEvent(@graphql.Args() args: CreateEventArgs): Promise<Event> {
    return await this.service.createEvent({
      ...args,
      data: {
        ...args.data,

        profile: args.data.profile
          ? {
              connect: args.data.profile,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updateEvent(
    @graphql.Args() args: UpdateEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.updateEvent({
        ...args,
        data: {
          ...args.data,

          profile: args.data.profile
            ? {
                connect: args.data.profile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "delete",
    possession: "any",
  })
  async deleteEvent(
    @graphql.Args() args: DeleteEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.deleteEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UserInterest], { name: "userInterests" })
  @nestAccessControl.UseRoles({
    resource: "UserInterest",
    action: "read",
    possession: "any",
  })
  async findUserInterests(
    @graphql.Parent() parent: Event,
    @graphql.Args() args: UserInterestFindManyArgs
  ): Promise<UserInterest[]> {
    const results = await this.service.findUserInterests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Profile, {
    nullable: true,
    name: "profile",
  })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async getProfile(@graphql.Parent() parent: Event): Promise<Profile | null> {
    const result = await this.service.getProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
