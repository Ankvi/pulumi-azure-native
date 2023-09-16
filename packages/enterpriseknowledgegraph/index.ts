import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EnterpriseKnowledgeGraphArgs } from "./enterpriseKnowledgeGraph";
export type EnterpriseKnowledgeGraph = import("./enterpriseKnowledgeGraph").EnterpriseKnowledgeGraph;
export const EnterpriseKnowledgeGraph: typeof import("./enterpriseKnowledgeGraph").EnterpriseKnowledgeGraph = null as any;
utilities.lazyLoad(exports, ["EnterpriseKnowledgeGraph"], () => require("./enterpriseKnowledgeGraph"));

export { GetEnterpriseKnowledgeGraphArgs, GetEnterpriseKnowledgeGraphResult, GetEnterpriseKnowledgeGraphOutputArgs } from "./getEnterpriseKnowledgeGraph";
export const getEnterpriseKnowledgeGraph: typeof import("./getEnterpriseKnowledgeGraph").getEnterpriseKnowledgeGraph = null as any;
export const getEnterpriseKnowledgeGraphOutput: typeof import("./getEnterpriseKnowledgeGraph").getEnterpriseKnowledgeGraphOutput = null as any;
utilities.lazyLoad(exports, ["getEnterpriseKnowledgeGraph","getEnterpriseKnowledgeGraphOutput"], () => require("./getEnterpriseKnowledgeGraph"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20181203 from "./v20181203";

export {
    v20181203,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:enterpriseknowledgegraph:EnterpriseKnowledgeGraph":
                return new EnterpriseKnowledgeGraph(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "enterpriseknowledgegraph", _module)
