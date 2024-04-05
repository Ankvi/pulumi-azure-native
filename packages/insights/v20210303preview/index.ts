import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetDiagnosticServiceTokenReadOnlyArgs, GetDiagnosticServiceTokenReadOnlyResult, GetDiagnosticServiceTokenReadOnlyOutputArgs } from "./getDiagnosticServiceTokenReadOnly";
export const getDiagnosticServiceTokenReadOnly: typeof import("./getDiagnosticServiceTokenReadOnly").getDiagnosticServiceTokenReadOnly = null as any;
export const getDiagnosticServiceTokenReadOnlyOutput: typeof import("./getDiagnosticServiceTokenReadOnly").getDiagnosticServiceTokenReadOnlyOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticServiceTokenReadOnly","getDiagnosticServiceTokenReadOnlyOutput"], () => require("./getDiagnosticServiceTokenReadOnly"));

export { GetDiagnosticServiceTokenReadWriteArgs, GetDiagnosticServiceTokenReadWriteResult, GetDiagnosticServiceTokenReadWriteOutputArgs } from "./getDiagnosticServiceTokenReadWrite";
export const getDiagnosticServiceTokenReadWrite: typeof import("./getDiagnosticServiceTokenReadWrite").getDiagnosticServiceTokenReadWrite = null as any;
export const getDiagnosticServiceTokenReadWriteOutput: typeof import("./getDiagnosticServiceTokenReadWrite").getDiagnosticServiceTokenReadWriteOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticServiceTokenReadWrite","getDiagnosticServiceTokenReadWriteOutput"], () => require("./getDiagnosticServiceTokenReadWrite"));