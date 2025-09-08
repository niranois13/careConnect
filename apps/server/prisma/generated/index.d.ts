
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CareSeeker
 * 
 */
export type CareSeeker = $Result.DefaultSelection<Prisma.$CareSeekerPayload>
/**
 * Model Professional
 * 
 */
export type Professional = $Result.DefaultSelection<Prisma.$ProfessionalPayload>
/**
 * Model Profession
 * 
 */
export type Profession = $Result.DefaultSelection<Prisma.$ProfessionPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careSeeker`: Exposes CRUD operations for the **CareSeeker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareSeekers
    * const careSeekers = await prisma.careSeeker.findMany()
    * ```
    */
  get careSeeker(): Prisma.CareSeekerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professional`: Exposes CRUD operations for the **Professional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professionals
    * const professionals = await prisma.professional.findMany()
    * ```
    */
  get professional(): Prisma.ProfessionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession`: Exposes CRUD operations for the **Profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.ProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CareSeeker: 'CareSeeker',
    Professional: 'Professional',
    Profession: 'Profession',
    Address: 'Address',
    Availability: 'Availability',
    Appointment: 'Appointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "careSeeker" | "professional" | "profession" | "address" | "availability" | "appointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CareSeeker: {
        payload: Prisma.$CareSeekerPayload<ExtArgs>
        fields: Prisma.CareSeekerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareSeekerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareSeekerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>
          }
          findFirst: {
            args: Prisma.CareSeekerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareSeekerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>
          }
          findMany: {
            args: Prisma.CareSeekerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>[]
          }
          create: {
            args: Prisma.CareSeekerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>
          }
          createMany: {
            args: Prisma.CareSeekerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareSeekerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>[]
          }
          delete: {
            args: Prisma.CareSeekerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>
          }
          update: {
            args: Prisma.CareSeekerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>
          }
          deleteMany: {
            args: Prisma.CareSeekerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareSeekerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareSeekerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>[]
          }
          upsert: {
            args: Prisma.CareSeekerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareSeekerPayload>
          }
          aggregate: {
            args: Prisma.CareSeekerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareSeeker>
          }
          groupBy: {
            args: Prisma.CareSeekerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareSeekerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareSeekerCountArgs<ExtArgs>
            result: $Utils.Optional<CareSeekerCountAggregateOutputType> | number
          }
        }
      }
      Professional: {
        payload: Prisma.$ProfessionalPayload<ExtArgs>
        fields: Prisma.ProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findMany: {
            args: Prisma.ProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          create: {
            args: Prisma.ProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          createMany: {
            args: Prisma.ProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          delete: {
            args: Prisma.ProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          update: {
            args: Prisma.ProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessional>
          }
          groupBy: {
            args: Prisma.ProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalCountAggregateOutputType> | number
          }
        }
      }
      Profession: {
        payload: Prisma.$ProfessionPayload<ExtArgs>
        fields: Prisma.ProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findFirst: {
            args: Prisma.ProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findMany: {
            args: Prisma.ProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          create: {
            args: Prisma.ProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          createMany: {
            args: Prisma.ProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          delete: {
            args: Prisma.ProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          update: {
            args: Prisma.ProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.ProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    careSeeker?: CareSeekerOmit
    professional?: ProfessionalOmit
    profession?: ProfessionOmit
    address?: AddressOmit
    availability?: AvailabilityOmit
    appointment?: AppointmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    careSeekers: number
    professionals: number
    address: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careSeekers?: boolean | UserCountOutputTypeCountCareSeekersArgs
    professionals?: boolean | UserCountOutputTypeCountProfessionalsArgs
    address?: boolean | UserCountOutputTypeCountAddressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCareSeekersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareSeekerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * Count Type CareSeekerCountOutputType
   */

  export type CareSeekerCountOutputType = {
    Appointments: number
  }

  export type CareSeekerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | CareSeekerCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * CareSeekerCountOutputType without action
   */
  export type CareSeekerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeekerCountOutputType
     */
    select?: CareSeekerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareSeekerCountOutputType without action
   */
  export type CareSeekerCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type ProfessionalCountOutputType
   */

  export type ProfessionalCountOutputType = {
    Availabilities: number
    Appointments: number
  }

  export type ProfessionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Availabilities?: boolean | ProfessionalCountOutputTypeCountAvailabilitiesArgs
    Appointments?: boolean | ProfessionalCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalCountOutputType
     */
    select?: ProfessionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    professionals: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | ProfessionCountOutputTypeCountProfessionalsArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    careSeekerAppointments: number
    professionalAppointments: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careSeekerAppointments?: boolean | AddressCountOutputTypeCountCareSeekerAppointmentsArgs
    professionalAppointments?: boolean | AddressCountOutputTypeCountProfessionalAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountCareSeekerAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountProfessionalAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phoneNumber: number
    role: number
    createdAt: number
    updatedAt: number
    emailVerified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    emailVerified: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    careSeekers?: boolean | User$careSeekersArgs<ExtArgs>
    professionals?: boolean | User$professionalsArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phoneNumber" | "role" | "createdAt" | "updatedAt" | "emailVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careSeekers?: boolean | User$careSeekersArgs<ExtArgs>
    professionals?: boolean | User$professionalsArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      careSeekers: Prisma.$CareSeekerPayload<ExtArgs>[]
      professionals: Prisma.$ProfessionalPayload<ExtArgs>[]
      address: Prisma.$AddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phoneNumber: string | null
      role: string
      createdAt: Date
      updatedAt: Date
      emailVerified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careSeekers<T extends User$careSeekersArgs<ExtArgs> = {}>(args?: Subset<T, User$careSeekersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionals<T extends User$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, User$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.careSeekers
   */
  export type User$careSeekersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    where?: CareSeekerWhereInput
    orderBy?: CareSeekerOrderByWithRelationInput | CareSeekerOrderByWithRelationInput[]
    cursor?: CareSeekerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareSeekerScalarFieldEnum | CareSeekerScalarFieldEnum[]
  }

  /**
   * User.professionals
   */
  export type User$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CareSeeker
   */

  export type AggregateCareSeeker = {
    _count: CareSeekerCountAggregateOutputType | null
    _min: CareSeekerMinAggregateOutputType | null
    _max: CareSeekerMaxAggregateOutputType | null
  }

  export type CareSeekerMinAggregateOutputType = {
    userId: string | null
    isHelper: boolean | null
    addressId: string | null
  }

  export type CareSeekerMaxAggregateOutputType = {
    userId: string | null
    isHelper: boolean | null
    addressId: string | null
  }

  export type CareSeekerCountAggregateOutputType = {
    userId: number
    isHelper: number
    addressId: number
    _all: number
  }


  export type CareSeekerMinAggregateInputType = {
    userId?: true
    isHelper?: true
    addressId?: true
  }

  export type CareSeekerMaxAggregateInputType = {
    userId?: true
    isHelper?: true
    addressId?: true
  }

  export type CareSeekerCountAggregateInputType = {
    userId?: true
    isHelper?: true
    addressId?: true
    _all?: true
  }

  export type CareSeekerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareSeeker to aggregate.
     */
    where?: CareSeekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareSeekers to fetch.
     */
    orderBy?: CareSeekerOrderByWithRelationInput | CareSeekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareSeekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareSeekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareSeekers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareSeekers
    **/
    _count?: true | CareSeekerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareSeekerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareSeekerMaxAggregateInputType
  }

  export type GetCareSeekerAggregateType<T extends CareSeekerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareSeeker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareSeeker[P]>
      : GetScalarType<T[P], AggregateCareSeeker[P]>
  }




  export type CareSeekerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareSeekerWhereInput
    orderBy?: CareSeekerOrderByWithAggregationInput | CareSeekerOrderByWithAggregationInput[]
    by: CareSeekerScalarFieldEnum[] | CareSeekerScalarFieldEnum
    having?: CareSeekerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareSeekerCountAggregateInputType | true
    _min?: CareSeekerMinAggregateInputType
    _max?: CareSeekerMaxAggregateInputType
  }

  export type CareSeekerGroupByOutputType = {
    userId: string
    isHelper: boolean
    addressId: string | null
    _count: CareSeekerCountAggregateOutputType | null
    _min: CareSeekerMinAggregateOutputType | null
    _max: CareSeekerMaxAggregateOutputType | null
  }

  type GetCareSeekerGroupByPayload<T extends CareSeekerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareSeekerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareSeekerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareSeekerGroupByOutputType[P]>
            : GetScalarType<T[P], CareSeekerGroupByOutputType[P]>
        }
      >
    >


  export type CareSeekerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    isHelper?: boolean
    addressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Appointments?: boolean | CareSeeker$AppointmentsArgs<ExtArgs>
    _count?: boolean | CareSeekerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careSeeker"]>

  export type CareSeekerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    isHelper?: boolean
    addressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careSeeker"]>

  export type CareSeekerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    isHelper?: boolean
    addressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careSeeker"]>

  export type CareSeekerSelectScalar = {
    userId?: boolean
    isHelper?: boolean
    addressId?: boolean
  }

  export type CareSeekerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "isHelper" | "addressId", ExtArgs["result"]["careSeeker"]>
  export type CareSeekerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Appointments?: boolean | CareSeeker$AppointmentsArgs<ExtArgs>
    _count?: boolean | CareSeekerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareSeekerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CareSeekerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CareSeekerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareSeeker"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      isHelper: boolean
      addressId: string | null
    }, ExtArgs["result"]["careSeeker"]>
    composites: {}
  }

  type CareSeekerGetPayload<S extends boolean | null | undefined | CareSeekerDefaultArgs> = $Result.GetResult<Prisma.$CareSeekerPayload, S>

  type CareSeekerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareSeekerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareSeekerCountAggregateInputType | true
    }

  export interface CareSeekerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareSeeker'], meta: { name: 'CareSeeker' } }
    /**
     * Find zero or one CareSeeker that matches the filter.
     * @param {CareSeekerFindUniqueArgs} args - Arguments to find a CareSeeker
     * @example
     * // Get one CareSeeker
     * const careSeeker = await prisma.careSeeker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareSeekerFindUniqueArgs>(args: SelectSubset<T, CareSeekerFindUniqueArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareSeeker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareSeekerFindUniqueOrThrowArgs} args - Arguments to find a CareSeeker
     * @example
     * // Get one CareSeeker
     * const careSeeker = await prisma.careSeeker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareSeekerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareSeekerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareSeeker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerFindFirstArgs} args - Arguments to find a CareSeeker
     * @example
     * // Get one CareSeeker
     * const careSeeker = await prisma.careSeeker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareSeekerFindFirstArgs>(args?: SelectSubset<T, CareSeekerFindFirstArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareSeeker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerFindFirstOrThrowArgs} args - Arguments to find a CareSeeker
     * @example
     * // Get one CareSeeker
     * const careSeeker = await prisma.careSeeker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareSeekerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareSeekerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareSeekers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareSeekers
     * const careSeekers = await prisma.careSeeker.findMany()
     * 
     * // Get first 10 CareSeekers
     * const careSeekers = await prisma.careSeeker.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const careSeekerWithUserIdOnly = await prisma.careSeeker.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends CareSeekerFindManyArgs>(args?: SelectSubset<T, CareSeekerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareSeeker.
     * @param {CareSeekerCreateArgs} args - Arguments to create a CareSeeker.
     * @example
     * // Create one CareSeeker
     * const CareSeeker = await prisma.careSeeker.create({
     *   data: {
     *     // ... data to create a CareSeeker
     *   }
     * })
     * 
     */
    create<T extends CareSeekerCreateArgs>(args: SelectSubset<T, CareSeekerCreateArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareSeekers.
     * @param {CareSeekerCreateManyArgs} args - Arguments to create many CareSeekers.
     * @example
     * // Create many CareSeekers
     * const careSeeker = await prisma.careSeeker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareSeekerCreateManyArgs>(args?: SelectSubset<T, CareSeekerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareSeekers and returns the data saved in the database.
     * @param {CareSeekerCreateManyAndReturnArgs} args - Arguments to create many CareSeekers.
     * @example
     * // Create many CareSeekers
     * const careSeeker = await prisma.careSeeker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareSeekers and only return the `userId`
     * const careSeekerWithUserIdOnly = await prisma.careSeeker.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareSeekerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareSeekerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareSeeker.
     * @param {CareSeekerDeleteArgs} args - Arguments to delete one CareSeeker.
     * @example
     * // Delete one CareSeeker
     * const CareSeeker = await prisma.careSeeker.delete({
     *   where: {
     *     // ... filter to delete one CareSeeker
     *   }
     * })
     * 
     */
    delete<T extends CareSeekerDeleteArgs>(args: SelectSubset<T, CareSeekerDeleteArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareSeeker.
     * @param {CareSeekerUpdateArgs} args - Arguments to update one CareSeeker.
     * @example
     * // Update one CareSeeker
     * const careSeeker = await prisma.careSeeker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareSeekerUpdateArgs>(args: SelectSubset<T, CareSeekerUpdateArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareSeekers.
     * @param {CareSeekerDeleteManyArgs} args - Arguments to filter CareSeekers to delete.
     * @example
     * // Delete a few CareSeekers
     * const { count } = await prisma.careSeeker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareSeekerDeleteManyArgs>(args?: SelectSubset<T, CareSeekerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareSeekers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareSeekers
     * const careSeeker = await prisma.careSeeker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareSeekerUpdateManyArgs>(args: SelectSubset<T, CareSeekerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareSeekers and returns the data updated in the database.
     * @param {CareSeekerUpdateManyAndReturnArgs} args - Arguments to update many CareSeekers.
     * @example
     * // Update many CareSeekers
     * const careSeeker = await prisma.careSeeker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareSeekers and only return the `userId`
     * const careSeekerWithUserIdOnly = await prisma.careSeeker.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareSeekerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareSeekerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareSeeker.
     * @param {CareSeekerUpsertArgs} args - Arguments to update or create a CareSeeker.
     * @example
     * // Update or create a CareSeeker
     * const careSeeker = await prisma.careSeeker.upsert({
     *   create: {
     *     // ... data to create a CareSeeker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareSeeker we want to update
     *   }
     * })
     */
    upsert<T extends CareSeekerUpsertArgs>(args: SelectSubset<T, CareSeekerUpsertArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareSeekers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerCountArgs} args - Arguments to filter CareSeekers to count.
     * @example
     * // Count the number of CareSeekers
     * const count = await prisma.careSeeker.count({
     *   where: {
     *     // ... the filter for the CareSeekers we want to count
     *   }
     * })
    **/
    count<T extends CareSeekerCountArgs>(
      args?: Subset<T, CareSeekerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareSeekerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareSeeker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareSeekerAggregateArgs>(args: Subset<T, CareSeekerAggregateArgs>): Prisma.PrismaPromise<GetCareSeekerAggregateType<T>>

    /**
     * Group by CareSeeker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareSeekerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareSeekerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareSeekerGroupByArgs['orderBy'] }
        : { orderBy?: CareSeekerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareSeekerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareSeekerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareSeeker model
   */
  readonly fields: CareSeekerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareSeeker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareSeekerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Appointments<T extends CareSeeker$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, CareSeeker$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareSeeker model
   */
  interface CareSeekerFieldRefs {
    readonly userId: FieldRef<"CareSeeker", 'String'>
    readonly isHelper: FieldRef<"CareSeeker", 'Boolean'>
    readonly addressId: FieldRef<"CareSeeker", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CareSeeker findUnique
   */
  export type CareSeekerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * Filter, which CareSeeker to fetch.
     */
    where: CareSeekerWhereUniqueInput
  }

  /**
   * CareSeeker findUniqueOrThrow
   */
  export type CareSeekerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * Filter, which CareSeeker to fetch.
     */
    where: CareSeekerWhereUniqueInput
  }

  /**
   * CareSeeker findFirst
   */
  export type CareSeekerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * Filter, which CareSeeker to fetch.
     */
    where?: CareSeekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareSeekers to fetch.
     */
    orderBy?: CareSeekerOrderByWithRelationInput | CareSeekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareSeekers.
     */
    cursor?: CareSeekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareSeekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareSeekers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareSeekers.
     */
    distinct?: CareSeekerScalarFieldEnum | CareSeekerScalarFieldEnum[]
  }

  /**
   * CareSeeker findFirstOrThrow
   */
  export type CareSeekerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * Filter, which CareSeeker to fetch.
     */
    where?: CareSeekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareSeekers to fetch.
     */
    orderBy?: CareSeekerOrderByWithRelationInput | CareSeekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareSeekers.
     */
    cursor?: CareSeekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareSeekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareSeekers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareSeekers.
     */
    distinct?: CareSeekerScalarFieldEnum | CareSeekerScalarFieldEnum[]
  }

  /**
   * CareSeeker findMany
   */
  export type CareSeekerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * Filter, which CareSeekers to fetch.
     */
    where?: CareSeekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareSeekers to fetch.
     */
    orderBy?: CareSeekerOrderByWithRelationInput | CareSeekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareSeekers.
     */
    cursor?: CareSeekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareSeekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareSeekers.
     */
    skip?: number
    distinct?: CareSeekerScalarFieldEnum | CareSeekerScalarFieldEnum[]
  }

  /**
   * CareSeeker create
   */
  export type CareSeekerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * The data needed to create a CareSeeker.
     */
    data: XOR<CareSeekerCreateInput, CareSeekerUncheckedCreateInput>
  }

  /**
   * CareSeeker createMany
   */
  export type CareSeekerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareSeekers.
     */
    data: CareSeekerCreateManyInput | CareSeekerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareSeeker createManyAndReturn
   */
  export type CareSeekerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * The data used to create many CareSeekers.
     */
    data: CareSeekerCreateManyInput | CareSeekerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareSeeker update
   */
  export type CareSeekerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * The data needed to update a CareSeeker.
     */
    data: XOR<CareSeekerUpdateInput, CareSeekerUncheckedUpdateInput>
    /**
     * Choose, which CareSeeker to update.
     */
    where: CareSeekerWhereUniqueInput
  }

  /**
   * CareSeeker updateMany
   */
  export type CareSeekerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareSeekers.
     */
    data: XOR<CareSeekerUpdateManyMutationInput, CareSeekerUncheckedUpdateManyInput>
    /**
     * Filter which CareSeekers to update
     */
    where?: CareSeekerWhereInput
    /**
     * Limit how many CareSeekers to update.
     */
    limit?: number
  }

  /**
   * CareSeeker updateManyAndReturn
   */
  export type CareSeekerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * The data used to update CareSeekers.
     */
    data: XOR<CareSeekerUpdateManyMutationInput, CareSeekerUncheckedUpdateManyInput>
    /**
     * Filter which CareSeekers to update
     */
    where?: CareSeekerWhereInput
    /**
     * Limit how many CareSeekers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareSeeker upsert
   */
  export type CareSeekerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * The filter to search for the CareSeeker to update in case it exists.
     */
    where: CareSeekerWhereUniqueInput
    /**
     * In case the CareSeeker found by the `where` argument doesn't exist, create a new CareSeeker with this data.
     */
    create: XOR<CareSeekerCreateInput, CareSeekerUncheckedCreateInput>
    /**
     * In case the CareSeeker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareSeekerUpdateInput, CareSeekerUncheckedUpdateInput>
  }

  /**
   * CareSeeker delete
   */
  export type CareSeekerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
    /**
     * Filter which CareSeeker to delete.
     */
    where: CareSeekerWhereUniqueInput
  }

  /**
   * CareSeeker deleteMany
   */
  export type CareSeekerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareSeekers to delete
     */
    where?: CareSeekerWhereInput
    /**
     * Limit how many CareSeekers to delete.
     */
    limit?: number
  }

  /**
   * CareSeeker.Appointments
   */
  export type CareSeeker$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * CareSeeker without action
   */
  export type CareSeekerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareSeeker
     */
    select?: CareSeekerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareSeeker
     */
    omit?: CareSeekerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareSeekerInclude<ExtArgs> | null
  }


  /**
   * Model Professional
   */

  export type AggregateProfessional = {
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  export type ProfessionalAvgAggregateOutputType = {
    interventionRadius: number | null
  }

  export type ProfessionalSumAggregateOutputType = {
    interventionRadius: number | null
  }

  export type ProfessionalMinAggregateOutputType = {
    userId: string | null
    professionId: string | null
    isMobile: boolean | null
    interventionRadius: number | null
    siret: string | null
    isSiretValid: boolean | null
  }

  export type ProfessionalMaxAggregateOutputType = {
    userId: string | null
    professionId: string | null
    isMobile: boolean | null
    interventionRadius: number | null
    siret: string | null
    isSiretValid: boolean | null
  }

  export type ProfessionalCountAggregateOutputType = {
    userId: number
    professionId: number
    isMobile: number
    interventionRadius: number
    siret: number
    isSiretValid: number
    _all: number
  }


  export type ProfessionalAvgAggregateInputType = {
    interventionRadius?: true
  }

  export type ProfessionalSumAggregateInputType = {
    interventionRadius?: true
  }

  export type ProfessionalMinAggregateInputType = {
    userId?: true
    professionId?: true
    isMobile?: true
    interventionRadius?: true
    siret?: true
    isSiretValid?: true
  }

  export type ProfessionalMaxAggregateInputType = {
    userId?: true
    professionId?: true
    isMobile?: true
    interventionRadius?: true
    siret?: true
    isSiretValid?: true
  }

  export type ProfessionalCountAggregateInputType = {
    userId?: true
    professionId?: true
    isMobile?: true
    interventionRadius?: true
    siret?: true
    isSiretValid?: true
    _all?: true
  }

  export type ProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professional to aggregate.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professionals
    **/
    _count?: true | ProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalMaxAggregateInputType
  }

  export type GetProfessionalAggregateType<T extends ProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessional[P]>
      : GetScalarType<T[P], AggregateProfessional[P]>
  }




  export type ProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithAggregationInput | ProfessionalOrderByWithAggregationInput[]
    by: ProfessionalScalarFieldEnum[] | ProfessionalScalarFieldEnum
    having?: ProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalCountAggregateInputType | true
    _avg?: ProfessionalAvgAggregateInputType
    _sum?: ProfessionalSumAggregateInputType
    _min?: ProfessionalMinAggregateInputType
    _max?: ProfessionalMaxAggregateInputType
  }

  export type ProfessionalGroupByOutputType = {
    userId: string
    professionId: string | null
    isMobile: boolean
    interventionRadius: number
    siret: string | null
    isSiretValid: boolean
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  type GetProfessionalGroupByPayload<T extends ProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    professionId?: boolean
    isMobile?: boolean
    interventionRadius?: boolean
    siret?: boolean
    isSiretValid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    profession?: boolean | Professional$professionArgs<ExtArgs>
    Availabilities?: boolean | Professional$AvailabilitiesArgs<ExtArgs>
    Appointments?: boolean | Professional$AppointmentsArgs<ExtArgs>
    _count?: boolean | ProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    professionId?: boolean
    isMobile?: boolean
    interventionRadius?: boolean
    siret?: boolean
    isSiretValid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    profession?: boolean | Professional$professionArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    professionId?: boolean
    isMobile?: boolean
    interventionRadius?: boolean
    siret?: boolean
    isSiretValid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    profession?: boolean | Professional$professionArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectScalar = {
    userId?: boolean
    professionId?: boolean
    isMobile?: boolean
    interventionRadius?: boolean
    siret?: boolean
    isSiretValid?: boolean
  }

  export type ProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "professionId" | "isMobile" | "interventionRadius" | "siret" | "isSiretValid", ExtArgs["result"]["professional"]>
  export type ProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    profession?: boolean | Professional$professionArgs<ExtArgs>
    Availabilities?: boolean | Professional$AvailabilitiesArgs<ExtArgs>
    Appointments?: boolean | Professional$AppointmentsArgs<ExtArgs>
    _count?: boolean | ProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    profession?: boolean | Professional$professionArgs<ExtArgs>
  }
  export type ProfessionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    profession?: boolean | Professional$professionArgs<ExtArgs>
  }

  export type $ProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professional"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      profession: Prisma.$ProfessionPayload<ExtArgs> | null
      Availabilities: Prisma.$AvailabilityPayload<ExtArgs>[]
      Appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      professionId: string | null
      isMobile: boolean
      interventionRadius: number
      siret: string | null
      isSiretValid: boolean
    }, ExtArgs["result"]["professional"]>
    composites: {}
  }

  type ProfessionalGetPayload<S extends boolean | null | undefined | ProfessionalDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalPayload, S>

  type ProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalCountAggregateInputType | true
    }

  export interface ProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professional'], meta: { name: 'Professional' } }
    /**
     * Find zero or one Professional that matches the filter.
     * @param {ProfessionalFindUniqueArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalFindUniqueArgs>(args: SelectSubset<T, ProfessionalFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalFindUniqueOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalFindFirstArgs>(args?: SelectSubset<T, ProfessionalFindFirstArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professionals
     * const professionals = await prisma.professional.findMany()
     * 
     * // Get first 10 Professionals
     * const professionals = await prisma.professional.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const professionalWithUserIdOnly = await prisma.professional.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProfessionalFindManyArgs>(args?: SelectSubset<T, ProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professional.
     * @param {ProfessionalCreateArgs} args - Arguments to create a Professional.
     * @example
     * // Create one Professional
     * const Professional = await prisma.professional.create({
     *   data: {
     *     // ... data to create a Professional
     *   }
     * })
     * 
     */
    create<T extends ProfessionalCreateArgs>(args: SelectSubset<T, ProfessionalCreateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professionals.
     * @param {ProfessionalCreateManyArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalCreateManyArgs>(args?: SelectSubset<T, ProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professionals and returns the data saved in the database.
     * @param {ProfessionalCreateManyAndReturnArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professionals and only return the `userId`
     * const professionalWithUserIdOnly = await prisma.professional.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professional.
     * @param {ProfessionalDeleteArgs} args - Arguments to delete one Professional.
     * @example
     * // Delete one Professional
     * const Professional = await prisma.professional.delete({
     *   where: {
     *     // ... filter to delete one Professional
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalDeleteArgs>(args: SelectSubset<T, ProfessionalDeleteArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professional.
     * @param {ProfessionalUpdateArgs} args - Arguments to update one Professional.
     * @example
     * // Update one Professional
     * const professional = await prisma.professional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalUpdateArgs>(args: SelectSubset<T, ProfessionalUpdateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professionals.
     * @param {ProfessionalDeleteManyArgs} args - Arguments to filter Professionals to delete.
     * @example
     * // Delete a few Professionals
     * const { count } = await prisma.professional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalDeleteManyArgs>(args?: SelectSubset<T, ProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalUpdateManyArgs>(args: SelectSubset<T, ProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals and returns the data updated in the database.
     * @param {ProfessionalUpdateManyAndReturnArgs} args - Arguments to update many Professionals.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professionals and only return the `userId`
     * const professionalWithUserIdOnly = await prisma.professional.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professional.
     * @param {ProfessionalUpsertArgs} args - Arguments to update or create a Professional.
     * @example
     * // Update or create a Professional
     * const professional = await prisma.professional.upsert({
     *   create: {
     *     // ... data to create a Professional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professional we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalUpsertArgs>(args: SelectSubset<T, ProfessionalUpsertArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalCountArgs} args - Arguments to filter Professionals to count.
     * @example
     * // Count the number of Professionals
     * const count = await prisma.professional.count({
     *   where: {
     *     // ... the filter for the Professionals we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalCountArgs>(
      args?: Subset<T, ProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionalAggregateArgs>(args: Subset<T, ProfessionalAggregateArgs>): Prisma.PrismaPromise<GetProfessionalAggregateType<T>>

    /**
     * Group by Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professional model
   */
  readonly fields: ProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profession<T extends Professional$professionArgs<ExtArgs> = {}>(args?: Subset<T, Professional$professionArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Availabilities<T extends Professional$AvailabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Professional$AvailabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appointments<T extends Professional$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Professional$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professional model
   */
  interface ProfessionalFieldRefs {
    readonly userId: FieldRef<"Professional", 'String'>
    readonly professionId: FieldRef<"Professional", 'String'>
    readonly isMobile: FieldRef<"Professional", 'Boolean'>
    readonly interventionRadius: FieldRef<"Professional", 'Int'>
    readonly siret: FieldRef<"Professional", 'String'>
    readonly isSiretValid: FieldRef<"Professional", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Professional findUnique
   */
  export type ProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findUniqueOrThrow
   */
  export type ProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findFirst
   */
  export type ProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findFirstOrThrow
   */
  export type ProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findMany
   */
  export type ProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professionals to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional create
   */
  export type ProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Professional.
     */
    data: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
  }

  /**
   * Professional createMany
   */
  export type ProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professional createManyAndReturn
   */
  export type ProfessionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional update
   */
  export type ProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Professional.
     */
    data: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
    /**
     * Choose, which Professional to update.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional updateMany
   */
  export type ProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
  }

  /**
   * Professional updateManyAndReturn
   */
  export type ProfessionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional upsert
   */
  export type ProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Professional to update in case it exists.
     */
    where: ProfessionalWhereUniqueInput
    /**
     * In case the Professional found by the `where` argument doesn't exist, create a new Professional with this data.
     */
    create: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
    /**
     * In case the Professional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
  }

  /**
   * Professional delete
   */
  export type ProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter which Professional to delete.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional deleteMany
   */
  export type ProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professionals to delete
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to delete.
     */
    limit?: number
  }

  /**
   * Professional.profession
   */
  export type Professional$professionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    where?: ProfessionWhereInput
  }

  /**
   * Professional.Availabilities
   */
  export type Professional$AvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Professional.Appointments
   */
  export type Professional$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Professional without action
   */
  export type ProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
  }


  /**
   * Model Profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customProfession: string | null
    isProfessionApproved: boolean | null
    professionName: string | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customProfession: string | null
    isProfessionApproved: boolean | null
    professionName: string | null
  }

  export type ProfessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    customProfession: number
    isProfessionApproved: number
    professionName: number
    _all: number
  }


  export type ProfessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customProfession?: true
    isProfessionApproved?: true
    professionName?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customProfession?: true
    isProfessionApproved?: true
    professionName?: true
  }

  export type ProfessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customProfession?: true
    isProfessionApproved?: true
    professionName?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profession to aggregate.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type ProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithAggregationInput | ProfessionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: ProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    customProfession: string | null
    isProfessionApproved: boolean
    professionName: string
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends ProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customProfession?: boolean
    isProfessionApproved?: boolean
    professionName?: boolean
    professionals?: boolean | Profession$professionalsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customProfession?: boolean
    isProfessionApproved?: boolean
    professionName?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customProfession?: boolean
    isProfessionApproved?: boolean
    professionName?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customProfession?: boolean
    isProfessionApproved?: boolean
    professionName?: boolean
  }

  export type ProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "customProfession" | "isProfessionApproved" | "professionName", ExtArgs["result"]["profession"]>
  export type ProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | Profession$professionalsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      professionals: Prisma.$ProfessionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      customProfession: string | null
      isProfessionApproved: boolean
      professionName: string
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type ProfessionGetPayload<S extends boolean | null | undefined | ProfessionDefaultArgs> = $Result.GetResult<Prisma.$ProfessionPayload, S>

  type ProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface ProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profession'], meta: { name: 'Profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {ProfessionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionFindUniqueArgs>(args: SelectSubset<T, ProfessionFindUniqueArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionFindFirstArgs>(args?: SelectSubset<T, ProfessionFindFirstArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionWithIdOnly = await prisma.profession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionFindManyArgs>(args?: SelectSubset<T, ProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession.
     * @param {ProfessionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends ProfessionCreateArgs>(args: SelectSubset<T, ProfessionCreateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professions.
     * @param {ProfessionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionCreateManyArgs>(args?: SelectSubset<T, ProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professions and returns the data saved in the database.
     * @param {ProfessionCreateManyAndReturnArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession.
     * @param {ProfessionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends ProfessionDeleteArgs>(args: SelectSubset<T, ProfessionDeleteArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession.
     * @param {ProfessionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionUpdateArgs>(args: SelectSubset<T, ProfessionUpdateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professions.
     * @param {ProfessionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionDeleteManyArgs>(args?: SelectSubset<T, ProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionUpdateManyArgs>(args: SelectSubset<T, ProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions and returns the data updated in the database.
     * @param {ProfessionUpdateManyAndReturnArgs} args - Arguments to update many Professions.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession.
     * @param {ProfessionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionUpsertArgs>(args: SelectSubset<T, ProfessionUpsertArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends ProfessionCountArgs>(
      args?: Subset<T, ProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profession model
   */
  readonly fields: ProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionals<T extends Profession$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, Profession$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profession model
   */
  interface ProfessionFieldRefs {
    readonly id: FieldRef<"Profession", 'String'>
    readonly createdAt: FieldRef<"Profession", 'DateTime'>
    readonly updatedAt: FieldRef<"Profession", 'DateTime'>
    readonly customProfession: FieldRef<"Profession", 'String'>
    readonly isProfessionApproved: FieldRef<"Profession", 'Boolean'>
    readonly professionName: FieldRef<"Profession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profession findUnique
   */
  export type ProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findUniqueOrThrow
   */
  export type ProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findFirst
   */
  export type ProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findFirstOrThrow
   */
  export type ProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findMany
   */
  export type ProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Professions to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession create
   */
  export type ProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Profession.
     */
    data: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
  }

  /**
   * Profession createMany
   */
  export type ProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession createManyAndReturn
   */
  export type ProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession update
   */
  export type ProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Profession.
     */
    data: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
    /**
     * Choose, which Profession to update.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession updateMany
   */
  export type ProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession updateManyAndReturn
   */
  export type ProfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession upsert
   */
  export type ProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Profession to update in case it exists.
     */
    where: ProfessionWhereUniqueInput
    /**
     * In case the Profession found by the `where` argument doesn't exist, create a new Profession with this data.
     */
    create: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
    /**
     * In case the Profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
  }

  /**
   * Profession delete
   */
  export type ProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter which Profession to delete.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession deleteMany
   */
  export type ProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professions to delete
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to delete.
     */
    limit?: number
  }

  /**
   * Profession.professionals
   */
  export type Profession$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Profession without action
   */
  export type ProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    street: string | null
    postalCode: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    label: string | null
    userId: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    street: string | null
    postalCode: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    label: string | null
    userId: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    street: number
    postalCode: number
    city: number
    latitude: number
    longitude: number
    label: number
    userId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    street?: true
    postalCode?: true
    city?: true
    latitude?: true
    longitude?: true
    label?: true
    userId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    street?: true
    postalCode?: true
    city?: true
    latitude?: true
    longitude?: true
    label?: true
    userId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    street?: true
    postalCode?: true
    city?: true
    latitude?: true
    longitude?: true
    label?: true
    userId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    street: string | null
    postalCode: string | null
    city: string
    latitude: number | null
    longitude: number | null
    label: string
    userId: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    label?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    careSeekerAppointments?: boolean | Address$careSeekerAppointmentsArgs<ExtArgs>
    professionalAppointments?: boolean | Address$professionalAppointmentsArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    label?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    label?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    label?: boolean
    userId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "street" | "postalCode" | "city" | "latitude" | "longitude" | "label" | "userId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    careSeekerAppointments?: boolean | Address$careSeekerAppointmentsArgs<ExtArgs>
    professionalAppointments?: boolean | Address$professionalAppointmentsArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      careSeekerAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      professionalAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      street: string | null
      postalCode: string | null
      city: string
      latitude: number | null
      longitude: number | null
      label: string
      userId: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    careSeekerAppointments<T extends Address$careSeekerAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Address$careSeekerAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionalAppointments<T extends Address$professionalAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Address$professionalAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly street: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly label: FieldRef<"Address", 'String'>
    readonly userId: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.careSeekerAppointments
   */
  export type Address$careSeekerAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Address.professionalAppointments
   */
  export type Address$professionalAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    minimumDuration: number | null
    maximumDuration: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    minimumDuration: number | null
    maximumDuration: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    title: string | null
    minimumDuration: number | null
    maximumDuration: number | null
    professionalId: string | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    title: string | null
    minimumDuration: number | null
    maximumDuration: number | null
    professionalId: string | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    start: number
    end: number
    title: number
    minimumDuration: number
    maximumDuration: number
    professionalId: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    minimumDuration?: true
    maximumDuration?: true
  }

  export type AvailabilitySumAggregateInputType = {
    minimumDuration?: true
    maximumDuration?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    title?: true
    minimumDuration?: true
    maximumDuration?: true
    professionalId?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    title?: true
    minimumDuration?: true
    maximumDuration?: true
    professionalId?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    title?: true
    minimumDuration?: true
    maximumDuration?: true
    professionalId?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    start: Date
    end: Date
    title: string
    minimumDuration: number
    maximumDuration: number | null
    professionalId: string
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    minimumDuration?: boolean
    maximumDuration?: boolean
    professionalId?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    minimumDuration?: boolean
    maximumDuration?: boolean
    professionalId?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    minimumDuration?: boolean
    maximumDuration?: boolean
    professionalId?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    minimumDuration?: boolean
    maximumDuration?: boolean
    professionalId?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start" | "end" | "title" | "minimumDuration" | "maximumDuration" | "professionalId", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      professional: Prisma.$ProfessionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date
      title: string
      minimumDuration: number
      maximumDuration: number | null
      professionalId: string
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly start: FieldRef<"Availability", 'DateTime'>
    readonly end: FieldRef<"Availability", 'DateTime'>
    readonly title: FieldRef<"Availability", 'String'>
    readonly minimumDuration: FieldRef<"Availability", 'Int'>
    readonly maximumDuration: FieldRef<"Availability", 'Int'>
    readonly professionalId: FieldRef<"Availability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    title: string | null
    description: string | null
    status: string | null
    location: string | null
    customLocation: string | null
    careSeekerId: string | null
    professionalId: string | null
    careSeekerAddressId: string | null
    professionalAddressId: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    title: string | null
    description: string | null
    status: string | null
    location: string | null
    customLocation: string | null
    careSeekerId: string | null
    professionalId: string | null
    careSeekerAddressId: string | null
    professionalAddressId: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    start: number
    end: number
    title: number
    description: number
    status: number
    location: number
    customLocation: number
    careSeekerId: number
    professionalId: number
    careSeekerAddressId: number
    professionalAddressId: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    title?: true
    description?: true
    status?: true
    location?: true
    customLocation?: true
    careSeekerId?: true
    professionalId?: true
    careSeekerAddressId?: true
    professionalAddressId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    title?: true
    description?: true
    status?: true
    location?: true
    customLocation?: true
    careSeekerId?: true
    professionalId?: true
    careSeekerAddressId?: true
    professionalAddressId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    title?: true
    description?: true
    status?: true
    location?: true
    customLocation?: true
    careSeekerId?: true
    professionalId?: true
    careSeekerAddressId?: true
    professionalAddressId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    start: Date
    end: Date
    title: string
    description: string | null
    status: string
    location: string
    customLocation: string | null
    careSeekerId: string
    professionalId: string
    careSeekerAddressId: string | null
    professionalAddressId: string | null
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    customLocation?: boolean
    careSeekerId?: boolean
    professionalId?: boolean
    careSeekerAddressId?: boolean
    professionalAddressId?: boolean
    careSeeker?: boolean | CareSeekerDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    careSeekerAddress?: boolean | Appointment$careSeekerAddressArgs<ExtArgs>
    professionalAddress?: boolean | Appointment$professionalAddressArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    customLocation?: boolean
    careSeekerId?: boolean
    professionalId?: boolean
    careSeekerAddressId?: boolean
    professionalAddressId?: boolean
    careSeeker?: boolean | CareSeekerDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    careSeekerAddress?: boolean | Appointment$careSeekerAddressArgs<ExtArgs>
    professionalAddress?: boolean | Appointment$professionalAddressArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    customLocation?: boolean
    careSeekerId?: boolean
    professionalId?: boolean
    careSeekerAddressId?: boolean
    professionalAddressId?: boolean
    careSeeker?: boolean | CareSeekerDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    careSeekerAddress?: boolean | Appointment$careSeekerAddressArgs<ExtArgs>
    professionalAddress?: boolean | Appointment$professionalAddressArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    customLocation?: boolean
    careSeekerId?: boolean
    professionalId?: boolean
    careSeekerAddressId?: boolean
    professionalAddressId?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start" | "end" | "title" | "description" | "status" | "location" | "customLocation" | "careSeekerId" | "professionalId" | "careSeekerAddressId" | "professionalAddressId", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careSeeker?: boolean | CareSeekerDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    careSeekerAddress?: boolean | Appointment$careSeekerAddressArgs<ExtArgs>
    professionalAddress?: boolean | Appointment$professionalAddressArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careSeeker?: boolean | CareSeekerDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    careSeekerAddress?: boolean | Appointment$careSeekerAddressArgs<ExtArgs>
    professionalAddress?: boolean | Appointment$professionalAddressArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careSeeker?: boolean | CareSeekerDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    careSeekerAddress?: boolean | Appointment$careSeekerAddressArgs<ExtArgs>
    professionalAddress?: boolean | Appointment$professionalAddressArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      careSeeker: Prisma.$CareSeekerPayload<ExtArgs>
      professional: Prisma.$ProfessionalPayload<ExtArgs>
      careSeekerAddress: Prisma.$AddressPayload<ExtArgs> | null
      professionalAddress: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date
      title: string
      description: string | null
      status: string
      location: string
      customLocation: string | null
      careSeekerId: string
      professionalId: string
      careSeekerAddressId: string | null
      professionalAddressId: string | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careSeeker<T extends CareSeekerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareSeekerDefaultArgs<ExtArgs>>): Prisma__CareSeekerClient<$Result.GetResult<Prisma.$CareSeekerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    careSeekerAddress<T extends Appointment$careSeekerAddressArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$careSeekerAddressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professionalAddress<T extends Appointment$professionalAddressArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$professionalAddressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly start: FieldRef<"Appointment", 'DateTime'>
    readonly end: FieldRef<"Appointment", 'DateTime'>
    readonly title: FieldRef<"Appointment", 'String'>
    readonly description: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly customLocation: FieldRef<"Appointment", 'String'>
    readonly careSeekerId: FieldRef<"Appointment", 'String'>
    readonly professionalId: FieldRef<"Appointment", 'String'>
    readonly careSeekerAddressId: FieldRef<"Appointment", 'String'>
    readonly professionalAddressId: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.careSeekerAddress
   */
  export type Appointment$careSeekerAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Appointment.professionalAddress
   */
  export type Appointment$professionalAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerified: 'emailVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CareSeekerScalarFieldEnum: {
    userId: 'userId',
    isHelper: 'isHelper',
    addressId: 'addressId'
  };

  export type CareSeekerScalarFieldEnum = (typeof CareSeekerScalarFieldEnum)[keyof typeof CareSeekerScalarFieldEnum]


  export const ProfessionalScalarFieldEnum: {
    userId: 'userId',
    professionId: 'professionId',
    isMobile: 'isMobile',
    interventionRadius: 'interventionRadius',
    siret: 'siret',
    isSiretValid: 'isSiretValid'
  };

  export type ProfessionalScalarFieldEnum = (typeof ProfessionalScalarFieldEnum)[keyof typeof ProfessionalScalarFieldEnum]


  export const ProfessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customProfession: 'customProfession',
    isProfessionApproved: 'isProfessionApproved',
    professionName: 'professionName'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    street: 'street',
    postalCode: 'postalCode',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    label: 'label',
    userId: 'userId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    title: 'title',
    minimumDuration: 'minimumDuration',
    maximumDuration: 'maximumDuration',
    professionalId: 'professionalId'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    title: 'title',
    description: 'description',
    status: 'status',
    location: 'location',
    customLocation: 'customLocation',
    careSeekerId: 'careSeekerId',
    professionalId: 'professionalId',
    careSeekerAddressId: 'careSeekerAddressId',
    professionalAddressId: 'professionalAddressId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: BoolFilter<"User"> | boolean
    careSeekers?: CareSeekerListRelationFilter
    professionals?: ProfessionalListRelationFilter
    address?: AddressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    careSeekers?: CareSeekerOrderByRelationAggregateInput
    professionals?: ProfessionalOrderByRelationAggregateInput
    address?: AddressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: BoolFilter<"User"> | boolean
    careSeekers?: CareSeekerListRelationFilter
    professionals?: ProfessionalListRelationFilter
    address?: AddressListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CareSeekerWhereInput = {
    AND?: CareSeekerWhereInput | CareSeekerWhereInput[]
    OR?: CareSeekerWhereInput[]
    NOT?: CareSeekerWhereInput | CareSeekerWhereInput[]
    userId?: StringFilter<"CareSeeker"> | string
    isHelper?: BoolFilter<"CareSeeker"> | boolean
    addressId?: StringNullableFilter<"CareSeeker"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Appointments?: AppointmentListRelationFilter
  }

  export type CareSeekerOrderByWithRelationInput = {
    userId?: SortOrder
    isHelper?: SortOrder
    addressId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    Appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type CareSeekerWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: CareSeekerWhereInput | CareSeekerWhereInput[]
    OR?: CareSeekerWhereInput[]
    NOT?: CareSeekerWhereInput | CareSeekerWhereInput[]
    isHelper?: BoolFilter<"CareSeeker"> | boolean
    addressId?: StringNullableFilter<"CareSeeker"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Appointments?: AppointmentListRelationFilter
  }, "userId">

  export type CareSeekerOrderByWithAggregationInput = {
    userId?: SortOrder
    isHelper?: SortOrder
    addressId?: SortOrderInput | SortOrder
    _count?: CareSeekerCountOrderByAggregateInput
    _max?: CareSeekerMaxOrderByAggregateInput
    _min?: CareSeekerMinOrderByAggregateInput
  }

  export type CareSeekerScalarWhereWithAggregatesInput = {
    AND?: CareSeekerScalarWhereWithAggregatesInput | CareSeekerScalarWhereWithAggregatesInput[]
    OR?: CareSeekerScalarWhereWithAggregatesInput[]
    NOT?: CareSeekerScalarWhereWithAggregatesInput | CareSeekerScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"CareSeeker"> | string
    isHelper?: BoolWithAggregatesFilter<"CareSeeker"> | boolean
    addressId?: StringNullableWithAggregatesFilter<"CareSeeker"> | string | null
  }

  export type ProfessionalWhereInput = {
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    userId?: StringFilter<"Professional"> | string
    professionId?: StringNullableFilter<"Professional"> | string | null
    isMobile?: BoolFilter<"Professional"> | boolean
    interventionRadius?: IntFilter<"Professional"> | number
    siret?: StringNullableFilter<"Professional"> | string | null
    isSiretValid?: BoolFilter<"Professional"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    profession?: XOR<ProfessionNullableScalarRelationFilter, ProfessionWhereInput> | null
    Availabilities?: AvailabilityListRelationFilter
    Appointments?: AppointmentListRelationFilter
  }

  export type ProfessionalOrderByWithRelationInput = {
    userId?: SortOrder
    professionId?: SortOrderInput | SortOrder
    isMobile?: SortOrder
    interventionRadius?: SortOrder
    siret?: SortOrderInput | SortOrder
    isSiretValid?: SortOrder
    user?: UserOrderByWithRelationInput
    profession?: ProfessionOrderByWithRelationInput
    Availabilities?: AvailabilityOrderByRelationAggregateInput
    Appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type ProfessionalWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    siret?: string
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    professionId?: StringNullableFilter<"Professional"> | string | null
    isMobile?: BoolFilter<"Professional"> | boolean
    interventionRadius?: IntFilter<"Professional"> | number
    isSiretValid?: BoolFilter<"Professional"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    profession?: XOR<ProfessionNullableScalarRelationFilter, ProfessionWhereInput> | null
    Availabilities?: AvailabilityListRelationFilter
    Appointments?: AppointmentListRelationFilter
  }, "userId" | "siret">

  export type ProfessionalOrderByWithAggregationInput = {
    userId?: SortOrder
    professionId?: SortOrderInput | SortOrder
    isMobile?: SortOrder
    interventionRadius?: SortOrder
    siret?: SortOrderInput | SortOrder
    isSiretValid?: SortOrder
    _count?: ProfessionalCountOrderByAggregateInput
    _avg?: ProfessionalAvgOrderByAggregateInput
    _max?: ProfessionalMaxOrderByAggregateInput
    _min?: ProfessionalMinOrderByAggregateInput
    _sum?: ProfessionalSumOrderByAggregateInput
  }

  export type ProfessionalScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Professional"> | string
    professionId?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    isMobile?: BoolWithAggregatesFilter<"Professional"> | boolean
    interventionRadius?: IntWithAggregatesFilter<"Professional"> | number
    siret?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    isSiretValid?: BoolWithAggregatesFilter<"Professional"> | boolean
  }

  export type ProfessionWhereInput = {
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    id?: StringFilter<"Profession"> | string
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
    customProfession?: StringNullableFilter<"Profession"> | string | null
    isProfessionApproved?: BoolFilter<"Profession"> | boolean
    professionName?: StringFilter<"Profession"> | string
    professionals?: ProfessionalListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customProfession?: SortOrderInput | SortOrder
    isProfessionApproved?: SortOrder
    professionName?: SortOrder
    professionals?: ProfessionalOrderByRelationAggregateInput
  }

  export type ProfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
    customProfession?: StringNullableFilter<"Profession"> | string | null
    isProfessionApproved?: BoolFilter<"Profession"> | boolean
    professionName?: StringFilter<"Profession"> | string
    professionals?: ProfessionalListRelationFilter
  }, "id">

  export type ProfessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customProfession?: SortOrderInput | SortOrder
    isProfessionApproved?: SortOrder
    professionName?: SortOrder
    _count?: ProfessionCountOrderByAggregateInput
    _max?: ProfessionMaxOrderByAggregateInput
    _min?: ProfessionMinOrderByAggregateInput
  }

  export type ProfessionScalarWhereWithAggregatesInput = {
    AND?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    OR?: ProfessionScalarWhereWithAggregatesInput[]
    NOT?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
    customProfession?: StringNullableWithAggregatesFilter<"Profession"> | string | null
    isProfessionApproved?: BoolWithAggregatesFilter<"Profession"> | boolean
    professionName?: StringWithAggregatesFilter<"Profession"> | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    street?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    label?: StringFilter<"Address"> | string
    userId?: StringFilter<"Address"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    careSeekerAppointments?: AppointmentListRelationFilter
    professionalAppointments?: AppointmentListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    label?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    careSeekerAppointments?: AppointmentOrderByRelationAggregateInput
    professionalAppointments?: AppointmentOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    street?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    label?: StringFilter<"Address"> | string
    userId?: StringFilter<"Address"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    careSeekerAppointments?: AppointmentListRelationFilter
    professionalAppointments?: AppointmentListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    label?: SortOrder
    userId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    label?: StringWithAggregatesFilter<"Address"> | string
    userId?: StringWithAggregatesFilter<"Address"> | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    start?: DateTimeFilter<"Availability"> | Date | string
    end?: DateTimeFilter<"Availability"> | Date | string
    title?: StringFilter<"Availability"> | string
    minimumDuration?: IntFilter<"Availability"> | number
    maximumDuration?: IntNullableFilter<"Availability"> | number | null
    professionalId?: StringFilter<"Availability"> | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    minimumDuration?: SortOrder
    maximumDuration?: SortOrderInput | SortOrder
    professionalId?: SortOrder
    professional?: ProfessionalOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    start?: DateTimeFilter<"Availability"> | Date | string
    end?: DateTimeFilter<"Availability"> | Date | string
    title?: StringFilter<"Availability"> | string
    minimumDuration?: IntFilter<"Availability"> | number
    maximumDuration?: IntNullableFilter<"Availability"> | number | null
    professionalId?: StringFilter<"Availability"> | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    minimumDuration?: SortOrder
    maximumDuration?: SortOrderInput | SortOrder
    professionalId?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    start?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    title?: StringWithAggregatesFilter<"Availability"> | string
    minimumDuration?: IntWithAggregatesFilter<"Availability"> | number
    maximumDuration?: IntNullableWithAggregatesFilter<"Availability"> | number | null
    professionalId?: StringWithAggregatesFilter<"Availability"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    start?: DateTimeFilter<"Appointment"> | Date | string
    end?: DateTimeFilter<"Appointment"> | Date | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    location?: StringFilter<"Appointment"> | string
    customLocation?: StringNullableFilter<"Appointment"> | string | null
    careSeekerId?: StringFilter<"Appointment"> | string
    professionalId?: StringFilter<"Appointment"> | string
    careSeekerAddressId?: StringNullableFilter<"Appointment"> | string | null
    professionalAddressId?: StringNullableFilter<"Appointment"> | string | null
    careSeeker?: XOR<CareSeekerScalarRelationFilter, CareSeekerWhereInput>
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    careSeekerAddress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    professionalAddress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrder
    customLocation?: SortOrderInput | SortOrder
    careSeekerId?: SortOrder
    professionalId?: SortOrder
    careSeekerAddressId?: SortOrderInput | SortOrder
    professionalAddressId?: SortOrderInput | SortOrder
    careSeeker?: CareSeekerOrderByWithRelationInput
    professional?: ProfessionalOrderByWithRelationInput
    careSeekerAddress?: AddressOrderByWithRelationInput
    professionalAddress?: AddressOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    start?: DateTimeFilter<"Appointment"> | Date | string
    end?: DateTimeFilter<"Appointment"> | Date | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    location?: StringFilter<"Appointment"> | string
    customLocation?: StringNullableFilter<"Appointment"> | string | null
    careSeekerId?: StringFilter<"Appointment"> | string
    professionalId?: StringFilter<"Appointment"> | string
    careSeekerAddressId?: StringNullableFilter<"Appointment"> | string | null
    professionalAddressId?: StringNullableFilter<"Appointment"> | string | null
    careSeeker?: XOR<CareSeekerScalarRelationFilter, CareSeekerWhereInput>
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    careSeekerAddress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    professionalAddress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrder
    customLocation?: SortOrderInput | SortOrder
    careSeekerId?: SortOrder
    professionalId?: SortOrder
    careSeekerAddressId?: SortOrderInput | SortOrder
    professionalAddressId?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    start?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    title?: StringWithAggregatesFilter<"Appointment"> | string
    description?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: StringWithAggregatesFilter<"Appointment"> | string
    location?: StringWithAggregatesFilter<"Appointment"> | string
    customLocation?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    careSeekerId?: StringWithAggregatesFilter<"Appointment"> | string
    professionalId?: StringWithAggregatesFilter<"Appointment"> | string
    careSeekerAddressId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    professionalAddressId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    careSeekers?: CareSeekerCreateNestedManyWithoutUserInput
    professionals?: ProfessionalCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    careSeekers?: CareSeekerUncheckedCreateNestedManyWithoutUserInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    careSeekers?: CareSeekerUpdateManyWithoutUserNestedInput
    professionals?: ProfessionalUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    careSeekers?: CareSeekerUncheckedUpdateManyWithoutUserNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CareSeekerCreateInput = {
    isHelper?: boolean
    addressId?: string | null
    user: UserCreateNestedOneWithoutCareSeekersInput
    Appointments?: AppointmentCreateNestedManyWithoutCareSeekerInput
  }

  export type CareSeekerUncheckedCreateInput = {
    userId: string
    isHelper?: boolean
    addressId?: string | null
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutCareSeekerInput
  }

  export type CareSeekerUpdateInput = {
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCareSeekersNestedInput
    Appointments?: AppointmentUpdateManyWithoutCareSeekerNestedInput
  }

  export type CareSeekerUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentUncheckedUpdateManyWithoutCareSeekerNestedInput
  }

  export type CareSeekerCreateManyInput = {
    userId: string
    isHelper?: boolean
    addressId?: string | null
  }

  export type CareSeekerUpdateManyMutationInput = {
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CareSeekerUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessionalCreateInput = {
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    user: UserCreateNestedOneWithoutProfessionalsInput
    profession?: ProfessionCreateNestedOneWithoutProfessionalsInput
    Availabilities?: AvailabilityCreateNestedManyWithoutProfessionalInput
    Appointments?: AppointmentCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateInput = {
    userId: string
    professionId?: string | null
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    Availabilities?: AvailabilityUncheckedCreateNestedManyWithoutProfessionalInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUpdateInput = {
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProfessionalsNestedInput
    profession?: ProfessionUpdateOneWithoutProfessionalsNestedInput
    Availabilities?: AvailabilityUpdateManyWithoutProfessionalNestedInput
    Appointments?: AppointmentUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    professionId?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    Availabilities?: AvailabilityUncheckedUpdateManyWithoutProfessionalNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalCreateManyInput = {
    userId: string
    professionId?: string | null
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
  }

  export type ProfessionalUpdateManyMutationInput = {
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfessionalUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    professionId?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customProfession?: string | null
    isProfessionApproved?: boolean
    professionName: string
    professionals?: ProfessionalCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customProfession?: string | null
    isProfessionApproved?: boolean
    professionName: string
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customProfession?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionApproved?: BoolFieldUpdateOperationsInput | boolean
    professionName?: StringFieldUpdateOperationsInput | string
    professionals?: ProfessionalUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customProfession?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionApproved?: BoolFieldUpdateOperationsInput | boolean
    professionName?: StringFieldUpdateOperationsInput | string
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customProfession?: string | null
    isProfessionApproved?: boolean
    professionName: string
  }

  export type ProfessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customProfession?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionApproved?: BoolFieldUpdateOperationsInput | boolean
    professionName?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customProfession?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionApproved?: BoolFieldUpdateOperationsInput | boolean
    professionName?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    user: UserCreateNestedOneWithoutAddressInput
    careSeekerAppointments?: AppointmentCreateNestedManyWithoutCareSeekerAddressInput
    professionalAppointments?: AppointmentCreateNestedManyWithoutProfessionalAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    userId: string
    careSeekerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCareSeekerAddressInput
    professionalAppointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
    careSeekerAppointments?: AppointmentUpdateManyWithoutCareSeekerAddressNestedInput
    professionalAppointments?: AppointmentUpdateManyWithoutProfessionalAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    careSeekerAppointments?: AppointmentUncheckedUpdateManyWithoutCareSeekerAddressNestedInput
    professionalAppointments?: AppointmentUncheckedUpdateManyWithoutProfessionalAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    userId: string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    minimumDuration?: number
    maximumDuration?: number | null
    professional: ProfessionalCreateNestedOneWithoutAvailabilitiesInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    minimumDuration?: number
    maximumDuration?: number | null
    professionalId: string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
    professional?: ProfessionalUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
    professionalId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    minimumDuration?: number
    maximumDuration?: number | null
    professionalId: string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
    professionalId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeeker: CareSeekerCreateNestedOneWithoutAppointmentsInput
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
    careSeekerAddress?: AddressCreateNestedOneWithoutCareSeekerAppointmentsInput
    professionalAddress?: AddressCreateNestedOneWithoutProfessionalAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    professionalId: string
    careSeekerAddressId?: string | null
    professionalAddressId?: string | null
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeeker?: CareSeekerUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
    careSeekerAddress?: AddressUpdateOneWithoutCareSeekerAppointmentsNestedInput
    professionalAddress?: AddressUpdateOneWithoutProfessionalAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    professionalId: string
    careSeekerAddressId?: string | null
    professionalAddressId?: string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CareSeekerListRelationFilter = {
    every?: CareSeekerWhereInput
    some?: CareSeekerWhereInput
    none?: CareSeekerWhereInput
  }

  export type ProfessionalListRelationFilter = {
    every?: ProfessionalWhereInput
    some?: ProfessionalWhereInput
    none?: ProfessionalWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CareSeekerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareSeekerCountOrderByAggregateInput = {
    userId?: SortOrder
    isHelper?: SortOrder
    addressId?: SortOrder
  }

  export type CareSeekerMaxOrderByAggregateInput = {
    userId?: SortOrder
    isHelper?: SortOrder
    addressId?: SortOrder
  }

  export type CareSeekerMinOrderByAggregateInput = {
    userId?: SortOrder
    isHelper?: SortOrder
    addressId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfessionNullableScalarRelationFilter = {
    is?: ProfessionWhereInput | null
    isNot?: ProfessionWhereInput | null
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalCountOrderByAggregateInput = {
    userId?: SortOrder
    professionId?: SortOrder
    isMobile?: SortOrder
    interventionRadius?: SortOrder
    siret?: SortOrder
    isSiretValid?: SortOrder
  }

  export type ProfessionalAvgOrderByAggregateInput = {
    interventionRadius?: SortOrder
  }

  export type ProfessionalMaxOrderByAggregateInput = {
    userId?: SortOrder
    professionId?: SortOrder
    isMobile?: SortOrder
    interventionRadius?: SortOrder
    siret?: SortOrder
    isSiretValid?: SortOrder
  }

  export type ProfessionalMinOrderByAggregateInput = {
    userId?: SortOrder
    professionId?: SortOrder
    isMobile?: SortOrder
    interventionRadius?: SortOrder
    siret?: SortOrder
    isSiretValid?: SortOrder
  }

  export type ProfessionalSumOrderByAggregateInput = {
    interventionRadius?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProfessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customProfession?: SortOrder
    isProfessionApproved?: SortOrder
    professionName?: SortOrder
  }

  export type ProfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customProfession?: SortOrder
    isProfessionApproved?: SortOrder
    professionName?: SortOrder
  }

  export type ProfessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customProfession?: SortOrder
    isProfessionApproved?: SortOrder
    professionName?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    label?: SortOrder
    userId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    label?: SortOrder
    userId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    label?: SortOrder
    userId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfessionalScalarRelationFilter = {
    is?: ProfessionalWhereInput
    isNot?: ProfessionalWhereInput
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    minimumDuration?: SortOrder
    maximumDuration?: SortOrder
    professionalId?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    minimumDuration?: SortOrder
    maximumDuration?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    minimumDuration?: SortOrder
    maximumDuration?: SortOrder
    professionalId?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    minimumDuration?: SortOrder
    maximumDuration?: SortOrder
    professionalId?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    minimumDuration?: SortOrder
    maximumDuration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CareSeekerScalarRelationFilter = {
    is?: CareSeekerWhereInput
    isNot?: CareSeekerWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    customLocation?: SortOrder
    careSeekerId?: SortOrder
    professionalId?: SortOrder
    careSeekerAddressId?: SortOrder
    professionalAddressId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    customLocation?: SortOrder
    careSeekerId?: SortOrder
    professionalId?: SortOrder
    careSeekerAddressId?: SortOrder
    professionalAddressId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    customLocation?: SortOrder
    careSeekerId?: SortOrder
    professionalId?: SortOrder
    careSeekerAddressId?: SortOrder
    professionalAddressId?: SortOrder
  }

  export type CareSeekerCreateNestedManyWithoutUserInput = {
    create?: XOR<CareSeekerCreateWithoutUserInput, CareSeekerUncheckedCreateWithoutUserInput> | CareSeekerCreateWithoutUserInput[] | CareSeekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareSeekerCreateOrConnectWithoutUserInput | CareSeekerCreateOrConnectWithoutUserInput[]
    createMany?: CareSeekerCreateManyUserInputEnvelope
    connect?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
  }

  export type ProfessionalCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type CareSeekerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CareSeekerCreateWithoutUserInput, CareSeekerUncheckedCreateWithoutUserInput> | CareSeekerCreateWithoutUserInput[] | CareSeekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareSeekerCreateOrConnectWithoutUserInput | CareSeekerCreateOrConnectWithoutUserInput[]
    createMany?: CareSeekerCreateManyUserInputEnvelope
    connect?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CareSeekerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CareSeekerCreateWithoutUserInput, CareSeekerUncheckedCreateWithoutUserInput> | CareSeekerCreateWithoutUserInput[] | CareSeekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareSeekerCreateOrConnectWithoutUserInput | CareSeekerCreateOrConnectWithoutUserInput[]
    upsert?: CareSeekerUpsertWithWhereUniqueWithoutUserInput | CareSeekerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CareSeekerCreateManyUserInputEnvelope
    set?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    disconnect?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    delete?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    connect?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    update?: CareSeekerUpdateWithWhereUniqueWithoutUserInput | CareSeekerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CareSeekerUpdateManyWithWhereWithoutUserInput | CareSeekerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CareSeekerScalarWhereInput | CareSeekerScalarWhereInput[]
  }

  export type ProfessionalUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutUserInput | ProfessionalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutUserInput | ProfessionalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutUserInput | ProfessionalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CareSeekerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CareSeekerCreateWithoutUserInput, CareSeekerUncheckedCreateWithoutUserInput> | CareSeekerCreateWithoutUserInput[] | CareSeekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareSeekerCreateOrConnectWithoutUserInput | CareSeekerCreateOrConnectWithoutUserInput[]
    upsert?: CareSeekerUpsertWithWhereUniqueWithoutUserInput | CareSeekerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CareSeekerCreateManyUserInputEnvelope
    set?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    disconnect?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    delete?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    connect?: CareSeekerWhereUniqueInput | CareSeekerWhereUniqueInput[]
    update?: CareSeekerUpdateWithWhereUniqueWithoutUserInput | CareSeekerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CareSeekerUpdateManyWithWhereWithoutUserInput | CareSeekerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CareSeekerScalarWhereInput | CareSeekerScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutUserInput | ProfessionalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutUserInput | ProfessionalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutUserInput | ProfessionalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCareSeekersInput = {
    create?: XOR<UserCreateWithoutCareSeekersInput, UserUncheckedCreateWithoutCareSeekersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareSeekersInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutCareSeekerInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerInput, AppointmentUncheckedCreateWithoutCareSeekerInput> | AppointmentCreateWithoutCareSeekerInput[] | AppointmentUncheckedCreateWithoutCareSeekerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerInput | AppointmentCreateOrConnectWithoutCareSeekerInput[]
    createMany?: AppointmentCreateManyCareSeekerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCareSeekerInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerInput, AppointmentUncheckedCreateWithoutCareSeekerInput> | AppointmentCreateWithoutCareSeekerInput[] | AppointmentUncheckedCreateWithoutCareSeekerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerInput | AppointmentCreateOrConnectWithoutCareSeekerInput[]
    createMany?: AppointmentCreateManyCareSeekerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCareSeekersNestedInput = {
    create?: XOR<UserCreateWithoutCareSeekersInput, UserUncheckedCreateWithoutCareSeekersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareSeekersInput
    upsert?: UserUpsertWithoutCareSeekersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCareSeekersInput, UserUpdateWithoutCareSeekersInput>, UserUncheckedUpdateWithoutCareSeekersInput>
  }

  export type AppointmentUpdateManyWithoutCareSeekerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerInput, AppointmentUncheckedCreateWithoutCareSeekerInput> | AppointmentCreateWithoutCareSeekerInput[] | AppointmentUncheckedCreateWithoutCareSeekerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerInput | AppointmentCreateOrConnectWithoutCareSeekerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCareSeekerInput | AppointmentUpsertWithWhereUniqueWithoutCareSeekerInput[]
    createMany?: AppointmentCreateManyCareSeekerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCareSeekerInput | AppointmentUpdateWithWhereUniqueWithoutCareSeekerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCareSeekerInput | AppointmentUpdateManyWithWhereWithoutCareSeekerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCareSeekerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerInput, AppointmentUncheckedCreateWithoutCareSeekerInput> | AppointmentCreateWithoutCareSeekerInput[] | AppointmentUncheckedCreateWithoutCareSeekerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerInput | AppointmentCreateOrConnectWithoutCareSeekerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCareSeekerInput | AppointmentUpsertWithWhereUniqueWithoutCareSeekerInput[]
    createMany?: AppointmentCreateManyCareSeekerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCareSeekerInput | AppointmentUpdateWithWhereUniqueWithoutCareSeekerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCareSeekerInput | AppointmentUpdateManyWithWhereWithoutCareSeekerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalsInput
    connect?: UserWhereUniqueInput
  }

  export type ProfessionCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<ProfessionCreateWithoutProfessionalsInput, ProfessionUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionalsInput
    connect?: ProfessionWhereUniqueInput
  }

  export type AvailabilityCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<AvailabilityCreateWithoutProfessionalInput, AvailabilityUncheckedCreateWithoutProfessionalInput> | AvailabilityCreateWithoutProfessionalInput[] | AvailabilityUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProfessionalInput | AvailabilityCreateOrConnectWithoutProfessionalInput[]
    createMany?: AvailabilityCreateManyProfessionalInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<AvailabilityCreateWithoutProfessionalInput, AvailabilityUncheckedCreateWithoutProfessionalInput> | AvailabilityCreateWithoutProfessionalInput[] | AvailabilityUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProfessionalInput | AvailabilityCreateOrConnectWithoutProfessionalInput[]
    createMany?: AvailabilityCreateManyProfessionalInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfessionalsNestedInput = {
    create?: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalsInput
    upsert?: UserUpsertWithoutProfessionalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessionalsInput, UserUpdateWithoutProfessionalsInput>, UserUncheckedUpdateWithoutProfessionalsInput>
  }

  export type ProfessionUpdateOneWithoutProfessionalsNestedInput = {
    create?: XOR<ProfessionCreateWithoutProfessionalsInput, ProfessionUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionalsInput
    upsert?: ProfessionUpsertWithoutProfessionalsInput
    disconnect?: ProfessionWhereInput | boolean
    delete?: ProfessionWhereInput | boolean
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutProfessionalsInput, ProfessionUpdateWithoutProfessionalsInput>, ProfessionUncheckedUpdateWithoutProfessionalsInput>
  }

  export type AvailabilityUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<AvailabilityCreateWithoutProfessionalInput, AvailabilityUncheckedCreateWithoutProfessionalInput> | AvailabilityCreateWithoutProfessionalInput[] | AvailabilityUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProfessionalInput | AvailabilityCreateOrConnectWithoutProfessionalInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutProfessionalInput | AvailabilityUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: AvailabilityCreateManyProfessionalInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutProfessionalInput | AvailabilityUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutProfessionalInput | AvailabilityUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProfessionalInput | AppointmentUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProfessionalInput | AppointmentUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProfessionalInput | AppointmentUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<AvailabilityCreateWithoutProfessionalInput, AvailabilityUncheckedCreateWithoutProfessionalInput> | AvailabilityCreateWithoutProfessionalInput[] | AvailabilityUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProfessionalInput | AvailabilityCreateOrConnectWithoutProfessionalInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutProfessionalInput | AvailabilityUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: AvailabilityCreateManyProfessionalInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutProfessionalInput | AvailabilityUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutProfessionalInput | AvailabilityUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProfessionalInput | AppointmentUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProfessionalInput | AppointmentUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProfessionalInput | AppointmentUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ProfessionalCreateNestedManyWithoutProfessionInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionInput, ProfessionalUncheckedCreateWithoutProfessionInput> | ProfessionalCreateWithoutProfessionInput[] | ProfessionalUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionInput | ProfessionalCreateOrConnectWithoutProfessionInput[]
    createMany?: ProfessionalCreateManyProfessionInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionInput, ProfessionalUncheckedCreateWithoutProfessionInput> | ProfessionalCreateWithoutProfessionInput[] | ProfessionalUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionInput | ProfessionalCreateOrConnectWithoutProfessionInput[]
    createMany?: ProfessionalCreateManyProfessionInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type ProfessionalUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionInput, ProfessionalUncheckedCreateWithoutProfessionInput> | ProfessionalCreateWithoutProfessionInput[] | ProfessionalUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionInput | ProfessionalCreateOrConnectWithoutProfessionInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutProfessionInput | ProfessionalUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: ProfessionalCreateManyProfessionInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutProfessionInput | ProfessionalUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutProfessionInput | ProfessionalUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionInput, ProfessionalUncheckedCreateWithoutProfessionInput> | ProfessionalCreateWithoutProfessionInput[] | ProfessionalUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionInput | ProfessionalCreateOrConnectWithoutProfessionInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutProfessionInput | ProfessionalUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: ProfessionalCreateManyProfessionInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutProfessionInput | ProfessionalUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutProfessionInput | ProfessionalUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutCareSeekerAddressInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerAddressInput, AppointmentUncheckedCreateWithoutCareSeekerAddressInput> | AppointmentCreateWithoutCareSeekerAddressInput[] | AppointmentUncheckedCreateWithoutCareSeekerAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerAddressInput | AppointmentCreateOrConnectWithoutCareSeekerAddressInput[]
    createMany?: AppointmentCreateManyCareSeekerAddressInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutProfessionalAddressInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalAddressInput, AppointmentUncheckedCreateWithoutProfessionalAddressInput> | AppointmentCreateWithoutProfessionalAddressInput[] | AppointmentUncheckedCreateWithoutProfessionalAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalAddressInput | AppointmentCreateOrConnectWithoutProfessionalAddressInput[]
    createMany?: AppointmentCreateManyProfessionalAddressInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCareSeekerAddressInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerAddressInput, AppointmentUncheckedCreateWithoutCareSeekerAddressInput> | AppointmentCreateWithoutCareSeekerAddressInput[] | AppointmentUncheckedCreateWithoutCareSeekerAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerAddressInput | AppointmentCreateOrConnectWithoutCareSeekerAddressInput[]
    createMany?: AppointmentCreateManyCareSeekerAddressInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutProfessionalAddressInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalAddressInput, AppointmentUncheckedCreateWithoutProfessionalAddressInput> | AppointmentCreateWithoutProfessionalAddressInput[] | AppointmentUncheckedCreateWithoutProfessionalAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalAddressInput | AppointmentCreateOrConnectWithoutProfessionalAddressInput[]
    createMany?: AppointmentCreateManyProfessionalAddressInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type AppointmentUpdateManyWithoutCareSeekerAddressNestedInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerAddressInput, AppointmentUncheckedCreateWithoutCareSeekerAddressInput> | AppointmentCreateWithoutCareSeekerAddressInput[] | AppointmentUncheckedCreateWithoutCareSeekerAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerAddressInput | AppointmentCreateOrConnectWithoutCareSeekerAddressInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCareSeekerAddressInput | AppointmentUpsertWithWhereUniqueWithoutCareSeekerAddressInput[]
    createMany?: AppointmentCreateManyCareSeekerAddressInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCareSeekerAddressInput | AppointmentUpdateWithWhereUniqueWithoutCareSeekerAddressInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCareSeekerAddressInput | AppointmentUpdateManyWithWhereWithoutCareSeekerAddressInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutProfessionalAddressNestedInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalAddressInput, AppointmentUncheckedCreateWithoutProfessionalAddressInput> | AppointmentCreateWithoutProfessionalAddressInput[] | AppointmentUncheckedCreateWithoutProfessionalAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalAddressInput | AppointmentCreateOrConnectWithoutProfessionalAddressInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProfessionalAddressInput | AppointmentUpsertWithWhereUniqueWithoutProfessionalAddressInput[]
    createMany?: AppointmentCreateManyProfessionalAddressInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProfessionalAddressInput | AppointmentUpdateWithWhereUniqueWithoutProfessionalAddressInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProfessionalAddressInput | AppointmentUpdateManyWithWhereWithoutProfessionalAddressInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCareSeekerAddressNestedInput = {
    create?: XOR<AppointmentCreateWithoutCareSeekerAddressInput, AppointmentUncheckedCreateWithoutCareSeekerAddressInput> | AppointmentCreateWithoutCareSeekerAddressInput[] | AppointmentUncheckedCreateWithoutCareSeekerAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareSeekerAddressInput | AppointmentCreateOrConnectWithoutCareSeekerAddressInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCareSeekerAddressInput | AppointmentUpsertWithWhereUniqueWithoutCareSeekerAddressInput[]
    createMany?: AppointmentCreateManyCareSeekerAddressInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCareSeekerAddressInput | AppointmentUpdateWithWhereUniqueWithoutCareSeekerAddressInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCareSeekerAddressInput | AppointmentUpdateManyWithWhereWithoutCareSeekerAddressInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutProfessionalAddressNestedInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalAddressInput, AppointmentUncheckedCreateWithoutProfessionalAddressInput> | AppointmentCreateWithoutProfessionalAddressInput[] | AppointmentUncheckedCreateWithoutProfessionalAddressInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalAddressInput | AppointmentCreateOrConnectWithoutProfessionalAddressInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProfessionalAddressInput | AppointmentUpsertWithWhereUniqueWithoutProfessionalAddressInput[]
    createMany?: AppointmentCreateManyProfessionalAddressInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProfessionalAddressInput | AppointmentUpdateWithWhereUniqueWithoutProfessionalAddressInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProfessionalAddressInput | AppointmentUpdateManyWithWhereWithoutProfessionalAddressInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ProfessionalCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<ProfessionalCreateWithoutAvailabilitiesInput, ProfessionalUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutAvailabilitiesInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessionalUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<ProfessionalCreateWithoutAvailabilitiesInput, ProfessionalUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutAvailabilitiesInput
    upsert?: ProfessionalUpsertWithoutAvailabilitiesInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutAvailabilitiesInput, ProfessionalUpdateWithoutAvailabilitiesInput>, ProfessionalUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type CareSeekerCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CareSeekerCreateWithoutAppointmentsInput, CareSeekerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CareSeekerCreateOrConnectWithoutAppointmentsInput
    connect?: CareSeekerWhereUniqueInput
  }

  export type ProfessionalCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutAppointmentsInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutCareSeekerAppointmentsInput = {
    create?: XOR<AddressCreateWithoutCareSeekerAppointmentsInput, AddressUncheckedCreateWithoutCareSeekerAppointmentsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCareSeekerAppointmentsInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutProfessionalAppointmentsInput = {
    create?: XOR<AddressCreateWithoutProfessionalAppointmentsInput, AddressUncheckedCreateWithoutProfessionalAppointmentsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutProfessionalAppointmentsInput
    connect?: AddressWhereUniqueInput
  }

  export type CareSeekerUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CareSeekerCreateWithoutAppointmentsInput, CareSeekerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CareSeekerCreateOrConnectWithoutAppointmentsInput
    upsert?: CareSeekerUpsertWithoutAppointmentsInput
    connect?: CareSeekerWhereUniqueInput
    update?: XOR<XOR<CareSeekerUpdateToOneWithWhereWithoutAppointmentsInput, CareSeekerUpdateWithoutAppointmentsInput>, CareSeekerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutAppointmentsInput
    upsert?: ProfessionalUpsertWithoutAppointmentsInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutAppointmentsInput, ProfessionalUpdateWithoutAppointmentsInput>, ProfessionalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AddressUpdateOneWithoutCareSeekerAppointmentsNestedInput = {
    create?: XOR<AddressCreateWithoutCareSeekerAppointmentsInput, AddressUncheckedCreateWithoutCareSeekerAppointmentsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCareSeekerAppointmentsInput
    upsert?: AddressUpsertWithoutCareSeekerAppointmentsInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCareSeekerAppointmentsInput, AddressUpdateWithoutCareSeekerAppointmentsInput>, AddressUncheckedUpdateWithoutCareSeekerAppointmentsInput>
  }

  export type AddressUpdateOneWithoutProfessionalAppointmentsNestedInput = {
    create?: XOR<AddressCreateWithoutProfessionalAppointmentsInput, AddressUncheckedCreateWithoutProfessionalAppointmentsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutProfessionalAppointmentsInput
    upsert?: AddressUpsertWithoutProfessionalAppointmentsInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutProfessionalAppointmentsInput, AddressUpdateWithoutProfessionalAppointmentsInput>, AddressUncheckedUpdateWithoutProfessionalAppointmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CareSeekerCreateWithoutUserInput = {
    isHelper?: boolean
    addressId?: string | null
    Appointments?: AppointmentCreateNestedManyWithoutCareSeekerInput
  }

  export type CareSeekerUncheckedCreateWithoutUserInput = {
    isHelper?: boolean
    addressId?: string | null
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutCareSeekerInput
  }

  export type CareSeekerCreateOrConnectWithoutUserInput = {
    where: CareSeekerWhereUniqueInput
    create: XOR<CareSeekerCreateWithoutUserInput, CareSeekerUncheckedCreateWithoutUserInput>
  }

  export type CareSeekerCreateManyUserInputEnvelope = {
    data: CareSeekerCreateManyUserInput | CareSeekerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalCreateWithoutUserInput = {
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    profession?: ProfessionCreateNestedOneWithoutProfessionalsInput
    Availabilities?: AvailabilityCreateNestedManyWithoutProfessionalInput
    Appointments?: AppointmentCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutUserInput = {
    professionId?: string | null
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    Availabilities?: AvailabilityUncheckedCreateNestedManyWithoutProfessionalInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
  }

  export type ProfessionalCreateManyUserInputEnvelope = {
    data: ProfessionalCreateManyUserInput | ProfessionalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    careSeekerAppointments?: AppointmentCreateNestedManyWithoutCareSeekerAddressInput
    professionalAppointments?: AppointmentCreateNestedManyWithoutProfessionalAddressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    careSeekerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCareSeekerAddressInput
    professionalAppointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalAddressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CareSeekerUpsertWithWhereUniqueWithoutUserInput = {
    where: CareSeekerWhereUniqueInput
    update: XOR<CareSeekerUpdateWithoutUserInput, CareSeekerUncheckedUpdateWithoutUserInput>
    create: XOR<CareSeekerCreateWithoutUserInput, CareSeekerUncheckedCreateWithoutUserInput>
  }

  export type CareSeekerUpdateWithWhereUniqueWithoutUserInput = {
    where: CareSeekerWhereUniqueInput
    data: XOR<CareSeekerUpdateWithoutUserInput, CareSeekerUncheckedUpdateWithoutUserInput>
  }

  export type CareSeekerUpdateManyWithWhereWithoutUserInput = {
    where: CareSeekerScalarWhereInput
    data: XOR<CareSeekerUpdateManyMutationInput, CareSeekerUncheckedUpdateManyWithoutUserInput>
  }

  export type CareSeekerScalarWhereInput = {
    AND?: CareSeekerScalarWhereInput | CareSeekerScalarWhereInput[]
    OR?: CareSeekerScalarWhereInput[]
    NOT?: CareSeekerScalarWhereInput | CareSeekerScalarWhereInput[]
    userId?: StringFilter<"CareSeeker"> | string
    isHelper?: BoolFilter<"CareSeeker"> | boolean
    addressId?: StringNullableFilter<"CareSeeker"> | string | null
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutUserInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfessionalScalarWhereInput = {
    AND?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    OR?: ProfessionalScalarWhereInput[]
    NOT?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    userId?: StringFilter<"Professional"> | string
    professionId?: StringNullableFilter<"Professional"> | string | null
    isMobile?: BoolFilter<"Professional"> | boolean
    interventionRadius?: IntFilter<"Professional"> | number
    siret?: StringNullableFilter<"Professional"> | string | null
    isSiretValid?: BoolFilter<"Professional"> | boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    street?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    label?: StringFilter<"Address"> | string
    userId?: StringFilter<"Address"> | string
  }

  export type UserCreateWithoutCareSeekersInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    professionals?: ProfessionalCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCareSeekersInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCareSeekersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareSeekersInput, UserUncheckedCreateWithoutCareSeekersInput>
  }

  export type AppointmentCreateWithoutCareSeekerInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
    careSeekerAddress?: AddressCreateNestedOneWithoutCareSeekerAppointmentsInput
    professionalAddress?: AddressCreateNestedOneWithoutProfessionalAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutCareSeekerInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    professionalId: string
    careSeekerAddressId?: string | null
    professionalAddressId?: string | null
  }

  export type AppointmentCreateOrConnectWithoutCareSeekerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCareSeekerInput, AppointmentUncheckedCreateWithoutCareSeekerInput>
  }

  export type AppointmentCreateManyCareSeekerInputEnvelope = {
    data: AppointmentCreateManyCareSeekerInput | AppointmentCreateManyCareSeekerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCareSeekersInput = {
    update: XOR<UserUpdateWithoutCareSeekersInput, UserUncheckedUpdateWithoutCareSeekersInput>
    create: XOR<UserCreateWithoutCareSeekersInput, UserUncheckedCreateWithoutCareSeekersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCareSeekersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCareSeekersInput, UserUncheckedUpdateWithoutCareSeekersInput>
  }

  export type UserUpdateWithoutCareSeekersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    professionals?: ProfessionalUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCareSeekersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    professionals?: ProfessionalUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCareSeekerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCareSeekerInput, AppointmentUncheckedUpdateWithoutCareSeekerInput>
    create: XOR<AppointmentCreateWithoutCareSeekerInput, AppointmentUncheckedCreateWithoutCareSeekerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCareSeekerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCareSeekerInput, AppointmentUncheckedUpdateWithoutCareSeekerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCareSeekerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCareSeekerInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    start?: DateTimeFilter<"Appointment"> | Date | string
    end?: DateTimeFilter<"Appointment"> | Date | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    location?: StringFilter<"Appointment"> | string
    customLocation?: StringNullableFilter<"Appointment"> | string | null
    careSeekerId?: StringFilter<"Appointment"> | string
    professionalId?: StringFilter<"Appointment"> | string
    careSeekerAddressId?: StringNullableFilter<"Appointment"> | string | null
    professionalAddressId?: StringNullableFilter<"Appointment"> | string | null
  }

  export type UserCreateWithoutProfessionalsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    careSeekers?: CareSeekerCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessionalsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    careSeekers?: CareSeekerUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessionalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
  }

  export type ProfessionCreateWithoutProfessionalsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customProfession?: string | null
    isProfessionApproved?: boolean
    professionName: string
  }

  export type ProfessionUncheckedCreateWithoutProfessionalsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customProfession?: string | null
    isProfessionApproved?: boolean
    professionName: string
  }

  export type ProfessionCreateOrConnectWithoutProfessionalsInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutProfessionalsInput, ProfessionUncheckedCreateWithoutProfessionalsInput>
  }

  export type AvailabilityCreateWithoutProfessionalInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    minimumDuration?: number
    maximumDuration?: number | null
  }

  export type AvailabilityUncheckedCreateWithoutProfessionalInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    minimumDuration?: number
    maximumDuration?: number | null
  }

  export type AvailabilityCreateOrConnectWithoutProfessionalInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutProfessionalInput, AvailabilityUncheckedCreateWithoutProfessionalInput>
  }

  export type AvailabilityCreateManyProfessionalInputEnvelope = {
    data: AvailabilityCreateManyProfessionalInput | AvailabilityCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutProfessionalInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeeker: CareSeekerCreateNestedOneWithoutAppointmentsInput
    careSeekerAddress?: AddressCreateNestedOneWithoutCareSeekerAppointmentsInput
    professionalAddress?: AddressCreateNestedOneWithoutProfessionalAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutProfessionalInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    careSeekerAddressId?: string | null
    professionalAddressId?: string | null
  }

  export type AppointmentCreateOrConnectWithoutProfessionalInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput>
  }

  export type AppointmentCreateManyProfessionalInputEnvelope = {
    data: AppointmentCreateManyProfessionalInput | AppointmentCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfessionalsInput = {
    update: XOR<UserUpdateWithoutProfessionalsInput, UserUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessionalsInput, UserUncheckedUpdateWithoutProfessionalsInput>
  }

  export type UserUpdateWithoutProfessionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    careSeekers?: CareSeekerUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    careSeekers?: CareSeekerUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfessionUpsertWithoutProfessionalsInput = {
    update: XOR<ProfessionUpdateWithoutProfessionalsInput, ProfessionUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<ProfessionCreateWithoutProfessionalsInput, ProfessionUncheckedCreateWithoutProfessionalsInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutProfessionalsInput, ProfessionUncheckedUpdateWithoutProfessionalsInput>
  }

  export type ProfessionUpdateWithoutProfessionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customProfession?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionApproved?: BoolFieldUpdateOperationsInput | boolean
    professionName?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionUncheckedUpdateWithoutProfessionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customProfession?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionApproved?: BoolFieldUpdateOperationsInput | boolean
    professionName?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutProfessionalInput, AvailabilityUncheckedUpdateWithoutProfessionalInput>
    create: XOR<AvailabilityCreateWithoutProfessionalInput, AvailabilityUncheckedCreateWithoutProfessionalInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutProfessionalInput, AvailabilityUncheckedUpdateWithoutProfessionalInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutProfessionalInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    start?: DateTimeFilter<"Availability"> | Date | string
    end?: DateTimeFilter<"Availability"> | Date | string
    title?: StringFilter<"Availability"> | string
    minimumDuration?: IntFilter<"Availability"> | number
    maximumDuration?: IntNullableFilter<"Availability"> | number | null
    professionalId?: StringFilter<"Availability"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutProfessionalInput, AppointmentUncheckedUpdateWithoutProfessionalInput>
    create: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutProfessionalInput, AppointmentUncheckedUpdateWithoutProfessionalInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutProfessionalInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ProfessionalCreateWithoutProfessionInput = {
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    user: UserCreateNestedOneWithoutProfessionalsInput
    Availabilities?: AvailabilityCreateNestedManyWithoutProfessionalInput
    Appointments?: AppointmentCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutProfessionInput = {
    userId: string
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    Availabilities?: AvailabilityUncheckedCreateNestedManyWithoutProfessionalInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutProfessionInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutProfessionInput, ProfessionalUncheckedCreateWithoutProfessionInput>
  }

  export type ProfessionalCreateManyProfessionInputEnvelope = {
    data: ProfessionalCreateManyProfessionInput | ProfessionalCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutProfessionInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutProfessionInput, ProfessionalUncheckedUpdateWithoutProfessionInput>
    create: XOR<ProfessionalCreateWithoutProfessionInput, ProfessionalUncheckedCreateWithoutProfessionInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutProfessionInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutProfessionInput, ProfessionalUncheckedUpdateWithoutProfessionInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutProfessionInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutProfessionInput>
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    careSeekers?: CareSeekerCreateNestedManyWithoutUserInput
    professionals?: ProfessionalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: boolean
    careSeekers?: CareSeekerUncheckedCreateNestedManyWithoutUserInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type AppointmentCreateWithoutCareSeekerAddressInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeeker: CareSeekerCreateNestedOneWithoutAppointmentsInput
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
    professionalAddress?: AddressCreateNestedOneWithoutProfessionalAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutCareSeekerAddressInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    professionalId: string
    professionalAddressId?: string | null
  }

  export type AppointmentCreateOrConnectWithoutCareSeekerAddressInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCareSeekerAddressInput, AppointmentUncheckedCreateWithoutCareSeekerAddressInput>
  }

  export type AppointmentCreateManyCareSeekerAddressInputEnvelope = {
    data: AppointmentCreateManyCareSeekerAddressInput | AppointmentCreateManyCareSeekerAddressInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutProfessionalAddressInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeeker: CareSeekerCreateNestedOneWithoutAppointmentsInput
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
    careSeekerAddress?: AddressCreateNestedOneWithoutCareSeekerAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutProfessionalAddressInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    professionalId: string
    careSeekerAddressId?: string | null
  }

  export type AppointmentCreateOrConnectWithoutProfessionalAddressInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutProfessionalAddressInput, AppointmentUncheckedCreateWithoutProfessionalAddressInput>
  }

  export type AppointmentCreateManyProfessionalAddressInputEnvelope = {
    data: AppointmentCreateManyProfessionalAddressInput | AppointmentCreateManyProfessionalAddressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    careSeekers?: CareSeekerUpdateManyWithoutUserNestedInput
    professionals?: ProfessionalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    careSeekers?: CareSeekerUncheckedUpdateManyWithoutUserNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCareSeekerAddressInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCareSeekerAddressInput, AppointmentUncheckedUpdateWithoutCareSeekerAddressInput>
    create: XOR<AppointmentCreateWithoutCareSeekerAddressInput, AppointmentUncheckedCreateWithoutCareSeekerAddressInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCareSeekerAddressInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCareSeekerAddressInput, AppointmentUncheckedUpdateWithoutCareSeekerAddressInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCareSeekerAddressInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCareSeekerAddressInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutProfessionalAddressInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutProfessionalAddressInput, AppointmentUncheckedUpdateWithoutProfessionalAddressInput>
    create: XOR<AppointmentCreateWithoutProfessionalAddressInput, AppointmentUncheckedCreateWithoutProfessionalAddressInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutProfessionalAddressInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutProfessionalAddressInput, AppointmentUncheckedUpdateWithoutProfessionalAddressInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutProfessionalAddressInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutProfessionalAddressInput>
  }

  export type ProfessionalCreateWithoutAvailabilitiesInput = {
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    user: UserCreateNestedOneWithoutProfessionalsInput
    profession?: ProfessionCreateNestedOneWithoutProfessionalsInput
    Appointments?: AppointmentCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutAvailabilitiesInput = {
    userId: string
    professionId?: string | null
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutAvailabilitiesInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutAvailabilitiesInput, ProfessionalUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type ProfessionalUpsertWithoutAvailabilitiesInput = {
    update: XOR<ProfessionalUpdateWithoutAvailabilitiesInput, ProfessionalUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<ProfessionalCreateWithoutAvailabilitiesInput, ProfessionalUncheckedCreateWithoutAvailabilitiesInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutAvailabilitiesInput, ProfessionalUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ProfessionalUpdateWithoutAvailabilitiesInput = {
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProfessionalsNestedInput
    profession?: ProfessionUpdateOneWithoutProfessionalsNestedInput
    Appointments?: AppointmentUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutAvailabilitiesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    professionId?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    Appointments?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type CareSeekerCreateWithoutAppointmentsInput = {
    isHelper?: boolean
    addressId?: string | null
    user: UserCreateNestedOneWithoutCareSeekersInput
  }

  export type CareSeekerUncheckedCreateWithoutAppointmentsInput = {
    userId: string
    isHelper?: boolean
    addressId?: string | null
  }

  export type CareSeekerCreateOrConnectWithoutAppointmentsInput = {
    where: CareSeekerWhereUniqueInput
    create: XOR<CareSeekerCreateWithoutAppointmentsInput, CareSeekerUncheckedCreateWithoutAppointmentsInput>
  }

  export type ProfessionalCreateWithoutAppointmentsInput = {
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    user: UserCreateNestedOneWithoutProfessionalsInput
    profession?: ProfessionCreateNestedOneWithoutProfessionalsInput
    Availabilities?: AvailabilityCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutAppointmentsInput = {
    userId: string
    professionId?: string | null
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
    Availabilities?: AvailabilityUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutAppointmentsInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
  }

  export type AddressCreateWithoutCareSeekerAppointmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    user: UserCreateNestedOneWithoutAddressInput
    professionalAppointments?: AppointmentCreateNestedManyWithoutProfessionalAddressInput
  }

  export type AddressUncheckedCreateWithoutCareSeekerAppointmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    userId: string
    professionalAppointments?: AppointmentUncheckedCreateNestedManyWithoutProfessionalAddressInput
  }

  export type AddressCreateOrConnectWithoutCareSeekerAppointmentsInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCareSeekerAppointmentsInput, AddressUncheckedCreateWithoutCareSeekerAppointmentsInput>
  }

  export type AddressCreateWithoutProfessionalAppointmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    user: UserCreateNestedOneWithoutAddressInput
    careSeekerAppointments?: AppointmentCreateNestedManyWithoutCareSeekerAddressInput
  }

  export type AddressUncheckedCreateWithoutProfessionalAppointmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
    userId: string
    careSeekerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCareSeekerAddressInput
  }

  export type AddressCreateOrConnectWithoutProfessionalAppointmentsInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutProfessionalAppointmentsInput, AddressUncheckedCreateWithoutProfessionalAppointmentsInput>
  }

  export type CareSeekerUpsertWithoutAppointmentsInput = {
    update: XOR<CareSeekerUpdateWithoutAppointmentsInput, CareSeekerUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CareSeekerCreateWithoutAppointmentsInput, CareSeekerUncheckedCreateWithoutAppointmentsInput>
    where?: CareSeekerWhereInput
  }

  export type CareSeekerUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CareSeekerWhereInput
    data: XOR<CareSeekerUpdateWithoutAppointmentsInput, CareSeekerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CareSeekerUpdateWithoutAppointmentsInput = {
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCareSeekersNestedInput
  }

  export type CareSeekerUncheckedUpdateWithoutAppointmentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessionalUpsertWithoutAppointmentsInput = {
    update: XOR<ProfessionalUpdateWithoutAppointmentsInput, ProfessionalUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutAppointmentsInput, ProfessionalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProfessionalUpdateWithoutAppointmentsInput = {
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProfessionalsNestedInput
    profession?: ProfessionUpdateOneWithoutProfessionalsNestedInput
    Availabilities?: AvailabilityUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutAppointmentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    professionId?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    Availabilities?: AvailabilityUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type AddressUpsertWithoutCareSeekerAppointmentsInput = {
    update: XOR<AddressUpdateWithoutCareSeekerAppointmentsInput, AddressUncheckedUpdateWithoutCareSeekerAppointmentsInput>
    create: XOR<AddressCreateWithoutCareSeekerAppointmentsInput, AddressUncheckedCreateWithoutCareSeekerAppointmentsInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutCareSeekerAppointmentsInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutCareSeekerAppointmentsInput, AddressUncheckedUpdateWithoutCareSeekerAppointmentsInput>
  }

  export type AddressUpdateWithoutCareSeekerAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
    professionalAppointments?: AppointmentUpdateManyWithoutProfessionalAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCareSeekerAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    professionalAppointments?: AppointmentUncheckedUpdateManyWithoutProfessionalAddressNestedInput
  }

  export type AddressUpsertWithoutProfessionalAppointmentsInput = {
    update: XOR<AddressUpdateWithoutProfessionalAppointmentsInput, AddressUncheckedUpdateWithoutProfessionalAppointmentsInput>
    create: XOR<AddressCreateWithoutProfessionalAppointmentsInput, AddressUncheckedCreateWithoutProfessionalAppointmentsInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutProfessionalAppointmentsInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutProfessionalAppointmentsInput, AddressUncheckedUpdateWithoutProfessionalAppointmentsInput>
  }

  export type AddressUpdateWithoutProfessionalAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
    careSeekerAppointments?: AppointmentUpdateManyWithoutCareSeekerAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutProfessionalAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    careSeekerAppointments?: AppointmentUncheckedUpdateManyWithoutCareSeekerAddressNestedInput
  }

  export type CareSeekerCreateManyUserInput = {
    isHelper?: boolean
    addressId?: string | null
  }

  export type ProfessionalCreateManyUserInput = {
    professionId?: string | null
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
  }

  export type AddressCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    street?: string | null
    postalCode?: string | null
    city: string
    latitude?: number | null
    longitude?: number | null
    label?: string
  }

  export type CareSeekerUpdateWithoutUserInput = {
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentUpdateManyWithoutCareSeekerNestedInput
  }

  export type CareSeekerUncheckedUpdateWithoutUserInput = {
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentUncheckedUpdateManyWithoutCareSeekerNestedInput
  }

  export type CareSeekerUncheckedUpdateManyWithoutUserInput = {
    isHelper?: BoolFieldUpdateOperationsInput | boolean
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessionalUpdateWithoutUserInput = {
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    profession?: ProfessionUpdateOneWithoutProfessionalsNestedInput
    Availabilities?: AvailabilityUpdateManyWithoutProfessionalNestedInput
    Appointments?: AppointmentUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutUserInput = {
    professionId?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    Availabilities?: AvailabilityUncheckedUpdateManyWithoutProfessionalNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateManyWithoutUserInput = {
    professionId?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    careSeekerAppointments?: AppointmentUpdateManyWithoutCareSeekerAddressNestedInput
    professionalAppointments?: AppointmentUpdateManyWithoutProfessionalAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
    careSeekerAppointments?: AppointmentUncheckedUpdateManyWithoutCareSeekerAddressNestedInput
    professionalAppointments?: AppointmentUncheckedUpdateManyWithoutProfessionalAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyCareSeekerInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    professionalId: string
    careSeekerAddressId?: string | null
    professionalAddressId?: string | null
  }

  export type AppointmentUpdateWithoutCareSeekerInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
    careSeekerAddress?: AddressUpdateOneWithoutCareSeekerAppointmentsNestedInput
    professionalAddress?: AddressUpdateOneWithoutProfessionalAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCareSeekerInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    professionalId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutCareSeekerInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    professionalId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityCreateManyProfessionalInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    minimumDuration?: number
    maximumDuration?: number | null
  }

  export type AppointmentCreateManyProfessionalInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    careSeekerAddressId?: string | null
    professionalAddressId?: string | null
  }

  export type AvailabilityUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvailabilityUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvailabilityUncheckedUpdateManyWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    minimumDuration?: IntFieldUpdateOperationsInput | number
    maximumDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AppointmentUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeeker?: CareSeekerUpdateOneRequiredWithoutAppointmentsNestedInput
    careSeekerAddress?: AddressUpdateOneWithoutCareSeekerAppointmentsNestedInput
    professionalAddress?: AddressUpdateOneWithoutProfessionalAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessionalCreateManyProfessionInput = {
    userId: string
    isMobile?: boolean
    interventionRadius?: number
    siret?: string | null
    isSiretValid?: boolean
  }

  export type ProfessionalUpdateWithoutProfessionInput = {
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProfessionalsNestedInput
    Availabilities?: AvailabilityUpdateManyWithoutProfessionalNestedInput
    Appointments?: AppointmentUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutProfessionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
    Availabilities?: AvailabilityUncheckedUpdateManyWithoutProfessionalNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateManyWithoutProfessionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    interventionRadius?: IntFieldUpdateOperationsInput | number
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    isSiretValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentCreateManyCareSeekerAddressInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    professionalId: string
    professionalAddressId?: string | null
  }

  export type AppointmentCreateManyProfessionalAddressInput = {
    id?: string
    start: Date | string
    end: Date | string
    title: string
    description?: string | null
    status?: string
    location: string
    customLocation?: string | null
    careSeekerId: string
    professionalId: string
    careSeekerAddressId?: string | null
  }

  export type AppointmentUpdateWithoutCareSeekerAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeeker?: CareSeekerUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
    professionalAddress?: AddressUpdateOneWithoutProfessionalAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCareSeekerAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutCareSeekerAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    professionalAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUpdateWithoutProfessionalAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeeker?: CareSeekerUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
    careSeekerAddress?: AddressUpdateOneWithoutCareSeekerAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutProfessionalAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutProfessionalAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    careSeekerId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    careSeekerAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}