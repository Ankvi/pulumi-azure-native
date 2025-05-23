import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DocumentProcessorArgs } from "./documentProcessor";
export type DocumentProcessor = import("./documentProcessor").DocumentProcessor;
export const DocumentProcessor: typeof import("./documentProcessor").DocumentProcessor = null as any;
utilities.lazyLoad(exports, ["DocumentProcessor"], () => require("./documentProcessor"));

export { GetDocumentProcessorArgs, GetDocumentProcessorResult, GetDocumentProcessorOutputArgs } from "./getDocumentProcessor";
export const getDocumentProcessor: typeof import("./getDocumentProcessor").getDocumentProcessor = null as any;
export const getDocumentProcessorOutput: typeof import("./getDocumentProcessor").getDocumentProcessorOutput = null as any;
utilities.lazyLoad(exports, ["getDocumentProcessor","getDocumentProcessorOutput"], () => require("./getDocumentProcessor"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:syntex:DocumentProcessor":
                return new DocumentProcessor(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "syntex", _module)