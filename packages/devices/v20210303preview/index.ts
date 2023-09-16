import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetIotHubResourceEventHubConsumerGroupArgs, GetIotHubResourceEventHubConsumerGroupResult, GetIotHubResourceEventHubConsumerGroupOutputArgs } from "./getIotHubResourceEventHubConsumerGroup";
export const getIotHubResourceEventHubConsumerGroup: typeof import("./getIotHubResourceEventHubConsumerGroup").getIotHubResourceEventHubConsumerGroup = null as any;
export const getIotHubResourceEventHubConsumerGroupOutput: typeof import("./getIotHubResourceEventHubConsumerGroup").getIotHubResourceEventHubConsumerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getIotHubResourceEventHubConsumerGroup","getIotHubResourceEventHubConsumerGroupOutput"], () => require("./getIotHubResourceEventHubConsumerGroup"));

export { IotHubResourceEventHubConsumerGroupArgs } from "./iotHubResourceEventHubConsumerGroup";
export type IotHubResourceEventHubConsumerGroup = import("./iotHubResourceEventHubConsumerGroup").IotHubResourceEventHubConsumerGroup;
export const IotHubResourceEventHubConsumerGroup: typeof import("./iotHubResourceEventHubConsumerGroup").IotHubResourceEventHubConsumerGroup = null as any;
utilities.lazyLoad(exports, ["IotHubResourceEventHubConsumerGroup"], () => require("./iotHubResourceEventHubConsumerGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devices/v20210303preview:IotHubResourceEventHubConsumerGroup":
                return new IotHubResourceEventHubConsumerGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devices/v20210303preview", _module)
