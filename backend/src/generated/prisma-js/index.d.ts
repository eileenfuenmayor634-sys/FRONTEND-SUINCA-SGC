
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model contenedores
 * 
 */
export type contenedores = $Result.DefaultSelection<Prisma.$contenedoresPayload>
/**
 * Model hydrostatic_tests
 * 
 */
export type hydrostatic_tests = $Result.DefaultSelection<Prisma.$hydrostatic_testsPayload>
/**
 * Model mantenimiento_registros
 * 
 */
export type mantenimiento_registros = $Result.DefaultSelection<Prisma.$mantenimiento_registrosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contenedores`: Exposes CRUD operations for the **contenedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contenedores
    * const contenedores = await prisma.contenedores.findMany()
    * ```
    */
  get contenedores(): Prisma.contenedoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hydrostatic_tests`: Exposes CRUD operations for the **hydrostatic_tests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hydrostatic_tests
    * const hydrostatic_tests = await prisma.hydrostatic_tests.findMany()
    * ```
    */
  get hydrostatic_tests(): Prisma.hydrostatic_testsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mantenimiento_registros`: Exposes CRUD operations for the **mantenimiento_registros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mantenimiento_registros
    * const mantenimiento_registros = await prisma.mantenimiento_registros.findMany()
    * ```
    */
  get mantenimiento_registros(): Prisma.mantenimiento_registrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    clientes: 'clientes',
    contenedores: 'contenedores',
    hydrostatic_tests: 'hydrostatic_tests',
    mantenimiento_registros: 'mantenimiento_registros',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientes" | "contenedores" | "hydrostatic_tests" | "mantenimiento_registros" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      contenedores: {
        payload: Prisma.$contenedoresPayload<ExtArgs>
        fields: Prisma.contenedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contenedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contenedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>
          }
          findFirst: {
            args: Prisma.contenedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contenedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>
          }
          findMany: {
            args: Prisma.contenedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>[]
          }
          create: {
            args: Prisma.contenedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>
          }
          createMany: {
            args: Prisma.contenedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contenedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>
          }
          update: {
            args: Prisma.contenedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>
          }
          deleteMany: {
            args: Prisma.contenedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contenedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contenedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contenedoresPayload>
          }
          aggregate: {
            args: Prisma.ContenedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContenedores>
          }
          groupBy: {
            args: Prisma.contenedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContenedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.contenedoresCountArgs<ExtArgs>
            result: $Utils.Optional<ContenedoresCountAggregateOutputType> | number
          }
        }
      }
      hydrostatic_tests: {
        payload: Prisma.$hydrostatic_testsPayload<ExtArgs>
        fields: Prisma.hydrostatic_testsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hydrostatic_testsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hydrostatic_testsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>
          }
          findFirst: {
            args: Prisma.hydrostatic_testsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hydrostatic_testsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>
          }
          findMany: {
            args: Prisma.hydrostatic_testsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>[]
          }
          create: {
            args: Prisma.hydrostatic_testsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>
          }
          createMany: {
            args: Prisma.hydrostatic_testsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hydrostatic_testsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>
          }
          update: {
            args: Prisma.hydrostatic_testsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>
          }
          deleteMany: {
            args: Prisma.hydrostatic_testsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hydrostatic_testsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hydrostatic_testsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hydrostatic_testsPayload>
          }
          aggregate: {
            args: Prisma.Hydrostatic_testsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHydrostatic_tests>
          }
          groupBy: {
            args: Prisma.hydrostatic_testsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hydrostatic_testsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hydrostatic_testsCountArgs<ExtArgs>
            result: $Utils.Optional<Hydrostatic_testsCountAggregateOutputType> | number
          }
        }
      }
      mantenimiento_registros: {
        payload: Prisma.$mantenimiento_registrosPayload<ExtArgs>
        fields: Prisma.mantenimiento_registrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mantenimiento_registrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mantenimiento_registrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>
          }
          findFirst: {
            args: Prisma.mantenimiento_registrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mantenimiento_registrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>
          }
          findMany: {
            args: Prisma.mantenimiento_registrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>[]
          }
          create: {
            args: Prisma.mantenimiento_registrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>
          }
          createMany: {
            args: Prisma.mantenimiento_registrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mantenimiento_registrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>
          }
          update: {
            args: Prisma.mantenimiento_registrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>
          }
          deleteMany: {
            args: Prisma.mantenimiento_registrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mantenimiento_registrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mantenimiento_registrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mantenimiento_registrosPayload>
          }
          aggregate: {
            args: Prisma.Mantenimiento_registrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMantenimiento_registros>
          }
          groupBy: {
            args: Prisma.mantenimiento_registrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mantenimiento_registrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.mantenimiento_registrosCountArgs<ExtArgs>
            result: $Utils.Optional<Mantenimiento_registrosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    clientes?: clientesOmit
    contenedores?: contenedoresOmit
    hydrostatic_tests?: hydrostatic_testsOmit
    mantenimiento_registros?: mantenimiento_registrosOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    contenedores: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenedores?: boolean | ClientesCountOutputTypeCountContenedoresArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountContenedoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contenedoresWhereInput
  }


  /**
   * Count Type ContenedoresCountOutputType
   */

  export type ContenedoresCountOutputType = {
    hydrostatic_tests: number
    mantenimiento_registros: number
  }

  export type ContenedoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hydrostatic_tests?: boolean | ContenedoresCountOutputTypeCountHydrostatic_testsArgs
    mantenimiento_registros?: boolean | ContenedoresCountOutputTypeCountMantenimiento_registrosArgs
  }

  // Custom InputTypes
  /**
   * ContenedoresCountOutputType without action
   */
  export type ContenedoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContenedoresCountOutputType
     */
    select?: ContenedoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContenedoresCountOutputType without action
   */
  export type ContenedoresCountOutputTypeCountHydrostatic_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hydrostatic_testsWhereInput
  }

  /**
   * ContenedoresCountOutputType without action
   */
  export type ContenedoresCountOutputTypeCountMantenimiento_registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mantenimiento_registrosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    hydrostatic_tests: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hydrostatic_tests?: boolean | UsuariosCountOutputTypeCountHydrostatic_testsArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountHydrostatic_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hydrostatic_testsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesMinAggregateOutputType = {
    id: string | null
    name: string | null
    rif: string | null
    contact_person: string | null
    email: string | null
    phone: string | null
    status: string | null
    created_at: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rif: string | null
    contact_person: string | null
    email: string | null
    phone: string | null
    status: string | null
    created_at: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    name: number
    rif: number
    contact_person: number
    email: number
    phone: number
    status: number
    created_at: number
    _all: number
  }


  export type ClientesMinAggregateInputType = {
    id?: true
    name?: true
    rif?: true
    contact_person?: true
    email?: true
    phone?: true
    status?: true
    created_at?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    name?: true
    rif?: true
    contact_person?: true
    email?: true
    phone?: true
    status?: true
    created_at?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    name?: true
    rif?: true
    contact_person?: true
    email?: true
    phone?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: string
    name: string
    rif: string
    contact_person: string | null
    email: string | null
    phone: string | null
    status: string | null
    created_at: Date | null
    _count: ClientesCountAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rif?: boolean
    contact_person?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    created_at?: boolean
    contenedores?: boolean | clientes$contenedoresArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>



  export type clientesSelectScalar = {
    id?: boolean
    name?: boolean
    rif?: boolean
    contact_person?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rif" | "contact_person" | "email" | "phone" | "status" | "created_at", ExtArgs["result"]["clientes"]>
  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenedores?: boolean | clientes$contenedoresArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      contenedores: Prisma.$contenedoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rif: string
      contact_person: string | null
      email: string | null
      phone: string | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
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
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contenedores<T extends clientes$contenedoresArgs<ExtArgs> = {}>(args?: Subset<T, clientes$contenedoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly id: FieldRef<"clientes", 'String'>
    readonly name: FieldRef<"clientes", 'String'>
    readonly rif: FieldRef<"clientes", 'String'>
    readonly contact_person: FieldRef<"clientes", 'String'>
    readonly email: FieldRef<"clientes", 'String'>
    readonly phone: FieldRef<"clientes", 'String'>
    readonly status: FieldRef<"clientes", 'String'>
    readonly created_at: FieldRef<"clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes.contenedores
   */
  export type clientes$contenedoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    where?: contenedoresWhereInput
    orderBy?: contenedoresOrderByWithRelationInput | contenedoresOrderByWithRelationInput[]
    cursor?: contenedoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContenedoresScalarFieldEnum | ContenedoresScalarFieldEnum[]
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model contenedores
   */

  export type AggregateContenedores = {
    _count: ContenedoresCountAggregateOutputType | null
    _avg: ContenedoresAvgAggregateOutputType | null
    _sum: ContenedoresSumAggregateOutputType | null
    _min: ContenedoresMinAggregateOutputType | null
    _max: ContenedoresMaxAggregateOutputType | null
  }

  export type ContenedoresAvgAggregateOutputType = {
    capacidad: number | null
  }

  export type ContenedoresSumAggregateOutputType = {
    capacidad: number | null
  }

  export type ContenedoresMinAggregateOutputType = {
    id: string | null
    numero_serie: string | null
    tipo: string | null
    capacidad: number | null
    estado: string | null
    ubicacion: string | null
    propietario: string | null
    client_id: string | null
    fecha_ultimo_mantenimiento: Date | null
    observaciones: string | null
    created_at: Date | null
  }

  export type ContenedoresMaxAggregateOutputType = {
    id: string | null
    numero_serie: string | null
    tipo: string | null
    capacidad: number | null
    estado: string | null
    ubicacion: string | null
    propietario: string | null
    client_id: string | null
    fecha_ultimo_mantenimiento: Date | null
    observaciones: string | null
    created_at: Date | null
  }

  export type ContenedoresCountAggregateOutputType = {
    id: number
    numero_serie: number
    tipo: number
    capacidad: number
    estado: number
    ubicacion: number
    propietario: number
    client_id: number
    fecha_ultimo_mantenimiento: number
    observaciones: number
    created_at: number
    _all: number
  }


  export type ContenedoresAvgAggregateInputType = {
    capacidad?: true
  }

  export type ContenedoresSumAggregateInputType = {
    capacidad?: true
  }

  export type ContenedoresMinAggregateInputType = {
    id?: true
    numero_serie?: true
    tipo?: true
    capacidad?: true
    estado?: true
    ubicacion?: true
    propietario?: true
    client_id?: true
    fecha_ultimo_mantenimiento?: true
    observaciones?: true
    created_at?: true
  }

  export type ContenedoresMaxAggregateInputType = {
    id?: true
    numero_serie?: true
    tipo?: true
    capacidad?: true
    estado?: true
    ubicacion?: true
    propietario?: true
    client_id?: true
    fecha_ultimo_mantenimiento?: true
    observaciones?: true
    created_at?: true
  }

  export type ContenedoresCountAggregateInputType = {
    id?: true
    numero_serie?: true
    tipo?: true
    capacidad?: true
    estado?: true
    ubicacion?: true
    propietario?: true
    client_id?: true
    fecha_ultimo_mantenimiento?: true
    observaciones?: true
    created_at?: true
    _all?: true
  }

  export type ContenedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contenedores to aggregate.
     */
    where?: contenedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contenedores to fetch.
     */
    orderBy?: contenedoresOrderByWithRelationInput | contenedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contenedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contenedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contenedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contenedores
    **/
    _count?: true | ContenedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContenedoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContenedoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContenedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContenedoresMaxAggregateInputType
  }

  export type GetContenedoresAggregateType<T extends ContenedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateContenedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContenedores[P]>
      : GetScalarType<T[P], AggregateContenedores[P]>
  }




  export type contenedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contenedoresWhereInput
    orderBy?: contenedoresOrderByWithAggregationInput | contenedoresOrderByWithAggregationInput[]
    by: ContenedoresScalarFieldEnum[] | ContenedoresScalarFieldEnum
    having?: contenedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContenedoresCountAggregateInputType | true
    _avg?: ContenedoresAvgAggregateInputType
    _sum?: ContenedoresSumAggregateInputType
    _min?: ContenedoresMinAggregateInputType
    _max?: ContenedoresMaxAggregateInputType
  }

  export type ContenedoresGroupByOutputType = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado: string
    ubicacion: string | null
    propietario: string | null
    client_id: string | null
    fecha_ultimo_mantenimiento: Date | null
    observaciones: string | null
    created_at: Date | null
    _count: ContenedoresCountAggregateOutputType | null
    _avg: ContenedoresAvgAggregateOutputType | null
    _sum: ContenedoresSumAggregateOutputType | null
    _min: ContenedoresMinAggregateOutputType | null
    _max: ContenedoresMaxAggregateOutputType | null
  }

  type GetContenedoresGroupByPayload<T extends contenedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContenedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContenedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContenedoresGroupByOutputType[P]>
            : GetScalarType<T[P], ContenedoresGroupByOutputType[P]>
        }
      >
    >


  export type contenedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_serie?: boolean
    tipo?: boolean
    capacidad?: boolean
    estado?: boolean
    ubicacion?: boolean
    propietario?: boolean
    client_id?: boolean
    fecha_ultimo_mantenimiento?: boolean
    observaciones?: boolean
    created_at?: boolean
    clientes?: boolean | contenedores$clientesArgs<ExtArgs>
    hydrostatic_tests?: boolean | contenedores$hydrostatic_testsArgs<ExtArgs>
    mantenimiento_registros?: boolean | contenedores$mantenimiento_registrosArgs<ExtArgs>
    _count?: boolean | ContenedoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contenedores"]>



  export type contenedoresSelectScalar = {
    id?: boolean
    numero_serie?: boolean
    tipo?: boolean
    capacidad?: boolean
    estado?: boolean
    ubicacion?: boolean
    propietario?: boolean
    client_id?: boolean
    fecha_ultimo_mantenimiento?: boolean
    observaciones?: boolean
    created_at?: boolean
  }

  export type contenedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero_serie" | "tipo" | "capacidad" | "estado" | "ubicacion" | "propietario" | "client_id" | "fecha_ultimo_mantenimiento" | "observaciones" | "created_at", ExtArgs["result"]["contenedores"]>
  export type contenedoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | contenedores$clientesArgs<ExtArgs>
    hydrostatic_tests?: boolean | contenedores$hydrostatic_testsArgs<ExtArgs>
    mantenimiento_registros?: boolean | contenedores$mantenimiento_registrosArgs<ExtArgs>
    _count?: boolean | ContenedoresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $contenedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contenedores"
    objects: {
      clientes: Prisma.$clientesPayload<ExtArgs> | null
      hydrostatic_tests: Prisma.$hydrostatic_testsPayload<ExtArgs>[]
      mantenimiento_registros: Prisma.$mantenimiento_registrosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero_serie: string
      tipo: string
      capacidad: number
      estado: string
      ubicacion: string | null
      propietario: string | null
      client_id: string | null
      fecha_ultimo_mantenimiento: Date | null
      observaciones: string | null
      created_at: Date | null
    }, ExtArgs["result"]["contenedores"]>
    composites: {}
  }

  type contenedoresGetPayload<S extends boolean | null | undefined | contenedoresDefaultArgs> = $Result.GetResult<Prisma.$contenedoresPayload, S>

  type contenedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contenedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContenedoresCountAggregateInputType | true
    }

  export interface contenedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contenedores'], meta: { name: 'contenedores' } }
    /**
     * Find zero or one Contenedores that matches the filter.
     * @param {contenedoresFindUniqueArgs} args - Arguments to find a Contenedores
     * @example
     * // Get one Contenedores
     * const contenedores = await prisma.contenedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contenedoresFindUniqueArgs>(args: SelectSubset<T, contenedoresFindUniqueArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contenedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contenedoresFindUniqueOrThrowArgs} args - Arguments to find a Contenedores
     * @example
     * // Get one Contenedores
     * const contenedores = await prisma.contenedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contenedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, contenedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contenedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contenedoresFindFirstArgs} args - Arguments to find a Contenedores
     * @example
     * // Get one Contenedores
     * const contenedores = await prisma.contenedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contenedoresFindFirstArgs>(args?: SelectSubset<T, contenedoresFindFirstArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contenedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contenedoresFindFirstOrThrowArgs} args - Arguments to find a Contenedores
     * @example
     * // Get one Contenedores
     * const contenedores = await prisma.contenedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contenedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, contenedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contenedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contenedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contenedores
     * const contenedores = await prisma.contenedores.findMany()
     * 
     * // Get first 10 Contenedores
     * const contenedores = await prisma.contenedores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contenedoresWithIdOnly = await prisma.contenedores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contenedoresFindManyArgs>(args?: SelectSubset<T, contenedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contenedores.
     * @param {contenedoresCreateArgs} args - Arguments to create a Contenedores.
     * @example
     * // Create one Contenedores
     * const Contenedores = await prisma.contenedores.create({
     *   data: {
     *     // ... data to create a Contenedores
     *   }
     * })
     * 
     */
    create<T extends contenedoresCreateArgs>(args: SelectSubset<T, contenedoresCreateArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contenedores.
     * @param {contenedoresCreateManyArgs} args - Arguments to create many Contenedores.
     * @example
     * // Create many Contenedores
     * const contenedores = await prisma.contenedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contenedoresCreateManyArgs>(args?: SelectSubset<T, contenedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contenedores.
     * @param {contenedoresDeleteArgs} args - Arguments to delete one Contenedores.
     * @example
     * // Delete one Contenedores
     * const Contenedores = await prisma.contenedores.delete({
     *   where: {
     *     // ... filter to delete one Contenedores
     *   }
     * })
     * 
     */
    delete<T extends contenedoresDeleteArgs>(args: SelectSubset<T, contenedoresDeleteArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contenedores.
     * @param {contenedoresUpdateArgs} args - Arguments to update one Contenedores.
     * @example
     * // Update one Contenedores
     * const contenedores = await prisma.contenedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contenedoresUpdateArgs>(args: SelectSubset<T, contenedoresUpdateArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contenedores.
     * @param {contenedoresDeleteManyArgs} args - Arguments to filter Contenedores to delete.
     * @example
     * // Delete a few Contenedores
     * const { count } = await prisma.contenedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contenedoresDeleteManyArgs>(args?: SelectSubset<T, contenedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contenedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contenedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contenedores
     * const contenedores = await prisma.contenedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contenedoresUpdateManyArgs>(args: SelectSubset<T, contenedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contenedores.
     * @param {contenedoresUpsertArgs} args - Arguments to update or create a Contenedores.
     * @example
     * // Update or create a Contenedores
     * const contenedores = await prisma.contenedores.upsert({
     *   create: {
     *     // ... data to create a Contenedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contenedores we want to update
     *   }
     * })
     */
    upsert<T extends contenedoresUpsertArgs>(args: SelectSubset<T, contenedoresUpsertArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contenedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contenedoresCountArgs} args - Arguments to filter Contenedores to count.
     * @example
     * // Count the number of Contenedores
     * const count = await prisma.contenedores.count({
     *   where: {
     *     // ... the filter for the Contenedores we want to count
     *   }
     * })
    **/
    count<T extends contenedoresCountArgs>(
      args?: Subset<T, contenedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContenedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contenedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContenedoresAggregateArgs>(args: Subset<T, ContenedoresAggregateArgs>): Prisma.PrismaPromise<GetContenedoresAggregateType<T>>

    /**
     * Group by Contenedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contenedoresGroupByArgs} args - Group by arguments.
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
      T extends contenedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contenedoresGroupByArgs['orderBy'] }
        : { orderBy?: contenedoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contenedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContenedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contenedores model
   */
  readonly fields: contenedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contenedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contenedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends contenedores$clientesArgs<ExtArgs> = {}>(args?: Subset<T, contenedores$clientesArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hydrostatic_tests<T extends contenedores$hydrostatic_testsArgs<ExtArgs> = {}>(args?: Subset<T, contenedores$hydrostatic_testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mantenimiento_registros<T extends contenedores$mantenimiento_registrosArgs<ExtArgs> = {}>(args?: Subset<T, contenedores$mantenimiento_registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the contenedores model
   */
  interface contenedoresFieldRefs {
    readonly id: FieldRef<"contenedores", 'String'>
    readonly numero_serie: FieldRef<"contenedores", 'String'>
    readonly tipo: FieldRef<"contenedores", 'String'>
    readonly capacidad: FieldRef<"contenedores", 'Int'>
    readonly estado: FieldRef<"contenedores", 'String'>
    readonly ubicacion: FieldRef<"contenedores", 'String'>
    readonly propietario: FieldRef<"contenedores", 'String'>
    readonly client_id: FieldRef<"contenedores", 'String'>
    readonly fecha_ultimo_mantenimiento: FieldRef<"contenedores", 'DateTime'>
    readonly observaciones: FieldRef<"contenedores", 'String'>
    readonly created_at: FieldRef<"contenedores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contenedores findUnique
   */
  export type contenedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * Filter, which contenedores to fetch.
     */
    where: contenedoresWhereUniqueInput
  }

  /**
   * contenedores findUniqueOrThrow
   */
  export type contenedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * Filter, which contenedores to fetch.
     */
    where: contenedoresWhereUniqueInput
  }

  /**
   * contenedores findFirst
   */
  export type contenedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * Filter, which contenedores to fetch.
     */
    where?: contenedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contenedores to fetch.
     */
    orderBy?: contenedoresOrderByWithRelationInput | contenedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contenedores.
     */
    cursor?: contenedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contenedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contenedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contenedores.
     */
    distinct?: ContenedoresScalarFieldEnum | ContenedoresScalarFieldEnum[]
  }

  /**
   * contenedores findFirstOrThrow
   */
  export type contenedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * Filter, which contenedores to fetch.
     */
    where?: contenedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contenedores to fetch.
     */
    orderBy?: contenedoresOrderByWithRelationInput | contenedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contenedores.
     */
    cursor?: contenedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contenedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contenedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contenedores.
     */
    distinct?: ContenedoresScalarFieldEnum | ContenedoresScalarFieldEnum[]
  }

  /**
   * contenedores findMany
   */
  export type contenedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * Filter, which contenedores to fetch.
     */
    where?: contenedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contenedores to fetch.
     */
    orderBy?: contenedoresOrderByWithRelationInput | contenedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contenedores.
     */
    cursor?: contenedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contenedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contenedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contenedores.
     */
    distinct?: ContenedoresScalarFieldEnum | ContenedoresScalarFieldEnum[]
  }

  /**
   * contenedores create
   */
  export type contenedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * The data needed to create a contenedores.
     */
    data: XOR<contenedoresCreateInput, contenedoresUncheckedCreateInput>
  }

  /**
   * contenedores createMany
   */
  export type contenedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contenedores.
     */
    data: contenedoresCreateManyInput | contenedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contenedores update
   */
  export type contenedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * The data needed to update a contenedores.
     */
    data: XOR<contenedoresUpdateInput, contenedoresUncheckedUpdateInput>
    /**
     * Choose, which contenedores to update.
     */
    where: contenedoresWhereUniqueInput
  }

  /**
   * contenedores updateMany
   */
  export type contenedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contenedores.
     */
    data: XOR<contenedoresUpdateManyMutationInput, contenedoresUncheckedUpdateManyInput>
    /**
     * Filter which contenedores to update
     */
    where?: contenedoresWhereInput
    /**
     * Limit how many contenedores to update.
     */
    limit?: number
  }

  /**
   * contenedores upsert
   */
  export type contenedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * The filter to search for the contenedores to update in case it exists.
     */
    where: contenedoresWhereUniqueInput
    /**
     * In case the contenedores found by the `where` argument doesn't exist, create a new contenedores with this data.
     */
    create: XOR<contenedoresCreateInput, contenedoresUncheckedCreateInput>
    /**
     * In case the contenedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contenedoresUpdateInput, contenedoresUncheckedUpdateInput>
  }

  /**
   * contenedores delete
   */
  export type contenedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    /**
     * Filter which contenedores to delete.
     */
    where: contenedoresWhereUniqueInput
  }

  /**
   * contenedores deleteMany
   */
  export type contenedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contenedores to delete
     */
    where?: contenedoresWhereInput
    /**
     * Limit how many contenedores to delete.
     */
    limit?: number
  }

  /**
   * contenedores.clientes
   */
  export type contenedores$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    where?: clientesWhereInput
  }

  /**
   * contenedores.hydrostatic_tests
   */
  export type contenedores$hydrostatic_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    where?: hydrostatic_testsWhereInput
    orderBy?: hydrostatic_testsOrderByWithRelationInput | hydrostatic_testsOrderByWithRelationInput[]
    cursor?: hydrostatic_testsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hydrostatic_testsScalarFieldEnum | Hydrostatic_testsScalarFieldEnum[]
  }

  /**
   * contenedores.mantenimiento_registros
   */
  export type contenedores$mantenimiento_registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    where?: mantenimiento_registrosWhereInput
    orderBy?: mantenimiento_registrosOrderByWithRelationInput | mantenimiento_registrosOrderByWithRelationInput[]
    cursor?: mantenimiento_registrosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mantenimiento_registrosScalarFieldEnum | Mantenimiento_registrosScalarFieldEnum[]
  }

  /**
   * contenedores without action
   */
  export type contenedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
  }


  /**
   * Model hydrostatic_tests
   */

  export type AggregateHydrostatic_tests = {
    _count: Hydrostatic_testsCountAggregateOutputType | null
    _avg: Hydrostatic_testsAvgAggregateOutputType | null
    _sum: Hydrostatic_testsSumAggregateOutputType | null
    _min: Hydrostatic_testsMinAggregateOutputType | null
    _max: Hydrostatic_testsMaxAggregateOutputType | null
  }

  export type Hydrostatic_testsAvgAggregateOutputType = {
    humidity_measurement: Decimal | null
    pressure: Decimal | null
    volume: Decimal | null
  }

  export type Hydrostatic_testsSumAggregateOutputType = {
    humidity_measurement: Decimal | null
    pressure: Decimal | null
    volume: Decimal | null
  }

  export type Hydrostatic_testsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    container_id: string | null
    test_date: Date | null
    humidity_measurement: Decimal | null
    pressure: Decimal | null
    volume: Decimal | null
    test_result: string | null
    created_at: Date | null
  }

  export type Hydrostatic_testsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    container_id: string | null
    test_date: Date | null
    humidity_measurement: Decimal | null
    pressure: Decimal | null
    volume: Decimal | null
    test_result: string | null
    created_at: Date | null
  }

  export type Hydrostatic_testsCountAggregateOutputType = {
    id: number
    user_id: number
    container_id: number
    test_date: number
    humidity_measurement: number
    pressure: number
    volume: number
    test_result: number
    created_at: number
    _all: number
  }


  export type Hydrostatic_testsAvgAggregateInputType = {
    humidity_measurement?: true
    pressure?: true
    volume?: true
  }

  export type Hydrostatic_testsSumAggregateInputType = {
    humidity_measurement?: true
    pressure?: true
    volume?: true
  }

  export type Hydrostatic_testsMinAggregateInputType = {
    id?: true
    user_id?: true
    container_id?: true
    test_date?: true
    humidity_measurement?: true
    pressure?: true
    volume?: true
    test_result?: true
    created_at?: true
  }

  export type Hydrostatic_testsMaxAggregateInputType = {
    id?: true
    user_id?: true
    container_id?: true
    test_date?: true
    humidity_measurement?: true
    pressure?: true
    volume?: true
    test_result?: true
    created_at?: true
  }

  export type Hydrostatic_testsCountAggregateInputType = {
    id?: true
    user_id?: true
    container_id?: true
    test_date?: true
    humidity_measurement?: true
    pressure?: true
    volume?: true
    test_result?: true
    created_at?: true
    _all?: true
  }

  export type Hydrostatic_testsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hydrostatic_tests to aggregate.
     */
    where?: hydrostatic_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hydrostatic_tests to fetch.
     */
    orderBy?: hydrostatic_testsOrderByWithRelationInput | hydrostatic_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hydrostatic_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hydrostatic_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hydrostatic_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hydrostatic_tests
    **/
    _count?: true | Hydrostatic_testsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hydrostatic_testsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hydrostatic_testsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hydrostatic_testsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hydrostatic_testsMaxAggregateInputType
  }

  export type GetHydrostatic_testsAggregateType<T extends Hydrostatic_testsAggregateArgs> = {
        [P in keyof T & keyof AggregateHydrostatic_tests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHydrostatic_tests[P]>
      : GetScalarType<T[P], AggregateHydrostatic_tests[P]>
  }




  export type hydrostatic_testsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hydrostatic_testsWhereInput
    orderBy?: hydrostatic_testsOrderByWithAggregationInput | hydrostatic_testsOrderByWithAggregationInput[]
    by: Hydrostatic_testsScalarFieldEnum[] | Hydrostatic_testsScalarFieldEnum
    having?: hydrostatic_testsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hydrostatic_testsCountAggregateInputType | true
    _avg?: Hydrostatic_testsAvgAggregateInputType
    _sum?: Hydrostatic_testsSumAggregateInputType
    _min?: Hydrostatic_testsMinAggregateInputType
    _max?: Hydrostatic_testsMaxAggregateInputType
  }

  export type Hydrostatic_testsGroupByOutputType = {
    id: string
    user_id: string
    container_id: string
    test_date: Date
    humidity_measurement: Decimal | null
    pressure: Decimal | null
    volume: Decimal | null
    test_result: string | null
    created_at: Date | null
    _count: Hydrostatic_testsCountAggregateOutputType | null
    _avg: Hydrostatic_testsAvgAggregateOutputType | null
    _sum: Hydrostatic_testsSumAggregateOutputType | null
    _min: Hydrostatic_testsMinAggregateOutputType | null
    _max: Hydrostatic_testsMaxAggregateOutputType | null
  }

  type GetHydrostatic_testsGroupByPayload<T extends hydrostatic_testsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hydrostatic_testsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hydrostatic_testsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hydrostatic_testsGroupByOutputType[P]>
            : GetScalarType<T[P], Hydrostatic_testsGroupByOutputType[P]>
        }
      >
    >


  export type hydrostatic_testsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    container_id?: boolean
    test_date?: boolean
    humidity_measurement?: boolean
    pressure?: boolean
    volume?: boolean
    test_result?: boolean
    created_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    contenedores?: boolean | contenedoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hydrostatic_tests"]>



  export type hydrostatic_testsSelectScalar = {
    id?: boolean
    user_id?: boolean
    container_id?: boolean
    test_date?: boolean
    humidity_measurement?: boolean
    pressure?: boolean
    volume?: boolean
    test_result?: boolean
    created_at?: boolean
  }

  export type hydrostatic_testsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "container_id" | "test_date" | "humidity_measurement" | "pressure" | "volume" | "test_result" | "created_at", ExtArgs["result"]["hydrostatic_tests"]>
  export type hydrostatic_testsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    contenedores?: boolean | contenedoresDefaultArgs<ExtArgs>
  }

  export type $hydrostatic_testsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hydrostatic_tests"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      contenedores: Prisma.$contenedoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      container_id: string
      test_date: Date
      humidity_measurement: Prisma.Decimal | null
      pressure: Prisma.Decimal | null
      volume: Prisma.Decimal | null
      test_result: string | null
      created_at: Date | null
    }, ExtArgs["result"]["hydrostatic_tests"]>
    composites: {}
  }

  type hydrostatic_testsGetPayload<S extends boolean | null | undefined | hydrostatic_testsDefaultArgs> = $Result.GetResult<Prisma.$hydrostatic_testsPayload, S>

  type hydrostatic_testsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hydrostatic_testsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hydrostatic_testsCountAggregateInputType | true
    }

  export interface hydrostatic_testsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hydrostatic_tests'], meta: { name: 'hydrostatic_tests' } }
    /**
     * Find zero or one Hydrostatic_tests that matches the filter.
     * @param {hydrostatic_testsFindUniqueArgs} args - Arguments to find a Hydrostatic_tests
     * @example
     * // Get one Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hydrostatic_testsFindUniqueArgs>(args: SelectSubset<T, hydrostatic_testsFindUniqueArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hydrostatic_tests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hydrostatic_testsFindUniqueOrThrowArgs} args - Arguments to find a Hydrostatic_tests
     * @example
     * // Get one Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hydrostatic_testsFindUniqueOrThrowArgs>(args: SelectSubset<T, hydrostatic_testsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hydrostatic_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hydrostatic_testsFindFirstArgs} args - Arguments to find a Hydrostatic_tests
     * @example
     * // Get one Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hydrostatic_testsFindFirstArgs>(args?: SelectSubset<T, hydrostatic_testsFindFirstArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hydrostatic_tests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hydrostatic_testsFindFirstOrThrowArgs} args - Arguments to find a Hydrostatic_tests
     * @example
     * // Get one Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hydrostatic_testsFindFirstOrThrowArgs>(args?: SelectSubset<T, hydrostatic_testsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hydrostatic_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hydrostatic_testsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.findMany()
     * 
     * // Get first 10 Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hydrostatic_testsWithIdOnly = await prisma.hydrostatic_tests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hydrostatic_testsFindManyArgs>(args?: SelectSubset<T, hydrostatic_testsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hydrostatic_tests.
     * @param {hydrostatic_testsCreateArgs} args - Arguments to create a Hydrostatic_tests.
     * @example
     * // Create one Hydrostatic_tests
     * const Hydrostatic_tests = await prisma.hydrostatic_tests.create({
     *   data: {
     *     // ... data to create a Hydrostatic_tests
     *   }
     * })
     * 
     */
    create<T extends hydrostatic_testsCreateArgs>(args: SelectSubset<T, hydrostatic_testsCreateArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hydrostatic_tests.
     * @param {hydrostatic_testsCreateManyArgs} args - Arguments to create many Hydrostatic_tests.
     * @example
     * // Create many Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hydrostatic_testsCreateManyArgs>(args?: SelectSubset<T, hydrostatic_testsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hydrostatic_tests.
     * @param {hydrostatic_testsDeleteArgs} args - Arguments to delete one Hydrostatic_tests.
     * @example
     * // Delete one Hydrostatic_tests
     * const Hydrostatic_tests = await prisma.hydrostatic_tests.delete({
     *   where: {
     *     // ... filter to delete one Hydrostatic_tests
     *   }
     * })
     * 
     */
    delete<T extends hydrostatic_testsDeleteArgs>(args: SelectSubset<T, hydrostatic_testsDeleteArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hydrostatic_tests.
     * @param {hydrostatic_testsUpdateArgs} args - Arguments to update one Hydrostatic_tests.
     * @example
     * // Update one Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hydrostatic_testsUpdateArgs>(args: SelectSubset<T, hydrostatic_testsUpdateArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hydrostatic_tests.
     * @param {hydrostatic_testsDeleteManyArgs} args - Arguments to filter Hydrostatic_tests to delete.
     * @example
     * // Delete a few Hydrostatic_tests
     * const { count } = await prisma.hydrostatic_tests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hydrostatic_testsDeleteManyArgs>(args?: SelectSubset<T, hydrostatic_testsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hydrostatic_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hydrostatic_testsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hydrostatic_testsUpdateManyArgs>(args: SelectSubset<T, hydrostatic_testsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hydrostatic_tests.
     * @param {hydrostatic_testsUpsertArgs} args - Arguments to update or create a Hydrostatic_tests.
     * @example
     * // Update or create a Hydrostatic_tests
     * const hydrostatic_tests = await prisma.hydrostatic_tests.upsert({
     *   create: {
     *     // ... data to create a Hydrostatic_tests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hydrostatic_tests we want to update
     *   }
     * })
     */
    upsert<T extends hydrostatic_testsUpsertArgs>(args: SelectSubset<T, hydrostatic_testsUpsertArgs<ExtArgs>>): Prisma__hydrostatic_testsClient<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hydrostatic_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hydrostatic_testsCountArgs} args - Arguments to filter Hydrostatic_tests to count.
     * @example
     * // Count the number of Hydrostatic_tests
     * const count = await prisma.hydrostatic_tests.count({
     *   where: {
     *     // ... the filter for the Hydrostatic_tests we want to count
     *   }
     * })
    **/
    count<T extends hydrostatic_testsCountArgs>(
      args?: Subset<T, hydrostatic_testsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hydrostatic_testsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hydrostatic_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hydrostatic_testsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hydrostatic_testsAggregateArgs>(args: Subset<T, Hydrostatic_testsAggregateArgs>): Prisma.PrismaPromise<GetHydrostatic_testsAggregateType<T>>

    /**
     * Group by Hydrostatic_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hydrostatic_testsGroupByArgs} args - Group by arguments.
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
      T extends hydrostatic_testsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hydrostatic_testsGroupByArgs['orderBy'] }
        : { orderBy?: hydrostatic_testsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hydrostatic_testsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHydrostatic_testsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hydrostatic_tests model
   */
  readonly fields: hydrostatic_testsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hydrostatic_tests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hydrostatic_testsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contenedores<T extends contenedoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, contenedoresDefaultArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the hydrostatic_tests model
   */
  interface hydrostatic_testsFieldRefs {
    readonly id: FieldRef<"hydrostatic_tests", 'String'>
    readonly user_id: FieldRef<"hydrostatic_tests", 'String'>
    readonly container_id: FieldRef<"hydrostatic_tests", 'String'>
    readonly test_date: FieldRef<"hydrostatic_tests", 'DateTime'>
    readonly humidity_measurement: FieldRef<"hydrostatic_tests", 'Decimal'>
    readonly pressure: FieldRef<"hydrostatic_tests", 'Decimal'>
    readonly volume: FieldRef<"hydrostatic_tests", 'Decimal'>
    readonly test_result: FieldRef<"hydrostatic_tests", 'String'>
    readonly created_at: FieldRef<"hydrostatic_tests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hydrostatic_tests findUnique
   */
  export type hydrostatic_testsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * Filter, which hydrostatic_tests to fetch.
     */
    where: hydrostatic_testsWhereUniqueInput
  }

  /**
   * hydrostatic_tests findUniqueOrThrow
   */
  export type hydrostatic_testsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * Filter, which hydrostatic_tests to fetch.
     */
    where: hydrostatic_testsWhereUniqueInput
  }

  /**
   * hydrostatic_tests findFirst
   */
  export type hydrostatic_testsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * Filter, which hydrostatic_tests to fetch.
     */
    where?: hydrostatic_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hydrostatic_tests to fetch.
     */
    orderBy?: hydrostatic_testsOrderByWithRelationInput | hydrostatic_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hydrostatic_tests.
     */
    cursor?: hydrostatic_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hydrostatic_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hydrostatic_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hydrostatic_tests.
     */
    distinct?: Hydrostatic_testsScalarFieldEnum | Hydrostatic_testsScalarFieldEnum[]
  }

  /**
   * hydrostatic_tests findFirstOrThrow
   */
  export type hydrostatic_testsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * Filter, which hydrostatic_tests to fetch.
     */
    where?: hydrostatic_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hydrostatic_tests to fetch.
     */
    orderBy?: hydrostatic_testsOrderByWithRelationInput | hydrostatic_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hydrostatic_tests.
     */
    cursor?: hydrostatic_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hydrostatic_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hydrostatic_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hydrostatic_tests.
     */
    distinct?: Hydrostatic_testsScalarFieldEnum | Hydrostatic_testsScalarFieldEnum[]
  }

  /**
   * hydrostatic_tests findMany
   */
  export type hydrostatic_testsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * Filter, which hydrostatic_tests to fetch.
     */
    where?: hydrostatic_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hydrostatic_tests to fetch.
     */
    orderBy?: hydrostatic_testsOrderByWithRelationInput | hydrostatic_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hydrostatic_tests.
     */
    cursor?: hydrostatic_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hydrostatic_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hydrostatic_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hydrostatic_tests.
     */
    distinct?: Hydrostatic_testsScalarFieldEnum | Hydrostatic_testsScalarFieldEnum[]
  }

  /**
   * hydrostatic_tests create
   */
  export type hydrostatic_testsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * The data needed to create a hydrostatic_tests.
     */
    data: XOR<hydrostatic_testsCreateInput, hydrostatic_testsUncheckedCreateInput>
  }

  /**
   * hydrostatic_tests createMany
   */
  export type hydrostatic_testsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hydrostatic_tests.
     */
    data: hydrostatic_testsCreateManyInput | hydrostatic_testsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hydrostatic_tests update
   */
  export type hydrostatic_testsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * The data needed to update a hydrostatic_tests.
     */
    data: XOR<hydrostatic_testsUpdateInput, hydrostatic_testsUncheckedUpdateInput>
    /**
     * Choose, which hydrostatic_tests to update.
     */
    where: hydrostatic_testsWhereUniqueInput
  }

  /**
   * hydrostatic_tests updateMany
   */
  export type hydrostatic_testsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hydrostatic_tests.
     */
    data: XOR<hydrostatic_testsUpdateManyMutationInput, hydrostatic_testsUncheckedUpdateManyInput>
    /**
     * Filter which hydrostatic_tests to update
     */
    where?: hydrostatic_testsWhereInput
    /**
     * Limit how many hydrostatic_tests to update.
     */
    limit?: number
  }

  /**
   * hydrostatic_tests upsert
   */
  export type hydrostatic_testsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * The filter to search for the hydrostatic_tests to update in case it exists.
     */
    where: hydrostatic_testsWhereUniqueInput
    /**
     * In case the hydrostatic_tests found by the `where` argument doesn't exist, create a new hydrostatic_tests with this data.
     */
    create: XOR<hydrostatic_testsCreateInput, hydrostatic_testsUncheckedCreateInput>
    /**
     * In case the hydrostatic_tests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hydrostatic_testsUpdateInput, hydrostatic_testsUncheckedUpdateInput>
  }

  /**
   * hydrostatic_tests delete
   */
  export type hydrostatic_testsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    /**
     * Filter which hydrostatic_tests to delete.
     */
    where: hydrostatic_testsWhereUniqueInput
  }

  /**
   * hydrostatic_tests deleteMany
   */
  export type hydrostatic_testsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hydrostatic_tests to delete
     */
    where?: hydrostatic_testsWhereInput
    /**
     * Limit how many hydrostatic_tests to delete.
     */
    limit?: number
  }

  /**
   * hydrostatic_tests without action
   */
  export type hydrostatic_testsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
  }


  /**
   * Model mantenimiento_registros
   */

  export type AggregateMantenimiento_registros = {
    _count: Mantenimiento_registrosCountAggregateOutputType | null
    _avg: Mantenimiento_registrosAvgAggregateOutputType | null
    _sum: Mantenimiento_registrosSumAggregateOutputType | null
    _min: Mantenimiento_registrosMinAggregateOutputType | null
    _max: Mantenimiento_registrosMaxAggregateOutputType | null
  }

  export type Mantenimiento_registrosAvgAggregateOutputType = {
    costo: Decimal | null
  }

  export type Mantenimiento_registrosSumAggregateOutputType = {
    costo: Decimal | null
  }

  export type Mantenimiento_registrosMinAggregateOutputType = {
    id: string | null
    contenedor_id: string | null
    tipo: string | null
    descripcion: string | null
    fecha_realizacion: Date | null
    costo: Decimal | null
    created_at: Date | null
  }

  export type Mantenimiento_registrosMaxAggregateOutputType = {
    id: string | null
    contenedor_id: string | null
    tipo: string | null
    descripcion: string | null
    fecha_realizacion: Date | null
    costo: Decimal | null
    created_at: Date | null
  }

  export type Mantenimiento_registrosCountAggregateOutputType = {
    id: number
    contenedor_id: number
    tipo: number
    descripcion: number
    fecha_realizacion: number
    costo: number
    created_at: number
    _all: number
  }


  export type Mantenimiento_registrosAvgAggregateInputType = {
    costo?: true
  }

  export type Mantenimiento_registrosSumAggregateInputType = {
    costo?: true
  }

  export type Mantenimiento_registrosMinAggregateInputType = {
    id?: true
    contenedor_id?: true
    tipo?: true
    descripcion?: true
    fecha_realizacion?: true
    costo?: true
    created_at?: true
  }

  export type Mantenimiento_registrosMaxAggregateInputType = {
    id?: true
    contenedor_id?: true
    tipo?: true
    descripcion?: true
    fecha_realizacion?: true
    costo?: true
    created_at?: true
  }

  export type Mantenimiento_registrosCountAggregateInputType = {
    id?: true
    contenedor_id?: true
    tipo?: true
    descripcion?: true
    fecha_realizacion?: true
    costo?: true
    created_at?: true
    _all?: true
  }

  export type Mantenimiento_registrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mantenimiento_registros to aggregate.
     */
    where?: mantenimiento_registrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mantenimiento_registros to fetch.
     */
    orderBy?: mantenimiento_registrosOrderByWithRelationInput | mantenimiento_registrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mantenimiento_registrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mantenimiento_registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mantenimiento_registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mantenimiento_registros
    **/
    _count?: true | Mantenimiento_registrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mantenimiento_registrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mantenimiento_registrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mantenimiento_registrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mantenimiento_registrosMaxAggregateInputType
  }

  export type GetMantenimiento_registrosAggregateType<T extends Mantenimiento_registrosAggregateArgs> = {
        [P in keyof T & keyof AggregateMantenimiento_registros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMantenimiento_registros[P]>
      : GetScalarType<T[P], AggregateMantenimiento_registros[P]>
  }




  export type mantenimiento_registrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mantenimiento_registrosWhereInput
    orderBy?: mantenimiento_registrosOrderByWithAggregationInput | mantenimiento_registrosOrderByWithAggregationInput[]
    by: Mantenimiento_registrosScalarFieldEnum[] | Mantenimiento_registrosScalarFieldEnum
    having?: mantenimiento_registrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mantenimiento_registrosCountAggregateInputType | true
    _avg?: Mantenimiento_registrosAvgAggregateInputType
    _sum?: Mantenimiento_registrosSumAggregateInputType
    _min?: Mantenimiento_registrosMinAggregateInputType
    _max?: Mantenimiento_registrosMaxAggregateInputType
  }

  export type Mantenimiento_registrosGroupByOutputType = {
    id: string
    contenedor_id: string | null
    tipo: string | null
    descripcion: string | null
    fecha_realizacion: Date
    costo: Decimal | null
    created_at: Date | null
    _count: Mantenimiento_registrosCountAggregateOutputType | null
    _avg: Mantenimiento_registrosAvgAggregateOutputType | null
    _sum: Mantenimiento_registrosSumAggregateOutputType | null
    _min: Mantenimiento_registrosMinAggregateOutputType | null
    _max: Mantenimiento_registrosMaxAggregateOutputType | null
  }

  type GetMantenimiento_registrosGroupByPayload<T extends mantenimiento_registrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mantenimiento_registrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mantenimiento_registrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mantenimiento_registrosGroupByOutputType[P]>
            : GetScalarType<T[P], Mantenimiento_registrosGroupByOutputType[P]>
        }
      >
    >


  export type mantenimiento_registrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenedor_id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha_realizacion?: boolean
    costo?: boolean
    created_at?: boolean
    contenedores?: boolean | mantenimiento_registros$contenedoresArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento_registros"]>



  export type mantenimiento_registrosSelectScalar = {
    id?: boolean
    contenedor_id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha_realizacion?: boolean
    costo?: boolean
    created_at?: boolean
  }

  export type mantenimiento_registrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenedor_id" | "tipo" | "descripcion" | "fecha_realizacion" | "costo" | "created_at", ExtArgs["result"]["mantenimiento_registros"]>
  export type mantenimiento_registrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenedores?: boolean | mantenimiento_registros$contenedoresArgs<ExtArgs>
  }

  export type $mantenimiento_registrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mantenimiento_registros"
    objects: {
      contenedores: Prisma.$contenedoresPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenedor_id: string | null
      tipo: string | null
      descripcion: string | null
      fecha_realizacion: Date
      costo: Prisma.Decimal | null
      created_at: Date | null
    }, ExtArgs["result"]["mantenimiento_registros"]>
    composites: {}
  }

  type mantenimiento_registrosGetPayload<S extends boolean | null | undefined | mantenimiento_registrosDefaultArgs> = $Result.GetResult<Prisma.$mantenimiento_registrosPayload, S>

  type mantenimiento_registrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mantenimiento_registrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mantenimiento_registrosCountAggregateInputType | true
    }

  export interface mantenimiento_registrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mantenimiento_registros'], meta: { name: 'mantenimiento_registros' } }
    /**
     * Find zero or one Mantenimiento_registros that matches the filter.
     * @param {mantenimiento_registrosFindUniqueArgs} args - Arguments to find a Mantenimiento_registros
     * @example
     * // Get one Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mantenimiento_registrosFindUniqueArgs>(args: SelectSubset<T, mantenimiento_registrosFindUniqueArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mantenimiento_registros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mantenimiento_registrosFindUniqueOrThrowArgs} args - Arguments to find a Mantenimiento_registros
     * @example
     * // Get one Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mantenimiento_registrosFindUniqueOrThrowArgs>(args: SelectSubset<T, mantenimiento_registrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mantenimiento_registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mantenimiento_registrosFindFirstArgs} args - Arguments to find a Mantenimiento_registros
     * @example
     * // Get one Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mantenimiento_registrosFindFirstArgs>(args?: SelectSubset<T, mantenimiento_registrosFindFirstArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mantenimiento_registros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mantenimiento_registrosFindFirstOrThrowArgs} args - Arguments to find a Mantenimiento_registros
     * @example
     * // Get one Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mantenimiento_registrosFindFirstOrThrowArgs>(args?: SelectSubset<T, mantenimiento_registrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mantenimiento_registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mantenimiento_registrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.findMany()
     * 
     * // Get first 10 Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mantenimiento_registrosWithIdOnly = await prisma.mantenimiento_registros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mantenimiento_registrosFindManyArgs>(args?: SelectSubset<T, mantenimiento_registrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mantenimiento_registros.
     * @param {mantenimiento_registrosCreateArgs} args - Arguments to create a Mantenimiento_registros.
     * @example
     * // Create one Mantenimiento_registros
     * const Mantenimiento_registros = await prisma.mantenimiento_registros.create({
     *   data: {
     *     // ... data to create a Mantenimiento_registros
     *   }
     * })
     * 
     */
    create<T extends mantenimiento_registrosCreateArgs>(args: SelectSubset<T, mantenimiento_registrosCreateArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mantenimiento_registros.
     * @param {mantenimiento_registrosCreateManyArgs} args - Arguments to create many Mantenimiento_registros.
     * @example
     * // Create many Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mantenimiento_registrosCreateManyArgs>(args?: SelectSubset<T, mantenimiento_registrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mantenimiento_registros.
     * @param {mantenimiento_registrosDeleteArgs} args - Arguments to delete one Mantenimiento_registros.
     * @example
     * // Delete one Mantenimiento_registros
     * const Mantenimiento_registros = await prisma.mantenimiento_registros.delete({
     *   where: {
     *     // ... filter to delete one Mantenimiento_registros
     *   }
     * })
     * 
     */
    delete<T extends mantenimiento_registrosDeleteArgs>(args: SelectSubset<T, mantenimiento_registrosDeleteArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mantenimiento_registros.
     * @param {mantenimiento_registrosUpdateArgs} args - Arguments to update one Mantenimiento_registros.
     * @example
     * // Update one Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mantenimiento_registrosUpdateArgs>(args: SelectSubset<T, mantenimiento_registrosUpdateArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mantenimiento_registros.
     * @param {mantenimiento_registrosDeleteManyArgs} args - Arguments to filter Mantenimiento_registros to delete.
     * @example
     * // Delete a few Mantenimiento_registros
     * const { count } = await prisma.mantenimiento_registros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mantenimiento_registrosDeleteManyArgs>(args?: SelectSubset<T, mantenimiento_registrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mantenimiento_registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mantenimiento_registrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mantenimiento_registrosUpdateManyArgs>(args: SelectSubset<T, mantenimiento_registrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mantenimiento_registros.
     * @param {mantenimiento_registrosUpsertArgs} args - Arguments to update or create a Mantenimiento_registros.
     * @example
     * // Update or create a Mantenimiento_registros
     * const mantenimiento_registros = await prisma.mantenimiento_registros.upsert({
     *   create: {
     *     // ... data to create a Mantenimiento_registros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mantenimiento_registros we want to update
     *   }
     * })
     */
    upsert<T extends mantenimiento_registrosUpsertArgs>(args: SelectSubset<T, mantenimiento_registrosUpsertArgs<ExtArgs>>): Prisma__mantenimiento_registrosClient<$Result.GetResult<Prisma.$mantenimiento_registrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mantenimiento_registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mantenimiento_registrosCountArgs} args - Arguments to filter Mantenimiento_registros to count.
     * @example
     * // Count the number of Mantenimiento_registros
     * const count = await prisma.mantenimiento_registros.count({
     *   where: {
     *     // ... the filter for the Mantenimiento_registros we want to count
     *   }
     * })
    **/
    count<T extends mantenimiento_registrosCountArgs>(
      args?: Subset<T, mantenimiento_registrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mantenimiento_registrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mantenimiento_registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mantenimiento_registrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mantenimiento_registrosAggregateArgs>(args: Subset<T, Mantenimiento_registrosAggregateArgs>): Prisma.PrismaPromise<GetMantenimiento_registrosAggregateType<T>>

    /**
     * Group by Mantenimiento_registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mantenimiento_registrosGroupByArgs} args - Group by arguments.
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
      T extends mantenimiento_registrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mantenimiento_registrosGroupByArgs['orderBy'] }
        : { orderBy?: mantenimiento_registrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mantenimiento_registrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMantenimiento_registrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mantenimiento_registros model
   */
  readonly fields: mantenimiento_registrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mantenimiento_registros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mantenimiento_registrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contenedores<T extends mantenimiento_registros$contenedoresArgs<ExtArgs> = {}>(args?: Subset<T, mantenimiento_registros$contenedoresArgs<ExtArgs>>): Prisma__contenedoresClient<$Result.GetResult<Prisma.$contenedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mantenimiento_registros model
   */
  interface mantenimiento_registrosFieldRefs {
    readonly id: FieldRef<"mantenimiento_registros", 'String'>
    readonly contenedor_id: FieldRef<"mantenimiento_registros", 'String'>
    readonly tipo: FieldRef<"mantenimiento_registros", 'String'>
    readonly descripcion: FieldRef<"mantenimiento_registros", 'String'>
    readonly fecha_realizacion: FieldRef<"mantenimiento_registros", 'DateTime'>
    readonly costo: FieldRef<"mantenimiento_registros", 'Decimal'>
    readonly created_at: FieldRef<"mantenimiento_registros", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mantenimiento_registros findUnique
   */
  export type mantenimiento_registrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * Filter, which mantenimiento_registros to fetch.
     */
    where: mantenimiento_registrosWhereUniqueInput
  }

  /**
   * mantenimiento_registros findUniqueOrThrow
   */
  export type mantenimiento_registrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * Filter, which mantenimiento_registros to fetch.
     */
    where: mantenimiento_registrosWhereUniqueInput
  }

  /**
   * mantenimiento_registros findFirst
   */
  export type mantenimiento_registrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * Filter, which mantenimiento_registros to fetch.
     */
    where?: mantenimiento_registrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mantenimiento_registros to fetch.
     */
    orderBy?: mantenimiento_registrosOrderByWithRelationInput | mantenimiento_registrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mantenimiento_registros.
     */
    cursor?: mantenimiento_registrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mantenimiento_registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mantenimiento_registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mantenimiento_registros.
     */
    distinct?: Mantenimiento_registrosScalarFieldEnum | Mantenimiento_registrosScalarFieldEnum[]
  }

  /**
   * mantenimiento_registros findFirstOrThrow
   */
  export type mantenimiento_registrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * Filter, which mantenimiento_registros to fetch.
     */
    where?: mantenimiento_registrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mantenimiento_registros to fetch.
     */
    orderBy?: mantenimiento_registrosOrderByWithRelationInput | mantenimiento_registrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mantenimiento_registros.
     */
    cursor?: mantenimiento_registrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mantenimiento_registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mantenimiento_registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mantenimiento_registros.
     */
    distinct?: Mantenimiento_registrosScalarFieldEnum | Mantenimiento_registrosScalarFieldEnum[]
  }

  /**
   * mantenimiento_registros findMany
   */
  export type mantenimiento_registrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * Filter, which mantenimiento_registros to fetch.
     */
    where?: mantenimiento_registrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mantenimiento_registros to fetch.
     */
    orderBy?: mantenimiento_registrosOrderByWithRelationInput | mantenimiento_registrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mantenimiento_registros.
     */
    cursor?: mantenimiento_registrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mantenimiento_registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mantenimiento_registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mantenimiento_registros.
     */
    distinct?: Mantenimiento_registrosScalarFieldEnum | Mantenimiento_registrosScalarFieldEnum[]
  }

  /**
   * mantenimiento_registros create
   */
  export type mantenimiento_registrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * The data needed to create a mantenimiento_registros.
     */
    data: XOR<mantenimiento_registrosCreateInput, mantenimiento_registrosUncheckedCreateInput>
  }

  /**
   * mantenimiento_registros createMany
   */
  export type mantenimiento_registrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mantenimiento_registros.
     */
    data: mantenimiento_registrosCreateManyInput | mantenimiento_registrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mantenimiento_registros update
   */
  export type mantenimiento_registrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * The data needed to update a mantenimiento_registros.
     */
    data: XOR<mantenimiento_registrosUpdateInput, mantenimiento_registrosUncheckedUpdateInput>
    /**
     * Choose, which mantenimiento_registros to update.
     */
    where: mantenimiento_registrosWhereUniqueInput
  }

  /**
   * mantenimiento_registros updateMany
   */
  export type mantenimiento_registrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mantenimiento_registros.
     */
    data: XOR<mantenimiento_registrosUpdateManyMutationInput, mantenimiento_registrosUncheckedUpdateManyInput>
    /**
     * Filter which mantenimiento_registros to update
     */
    where?: mantenimiento_registrosWhereInput
    /**
     * Limit how many mantenimiento_registros to update.
     */
    limit?: number
  }

  /**
   * mantenimiento_registros upsert
   */
  export type mantenimiento_registrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * The filter to search for the mantenimiento_registros to update in case it exists.
     */
    where: mantenimiento_registrosWhereUniqueInput
    /**
     * In case the mantenimiento_registros found by the `where` argument doesn't exist, create a new mantenimiento_registros with this data.
     */
    create: XOR<mantenimiento_registrosCreateInput, mantenimiento_registrosUncheckedCreateInput>
    /**
     * In case the mantenimiento_registros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mantenimiento_registrosUpdateInput, mantenimiento_registrosUncheckedUpdateInput>
  }

  /**
   * mantenimiento_registros delete
   */
  export type mantenimiento_registrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
    /**
     * Filter which mantenimiento_registros to delete.
     */
    where: mantenimiento_registrosWhereUniqueInput
  }

  /**
   * mantenimiento_registros deleteMany
   */
  export type mantenimiento_registrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mantenimiento_registros to delete
     */
    where?: mantenimiento_registrosWhereInput
    /**
     * Limit how many mantenimiento_registros to delete.
     */
    limit?: number
  }

  /**
   * mantenimiento_registros.contenedores
   */
  export type mantenimiento_registros$contenedoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contenedores
     */
    select?: contenedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contenedores
     */
    omit?: contenedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contenedoresInclude<ExtArgs> | null
    where?: contenedoresWhereInput
  }

  /**
   * mantenimiento_registros without action
   */
  export type mantenimiento_registrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mantenimiento_registros
     */
    select?: mantenimiento_registrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mantenimiento_registros
     */
    omit?: mantenimiento_registrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mantenimiento_registrosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    estado: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    estado: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    nombre: string | null
    rol: string | null
    estado: number | null
    created_at: Date | null
    updated_at: Date | null
    reset_token: string | null
    reset_token_expires: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    nombre: string | null
    rol: string | null
    estado: number | null
    created_at: Date | null
    updated_at: Date | null
    reset_token: string | null
    reset_token_expires: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    nombre: number
    rol: number
    estado: number
    created_at: number
    updated_at: number
    reset_token: number
    reset_token_expires: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    estado?: true
  }

  export type UsuariosSumAggregateInputType = {
    estado?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    nombre?: true
    rol?: true
    estado?: true
    created_at?: true
    updated_at?: true
    reset_token?: true
    reset_token_expires?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    nombre?: true
    rol?: true
    estado?: true
    created_at?: true
    updated_at?: true
    reset_token?: true
    reset_token_expires?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    nombre?: true
    rol?: true
    estado?: true
    created_at?: true
    updated_at?: true
    reset_token?: true
    reset_token_expires?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    nombre: string
    rol: string
    estado: number
    created_at: Date | null
    updated_at: Date | null
    reset_token: string | null
    reset_token_expires: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    nombre?: boolean
    rol?: boolean
    estado?: boolean
    created_at?: boolean
    updated_at?: boolean
    reset_token?: boolean
    reset_token_expires?: boolean
    hydrostatic_tests?: boolean | usuarios$hydrostatic_testsArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    nombre?: boolean
    rol?: boolean
    estado?: boolean
    created_at?: boolean
    updated_at?: boolean
    reset_token?: boolean
    reset_token_expires?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "nombre" | "rol" | "estado" | "created_at" | "updated_at" | "reset_token" | "reset_token_expires", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hydrostatic_tests?: boolean | usuarios$hydrostatic_testsArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      hydrostatic_tests: Prisma.$hydrostatic_testsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      nombre: string
      rol: string
      estado: number
      created_at: Date | null
      updated_at: Date | null
      reset_token: string | null
      reset_token_expires: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hydrostatic_tests<T extends usuarios$hydrostatic_testsArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$hydrostatic_testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hydrostatic_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password_hash: FieldRef<"usuarios", 'String'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'String'>
    readonly estado: FieldRef<"usuarios", 'Int'>
    readonly created_at: FieldRef<"usuarios", 'DateTime'>
    readonly updated_at: FieldRef<"usuarios", 'DateTime'>
    readonly reset_token: FieldRef<"usuarios", 'String'>
    readonly reset_token_expires: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.hydrostatic_tests
   */
  export type usuarios$hydrostatic_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hydrostatic_tests
     */
    select?: hydrostatic_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hydrostatic_tests
     */
    omit?: hydrostatic_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hydrostatic_testsInclude<ExtArgs> | null
    where?: hydrostatic_testsWhereInput
    orderBy?: hydrostatic_testsOrderByWithRelationInput | hydrostatic_testsOrderByWithRelationInput[]
    cursor?: hydrostatic_testsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hydrostatic_testsScalarFieldEnum | Hydrostatic_testsScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const ClientesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rif: 'rif',
    contact_person: 'contact_person',
    email: 'email',
    phone: 'phone',
    status: 'status',
    created_at: 'created_at'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const ContenedoresScalarFieldEnum: {
    id: 'id',
    numero_serie: 'numero_serie',
    tipo: 'tipo',
    capacidad: 'capacidad',
    estado: 'estado',
    ubicacion: 'ubicacion',
    propietario: 'propietario',
    client_id: 'client_id',
    fecha_ultimo_mantenimiento: 'fecha_ultimo_mantenimiento',
    observaciones: 'observaciones',
    created_at: 'created_at'
  };

  export type ContenedoresScalarFieldEnum = (typeof ContenedoresScalarFieldEnum)[keyof typeof ContenedoresScalarFieldEnum]


  export const Hydrostatic_testsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    container_id: 'container_id',
    test_date: 'test_date',
    humidity_measurement: 'humidity_measurement',
    pressure: 'pressure',
    volume: 'volume',
    test_result: 'test_result',
    created_at: 'created_at'
  };

  export type Hydrostatic_testsScalarFieldEnum = (typeof Hydrostatic_testsScalarFieldEnum)[keyof typeof Hydrostatic_testsScalarFieldEnum]


  export const Mantenimiento_registrosScalarFieldEnum: {
    id: 'id',
    contenedor_id: 'contenedor_id',
    tipo: 'tipo',
    descripcion: 'descripcion',
    fecha_realizacion: 'fecha_realizacion',
    costo: 'costo',
    created_at: 'created_at'
  };

  export type Mantenimiento_registrosScalarFieldEnum = (typeof Mantenimiento_registrosScalarFieldEnum)[keyof typeof Mantenimiento_registrosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    nombre: 'nombre',
    rol: 'rol',
    estado: 'estado',
    created_at: 'created_at',
    updated_at: 'updated_at',
    reset_token: 'reset_token',
    reset_token_expires: 'reset_token_expires'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const clientesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    rif: 'rif',
    contact_person: 'contact_person',
    email: 'email',
    phone: 'phone',
    status: 'status'
  };

  export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum]


  export const contenedoresOrderByRelevanceFieldEnum: {
    id: 'id',
    numero_serie: 'numero_serie',
    tipo: 'tipo',
    estado: 'estado',
    ubicacion: 'ubicacion',
    propietario: 'propietario',
    client_id: 'client_id',
    observaciones: 'observaciones'
  };

  export type contenedoresOrderByRelevanceFieldEnum = (typeof contenedoresOrderByRelevanceFieldEnum)[keyof typeof contenedoresOrderByRelevanceFieldEnum]


  export const hydrostatic_testsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    container_id: 'container_id',
    test_result: 'test_result'
  };

  export type hydrostatic_testsOrderByRelevanceFieldEnum = (typeof hydrostatic_testsOrderByRelevanceFieldEnum)[keyof typeof hydrostatic_testsOrderByRelevanceFieldEnum]


  export const mantenimiento_registrosOrderByRelevanceFieldEnum: {
    id: 'id',
    contenedor_id: 'contenedor_id',
    tipo: 'tipo',
    descripcion: 'descripcion'
  };

  export type mantenimiento_registrosOrderByRelevanceFieldEnum = (typeof mantenimiento_registrosOrderByRelevanceFieldEnum)[keyof typeof mantenimiento_registrosOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    nombre: 'nombre',
    rol: 'rol',
    reset_token: 'reset_token'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    id?: StringFilter<"clientes"> | string
    name?: StringFilter<"clientes"> | string
    rif?: StringFilter<"clientes"> | string
    contact_person?: StringNullableFilter<"clientes"> | string | null
    email?: StringNullableFilter<"clientes"> | string | null
    phone?: StringNullableFilter<"clientes"> | string | null
    status?: StringNullableFilter<"clientes"> | string | null
    created_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    contenedores?: ContenedoresListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rif?: SortOrder
    contact_person?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    contenedores?: contenedoresOrderByRelationAggregateInput
    _relevance?: clientesOrderByRelevanceInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rif?: string
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    name?: StringFilter<"clientes"> | string
    contact_person?: StringNullableFilter<"clientes"> | string | null
    email?: StringNullableFilter<"clientes"> | string | null
    phone?: StringNullableFilter<"clientes"> | string | null
    status?: StringNullableFilter<"clientes"> | string | null
    created_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    contenedores?: ContenedoresListRelationFilter
  }, "id" | "rif">

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rif?: SortOrder
    contact_person?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: clientesCountOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"clientes"> | string
    name?: StringWithAggregatesFilter<"clientes"> | string
    rif?: StringWithAggregatesFilter<"clientes"> | string
    contact_person?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    email?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    phone?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    status?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
  }

  export type contenedoresWhereInput = {
    AND?: contenedoresWhereInput | contenedoresWhereInput[]
    OR?: contenedoresWhereInput[]
    NOT?: contenedoresWhereInput | contenedoresWhereInput[]
    id?: StringFilter<"contenedores"> | string
    numero_serie?: StringFilter<"contenedores"> | string
    tipo?: StringFilter<"contenedores"> | string
    capacidad?: IntFilter<"contenedores"> | number
    estado?: StringFilter<"contenedores"> | string
    ubicacion?: StringNullableFilter<"contenedores"> | string | null
    propietario?: StringNullableFilter<"contenedores"> | string | null
    client_id?: StringNullableFilter<"contenedores"> | string | null
    fecha_ultimo_mantenimiento?: DateTimeNullableFilter<"contenedores"> | Date | string | null
    observaciones?: StringNullableFilter<"contenedores"> | string | null
    created_at?: DateTimeNullableFilter<"contenedores"> | Date | string | null
    clientes?: XOR<ClientesNullableScalarRelationFilter, clientesWhereInput> | null
    hydrostatic_tests?: Hydrostatic_testsListRelationFilter
    mantenimiento_registros?: Mantenimiento_registrosListRelationFilter
  }

  export type contenedoresOrderByWithRelationInput = {
    id?: SortOrder
    numero_serie?: SortOrder
    tipo?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    ubicacion?: SortOrderInput | SortOrder
    propietario?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    fecha_ultimo_mantenimiento?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    clientes?: clientesOrderByWithRelationInput
    hydrostatic_tests?: hydrostatic_testsOrderByRelationAggregateInput
    mantenimiento_registros?: mantenimiento_registrosOrderByRelationAggregateInput
    _relevance?: contenedoresOrderByRelevanceInput
  }

  export type contenedoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero_serie?: string
    AND?: contenedoresWhereInput | contenedoresWhereInput[]
    OR?: contenedoresWhereInput[]
    NOT?: contenedoresWhereInput | contenedoresWhereInput[]
    tipo?: StringFilter<"contenedores"> | string
    capacidad?: IntFilter<"contenedores"> | number
    estado?: StringFilter<"contenedores"> | string
    ubicacion?: StringNullableFilter<"contenedores"> | string | null
    propietario?: StringNullableFilter<"contenedores"> | string | null
    client_id?: StringNullableFilter<"contenedores"> | string | null
    fecha_ultimo_mantenimiento?: DateTimeNullableFilter<"contenedores"> | Date | string | null
    observaciones?: StringNullableFilter<"contenedores"> | string | null
    created_at?: DateTimeNullableFilter<"contenedores"> | Date | string | null
    clientes?: XOR<ClientesNullableScalarRelationFilter, clientesWhereInput> | null
    hydrostatic_tests?: Hydrostatic_testsListRelationFilter
    mantenimiento_registros?: Mantenimiento_registrosListRelationFilter
  }, "id" | "numero_serie">

  export type contenedoresOrderByWithAggregationInput = {
    id?: SortOrder
    numero_serie?: SortOrder
    tipo?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    ubicacion?: SortOrderInput | SortOrder
    propietario?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    fecha_ultimo_mantenimiento?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: contenedoresCountOrderByAggregateInput
    _avg?: contenedoresAvgOrderByAggregateInput
    _max?: contenedoresMaxOrderByAggregateInput
    _min?: contenedoresMinOrderByAggregateInput
    _sum?: contenedoresSumOrderByAggregateInput
  }

  export type contenedoresScalarWhereWithAggregatesInput = {
    AND?: contenedoresScalarWhereWithAggregatesInput | contenedoresScalarWhereWithAggregatesInput[]
    OR?: contenedoresScalarWhereWithAggregatesInput[]
    NOT?: contenedoresScalarWhereWithAggregatesInput | contenedoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"contenedores"> | string
    numero_serie?: StringWithAggregatesFilter<"contenedores"> | string
    tipo?: StringWithAggregatesFilter<"contenedores"> | string
    capacidad?: IntWithAggregatesFilter<"contenedores"> | number
    estado?: StringWithAggregatesFilter<"contenedores"> | string
    ubicacion?: StringNullableWithAggregatesFilter<"contenedores"> | string | null
    propietario?: StringNullableWithAggregatesFilter<"contenedores"> | string | null
    client_id?: StringNullableWithAggregatesFilter<"contenedores"> | string | null
    fecha_ultimo_mantenimiento?: DateTimeNullableWithAggregatesFilter<"contenedores"> | Date | string | null
    observaciones?: StringNullableWithAggregatesFilter<"contenedores"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"contenedores"> | Date | string | null
  }

  export type hydrostatic_testsWhereInput = {
    AND?: hydrostatic_testsWhereInput | hydrostatic_testsWhereInput[]
    OR?: hydrostatic_testsWhereInput[]
    NOT?: hydrostatic_testsWhereInput | hydrostatic_testsWhereInput[]
    id?: StringFilter<"hydrostatic_tests"> | string
    user_id?: StringFilter<"hydrostatic_tests"> | string
    container_id?: StringFilter<"hydrostatic_tests"> | string
    test_date?: DateTimeFilter<"hydrostatic_tests"> | Date | string
    humidity_measurement?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    pressure?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    test_result?: StringNullableFilter<"hydrostatic_tests"> | string | null
    created_at?: DateTimeNullableFilter<"hydrostatic_tests"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    contenedores?: XOR<ContenedoresScalarRelationFilter, contenedoresWhereInput>
  }

  export type hydrostatic_testsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    container_id?: SortOrder
    test_date?: SortOrder
    humidity_measurement?: SortOrderInput | SortOrder
    pressure?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    test_result?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    contenedores?: contenedoresOrderByWithRelationInput
    _relevance?: hydrostatic_testsOrderByRelevanceInput
  }

  export type hydrostatic_testsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: hydrostatic_testsWhereInput | hydrostatic_testsWhereInput[]
    OR?: hydrostatic_testsWhereInput[]
    NOT?: hydrostatic_testsWhereInput | hydrostatic_testsWhereInput[]
    user_id?: StringFilter<"hydrostatic_tests"> | string
    container_id?: StringFilter<"hydrostatic_tests"> | string
    test_date?: DateTimeFilter<"hydrostatic_tests"> | Date | string
    humidity_measurement?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    pressure?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    test_result?: StringNullableFilter<"hydrostatic_tests"> | string | null
    created_at?: DateTimeNullableFilter<"hydrostatic_tests"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    contenedores?: XOR<ContenedoresScalarRelationFilter, contenedoresWhereInput>
  }, "id">

  export type hydrostatic_testsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    container_id?: SortOrder
    test_date?: SortOrder
    humidity_measurement?: SortOrderInput | SortOrder
    pressure?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    test_result?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: hydrostatic_testsCountOrderByAggregateInput
    _avg?: hydrostatic_testsAvgOrderByAggregateInput
    _max?: hydrostatic_testsMaxOrderByAggregateInput
    _min?: hydrostatic_testsMinOrderByAggregateInput
    _sum?: hydrostatic_testsSumOrderByAggregateInput
  }

  export type hydrostatic_testsScalarWhereWithAggregatesInput = {
    AND?: hydrostatic_testsScalarWhereWithAggregatesInput | hydrostatic_testsScalarWhereWithAggregatesInput[]
    OR?: hydrostatic_testsScalarWhereWithAggregatesInput[]
    NOT?: hydrostatic_testsScalarWhereWithAggregatesInput | hydrostatic_testsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"hydrostatic_tests"> | string
    user_id?: StringWithAggregatesFilter<"hydrostatic_tests"> | string
    container_id?: StringWithAggregatesFilter<"hydrostatic_tests"> | string
    test_date?: DateTimeWithAggregatesFilter<"hydrostatic_tests"> | Date | string
    humidity_measurement?: DecimalNullableWithAggregatesFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    pressure?: DecimalNullableWithAggregatesFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableWithAggregatesFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    test_result?: StringNullableWithAggregatesFilter<"hydrostatic_tests"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"hydrostatic_tests"> | Date | string | null
  }

  export type mantenimiento_registrosWhereInput = {
    AND?: mantenimiento_registrosWhereInput | mantenimiento_registrosWhereInput[]
    OR?: mantenimiento_registrosWhereInput[]
    NOT?: mantenimiento_registrosWhereInput | mantenimiento_registrosWhereInput[]
    id?: StringFilter<"mantenimiento_registros"> | string
    contenedor_id?: StringNullableFilter<"mantenimiento_registros"> | string | null
    tipo?: StringNullableFilter<"mantenimiento_registros"> | string | null
    descripcion?: StringNullableFilter<"mantenimiento_registros"> | string | null
    fecha_realizacion?: DateTimeFilter<"mantenimiento_registros"> | Date | string
    costo?: DecimalNullableFilter<"mantenimiento_registros"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"mantenimiento_registros"> | Date | string | null
    contenedores?: XOR<ContenedoresNullableScalarRelationFilter, contenedoresWhereInput> | null
  }

  export type mantenimiento_registrosOrderByWithRelationInput = {
    id?: SortOrder
    contenedor_id?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_realizacion?: SortOrder
    costo?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    contenedores?: contenedoresOrderByWithRelationInput
    _relevance?: mantenimiento_registrosOrderByRelevanceInput
  }

  export type mantenimiento_registrosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mantenimiento_registrosWhereInput | mantenimiento_registrosWhereInput[]
    OR?: mantenimiento_registrosWhereInput[]
    NOT?: mantenimiento_registrosWhereInput | mantenimiento_registrosWhereInput[]
    contenedor_id?: StringNullableFilter<"mantenimiento_registros"> | string | null
    tipo?: StringNullableFilter<"mantenimiento_registros"> | string | null
    descripcion?: StringNullableFilter<"mantenimiento_registros"> | string | null
    fecha_realizacion?: DateTimeFilter<"mantenimiento_registros"> | Date | string
    costo?: DecimalNullableFilter<"mantenimiento_registros"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"mantenimiento_registros"> | Date | string | null
    contenedores?: XOR<ContenedoresNullableScalarRelationFilter, contenedoresWhereInput> | null
  }, "id">

  export type mantenimiento_registrosOrderByWithAggregationInput = {
    id?: SortOrder
    contenedor_id?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_realizacion?: SortOrder
    costo?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: mantenimiento_registrosCountOrderByAggregateInput
    _avg?: mantenimiento_registrosAvgOrderByAggregateInput
    _max?: mantenimiento_registrosMaxOrderByAggregateInput
    _min?: mantenimiento_registrosMinOrderByAggregateInput
    _sum?: mantenimiento_registrosSumOrderByAggregateInput
  }

  export type mantenimiento_registrosScalarWhereWithAggregatesInput = {
    AND?: mantenimiento_registrosScalarWhereWithAggregatesInput | mantenimiento_registrosScalarWhereWithAggregatesInput[]
    OR?: mantenimiento_registrosScalarWhereWithAggregatesInput[]
    NOT?: mantenimiento_registrosScalarWhereWithAggregatesInput | mantenimiento_registrosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mantenimiento_registros"> | string
    contenedor_id?: StringNullableWithAggregatesFilter<"mantenimiento_registros"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"mantenimiento_registros"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"mantenimiento_registros"> | string | null
    fecha_realizacion?: DateTimeWithAggregatesFilter<"mantenimiento_registros"> | Date | string
    costo?: DecimalNullableWithAggregatesFilter<"mantenimiento_registros"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mantenimiento_registros"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    nombre?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    estado?: IntFilter<"usuarios"> | number
    created_at?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    reset_token?: StringNullableFilter<"usuarios"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    hydrostatic_tests?: Hydrostatic_testsListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    hydrostatic_tests?: hydrostatic_testsOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    password_hash?: StringFilter<"usuarios"> | string
    nombre?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    estado?: IntFilter<"usuarios"> | number
    created_at?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    reset_token?: StringNullableFilter<"usuarios"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    hydrostatic_tests?: Hydrostatic_testsListRelationFilter
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password_hash?: StringWithAggregatesFilter<"usuarios"> | string
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: StringWithAggregatesFilter<"usuarios"> | string
    estado?: IntWithAggregatesFilter<"usuarios"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    reset_token?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    reset_token_expires?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type clientesCreateInput = {
    id: string
    name: string
    rif: string
    contact_person?: string | null
    email?: string | null
    phone?: string | null
    status?: string | null
    created_at?: Date | string | null
    contenedores?: contenedoresCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id: string
    name: string
    rif: string
    contact_person?: string | null
    email?: string | null
    phone?: string | null
    status?: string | null
    created_at?: Date | string | null
    contenedores?: contenedoresUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rif?: StringFieldUpdateOperationsInput | string
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenedores?: contenedoresUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rif?: StringFieldUpdateOperationsInput | string
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenedores?: contenedoresUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id: string
    name: string
    rif: string
    contact_person?: string | null
    email?: string | null
    phone?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type clientesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rif?: StringFieldUpdateOperationsInput | string
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rif?: StringFieldUpdateOperationsInput | string
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contenedoresCreateInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    clientes?: clientesCreateNestedOneWithoutContenedoresInput
    hydrostatic_tests?: hydrostatic_testsCreateNestedManyWithoutContenedoresInput
    mantenimiento_registros?: mantenimiento_registrosCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresUncheckedCreateInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    client_id?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedCreateNestedManyWithoutContenedoresInput
    mantenimiento_registros?: mantenimiento_registrosUncheckedCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientes?: clientesUpdateOneWithoutContenedoresNestedInput
    hydrostatic_tests?: hydrostatic_testsUpdateManyWithoutContenedoresNestedInput
    mantenimiento_registros?: mantenimiento_registrosUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedUpdateManyWithoutContenedoresNestedInput
    mantenimiento_registros?: mantenimiento_registrosUncheckedUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresCreateManyInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    client_id?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
  }

  export type contenedoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contenedoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsCreateInput = {
    id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutHydrostatic_testsInput
    contenedores: contenedoresCreateNestedOneWithoutHydrostatic_testsInput
  }

  export type hydrostatic_testsUncheckedCreateInput = {
    id: string
    user_id: string
    container_id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
  }

  export type hydrostatic_testsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutHydrostatic_testsNestedInput
    contenedores?: contenedoresUpdateOneRequiredWithoutHydrostatic_testsNestedInput
  }

  export type hydrostatic_testsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    container_id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsCreateManyInput = {
    id: string
    user_id: string
    container_id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
  }

  export type hydrostatic_testsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    container_id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mantenimiento_registrosCreateInput = {
    id: string
    tipo?: string | null
    descripcion?: string | null
    fecha_realizacion: Date | string
    costo?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    contenedores?: contenedoresCreateNestedOneWithoutMantenimiento_registrosInput
  }

  export type mantenimiento_registrosUncheckedCreateInput = {
    id: string
    contenedor_id?: string | null
    tipo?: string | null
    descripcion?: string | null
    fecha_realizacion: Date | string
    costo?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type mantenimiento_registrosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenedores?: contenedoresUpdateOneWithoutMantenimiento_registrosNestedInput
  }

  export type mantenimiento_registrosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mantenimiento_registrosCreateManyInput = {
    id: string
    contenedor_id?: string | null
    tipo?: string | null
    descripcion?: string | null
    fecha_realizacion: Date | string
    costo?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type mantenimiento_registrosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mantenimiento_registrosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    id: string
    email: string
    password_hash: string
    nombre: string
    rol?: string
    estado?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reset_token?: string | null
    reset_token_expires?: Date | string | null
    hydrostatic_tests?: hydrostatic_testsCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id: string
    email: string
    password_hash: string
    nombre: string
    rol?: string
    estado?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reset_token?: string | null
    reset_token_expires?: Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hydrostatic_tests?: hydrostatic_testsUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id: string
    email: string
    password_hash: string
    nombre: string
    rol?: string
    estado?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reset_token?: string | null
    reset_token_expires?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ContenedoresListRelationFilter = {
    every?: contenedoresWhereInput
    some?: contenedoresWhereInput
    none?: contenedoresWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type contenedoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesOrderByRelevanceInput = {
    fields: clientesOrderByRelevanceFieldEnum | clientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rif?: SortOrder
    contact_person?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rif?: SortOrder
    contact_person?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rif?: SortOrder
    contact_person?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClientesNullableScalarRelationFilter = {
    is?: clientesWhereInput | null
    isNot?: clientesWhereInput | null
  }

  export type Hydrostatic_testsListRelationFilter = {
    every?: hydrostatic_testsWhereInput
    some?: hydrostatic_testsWhereInput
    none?: hydrostatic_testsWhereInput
  }

  export type Mantenimiento_registrosListRelationFilter = {
    every?: mantenimiento_registrosWhereInput
    some?: mantenimiento_registrosWhereInput
    none?: mantenimiento_registrosWhereInput
  }

  export type hydrostatic_testsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mantenimiento_registrosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contenedoresOrderByRelevanceInput = {
    fields: contenedoresOrderByRelevanceFieldEnum | contenedoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contenedoresCountOrderByAggregateInput = {
    id?: SortOrder
    numero_serie?: SortOrder
    tipo?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    ubicacion?: SortOrder
    propietario?: SortOrder
    client_id?: SortOrder
    fecha_ultimo_mantenimiento?: SortOrder
    observaciones?: SortOrder
    created_at?: SortOrder
  }

  export type contenedoresAvgOrderByAggregateInput = {
    capacidad?: SortOrder
  }

  export type contenedoresMaxOrderByAggregateInput = {
    id?: SortOrder
    numero_serie?: SortOrder
    tipo?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    ubicacion?: SortOrder
    propietario?: SortOrder
    client_id?: SortOrder
    fecha_ultimo_mantenimiento?: SortOrder
    observaciones?: SortOrder
    created_at?: SortOrder
  }

  export type contenedoresMinOrderByAggregateInput = {
    id?: SortOrder
    numero_serie?: SortOrder
    tipo?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    ubicacion?: SortOrder
    propietario?: SortOrder
    client_id?: SortOrder
    fecha_ultimo_mantenimiento?: SortOrder
    observaciones?: SortOrder
    created_at?: SortOrder
  }

  export type contenedoresSumOrderByAggregateInput = {
    capacidad?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type ContenedoresScalarRelationFilter = {
    is?: contenedoresWhereInput
    isNot?: contenedoresWhereInput
  }

  export type hydrostatic_testsOrderByRelevanceInput = {
    fields: hydrostatic_testsOrderByRelevanceFieldEnum | hydrostatic_testsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hydrostatic_testsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    container_id?: SortOrder
    test_date?: SortOrder
    humidity_measurement?: SortOrder
    pressure?: SortOrder
    volume?: SortOrder
    test_result?: SortOrder
    created_at?: SortOrder
  }

  export type hydrostatic_testsAvgOrderByAggregateInput = {
    humidity_measurement?: SortOrder
    pressure?: SortOrder
    volume?: SortOrder
  }

  export type hydrostatic_testsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    container_id?: SortOrder
    test_date?: SortOrder
    humidity_measurement?: SortOrder
    pressure?: SortOrder
    volume?: SortOrder
    test_result?: SortOrder
    created_at?: SortOrder
  }

  export type hydrostatic_testsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    container_id?: SortOrder
    test_date?: SortOrder
    humidity_measurement?: SortOrder
    pressure?: SortOrder
    volume?: SortOrder
    test_result?: SortOrder
    created_at?: SortOrder
  }

  export type hydrostatic_testsSumOrderByAggregateInput = {
    humidity_measurement?: SortOrder
    pressure?: SortOrder
    volume?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ContenedoresNullableScalarRelationFilter = {
    is?: contenedoresWhereInput | null
    isNot?: contenedoresWhereInput | null
  }

  export type mantenimiento_registrosOrderByRelevanceInput = {
    fields: mantenimiento_registrosOrderByRelevanceFieldEnum | mantenimiento_registrosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mantenimiento_registrosCountOrderByAggregateInput = {
    id?: SortOrder
    contenedor_id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha_realizacion?: SortOrder
    costo?: SortOrder
    created_at?: SortOrder
  }

  export type mantenimiento_registrosAvgOrderByAggregateInput = {
    costo?: SortOrder
  }

  export type mantenimiento_registrosMaxOrderByAggregateInput = {
    id?: SortOrder
    contenedor_id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha_realizacion?: SortOrder
    costo?: SortOrder
    created_at?: SortOrder
  }

  export type mantenimiento_registrosMinOrderByAggregateInput = {
    id?: SortOrder
    contenedor_id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha_realizacion?: SortOrder
    costo?: SortOrder
    created_at?: SortOrder
  }

  export type mantenimiento_registrosSumOrderByAggregateInput = {
    costo?: SortOrder
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reset_token?: SortOrder
    reset_token_expires?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    estado?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reset_token?: SortOrder
    reset_token_expires?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reset_token?: SortOrder
    reset_token_expires?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    estado?: SortOrder
  }

  export type contenedoresCreateNestedManyWithoutClientesInput = {
    create?: XOR<contenedoresCreateWithoutClientesInput, contenedoresUncheckedCreateWithoutClientesInput> | contenedoresCreateWithoutClientesInput[] | contenedoresUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: contenedoresCreateOrConnectWithoutClientesInput | contenedoresCreateOrConnectWithoutClientesInput[]
    createMany?: contenedoresCreateManyClientesInputEnvelope
    connect?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
  }

  export type contenedoresUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<contenedoresCreateWithoutClientesInput, contenedoresUncheckedCreateWithoutClientesInput> | contenedoresCreateWithoutClientesInput[] | contenedoresUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: contenedoresCreateOrConnectWithoutClientesInput | contenedoresCreateOrConnectWithoutClientesInput[]
    createMany?: contenedoresCreateManyClientesInputEnvelope
    connect?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type contenedoresUpdateManyWithoutClientesNestedInput = {
    create?: XOR<contenedoresCreateWithoutClientesInput, contenedoresUncheckedCreateWithoutClientesInput> | contenedoresCreateWithoutClientesInput[] | contenedoresUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: contenedoresCreateOrConnectWithoutClientesInput | contenedoresCreateOrConnectWithoutClientesInput[]
    upsert?: contenedoresUpsertWithWhereUniqueWithoutClientesInput | contenedoresUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: contenedoresCreateManyClientesInputEnvelope
    set?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    disconnect?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    delete?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    connect?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    update?: contenedoresUpdateWithWhereUniqueWithoutClientesInput | contenedoresUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: contenedoresUpdateManyWithWhereWithoutClientesInput | contenedoresUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: contenedoresScalarWhereInput | contenedoresScalarWhereInput[]
  }

  export type contenedoresUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<contenedoresCreateWithoutClientesInput, contenedoresUncheckedCreateWithoutClientesInput> | contenedoresCreateWithoutClientesInput[] | contenedoresUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: contenedoresCreateOrConnectWithoutClientesInput | contenedoresCreateOrConnectWithoutClientesInput[]
    upsert?: contenedoresUpsertWithWhereUniqueWithoutClientesInput | contenedoresUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: contenedoresCreateManyClientesInputEnvelope
    set?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    disconnect?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    delete?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    connect?: contenedoresWhereUniqueInput | contenedoresWhereUniqueInput[]
    update?: contenedoresUpdateWithWhereUniqueWithoutClientesInput | contenedoresUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: contenedoresUpdateManyWithWhereWithoutClientesInput | contenedoresUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: contenedoresScalarWhereInput | contenedoresScalarWhereInput[]
  }

  export type clientesCreateNestedOneWithoutContenedoresInput = {
    create?: XOR<clientesCreateWithoutContenedoresInput, clientesUncheckedCreateWithoutContenedoresInput>
    connectOrCreate?: clientesCreateOrConnectWithoutContenedoresInput
    connect?: clientesWhereUniqueInput
  }

  export type hydrostatic_testsCreateNestedManyWithoutContenedoresInput = {
    create?: XOR<hydrostatic_testsCreateWithoutContenedoresInput, hydrostatic_testsUncheckedCreateWithoutContenedoresInput> | hydrostatic_testsCreateWithoutContenedoresInput[] | hydrostatic_testsUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutContenedoresInput | hydrostatic_testsCreateOrConnectWithoutContenedoresInput[]
    createMany?: hydrostatic_testsCreateManyContenedoresInputEnvelope
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
  }

  export type mantenimiento_registrosCreateNestedManyWithoutContenedoresInput = {
    create?: XOR<mantenimiento_registrosCreateWithoutContenedoresInput, mantenimiento_registrosUncheckedCreateWithoutContenedoresInput> | mantenimiento_registrosCreateWithoutContenedoresInput[] | mantenimiento_registrosUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: mantenimiento_registrosCreateOrConnectWithoutContenedoresInput | mantenimiento_registrosCreateOrConnectWithoutContenedoresInput[]
    createMany?: mantenimiento_registrosCreateManyContenedoresInputEnvelope
    connect?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
  }

  export type hydrostatic_testsUncheckedCreateNestedManyWithoutContenedoresInput = {
    create?: XOR<hydrostatic_testsCreateWithoutContenedoresInput, hydrostatic_testsUncheckedCreateWithoutContenedoresInput> | hydrostatic_testsCreateWithoutContenedoresInput[] | hydrostatic_testsUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutContenedoresInput | hydrostatic_testsCreateOrConnectWithoutContenedoresInput[]
    createMany?: hydrostatic_testsCreateManyContenedoresInputEnvelope
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
  }

  export type mantenimiento_registrosUncheckedCreateNestedManyWithoutContenedoresInput = {
    create?: XOR<mantenimiento_registrosCreateWithoutContenedoresInput, mantenimiento_registrosUncheckedCreateWithoutContenedoresInput> | mantenimiento_registrosCreateWithoutContenedoresInput[] | mantenimiento_registrosUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: mantenimiento_registrosCreateOrConnectWithoutContenedoresInput | mantenimiento_registrosCreateOrConnectWithoutContenedoresInput[]
    createMany?: mantenimiento_registrosCreateManyContenedoresInputEnvelope
    connect?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clientesUpdateOneWithoutContenedoresNestedInput = {
    create?: XOR<clientesCreateWithoutContenedoresInput, clientesUncheckedCreateWithoutContenedoresInput>
    connectOrCreate?: clientesCreateOrConnectWithoutContenedoresInput
    upsert?: clientesUpsertWithoutContenedoresInput
    disconnect?: clientesWhereInput | boolean
    delete?: clientesWhereInput | boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<XOR<clientesUpdateToOneWithWhereWithoutContenedoresInput, clientesUpdateWithoutContenedoresInput>, clientesUncheckedUpdateWithoutContenedoresInput>
  }

  export type hydrostatic_testsUpdateManyWithoutContenedoresNestedInput = {
    create?: XOR<hydrostatic_testsCreateWithoutContenedoresInput, hydrostatic_testsUncheckedCreateWithoutContenedoresInput> | hydrostatic_testsCreateWithoutContenedoresInput[] | hydrostatic_testsUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutContenedoresInput | hydrostatic_testsCreateOrConnectWithoutContenedoresInput[]
    upsert?: hydrostatic_testsUpsertWithWhereUniqueWithoutContenedoresInput | hydrostatic_testsUpsertWithWhereUniqueWithoutContenedoresInput[]
    createMany?: hydrostatic_testsCreateManyContenedoresInputEnvelope
    set?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    disconnect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    delete?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    update?: hydrostatic_testsUpdateWithWhereUniqueWithoutContenedoresInput | hydrostatic_testsUpdateWithWhereUniqueWithoutContenedoresInput[]
    updateMany?: hydrostatic_testsUpdateManyWithWhereWithoutContenedoresInput | hydrostatic_testsUpdateManyWithWhereWithoutContenedoresInput[]
    deleteMany?: hydrostatic_testsScalarWhereInput | hydrostatic_testsScalarWhereInput[]
  }

  export type mantenimiento_registrosUpdateManyWithoutContenedoresNestedInput = {
    create?: XOR<mantenimiento_registrosCreateWithoutContenedoresInput, mantenimiento_registrosUncheckedCreateWithoutContenedoresInput> | mantenimiento_registrosCreateWithoutContenedoresInput[] | mantenimiento_registrosUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: mantenimiento_registrosCreateOrConnectWithoutContenedoresInput | mantenimiento_registrosCreateOrConnectWithoutContenedoresInput[]
    upsert?: mantenimiento_registrosUpsertWithWhereUniqueWithoutContenedoresInput | mantenimiento_registrosUpsertWithWhereUniqueWithoutContenedoresInput[]
    createMany?: mantenimiento_registrosCreateManyContenedoresInputEnvelope
    set?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    disconnect?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    delete?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    connect?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    update?: mantenimiento_registrosUpdateWithWhereUniqueWithoutContenedoresInput | mantenimiento_registrosUpdateWithWhereUniqueWithoutContenedoresInput[]
    updateMany?: mantenimiento_registrosUpdateManyWithWhereWithoutContenedoresInput | mantenimiento_registrosUpdateManyWithWhereWithoutContenedoresInput[]
    deleteMany?: mantenimiento_registrosScalarWhereInput | mantenimiento_registrosScalarWhereInput[]
  }

  export type hydrostatic_testsUncheckedUpdateManyWithoutContenedoresNestedInput = {
    create?: XOR<hydrostatic_testsCreateWithoutContenedoresInput, hydrostatic_testsUncheckedCreateWithoutContenedoresInput> | hydrostatic_testsCreateWithoutContenedoresInput[] | hydrostatic_testsUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutContenedoresInput | hydrostatic_testsCreateOrConnectWithoutContenedoresInput[]
    upsert?: hydrostatic_testsUpsertWithWhereUniqueWithoutContenedoresInput | hydrostatic_testsUpsertWithWhereUniqueWithoutContenedoresInput[]
    createMany?: hydrostatic_testsCreateManyContenedoresInputEnvelope
    set?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    disconnect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    delete?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    update?: hydrostatic_testsUpdateWithWhereUniqueWithoutContenedoresInput | hydrostatic_testsUpdateWithWhereUniqueWithoutContenedoresInput[]
    updateMany?: hydrostatic_testsUpdateManyWithWhereWithoutContenedoresInput | hydrostatic_testsUpdateManyWithWhereWithoutContenedoresInput[]
    deleteMany?: hydrostatic_testsScalarWhereInput | hydrostatic_testsScalarWhereInput[]
  }

  export type mantenimiento_registrosUncheckedUpdateManyWithoutContenedoresNestedInput = {
    create?: XOR<mantenimiento_registrosCreateWithoutContenedoresInput, mantenimiento_registrosUncheckedCreateWithoutContenedoresInput> | mantenimiento_registrosCreateWithoutContenedoresInput[] | mantenimiento_registrosUncheckedCreateWithoutContenedoresInput[]
    connectOrCreate?: mantenimiento_registrosCreateOrConnectWithoutContenedoresInput | mantenimiento_registrosCreateOrConnectWithoutContenedoresInput[]
    upsert?: mantenimiento_registrosUpsertWithWhereUniqueWithoutContenedoresInput | mantenimiento_registrosUpsertWithWhereUniqueWithoutContenedoresInput[]
    createMany?: mantenimiento_registrosCreateManyContenedoresInputEnvelope
    set?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    disconnect?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    delete?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    connect?: mantenimiento_registrosWhereUniqueInput | mantenimiento_registrosWhereUniqueInput[]
    update?: mantenimiento_registrosUpdateWithWhereUniqueWithoutContenedoresInput | mantenimiento_registrosUpdateWithWhereUniqueWithoutContenedoresInput[]
    updateMany?: mantenimiento_registrosUpdateManyWithWhereWithoutContenedoresInput | mantenimiento_registrosUpdateManyWithWhereWithoutContenedoresInput[]
    deleteMany?: mantenimiento_registrosScalarWhereInput | mantenimiento_registrosScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutHydrostatic_testsInput = {
    create?: XOR<usuariosCreateWithoutHydrostatic_testsInput, usuariosUncheckedCreateWithoutHydrostatic_testsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutHydrostatic_testsInput
    connect?: usuariosWhereUniqueInput
  }

  export type contenedoresCreateNestedOneWithoutHydrostatic_testsInput = {
    create?: XOR<contenedoresCreateWithoutHydrostatic_testsInput, contenedoresUncheckedCreateWithoutHydrostatic_testsInput>
    connectOrCreate?: contenedoresCreateOrConnectWithoutHydrostatic_testsInput
    connect?: contenedoresWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usuariosUpdateOneRequiredWithoutHydrostatic_testsNestedInput = {
    create?: XOR<usuariosCreateWithoutHydrostatic_testsInput, usuariosUncheckedCreateWithoutHydrostatic_testsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutHydrostatic_testsInput
    upsert?: usuariosUpsertWithoutHydrostatic_testsInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutHydrostatic_testsInput, usuariosUpdateWithoutHydrostatic_testsInput>, usuariosUncheckedUpdateWithoutHydrostatic_testsInput>
  }

  export type contenedoresUpdateOneRequiredWithoutHydrostatic_testsNestedInput = {
    create?: XOR<contenedoresCreateWithoutHydrostatic_testsInput, contenedoresUncheckedCreateWithoutHydrostatic_testsInput>
    connectOrCreate?: contenedoresCreateOrConnectWithoutHydrostatic_testsInput
    upsert?: contenedoresUpsertWithoutHydrostatic_testsInput
    connect?: contenedoresWhereUniqueInput
    update?: XOR<XOR<contenedoresUpdateToOneWithWhereWithoutHydrostatic_testsInput, contenedoresUpdateWithoutHydrostatic_testsInput>, contenedoresUncheckedUpdateWithoutHydrostatic_testsInput>
  }

  export type contenedoresCreateNestedOneWithoutMantenimiento_registrosInput = {
    create?: XOR<contenedoresCreateWithoutMantenimiento_registrosInput, contenedoresUncheckedCreateWithoutMantenimiento_registrosInput>
    connectOrCreate?: contenedoresCreateOrConnectWithoutMantenimiento_registrosInput
    connect?: contenedoresWhereUniqueInput
  }

  export type contenedoresUpdateOneWithoutMantenimiento_registrosNestedInput = {
    create?: XOR<contenedoresCreateWithoutMantenimiento_registrosInput, contenedoresUncheckedCreateWithoutMantenimiento_registrosInput>
    connectOrCreate?: contenedoresCreateOrConnectWithoutMantenimiento_registrosInput
    upsert?: contenedoresUpsertWithoutMantenimiento_registrosInput
    disconnect?: contenedoresWhereInput | boolean
    delete?: contenedoresWhereInput | boolean
    connect?: contenedoresWhereUniqueInput
    update?: XOR<XOR<contenedoresUpdateToOneWithWhereWithoutMantenimiento_registrosInput, contenedoresUpdateWithoutMantenimiento_registrosInput>, contenedoresUncheckedUpdateWithoutMantenimiento_registrosInput>
  }

  export type hydrostatic_testsCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<hydrostatic_testsCreateWithoutUsuariosInput, hydrostatic_testsUncheckedCreateWithoutUsuariosInput> | hydrostatic_testsCreateWithoutUsuariosInput[] | hydrostatic_testsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutUsuariosInput | hydrostatic_testsCreateOrConnectWithoutUsuariosInput[]
    createMany?: hydrostatic_testsCreateManyUsuariosInputEnvelope
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
  }

  export type hydrostatic_testsUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<hydrostatic_testsCreateWithoutUsuariosInput, hydrostatic_testsUncheckedCreateWithoutUsuariosInput> | hydrostatic_testsCreateWithoutUsuariosInput[] | hydrostatic_testsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutUsuariosInput | hydrostatic_testsCreateOrConnectWithoutUsuariosInput[]
    createMany?: hydrostatic_testsCreateManyUsuariosInputEnvelope
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
  }

  export type hydrostatic_testsUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<hydrostatic_testsCreateWithoutUsuariosInput, hydrostatic_testsUncheckedCreateWithoutUsuariosInput> | hydrostatic_testsCreateWithoutUsuariosInput[] | hydrostatic_testsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutUsuariosInput | hydrostatic_testsCreateOrConnectWithoutUsuariosInput[]
    upsert?: hydrostatic_testsUpsertWithWhereUniqueWithoutUsuariosInput | hydrostatic_testsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: hydrostatic_testsCreateManyUsuariosInputEnvelope
    set?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    disconnect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    delete?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    update?: hydrostatic_testsUpdateWithWhereUniqueWithoutUsuariosInput | hydrostatic_testsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: hydrostatic_testsUpdateManyWithWhereWithoutUsuariosInput | hydrostatic_testsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: hydrostatic_testsScalarWhereInput | hydrostatic_testsScalarWhereInput[]
  }

  export type hydrostatic_testsUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<hydrostatic_testsCreateWithoutUsuariosInput, hydrostatic_testsUncheckedCreateWithoutUsuariosInput> | hydrostatic_testsCreateWithoutUsuariosInput[] | hydrostatic_testsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: hydrostatic_testsCreateOrConnectWithoutUsuariosInput | hydrostatic_testsCreateOrConnectWithoutUsuariosInput[]
    upsert?: hydrostatic_testsUpsertWithWhereUniqueWithoutUsuariosInput | hydrostatic_testsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: hydrostatic_testsCreateManyUsuariosInputEnvelope
    set?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    disconnect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    delete?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    connect?: hydrostatic_testsWhereUniqueInput | hydrostatic_testsWhereUniqueInput[]
    update?: hydrostatic_testsUpdateWithWhereUniqueWithoutUsuariosInput | hydrostatic_testsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: hydrostatic_testsUpdateManyWithWhereWithoutUsuariosInput | hydrostatic_testsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: hydrostatic_testsScalarWhereInput | hydrostatic_testsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type contenedoresCreateWithoutClientesInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    hydrostatic_tests?: hydrostatic_testsCreateNestedManyWithoutContenedoresInput
    mantenimiento_registros?: mantenimiento_registrosCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresUncheckedCreateWithoutClientesInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedCreateNestedManyWithoutContenedoresInput
    mantenimiento_registros?: mantenimiento_registrosUncheckedCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresCreateOrConnectWithoutClientesInput = {
    where: contenedoresWhereUniqueInput
    create: XOR<contenedoresCreateWithoutClientesInput, contenedoresUncheckedCreateWithoutClientesInput>
  }

  export type contenedoresCreateManyClientesInputEnvelope = {
    data: contenedoresCreateManyClientesInput | contenedoresCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type contenedoresUpsertWithWhereUniqueWithoutClientesInput = {
    where: contenedoresWhereUniqueInput
    update: XOR<contenedoresUpdateWithoutClientesInput, contenedoresUncheckedUpdateWithoutClientesInput>
    create: XOR<contenedoresCreateWithoutClientesInput, contenedoresUncheckedCreateWithoutClientesInput>
  }

  export type contenedoresUpdateWithWhereUniqueWithoutClientesInput = {
    where: contenedoresWhereUniqueInput
    data: XOR<contenedoresUpdateWithoutClientesInput, contenedoresUncheckedUpdateWithoutClientesInput>
  }

  export type contenedoresUpdateManyWithWhereWithoutClientesInput = {
    where: contenedoresScalarWhereInput
    data: XOR<contenedoresUpdateManyMutationInput, contenedoresUncheckedUpdateManyWithoutClientesInput>
  }

  export type contenedoresScalarWhereInput = {
    AND?: contenedoresScalarWhereInput | contenedoresScalarWhereInput[]
    OR?: contenedoresScalarWhereInput[]
    NOT?: contenedoresScalarWhereInput | contenedoresScalarWhereInput[]
    id?: StringFilter<"contenedores"> | string
    numero_serie?: StringFilter<"contenedores"> | string
    tipo?: StringFilter<"contenedores"> | string
    capacidad?: IntFilter<"contenedores"> | number
    estado?: StringFilter<"contenedores"> | string
    ubicacion?: StringNullableFilter<"contenedores"> | string | null
    propietario?: StringNullableFilter<"contenedores"> | string | null
    client_id?: StringNullableFilter<"contenedores"> | string | null
    fecha_ultimo_mantenimiento?: DateTimeNullableFilter<"contenedores"> | Date | string | null
    observaciones?: StringNullableFilter<"contenedores"> | string | null
    created_at?: DateTimeNullableFilter<"contenedores"> | Date | string | null
  }

  export type clientesCreateWithoutContenedoresInput = {
    id: string
    name: string
    rif: string
    contact_person?: string | null
    email?: string | null
    phone?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type clientesUncheckedCreateWithoutContenedoresInput = {
    id: string
    name: string
    rif: string
    contact_person?: string | null
    email?: string | null
    phone?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type clientesCreateOrConnectWithoutContenedoresInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutContenedoresInput, clientesUncheckedCreateWithoutContenedoresInput>
  }

  export type hydrostatic_testsCreateWithoutContenedoresInput = {
    id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutHydrostatic_testsInput
  }

  export type hydrostatic_testsUncheckedCreateWithoutContenedoresInput = {
    id: string
    user_id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
  }

  export type hydrostatic_testsCreateOrConnectWithoutContenedoresInput = {
    where: hydrostatic_testsWhereUniqueInput
    create: XOR<hydrostatic_testsCreateWithoutContenedoresInput, hydrostatic_testsUncheckedCreateWithoutContenedoresInput>
  }

  export type hydrostatic_testsCreateManyContenedoresInputEnvelope = {
    data: hydrostatic_testsCreateManyContenedoresInput | hydrostatic_testsCreateManyContenedoresInput[]
    skipDuplicates?: boolean
  }

  export type mantenimiento_registrosCreateWithoutContenedoresInput = {
    id: string
    tipo?: string | null
    descripcion?: string | null
    fecha_realizacion: Date | string
    costo?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type mantenimiento_registrosUncheckedCreateWithoutContenedoresInput = {
    id: string
    tipo?: string | null
    descripcion?: string | null
    fecha_realizacion: Date | string
    costo?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type mantenimiento_registrosCreateOrConnectWithoutContenedoresInput = {
    where: mantenimiento_registrosWhereUniqueInput
    create: XOR<mantenimiento_registrosCreateWithoutContenedoresInput, mantenimiento_registrosUncheckedCreateWithoutContenedoresInput>
  }

  export type mantenimiento_registrosCreateManyContenedoresInputEnvelope = {
    data: mantenimiento_registrosCreateManyContenedoresInput | mantenimiento_registrosCreateManyContenedoresInput[]
    skipDuplicates?: boolean
  }

  export type clientesUpsertWithoutContenedoresInput = {
    update: XOR<clientesUpdateWithoutContenedoresInput, clientesUncheckedUpdateWithoutContenedoresInput>
    create: XOR<clientesCreateWithoutContenedoresInput, clientesUncheckedCreateWithoutContenedoresInput>
    where?: clientesWhereInput
  }

  export type clientesUpdateToOneWithWhereWithoutContenedoresInput = {
    where?: clientesWhereInput
    data: XOR<clientesUpdateWithoutContenedoresInput, clientesUncheckedUpdateWithoutContenedoresInput>
  }

  export type clientesUpdateWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rif?: StringFieldUpdateOperationsInput | string
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rif?: StringFieldUpdateOperationsInput | string
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsUpsertWithWhereUniqueWithoutContenedoresInput = {
    where: hydrostatic_testsWhereUniqueInput
    update: XOR<hydrostatic_testsUpdateWithoutContenedoresInput, hydrostatic_testsUncheckedUpdateWithoutContenedoresInput>
    create: XOR<hydrostatic_testsCreateWithoutContenedoresInput, hydrostatic_testsUncheckedCreateWithoutContenedoresInput>
  }

  export type hydrostatic_testsUpdateWithWhereUniqueWithoutContenedoresInput = {
    where: hydrostatic_testsWhereUniqueInput
    data: XOR<hydrostatic_testsUpdateWithoutContenedoresInput, hydrostatic_testsUncheckedUpdateWithoutContenedoresInput>
  }

  export type hydrostatic_testsUpdateManyWithWhereWithoutContenedoresInput = {
    where: hydrostatic_testsScalarWhereInput
    data: XOR<hydrostatic_testsUpdateManyMutationInput, hydrostatic_testsUncheckedUpdateManyWithoutContenedoresInput>
  }

  export type hydrostatic_testsScalarWhereInput = {
    AND?: hydrostatic_testsScalarWhereInput | hydrostatic_testsScalarWhereInput[]
    OR?: hydrostatic_testsScalarWhereInput[]
    NOT?: hydrostatic_testsScalarWhereInput | hydrostatic_testsScalarWhereInput[]
    id?: StringFilter<"hydrostatic_tests"> | string
    user_id?: StringFilter<"hydrostatic_tests"> | string
    container_id?: StringFilter<"hydrostatic_tests"> | string
    test_date?: DateTimeFilter<"hydrostatic_tests"> | Date | string
    humidity_measurement?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    pressure?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableFilter<"hydrostatic_tests"> | Decimal | DecimalJsLike | number | string | null
    test_result?: StringNullableFilter<"hydrostatic_tests"> | string | null
    created_at?: DateTimeNullableFilter<"hydrostatic_tests"> | Date | string | null
  }

  export type mantenimiento_registrosUpsertWithWhereUniqueWithoutContenedoresInput = {
    where: mantenimiento_registrosWhereUniqueInput
    update: XOR<mantenimiento_registrosUpdateWithoutContenedoresInput, mantenimiento_registrosUncheckedUpdateWithoutContenedoresInput>
    create: XOR<mantenimiento_registrosCreateWithoutContenedoresInput, mantenimiento_registrosUncheckedCreateWithoutContenedoresInput>
  }

  export type mantenimiento_registrosUpdateWithWhereUniqueWithoutContenedoresInput = {
    where: mantenimiento_registrosWhereUniqueInput
    data: XOR<mantenimiento_registrosUpdateWithoutContenedoresInput, mantenimiento_registrosUncheckedUpdateWithoutContenedoresInput>
  }

  export type mantenimiento_registrosUpdateManyWithWhereWithoutContenedoresInput = {
    where: mantenimiento_registrosScalarWhereInput
    data: XOR<mantenimiento_registrosUpdateManyMutationInput, mantenimiento_registrosUncheckedUpdateManyWithoutContenedoresInput>
  }

  export type mantenimiento_registrosScalarWhereInput = {
    AND?: mantenimiento_registrosScalarWhereInput | mantenimiento_registrosScalarWhereInput[]
    OR?: mantenimiento_registrosScalarWhereInput[]
    NOT?: mantenimiento_registrosScalarWhereInput | mantenimiento_registrosScalarWhereInput[]
    id?: StringFilter<"mantenimiento_registros"> | string
    contenedor_id?: StringNullableFilter<"mantenimiento_registros"> | string | null
    tipo?: StringNullableFilter<"mantenimiento_registros"> | string | null
    descripcion?: StringNullableFilter<"mantenimiento_registros"> | string | null
    fecha_realizacion?: DateTimeFilter<"mantenimiento_registros"> | Date | string
    costo?: DecimalNullableFilter<"mantenimiento_registros"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"mantenimiento_registros"> | Date | string | null
  }

  export type usuariosCreateWithoutHydrostatic_testsInput = {
    id: string
    email: string
    password_hash: string
    nombre: string
    rol?: string
    estado?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reset_token?: string | null
    reset_token_expires?: Date | string | null
  }

  export type usuariosUncheckedCreateWithoutHydrostatic_testsInput = {
    id: string
    email: string
    password_hash: string
    nombre: string
    rol?: string
    estado?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reset_token?: string | null
    reset_token_expires?: Date | string | null
  }

  export type usuariosCreateOrConnectWithoutHydrostatic_testsInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutHydrostatic_testsInput, usuariosUncheckedCreateWithoutHydrostatic_testsInput>
  }

  export type contenedoresCreateWithoutHydrostatic_testsInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    clientes?: clientesCreateNestedOneWithoutContenedoresInput
    mantenimiento_registros?: mantenimiento_registrosCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresUncheckedCreateWithoutHydrostatic_testsInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    client_id?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    mantenimiento_registros?: mantenimiento_registrosUncheckedCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresCreateOrConnectWithoutHydrostatic_testsInput = {
    where: contenedoresWhereUniqueInput
    create: XOR<contenedoresCreateWithoutHydrostatic_testsInput, contenedoresUncheckedCreateWithoutHydrostatic_testsInput>
  }

  export type usuariosUpsertWithoutHydrostatic_testsInput = {
    update: XOR<usuariosUpdateWithoutHydrostatic_testsInput, usuariosUncheckedUpdateWithoutHydrostatic_testsInput>
    create: XOR<usuariosCreateWithoutHydrostatic_testsInput, usuariosUncheckedCreateWithoutHydrostatic_testsInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutHydrostatic_testsInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutHydrostatic_testsInput, usuariosUncheckedUpdateWithoutHydrostatic_testsInput>
  }

  export type usuariosUpdateWithoutHydrostatic_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateWithoutHydrostatic_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contenedoresUpsertWithoutHydrostatic_testsInput = {
    update: XOR<contenedoresUpdateWithoutHydrostatic_testsInput, contenedoresUncheckedUpdateWithoutHydrostatic_testsInput>
    create: XOR<contenedoresCreateWithoutHydrostatic_testsInput, contenedoresUncheckedCreateWithoutHydrostatic_testsInput>
    where?: contenedoresWhereInput
  }

  export type contenedoresUpdateToOneWithWhereWithoutHydrostatic_testsInput = {
    where?: contenedoresWhereInput
    data: XOR<contenedoresUpdateWithoutHydrostatic_testsInput, contenedoresUncheckedUpdateWithoutHydrostatic_testsInput>
  }

  export type contenedoresUpdateWithoutHydrostatic_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientes?: clientesUpdateOneWithoutContenedoresNestedInput
    mantenimiento_registros?: mantenimiento_registrosUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresUncheckedUpdateWithoutHydrostatic_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mantenimiento_registros?: mantenimiento_registrosUncheckedUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresCreateWithoutMantenimiento_registrosInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    clientes?: clientesCreateNestedOneWithoutContenedoresInput
    hydrostatic_tests?: hydrostatic_testsCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresUncheckedCreateWithoutMantenimiento_registrosInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    client_id?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedCreateNestedManyWithoutContenedoresInput
  }

  export type contenedoresCreateOrConnectWithoutMantenimiento_registrosInput = {
    where: contenedoresWhereUniqueInput
    create: XOR<contenedoresCreateWithoutMantenimiento_registrosInput, contenedoresUncheckedCreateWithoutMantenimiento_registrosInput>
  }

  export type contenedoresUpsertWithoutMantenimiento_registrosInput = {
    update: XOR<contenedoresUpdateWithoutMantenimiento_registrosInput, contenedoresUncheckedUpdateWithoutMantenimiento_registrosInput>
    create: XOR<contenedoresCreateWithoutMantenimiento_registrosInput, contenedoresUncheckedCreateWithoutMantenimiento_registrosInput>
    where?: contenedoresWhereInput
  }

  export type contenedoresUpdateToOneWithWhereWithoutMantenimiento_registrosInput = {
    where?: contenedoresWhereInput
    data: XOR<contenedoresUpdateWithoutMantenimiento_registrosInput, contenedoresUncheckedUpdateWithoutMantenimiento_registrosInput>
  }

  export type contenedoresUpdateWithoutMantenimiento_registrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientes?: clientesUpdateOneWithoutContenedoresNestedInput
    hydrostatic_tests?: hydrostatic_testsUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresUncheckedUpdateWithoutMantenimiento_registrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedUpdateManyWithoutContenedoresNestedInput
  }

  export type hydrostatic_testsCreateWithoutUsuariosInput = {
    id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
    contenedores: contenedoresCreateNestedOneWithoutHydrostatic_testsInput
  }

  export type hydrostatic_testsUncheckedCreateWithoutUsuariosInput = {
    id: string
    container_id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
  }

  export type hydrostatic_testsCreateOrConnectWithoutUsuariosInput = {
    where: hydrostatic_testsWhereUniqueInput
    create: XOR<hydrostatic_testsCreateWithoutUsuariosInput, hydrostatic_testsUncheckedCreateWithoutUsuariosInput>
  }

  export type hydrostatic_testsCreateManyUsuariosInputEnvelope = {
    data: hydrostatic_testsCreateManyUsuariosInput | hydrostatic_testsCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type hydrostatic_testsUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: hydrostatic_testsWhereUniqueInput
    update: XOR<hydrostatic_testsUpdateWithoutUsuariosInput, hydrostatic_testsUncheckedUpdateWithoutUsuariosInput>
    create: XOR<hydrostatic_testsCreateWithoutUsuariosInput, hydrostatic_testsUncheckedCreateWithoutUsuariosInput>
  }

  export type hydrostatic_testsUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: hydrostatic_testsWhereUniqueInput
    data: XOR<hydrostatic_testsUpdateWithoutUsuariosInput, hydrostatic_testsUncheckedUpdateWithoutUsuariosInput>
  }

  export type hydrostatic_testsUpdateManyWithWhereWithoutUsuariosInput = {
    where: hydrostatic_testsScalarWhereInput
    data: XOR<hydrostatic_testsUpdateManyMutationInput, hydrostatic_testsUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type contenedoresCreateManyClientesInput = {
    id: string
    numero_serie: string
    tipo: string
    capacidad: number
    estado?: string
    ubicacion?: string | null
    propietario?: string | null
    fecha_ultimo_mantenimiento?: Date | string | null
    observaciones?: string | null
    created_at?: Date | string | null
  }

  export type contenedoresUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hydrostatic_tests?: hydrostatic_testsUpdateManyWithoutContenedoresNestedInput
    mantenimiento_registros?: mantenimiento_registrosUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hydrostatic_tests?: hydrostatic_testsUncheckedUpdateManyWithoutContenedoresNestedInput
    mantenimiento_registros?: mantenimiento_registrosUncheckedUpdateManyWithoutContenedoresNestedInput
  }

  export type contenedoresUncheckedUpdateManyWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ultimo_mantenimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsCreateManyContenedoresInput = {
    id: string
    user_id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
  }

  export type mantenimiento_registrosCreateManyContenedoresInput = {
    id: string
    tipo?: string | null
    descripcion?: string | null
    fecha_realizacion: Date | string
    costo?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type hydrostatic_testsUpdateWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutHydrostatic_testsNestedInput
  }

  export type hydrostatic_testsUncheckedUpdateWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsUncheckedUpdateManyWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mantenimiento_registrosUpdateWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mantenimiento_registrosUncheckedUpdateWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mantenimiento_registrosUncheckedUpdateManyWithoutContenedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_realizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsCreateManyUsuariosInput = {
    id: string
    container_id: string
    test_date: Date | string
    humidity_measurement?: Decimal | DecimalJsLike | number | string | null
    pressure?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    test_result?: string | null
    created_at?: Date | string | null
  }

  export type hydrostatic_testsUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenedores?: contenedoresUpdateOneRequiredWithoutHydrostatic_testsNestedInput
  }

  export type hydrostatic_testsUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    container_id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hydrostatic_testsUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    container_id?: StringFieldUpdateOperationsInput | string
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity_measurement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pressure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    test_result?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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