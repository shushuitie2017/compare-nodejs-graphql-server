/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateTodoInput: { // input type
    status?: NexusGenEnums['TodoStatus'] | null; // TodoStatus
    text: string; // String!
  }
  UpdateTodoInput: { // input type
    id: string; // String!
    status?: NexusGenEnums['TodoStatus'] | null; // TodoStatus
    text?: string | null; // String
  }
}

export interface NexusGenEnums {
  TodoStatus: "COMPLETE" | "IN_PROGRESS" | "TODO"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Todo: { // root type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    status: NexusGenEnums['TodoStatus']; // TodoStatus!
    text: string; // String!
    updatedAt: NexusGenScalars['Date']; // Date!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createTodo: NexusGenRootTypes['Todo']; // Todo!
    deleteTodo: NexusGenRootTypes['Todo']; // Todo!
    updateTodo: NexusGenRootTypes['Todo']; // Todo!
  }
  Query: { // field return type
    getTodo: NexusGenRootTypes['Todo']; // Todo!
    listTodos: NexusGenRootTypes['Todo'][]; // [Todo!]!
  }
  Todo: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    status: NexusGenEnums['TodoStatus']; // TodoStatus!
    text: string; // String!
    updatedAt: NexusGenScalars['Date']; // Date!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createTodo: 'Todo'
    deleteTodo: 'Todo'
    updateTodo: 'Todo'
  }
  Query: { // field return type name
    getTodo: 'Todo'
    listTodos: 'Todo'
  }
  Todo: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    status: 'TodoStatus'
    text: 'String'
    updatedAt: 'Date'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createTodo: { // args
      input: NexusGenInputs['CreateTodoInput']; // CreateTodoInput!
    }
    deleteTodo: { // args
      id: string; // ID!
    }
    updateTodo: { // args
      input: NexusGenInputs['UpdateTodoInput']; // UpdateTodoInput!
    }
  }
  Query: {
    getTodo: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}