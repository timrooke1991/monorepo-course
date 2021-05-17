/**
 * @packageDocumentation
 *
 * <h3>Why does this library exist?</h3>
 *
 * `@shlack/types` is a package containing broadly-useful
 * types and type guards for our demo slack app. This is part of Mike's
 *
 * If you want to watch a recorded video of this course, look for it
 * on <a href="https://frontendmasters.com" target="_blank">FrontEnd Masters</a>
 *
 * @remarks
 * All interfaces are prefixed with `I`
 *
 * @packageDocumentation
 */
export { isChannel, isMessage, isTeam, isTypedArray } from "./type-guards";
export { IChannel, IMessage, ITeam, IUser } from "./types";
