import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { OperationByProviderRegistrationArgs } from "./operationByProviderRegistration";
export type OperationByProviderRegistration = import("./operationByProviderRegistration").OperationByProviderRegistration;
export const OperationByProviderRegistration: typeof import("./operationByProviderRegistration").OperationByProviderRegistration = null as any;
utilities.lazyLoad(exports, ["OperationByProviderRegistration"], () => require("./operationByProviderRegistration"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:providerhub/v20210501preview:OperationByProviderRegistration":
                return new OperationByProviderRegistration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "providerhub/v20210501preview", _module)
